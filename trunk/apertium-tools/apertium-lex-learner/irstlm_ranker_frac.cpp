/*
 * Copyright (C) 2011 Universitat d'Alacant / Universidad de Alicante
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA
 * 02111-1307, USA.
 */

#include <stdlib.h>
#include <math.h>
#include <sstream>
#include <iostream>
#include <getopt.h>
#include <clocale>
#include <vector>
#include <deque>
#include <map>

#include "lmtable.h"
#include "lmmacro.h"

class lmtable;  // irst lm table
class lmmacro;  // irst lm for macro tags

using namespace std;

lmContainer        *m_lmtb;

int            m_unknownId;
int            m_lmtb_size;          // max ngram stored in the table
int            m_lmtb_dub;           // dictionary upperbound

float          m_weight; // scoring weight.
string         m_filePath; // for debugging purposes.
size_t         m_nGramOrder; // max n-gram length contained in this LM.

inline string trim(const string& o) 
{
	string ret = o;
	const char* chars = "\n\t\v\f\r *"; // whitespace and unknown words
	ret.erase(ret.find_last_not_of(chars)+1);
	ret.erase(0, ret.find_first_not_of(chars));
	return ret;
}



bool load(const string &filePath, float weight) {
  m_weight  = weight;

  m_filePath = filePath;

  // Open the input file (possibly gzipped)
  std::streambuf *m_streambuf;
  std::filebuf* fb = new std::filebuf();
  fb->open(filePath.c_str(), std::ios::in);
  m_streambuf = fb;
  std::istream inp(m_streambuf);

  // case (standard) LMfile only: create an object of lmtable
  std::string infile(filePath);
  m_lmtb=NULL;
  m_lmtb = m_lmtb->CreateLanguageModel(infile, 0, 0); 

  m_lmtb->load(infile);

  m_lmtb_size = m_lmtb->maxlevel();       
  m_nGramOrder = m_lmtb->maxlevel();


  m_lmtb_size = m_lmtb->maxlevel();       
  m_nGramOrder = m_lmtb->maxlevel();       

  // LM can be ok, just outputs warnings

  m_unknownId = m_lmtb->getDict()->oovcode(); // at the level of micro tags

  cerr<<"IRST: m_unknownId="<<m_unknownId<<endl;

  //install caches
//  m_lmtb->init_probcache();
//  m_lmtb->init_statecache();
//  m_lmtb->init_lmtcaches(m_lmtb->maxlevel() > 2 ? (m_lmtb->maxlevel() - 1) : 2);
 
  if (m_lmtb_dub >0) m_lmtb->setlogOOVpenalty(m_lmtb_dub);
    
  return true;
}

double score(const string &frame, double &pp) {
  string buf;

  vector<string> s_unigrams;
  deque<string> buffer;

  stringstream ss(frame); 
  ngram* m_lmtb_ng;
  int lmId = 0;                   
  float prob = 0, sprob = 0;

  m_lmtb_ng = new ngram(m_lmtb->getDict()); // ngram of words
  m_lmtb_ng->size = 0;


	//int count = 0;
	int count = 1;
        while (ss >> buf) {
		if(count == 1) {
                	s_unigrams.push_back(trim(buf));
		}
		if(strstr(trim(buf).c_str(),"].[]")) {
			count = 1;
		}
        }

/*  while (ss >> buf) {
    s_unigrams.push_back(buf);
  }
*/
  //cerr<<"m_nGramOrder="<<m_nGramOrder<<endl;

  // It is assumed that sentences start with <s>
  buffer.push_back(s_unigrams.at(0));
  for (unsigned i = 1; i < s_unigrams.size(); i++) {
    buffer.push_back(s_unigrams.at(i));
    if (buffer.size() > m_nGramOrder)
      buffer.pop_front();
    
    string buffer_str="";
    m_lmtb_ng = new ngram(m_lmtb->getDict()); // ngram of words
    for (unsigned j = 0; j < buffer.size(); j++) {
      if (j>0) buffer_str += " ";
      buffer_str += buffer[j];
      lmId = m_lmtb->getDict()->encode(buffer[j].c_str()); 
      m_lmtb_ng->pushc(lmId);
    }
    
    prob = m_lmtb->clprob(*m_lmtb_ng);
    delete m_lmtb_ng;
    
    sprob += prob;
    //cerr << "_" << m_nGramOrder << ": " << buffer_str << " " << prob << endl;    
  }

  //Perplexity
  pp = exp((-sprob * log(10.0))/(s_unigrams.size()-1));  //Do not take into account <s>, but </s>

  return sprob;
}

