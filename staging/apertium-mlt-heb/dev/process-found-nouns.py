#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

unk_gen_count = {};
unk_gen_context = {};

hitparade = {};

for line in file(sys.argv[2]).read().split('\n'): #{
	if len(line) < 2: #{
		continue;
	#}
	row = line.strip().split(' ');
	if len(row) < 2: #{
		continue;
	#}
	freq = int(row[0]);
	token = row[1];
	hitparade[token] = freq;
#}

for line in file(sys.argv[1]).read().split('\n'): #{
	if len(line) < 2: #{
		continue;
	#}
	# <det><def><mf><sp>$ ^sistema/*sistema$ ^edukattiv/edukattiv<adj><m><sg>$

	row = line.split('$ ^');
	#print row;
	
	unknown = row[1].split('/')[0].lower();
	context_gender = row[2].split('><')[1];
	context_surface = row[2].split('/')[0]

	if unknown not in unk_gen_count: #{
		unk_gen_count[unknown] = {};
		unk_gen_context[unknown] = {};
	#}	
	if context_gender not in unk_gen_count[unknown]: #{
		unk_gen_count[unknown][context_gender] = 0;
		unk_gen_context[unknown][context_gender] = [];
	#}	

	unk_gen_count[unknown][context_gender] = unk_gen_count[unknown][context_gender] + 1;
	unk_gen_context[unknown][context_gender].append(context_surface);
#}

for unknown in unk_gen_count: #{

	for gender in unk_gen_count[unknown]: #{
		if unknown in hitparade: #{
			print hitparade[unknown] , '\t' , unk_gen_count[unknown][gender] , '\t' ,  gender , '\t' , unknown , set(unk_gen_context[unknown][gender]);
		#}
	#}
#}
