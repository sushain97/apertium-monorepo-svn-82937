#!/usr/bin/python2.5
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, string, codecs;
from xml.dom import minidom;

sys.stdin = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

def find_longest_common_substring(lemma, flexion): 
        candidate = '';
        length = len(lemma);
        for char in lemma: 
                candidate = candidate + char;
                if flexion.find(candidate) == -1: 
                        return candidate[0:len(candidate)-1];
        return candidate;

# returns the shortest string from a given list
def return_shortest(ilist): 

        if len(ilist) == 0: 
                return -1;

        return sorted(ilist, key=len)[0]

def return_symlist(symlist): 
        symlist = symlist.replace(':', '.');
        output = '';

        for symbol in symlist.split('.'): 
                output = output + '<s n="' + symbol + '"/>';

        return output;


#
#       MAIN
#

if len(sys.argv) < 2: 
        print 'python speling.py <filename>';

flist = codecs.open(sys.argv[1], "r", "utf-8");
list = flist.readlines();

current_lemma = '';

lemmata = {};
category = {};
flexions = {};

for line in list: 

        if len(line) < 2: 
                continue;

        row = line.split(',');
        lemma = row[0].strip();

        current_lemma = lemma;
        if current_lemma not in lemmata: 
                lemmata[current_lemma] = {};

        if current_lemma not in flexions: 
                flexions[current_lemma] = {};

	if current_lemma not in category: 
		category[current_lemma] = {};

        if len(row[1]) <= 0:
            inflection = row[1].strip();
        else:
            inflection = row[1];

	if lemma.islower(): 
		inflection = inflection.lower();	

        full = inflection;
        stem = find_longest_common_substring(lemma, inflection);
        pos = row[3].strip();
        syms = row[2].strip();
        if len(row) == 5:
            paradigm = row[4].strip();
        else:
            paradigm = '';

        symlist = pos + ':' + syms;

        #print lemma , '; ' , stem , '; -' + inflection , '; ' , full , '; ' + pos + '; ' + syms;

        form = (inflection, symlist, paradigm);

	if pos not in lemmata[current_lemma]: 
		lemmata[current_lemma][pos] = [];

	if pos not in flexions[current_lemma]: 
		flexions[current_lemma][pos] = [];

	if pos not in category[current_lemma]: 
		category[current_lemma][pos] = '';


	if form not in flexions[current_lemma][pos]: 
        	lemmata[current_lemma][pos].append(stem);
		flexions[current_lemma][pos].append(form);
		#category[current_lemma][pos] = pos.split('.')[0];
		category[current_lemma][pos] = pos.replace('.', '_');


print '<dictionary>';
print '  <pardefs>';

for lemma in lemmata.keys(): 
	for pos in lemmata[lemma].keys(): 
	        stem = return_shortest(lemmata[lemma][pos]);
	        print '  <!-- ' + lemma + '; ' + stem + ' -->';
	        end = lemma.replace(stem, '');
	        slash = '/';

	        if end == '': 
	                slash = '';


	        print '    <pardef n="' + stem + slash + end + '__' + category[lemma][pos] + '">';
		
		#flexions[lemma][pos].sort(sort_flexions);

	        for pair in flexions[lemma][pos]: 
	                print '      <e>';
	                print '        <p>';
	                if len(pair[0]) > 1: 
	                        print '          <l>' + pair[0].replace(stem, '', 1).replace(' ', '<b/>') + '</l>';

	                if len(pair[0]) == 1: 
	                        print '          <l>' + pair[0].replace(' ', '<b/>') + '</l>';

	                if len(pair[0]) < 1: 
	                        print '          <l/>';

	                print '          <r>' + end + return_symlist(pair[1]) + '</r>';
	                print '        </p>';
                        if len(pair[2]) > 0: 
 	                    print '        <par n="' + pair[2] + '"/>';

	                print '      </e>';

	        print '    </pardef>';
	        print '';

print '  </pardefs>';
print '  <section id="main" type="standard">';

for lemma in lemmata.keys(): 
	for pos in lemmata[lemma].keys(): 
	        stem = return_shortest(lemmata[lemma][pos]);
	        end = lemma.replace(stem, '');
	        slash = '/';

	        if end == '': 
	                slash = '';

	        print '    <e lm="' + lemma + '"><i>' + stem + '</i><par n="' +  stem + slash + end + '__' + category[lemma][pos] + '"/></e>';

print '  </section>';
print '</dictionary>';

