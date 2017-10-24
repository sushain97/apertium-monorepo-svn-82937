/*
 * Copyright (C) 2011 Jimmy O'Regan
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, version 2.
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

#include <iostream>
#include <string>
#include <cstdio>
#include <list>
#include <vector>

using namespace std;

//Set to true to also split at <cm>
bool split_cm = true;

//Set to true = 5 word window
bool ctx_five = true;

inline bool
is_sent(wstring &in)
{
  return ((in.size() > 6) && (in.compare(in.size()-6, 6, L"<sent>") == 0));
}

inline bool
is_cm(wstring &in)
{
  return ((in.size() > 4) && (in.compare(in.size()-4, 4, L"<cm>") == 0));
}

inline bool
is_split (wstring &in)
{
  if (split_cm)
    return (is_sent(in) || is_cm(in));
  else
    return (is_sent(in));
}

wstring 
read_word(FILE *input)
{
  wstring out = L"";
  wchar_t c;
  bool inword = false;

  while(!feof(input))
  {
    c = static_cast<wchar_t>(fgetwc(input));
    if (!inword)
    {
      if (c == L'^') 
      {
        inword = true;
      }
      if (c == L'\\')
      {
        c = static_cast<wchar_t>(fgetwc(input));
      }
    }
    else
    {
      if (c == L'$')
      {
        return out;
      }
      if(c == L'\\')
      {
        out += L'\\';
        c = static_cast<wchar_t>(fgetwc(input));
        out += c;
      }
      else
      {
        out += c;
      }
    }
  }

  return L"";
}

void usage()
{
  wcout << L"usage: stupid-unknown-extractor file1 file2 [output]" << endl;
}

bool
read_sentence (FILE* file, vector<wstring> &tokens)
{
  wstring word;
  while (!feof(file))
  {
    word = read_word(file);
    tokens.push_back(word);
    if (is_split(word)) 
    {
      return true;
    }
  }
  return false;
}

vector<int>
unknown_indices(vector<wstring> sentence)
{
  vector<int> index;
  vector<wstring>::iterator it;
  int count = 0;

  for (it=sentence.begin(); it < sentence.end(); it++) 
  {
    if ((*it)[0] == L'*')
    {
      index.push_back(count);
    }
    count++;
  }
  return index;
}

void
print_context(FILE* out, vector<wstring> &sent, int index)
{
  wstring tmp;
  if (ctx_five && index >= 2)
  {
    fputws(sent[index - 2].c_str(), out);
    fputwc(L' ', out);
  }
  if (index >= 1)
  {
    fputws(sent[index - 1].c_str(), out);
    fputwc(L' ', out);
  }
  fputws(sent[index].c_str(), out);
  fputwc(L' ', out);
  fputws(sent[index + 1].c_str(), out);

  if (ctx_five && ((index + 2) < sent.size()))
  {
    fputwc(L' ', out);
    fputws(sent[index + 2].c_str(), out);
  }
}

void
print_unk(FILE* out, vector<wstring> &sent, int index)
{
  if (sent.at(index)[0] != L'*')
  {
    wcerr << L"Error with unknown: " << sent.at(index) << endl;
  }
  fputws(sent.at(index).substr(1, sent.at(index).length() - 1).c_str(), out);
}

void
try_output(FILE* out, vector<wstring> &left, vector<wstring> &right)
{
  vector<int> lvec;
  vector<int> rvec;
  lvec = unknown_indices(left);
  rvec = unknown_indices(right);

  if ((lvec.size() == 1) && (rvec.size() == 1))
  {
    print_unk(out, left, lvec.at(0));
    fputwc(L'\t', out);
    print_unk(out, right, rvec.at(0));
    fputwc(L'\t', out);

    // context
    print_context(out, left, lvec.at(0));
    fputws(L" :: ", out);
    print_context(out, right, rvec.at(0));
    fputwc(L'\n', out);
  }
}

int main (int argc, char** argv)
{
  FILE* left;
  FILE* right;
  FILE* out;

  if (argc < 3 || argc > 4)
  {
    usage();
    exit(1);
  }
  if (argc == 3)
  {
    out = stdout;
  }
  else
  {
    out = fopen(argv[3], "wb");
  }

  left = fopen(argv[1], "rb");
  right = fopen(argv[2], "rb");

  vector<wstring> sentl;
  vector<wstring> sentr;

  while (read_sentence(left, sentl) && read_sentence(right, sentr))
  {
    try_output(out, sentl, sentr);
    sentl.clear();
    sentr.clear();
  }
 
  fclose(left);
  fclose(right);
  fclose(out);
  exit(0);
}
