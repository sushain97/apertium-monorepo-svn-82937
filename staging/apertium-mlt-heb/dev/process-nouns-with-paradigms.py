#!usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy, Ft, os;
from Ft.Xml.Domlette import NonvalidatingReader;
from Ft.Xml.XPath import Evaluate;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

unk_gen_sg_count = {};
unk_gen_sg_context = {};
unk_gen_pl_count = {};
unk_gen_pl_context = {};

paradigms = {};
hitparade = {};

if len(sys.argv) < 4: #{
	print 'process-nouns-with-paradigms <hitparade> <dix> <sg file> <pl file>';
	sys.exit(-1);
#}	

###############################################################################
# INPUT FILES:
#
# * hitparade:
#  61207 ma
#  45873 fil-
#  41893 minn
#  41888 kien
#  36579 biex
#
# * dix:
#
#  apertium-mt-he.mt.dix
#
# * sg file:
#<det><def><mf><sp>$ ^diaspora/*diaspora$ ^Maltija/Malti<adj><f><sg>$
#<det><def><mf><sp>$ ^chaplain/*chaplain$ ^Kattoliku/kattoliku<adj><m><sg>$
#<det><def><mf><sp>$ ^gharfien/*gharfien$ ^baziku/bażiku<adj><m><sg>$
#<det><def><mf><sp>$ ^holqa/*holqa$ ^Maltija/Malti<adj><f><sg>$
# 
# * pl file:
#<det><def><mf><sp>$ ^migranti/*migranti$ ^Maltin/Malti<adj><mf><pl>$
#<det><def><mf><sp>$ ^realtajiet/*realtajiet$ ^godda/ġdid<adj><mf><pl>$
#<det><def><mf><sp>$ ^aspetti/*aspetti$ ^negattivi/negattiv<adj><mf><pl>$
#<det><def><mf><sp>$ ^qrati/*qrati$ ^Maltin/Malti<adj><mf><pl>$
#
###############################################################################

# Read in hitparade and populate hash, keyed on the token
for line in file(sys.argv[1]).read().split('\n'): #{
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

# A hash of all the paradigms and their constituent suffixes and symbols
#
# Example:
#
#   paradigms['isk/ola__n_f'] = [(u'ola', u'.n.f.sg'), (u'ejjel', u'.n.f.pl')]
#
paradigms = {};

# Load the dictionary
dictionary = sys.argv[2];

if dictionary == os.path.basename(dictionary): #{
	dictionary = os.getcwd() + '/' + dictionary;
#}

doc = NonvalidatingReader.parseUri('file:///' + dictionary);
path = '/dictionary/pardefs/pardef';

# Populate paradigm structure
for node in Ft.Xml.XPath.Evaluate(path, contextNode=doc): #{
        pardef = node.getAttributeNS(None, 'n');

	if pardef.count('__n') < 1 or pardef.count('__np') > 0 or pardef.count('__num') > 0: #{
		continue;
	#}

	if pardef not in paradigms: #{
		paradigms[pardef] = [];
	#}

	for child in Ft.Xml.XPath.Evaluate('.//e', contextNode=node): #{
		for pair in Ft.Xml.XPath.Evaluate('.//p', contextNode=child): #{
			suffix = '';
			left = Ft.Xml.XPath.Evaluate('.//l', contextNode=pair)[0].firstChild;

			if type(left) != type(None): #{
				suffix = left.nodeValue;
			else: #{
				suffix = ''
			#}


			symbols = '';
			right =  Ft.Xml.XPath.Evaluate('.//r', contextNode=pair)[0];
			for sym in Ft.Xml.XPath.Evaluate('.//s', contextNode=right): #{
				symbol = '';
				if type(sym) != type(None): #{
					symbol = sym.getAttributeNS(None, 'n');
				#}
				symbols = symbols + '.' + symbol;
			#}

			# Example:
			#  pardef = 'isk/ola__n_f'
			#  suffix = 'ejjel', 
			#  symbols = 'n.f.pl'
			paradigms[pardef].append((suffix, symbols));
		#}
	#}
#}


# Read in the context for noun candidates that we think are singular
for line in file(sys.argv[3]).read().split('\n'): #{
	if len(line) < 2: #{
		continue;
	#}
	# <det><def><mf><sp>$ ^sistema/*sistema$ ^edukattiv/edukattiv<adj><m><sg>$

	row = line.split('$ ^');
	#print row;
	
	unknown = row[1].split('/')[0].lower();
	context_gender = row[2].split('><')[1];
	context_surface = row[2].split('/')[0]

	if unknown not in unk_gen_sg_count: #{
		unk_gen_sg_count[unknown] = {};
		unk_gen_sg_context[unknown] = {};
	#}	
	if context_gender not in unk_gen_sg_count[unknown]: #{
		unk_gen_sg_count[unknown][context_gender] = 0;
		unk_gen_sg_context[unknown][context_gender] = [];
	#}	

	unk_gen_sg_count[unknown][context_gender] = unk_gen_sg_count[unknown][context_gender] + 1;
	unk_gen_sg_context[unknown][context_gender].append(context_surface);