int main(int argc, char **argv) {

  // Is this really necessary?
  if(setlocale(LC_CTYPE, "") == NULL) {
    wcerr << L"Warning: unsupported locale, fallback to \"C\"" << endl;
    setlocale(LC_ALL, "C");
  }

  if (argc<2) {
    cerr<<"Error: Wrong number of parameters"<<endl;
    cerr<<"Usage: "<<argv[0]<<" lm_file"<<endl;
    exit(EXIT_FAILURE);
  }


  bool val = load(argv[1], 1.0);

  if(!val) {
    cerr<<"There was a problem when loadling the language model from file '"<<argv[1]<<"'"<<endl;
    exit(EXIT_FAILURE);
  }
    
  int current_line = -1;
  double current_max = -65534.0;
  map<int, double> scores;
  map<int, string> batch;
  int subline = 0;
  int numoptions = 0;
  int maxline = 0;
  double total = 0.0;

  cout.precision(10);
  while (!cin.eof()) {
    string line;
    getline(cin, line);
    if (line.length()>0) {
      // .[][2 0].[]  	Les taches rouges encerclées avec espace Il est ces germes de galaxies . 
      string lineno = "";
      int bcc = 0;
      int boc = 0;
      // Yes, this is shitty.
      for(string::iterator x = line.begin(); x != line.end(); x++) 
      { 
        //cerr << boc << " " << bcc << "; x: " << *x << " lineno:" << lineno << endl ; 
        if(*x == '[') boc++; 
        if(*x == ']') bcc++; 
        if(*x == ' ') break;
        if(boc==2 && bcc <2 && *x != '[')
        {
          lineno += *x; 
        }
      }
      //string lineno = line.substr(line.find("]")+2, line.find(" ")-1);
      string linecon = line.substr(line.find("\t"), line.length());
      int lno = atoi(lineno.c_str());

      //cerr << current_line << " :: " << lineno << " :: " << lno << " ::  " << line << endl << endl;

      if(current_line == -1) 
      {
        current_line = lno;
      }
      if(current_line != -1 && current_line != lno) 
      {
        for(map<int, string>::iterator it = batch.begin(); it != batch.end(); it++) 
        {
          //cerr << it->first << " " << maxline << " " << scores[it->first] << " " << current_max << endl;
          if(it->first == maxline) 
          {
            cout<< fixed << (scores[it->first]/total) << "\t|@|\t" << batch[it->first] <<endl;
          }
          else
          {
            cout<< fixed <<(scores[it->first]/total) << "\t||\t" << batch[it->first] <<endl;
          }
        }
        current_max = -65534.0;
        maxline = 0;
        subline = 0;
        total = 0.0;
        numoptions = 0;
        current_line = lno;
        batch.clear();
        scores.clear();
      }
      double pp;
      double log_prob = exp10(score("<s> " + linecon + " </s>", pp));
      total = total + log_prob;
      if(log_prob > current_max)
      {
        current_max = log_prob;
        maxline = subline;
      }

      batch[subline] = line;
      scores[subline] = log_prob;
      //cout<< log_prob<< "\t||\t" << line <<endl;
      subline = subline + 1;
      numoptions = numoptions + 1;
    }
  }

  for(map<int, string>::iterator it = batch.begin(); it != batch.end(); it++) 
  {
//    cerr << it->first << " " << maxline << " " << scores[it->first] << " " << current_max << endl;
    if(it->first == maxline) 
    {
      cout<< (scores[it->first]/total) << "\t|@|\t" << batch[it->first] <<endl;
    }
    else
    {
      cout<< (scores[it->first]/total) << "\t||\t" << batch[it->first] <<endl;
    }
  }

  return EXIT_SUCCESS;
}