#}

# Read in the context for noun candidates that we think are plural
for line in file(sys.argv[4]).read().split('\n'): #{
	if len(line) < 2: #{
		continue;
	#}
	# <det><def><mf><sp>$ ^forzi/*forzi$ ^progressivi/progressiv<adj><mf><pl>$

	row = line.split('$ ^');
	#print row;
	
	unknown = row[1].split('/')[0].lower();
	context_gender = row[2].split('><')[1];
	context_surface = row[2].split('/')[0]

	if unknown not in unk_gen_pl_count: #{
		unk_gen_pl_count[unknown] = {};
		unk_gen_pl_context[unknown] = {};
	#}	
	if context_gender not in unk_gen_pl_count[unknown]: #{
		unk_gen_pl_count[unknown][context_gender] = 0;
		unk_gen_pl_context[unknown][context_gender] = [];
	#}	

	unk_gen_pl_count[unknown][context_gender] = unk_gen_pl_count[unknown][context_gender] + 1;
	unk_gen_pl_context[unknown][context_gender].append(context_surface);
#}

def stem_from_par_sg(pardef, sing): #{
	suffix = '';
	if paradigm.count('/') > 0: #{
		suffix = paradigm.split('/')[1].split('_')[0];
	else: #{
		return sing;
	#}

	suffixlen = len(suffix.decode('utf-8'));
	unk_len = len(unknown.decode('utf-8'));

	fra = unk_len - suffixlen;
	stem = unknown.decode('utf-8')[0:fra].encode('utf-8');
	
	return stem ; 
#}

# Read through the singular candidates, 
for unknown in unk_gen_sg_count: #{
	# For each of our paradigms, first check if it has more than two entries, 
	# if so skip it, 
	for paradigm in paradigms: #{
		if len(paradigms[paradigm]) != 2: #{
			continue;
		#}

		suffix = '';
		if paradigm.count('/') > 0: #{
			suffix = paradigm.split('/')[1].split('_')[0];
		#}

		suffixlen = len(suffix.decode('utf-8'));
		unk_len = len(unknown.decode('utf-8'));

		# check if the ending of the paradigm matches the ending
		# of the unknown word.
		if suffixlen > 0: #{
			fra = unk_len - suffixlen;
			if unknown.decode('utf-8')[fra:] != suffix: #{
				continue;
			#}
		#}

		# The unknown stem is the unknown word minus
		#  the paradigm suffix (the bit after the bar, 
		# e.g. isk/ola__n_f, stem = isk, suffix = ola)
		fra = unk_len - suffixlen;
		unk_stem = unknown.decode('utf-8')[0:fra].encode('utf-8');

		# Our singular and plural guessed entries are:
		# the unknown stem + the suffixes from the paradigm entries
		paradigm_guessed_singular = unk_stem + paradigms[paradigm][0][0];
		paradigm_guessed_plural = unk_stem + paradigms[paradigm][1][0];

		# If we find both the singular and the plural guessed forms 
		#  in our context corpus, then we're cooking...
		if paradigm_guessed_singular in unk_gen_sg_count and  paradigm_guessed_plural in unk_gen_pl_count: #{
			# Make a combined count of how frequent both forms are 
			sg_count = 0;
			pl_count = 0;
			if paradigm_guessed_singular in hitparade: #{
				sg_count = hitparade[paradigm_guessed_singular];
			#}
			if paradigm_guessed_plural in hitparade: #{
				pl_count = hitparade[paradigm_guessed_plural];
			#}

			# It could be that the context corpus has evidence for more 
			# than one gender, so we check them all
			for gender in unk_gen_sg_count[unknown]: #{
				# But if the paradigm doesn't match the gender, then we skip it.
				if paradigms[paradigm][0][1].count('.' + gender + '.'): #{
					# Concatenate all the adjectives which have provided us
					# with context together
					context = '(';
					for item in list(set(unk_gen_sg_context[unknown][gender])): #{
						context = context + ' ' + item ;
					#}
					for item in list(set(unk_gen_pl_context[paradigm_guessed_plural]['mf'])): #{
						context = context + ' ' + item ;
					#}
					context = context + ' )';
						
					# Print out everything.
					print sg_count + pl_count , '\t' , paradigm , '\t' , unk_gen_sg_count[unknown][gender] , '\t' , paradigm_guessed_singular , paradigm_guessed_plural , '\t' , context

					print '    <e lm="' + unknown + '"><i>' + stem_from_par_sg(paradigm, unknown) + '</i><par n="' + paradigm + '"/></e>'; 
				#}
				#if unknown in hitparade: #{
				#	print paradigm , suffix ,  hitparade[unknown] , '\t' , unk_gen_sg_count[unknown][gender] , '\t' ,  gender , '\t' , unknown , set(unk_gen_sg_context[unknown][gender]);
				#}
			#}
		#}
	#}
#}

#				print paradigm , suffix ,  hitparade[unknown] , '\t' , unk_gen_sg_count[unknown][gender] , '\t' ,  gender , '\t' , unknown , set(unk_gen_sg_context[unknown][gender]);
