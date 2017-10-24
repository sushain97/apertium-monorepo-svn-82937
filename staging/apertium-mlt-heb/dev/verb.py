#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

def sym(syms): #{
	return '<s n="' + syms.replace('.', '"/><s n="') + '"/>';
#}

def header(): #{
	header = '';
	header = header + '<dictionary>\n';
	header = header + '  <alphabet>ABĊDEFĠGGHĦIIJKLMNOPQRSTUVWXZŻabċdefġgħghieiejklmnopqrstuvwxzżycYCáéíóúàèìòùñöëäïüçÿāēīōūăĕĭŏŭãẽĩõũ</alphabet>\n';
	header = header + '  <sdefs>\n';
	header = header + '    <sdef n="vblex"/>\n';
	header = header + '    <sdef n="prn"/>\n';
	header = header + '    <sdef n="past"/>\n';
	header = header + '    <sdef n="neg"/>\n';
	header = header + '    <sdef n="pres"/>\n';
	header = header + '    <sdef n="imp"/>\n';
	header = header + '    <sdef n="pprs"/>\n';
	header = header + '    <sdef n="pp"/>\n';
	header = header + '    <sdef n="p1"/>\n';
	header = header + '    <sdef n="p2"/>\n';
	header = header + '    <sdef n="p3"/>\n';
	header = header + '    <sdef n="sg"/>\n';
	header = header + '    <sdef n="pl"/>\n';
	header = header + '    <sdef n="m"/>\n';
	header = header + '    <sdef n="f"/>\n';
	header = header + '    <sdef n="mf"/>\n';
	header = header + '  </sdefs>\n';
	header = header + '  <pardefs>\n';

	header = header + '    <pardef n="S__qatlu/lhiex">\n';
        header = header + '      <e><p><l>lux</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lhiex</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lekx</l><r><j/>lu<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lix</l><r><j/>lu<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lhomx</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lkomx</l><r><j/>lu<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>lniex</l><r><j/>lu<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
	header = header + '    </pardef>\n';

	header = header + '    <pardef n="S__qatlu/lha">\n';
        header = header + '      <e><p><l>lu</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>lha</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>lek</l><r><j/>lu<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>li</l><r><j/>lu<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>lhom</l><r><j/>lu<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/></r></p></e>\n';
        header = header + '      <e><p><l>lkom</l><r><j/>lu<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/></r></p></e>\n';
        header = header + '      <e><p><l>lna</l><r><j/>lu<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/></r></p></e>\n';
	header = header + '    </pardef>\n';

	header = header + '    <pardef n="S__qatlu/nix">\n';
        header = header + '      <e><p><l>ux</l><r><j/>u<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>hiex</l><r><j/>u<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>ekx</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>nix</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>homx</l><r><j/>u<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>komx</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
        header = header + '      <e><p><l>niex</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/><j/>x<s n="neg"/></r></p></e>\n';
	header = header + '    </pardef>\n';

	header = header + '    <pardef n="S__qatlu/ni">\n';
        header = header + '      <e><p><l>u</l><r><j/>u<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>ha</l><r><j/>u<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>ek</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>ni</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/></r></p></e>\n';
        header = header + '      <e><p><l>hom</l><r><j/>u<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/></r></p></e>\n';
        header = header + '      <e><p><l>kom</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/></r></p></e>\n';
        header = header + '      <e><p><l>na</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/></r></p></e>\n';
	header = header + '    </pardef>\n';

	header = header + '    <pardef n="S__qatlu/hielhiex">\n';
        header = header + '      <e><p><l>u</l><r><j/>u<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>hie</l><r><j/>u<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>ek</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>ni</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>hom</l><r><j/>u<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>kom</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
        header = header + '      <e><p><l>nie</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lhiex"/></e>\n';
	header = header + '    </pardef>\n';

	header = header + '    <pardef n="S__qatlu/hielha">\n';
        header = header + '      <e><p><l>u</l><r><j/>u<s n="prn"/><s n="p3"/><s n="m"/><s n="sg"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>hie</l><r><j/>u<s n="prn"/><s n="p3"/><s n="f"/><s n="sg"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>ek</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="sg"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>ni</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="sg"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>hom</l><r><j/>u<s n="prn"/><s n="p3"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>kom</l><r><j/>u<s n="prn"/><s n="p2"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lha"/></e>\n';
        header = header + '      <e><p><l>nie</l><r><j/>u<s n="prn"/><s n="p1"/><s n="mf"/><s n="pl"/></r></p><par n="S__qatlu/lha"/></e>\n';
	header = header + '    </pardef>\n';

	header = header + '  </pardefs>\n';
	header = header + '  <section id="main" type="standard">\n';
	
	return header;
	
#}
 
def footer(): #{
	footer = '';
	footer = footer + '  </section>\n';
	footer = footer + '</dictionary>\n';
	
	return footer;
#}

##-----------------------------------------------------------------------------##

# KaTaB		qasam, waqaf, qara(j), ġara(j), 
# KaTeB		qabeż, ħareġ
# KeTeB		xegħel, fehem, qered
# KeTaB		seraq, wera(j), ġema', ġama'
# KiTeB		kiser, wiżen
# KoToB		qorob, għolob
# KoTaB		għola(j), għoxa(j), ħola(j)

def strong_pp(root, vowels, pref): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pp.m.sg'] = [(pref + r[0] + r[1] + 'u' + r[2], '-')] ;
	forms['pp.f.sg'] = [(pref + r[0] + r[1] + 'u' + r[2] + 'a', '-')] ;
	forms['pp.mf.pl'] = [(pref + r[0] + r[1] + 'u' + r[2] + 'in', '-')] ;

	return forms;
#}

def strong_pprs(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pprs.m.sg'] = [(r[0] + 'ie' + r[1] + 'e' + r[2] , '-')] ;
	forms['pprs.f.sg'] = [(r[0] + 'ie' + r[1] + r[2] + 'a' , '-')] ;
	forms['pprs.mf.pl'] = [(r[0] + 'ie' + r[1] + r[2] + 'in' , '-')] ;

	return forms;
#}

def strong_imp(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels
	
	forms = {};

	forms['imp.p2.sg'] = [(v[0] + r[0] + r[1] + v[1] + r[2], '-')];
	forms['imp.p2.pl'] = [(v[0] + r[0] + r[1] + r[2] + 'u', '-')];

	# When the seond radical of the verb is 'l', 'm', 'n' or 'għ', a euphonic 
	# vowel must be inserted
	if r[1] == 'l' or r[1] == 'm' or r[1] == 'n' or r[1] == 'għ': #{
		forms['imp.p2.pl'] = [(v[0] + r[0] + v[1] + r[1] + r[2] + 'u', '-')];
	#}

	return forms ; 
#}

def strong_pres(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pres.p3.m.sg'] = [('i' + v[0] + r[0] + r[1] + v[1] + r[2], 'LR'),
				 ('j' + v[0] + r[0] + r[1] + v[1] + r[2], 'LR'),
				 ('i' + v[0] + r[0] + r[1] + v[1] + r[2], 'RL')] ;

	forms['pres.p3.f.sg'] = [('t' + v[0] + r[0] + r[1] + v[1] + r[2], '-')] ;
	forms['pres.p2.sg'] = [('t' + v[0] + r[0] + r[1] + v[1] + r[2], '-')] ;
	forms['pres.p1.sg'] = [('n' + v[0] + r[0] + r[1] + v[1] + r[2], '-')] ;
	
	forms['pres.p3.pl'] = [('j' + v[0] + r[0] + r[1] + r[2] + 'u', '-')] ; # j-iDĦL-u j-iFTĦ-u
	forms['pres.p2.pl'] = [('t' + v[0] + r[0] + r[1] + r[2] + 'u', '-')] ;
	forms['pres.p1.pl'] = [('n' + v[0] + r[0] + r[1] + r[2] + 'u', '-')] ;

	# When the seond radical of the verb is 'l', 'm', 'n' or 'għ', a euphonic 
	# vowel must be inserted
	if r[1] == 'l' or r[1] == 'm' or r[1] == 'n' or r[1] == 'għ': #{
		forms['pres.p3.pl'] = [('j' + v[0] + r[0] + v[1] + r[1] + r[2] + 'u', '-')] ; # j-iToLB-u
		forms['pres.p2.pl'] = [('t' + v[0] + r[0] + v[1] + r[1] + r[2] + 'u', '-')] ; # t-iToLB-u
		forms['pres.p1.pl'] = [('n' + v[0] + r[0] + v[1] + r[1] + r[2] + 'u', '-')] ; # n-iToLB-u
	#}

	return forms;
#}

def strong_past(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	if r[2] == 'j' or r[2] == 'għ': #{
		r[2] = '';
	#}

	forms = {};

	forms['past.p3.m.sg'] = [(r[0] + v[0] + r[1] + v[1] + r[2], '-')]; # Same as stem
	forms['past.p3.f.sg'] = [(r[0] + v[0] + r[1] + r[2] + 'et', '-')];	# Omit second vowel of stem word
	
	forms['past.p2.sg'] = [(r[0] + r[1] + v[1] + r[2] + 't', '-')];	# Omit first vowel of stem word
	forms['past.p1.sg'] = [(r[0] + r[1] + v[1] + r[2] + 't', '-')];	# Omit first vowel of stem word

	forms['past.p3.pl'] = [(r[0] + v[0] + r[1] + r[2] + 'u', '-')];	# Omit second vowel of stem word
	forms['past.p2.pl'] = [(r[0] + r[1] + v[1] + r[2] + 'tu', '-')];	# Omit first vowel of stem word
	forms['past.p1.pl'] = [(r[0] + r[1] + v[1] + r[2] + 'na', '-')];	# Omit first vowel of stem word

	# == Overrides == 

	if r[0] == 'w' or r[0] == 'għ': #{
		# If the first radical is 'w' or 'għ' then we have a full disyllabic form
		forms['past.p2.sg'] = [(r[0] + v[0] + r[1] + v[1] + r[2] + 't', '-')];	
		forms['past.p1.sg'] = [(r[0] + v[0] + r[1] + v[1] + r[2] + 't', '-')];	
	#}


	return forms;
#}

def hollow_pp(root, vowels, pref): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pp.m.sg'] = [(pref + r[0] + 'ju' + r[2], '-')] ;
	forms['pp.f.sg'] = [(pref + r[0] + 'ju' + r[2] + 'a', '-')] ;
	forms['pp.mf.pl'] = [(pref + r[0] + 'ju' + r[2] + 'in', '-')] ;

	return forms;
#}


def hollow_past(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	if r[1] != 'j' and r[1] != 'w': #{
		print >> sys.stderr, 'Hollow verb without second radical as \'w\' or \'j\'';
	#}

	forms = {};

	forms['past.p3.m.sg'] = [(r[0] + v[0] + r[2], '-')];
	forms['past.p3.f.sg'] = [(r[0] + v[0] + r[2] + 'et', '-')];

	# This form is obtained by the insertion of 'o' for second radical 'w' and
	# 'i' for second radical 'j'
	if r[1] == 'w': #{
		link_vowel = 'o';
	elif r[1] == 'j': #{
		link_vowel = 'i';
	#}

	forms['past.p2.sg'] = [(r[0] + link_vowel + r[2] + 't', '-')];	
	forms['past.p1.sg'] = [(r[0] + link_vowel + r[2] + 't', '-')];	
	forms['past.p2.pl'] = [(r[0] + link_vowel + r[2] + 'tu', '-')];
	forms['past.p1.pl'] = [(r[0] + link_vowel + r[2] + 'na', '-')];
	forms['past.p3.pl'] = [(r[0] + 'a' + r[2] + 'u', '-')];

	# This is not in the grammar, but it seems that 'ie' (mutation of long 'a')
	# does not have the usual rules applied
	if v[0] == 'ie': #{
		forms['past.p1.pl'] = [(r[0] + 'ie' + r[2] + 'na', '-')];
		forms['past.p3.pl'] = [(r[0] + 'ie' + r[2] + 'u', '-')];	
	#}

	return forms;
#}

def hollow_pres(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	if r[1] != 'j' and r[1] != 'w': #{
		print >> sys.stderr, 'Hollow verb without second radical as \'w\' or \'j\'';
	#}

	forms = {};

	# The imperfect is obtained by the addition of the usual prefixes (j,t,n) 
	# to the first radical of the verb with the stressed long vowel 'u' or 'i'
	# between the first and third radicals. And 'u' for the plural.

	#	- This is all well and good, but there is some ambiguity because we find
	#	- e.g. iddur/ddur in the corpus, but not jddur. On the other hand,
	#	- we find 'trid' and 'jrid' in the corpus

	link_vowel = '';
	if r[1] == 'w': #{
		link_vowel = 'u';
	elif r[1] == 'j': #{
		link_vowel = 'i';
	#}
											# (!) form not attested

	forms['pres.p3.m.sg'] = [('i' + r[0] + link_vowel + r[2], 'LR'),		# irid		isir		idur
				 ('j' + r[0] + link_vowel + r[2], 'LR'),		# jrid		jsir		jdur
				 ('i' + r[0] + link_vowel + r[2], 'RL')];		# ~irid		~isir		~idur

	forms['pres.p3.f.sg'] = [('i' + r[0] + r[0] + link_vowel + r[2], 'LR'),		# irrid 	issir		iddur
				 (r[0] + r[0] + link_vowel + r[2], 'LR'),		# rrid		ssir		ddur
				 ('t' + r[0] + link_vowel + r[2], 'LR'),		# trid		tsir(!)		tdur(!)
				 ('i' + r[0] + r[0] + link_vowel + r[2], 'RL')];	# ~irrid	~issir		~iddur

	forms['pres.p2.sg'] = [('i' + r[0] + r[0] + link_vowel + r[2], 'LR'),		# irrid 	issir		iddur
			       (r[0] + r[0] + link_vowel + r[2], 'LR'),			# rrid		ssir		ddur
			       ('t' + r[0] + link_vowel + r[2], 'LR'),			# trid 		tsir(!)		tdur(!)
			       ('i' + r[0] + r[0] + link_vowel + r[2], 'RL')];		# ~irrid	~issir		~iddur

	forms['pres.p1.sg'] = [('in' + r[0] + link_vowel + r[2], 'LR'),			# inrid		insir		indur
			       ('n' + r[0] + link_vowel + r[2], 'LR'),			# nrid		nsir		ndur
			       ('in' + r[0] + link_vowel + r[2], 'RL')];		# ~inrid	~insir		~indur

	forms['pres.p3.pl'] = [('i' + r[0] + link_vowel + r[2] + 'u', 'LR'),		# iridu		isiru		iduru
			       ('j' + r[0] + link_vowel + r[2] + 'u', 'LR'),		# jridu		jsiru		jduru
			       ('i' + r[0] + link_vowel + r[2] + 'u', 'RL')];		# ~iridu	~isiru		~iduru

	forms['pres.p2.pl'] = [('i' + r[0] + r[0] + link_vowel + r[2] + 'u', 'LR'),	# irridu	issiru		idduru
			       (r[0] + r[0] + link_vowel + r[2] + 'u', 'LR'),		# rridu		ssiru		dduru
			       ('t' + r[0] + link_vowel + r[2] + 'u', 'LR'),		# tridu		tsiru(!)	tduru(!)
			       ('i' + r[0] + r[0] + link_vowel + r[2] + 'u', 'RL')];	# ~irridu	~issiru		~idduru

	forms['pres.p1.pl'] = [('in' + r[0] + link_vowel + r[2] + 'u', 'LR'),		# inridu	insiru		induru
			       ('n' + r[0] + link_vowel + r[2] + 'u', 'LR'),		# nridu		nsiru		nduru
			       ('in' + r[0] + link_vowel + r[2] + 'u', 'RL')];		# ~inridu	~insiru		~induru
	
	return forms;
#}

def hollow_imp(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	if r[1] != 'j' and r[1] != 'w': #{
		print >> sys.stderr, 'Hollow verb without second radical as \'w\' or \'j\'';
	#}

	forms = {};

	link_vowel = '';
	if r[1] == 'w': #{
		link_vowel = 'u';
	elif r[1] == 'j': #{
		link_vowel = 'i';
	#}
		
	forms['imp.p2.sg'] = [(r[0] + link_vowel + r[1], '-')];
	forms['imp.p2.pl'] = [(r[0] + link_vowel + r[1] + 'u', '-')];

	return forms;
#}

def weak_past(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['past.p3.m.sg'] = [(r[0] + v[0] + r[1] + v[1], '-')];
	
	# This form is obtained by the elision of the first vowel of the 
	# stem and the change of the second vowel to 'ie' (for e-a) and
	# 'a' for (a-a)
	if v[0] == 'e' and v[1] == 'a': 
		forms['past.p3.f.sg'] = [(r[0] + r[1] + 'iet', '-')];
	else: #{
		forms['past.p3.f.sg'] = [(r[0] + r[1] + 'at', '-')];
	#}

	# This form is obtained by the omission of the two vowels in the stem
	# and the addition of the dipthong 'ej' (for e-a) and 'aj' (for a-a)
	forms['past.p2.sg'] = [(r[0] + r[1] + v[0] + 'jt', '-')];	
	forms['past.p1.sg'] = [(r[0] + r[1] + v[0] + 'jt', '-')];	

	# This form is obtained by the omission of the two vowels in the vocalic
	# sequence + dipthong 'ew' or 'aw'
	forms['past.p3.pl'] = [(r[0] + r[1] + v[0] + 'w', '-')];
	forms['past.p2.pl'] = [(r[0] + r[1] + v[0] + 'jtu', '-')];
	forms['past.p1.pl'] = [(r[0] + r[1] + v[0] + 'jna', '-')];

	return forms;
#}

def weak_pres(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};


	forms['pres.p3.m.sg'] = [('j' + v[0] + r[0] + r[1] + v[1] , '-')];
	forms['pres.p3.f.sg'] = [('t' + v[0] + r[0] + r[1] + v[1] , '-')];
	forms['pres.p2.sg'] = [('t' + v[0] + r[0] + r[1] + v[1] , '-')];
	forms['pres.p1.sg'] = [('n' + v[0] + r[0] + r[1] + v[1] , '-')];
	
	if vowels == 'a-a': #{
		suffix =  'aw';
	elif vowels == 'i-a': #{
		suffix =  'ew';
	else: #{
		suffix = 'u'
	#}
										# QaRaJ		BeDaJ		MeXaJ	ReMaJ
										# a-a		i-a		i-i	a-i
	forms['pres.p3.pl'] = [('j' + v[0] + r[0] + r[1] + suffix, '-')];	# j-aQRa-w	j-iBDe-w	j-iMXu	j-aRMu
	forms['pres.p2.pl'] = [('t' + v[0] + r[0] + r[1] + suffix, '-')];	# t-aQRa-w
	forms['pres.p1.pl'] = [('n' + v[0] + r[0] + r[1] + suffix, '-')];	# n-aQRa-w

	return forms;
#}

def weak_imp(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	if vowels == 'a-a': #{
		suffix =  'aw';
	elif vowels == 'i-a': #{
		suffix =  'ew';
	else: #{
		suffix = 'u'
	#}

	forms['imp.p2.sg'] = [(v[0] + r[0] + r[1] + v[1] , '-')];
	forms['imp.p2.pl'] = [(v[0] + r[0] + r[1] + suffix , '-')];

	return forms;
#}

def weak_pp(root, vowels, pref): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pp.m.sg'] = [(pref + r[0] + r[1] + 'i', '-')] ;
	forms['pp.f.sg'] = [(pref + r[0] + r[1] + 'ja', '-')] ;
	forms['pp.mf.pl'] = [(pref + r[0] + r[1] + 'ijin', '-')] ;

	return forms;
#}


def doubled_past(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['past.p3.m.sg'] = [(r[0] + v[0] + r[1] + r[2], '-')];
	forms['past.p3.f.sg'] = [(r[0] + v[0] + r[1] + r[2] + 'et', '-')];
	forms['past.p2.sg'] = [(r[0] + v[0] + r[1] + r[2] + 'ejt', '-')];
	forms['past.p1.sg'] = [(r[0] + v[0] + r[1] + r[2] + 'ejt', '-')];
	forms['past.p3.pl'] = [(r[0] + v[0] + r[1] + r[2] + 'u', '-'),
			       (r[0] + v[0] + r[1] + r[2] + 'ew', 'LR')];
	forms['past.p2.pl'] = [(r[0] + v[0] + r[1] + r[2] + 'ejtu', '-')];
	forms['past.p1.pl'] = [(r[0] + v[0] + r[1] + r[2] + 'ejna', '-')];

	return forms;
#}

def doubled_pres(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['pres.p3.m.sg'] = [('i' + r[0] + v[1] + r[1] + r[2], 'LR'),		# irodd
				 ('j' + r[0] + v[1] + r[1] + r[2], 'LR'), 		# jrodd
				 ('i' + r[0] + v[1] + r[1] + r[2], 'RL')];		# ~irodd

	forms['pres.p3.f.sg'] = [('t' + r[0] + v[1] + r[1] + r[2], '-')];		# trodd

	forms['pres.p2.sg'] = [('t' + r[0] + v[1] + r[1] + r[2], '-')];			# trodd

	forms['pres.p1.sg'] = [('in' + r[0] + v[1] + r[1] + r[2], 'LR'),		# inrodd
			       ('i' + r[0] + r[0] + v[1] + r[1] + r[2], 'LR'),		# irrodd
			       ('in' + r[0] + r[0] + v[1] + r[1] + r[2], 'RL')];	# irrodd

	forms['pres.p3.pl'] = [('i' + r[0] + v[1] + r[1] + r[2] + 'u', 'LR'),		# iroddu
				 ('j' + r[0] + v[1] + r[1] + r[2] + 'u', 'LR'), 	# jroddu
				 ('i' + r[0] + v[1] + r[1] + r[2] + 'u', 'RL')];	# ~iroddu

	forms['pres.p2.pl'] = [('t' + r[0] + v[1] + r[1] + r[2] + 'u', '-')];		# troddu

	forms['pres.p1.pl'] = [('in' + r[0] + v[1] + r[1] + r[2] + 'u', 'LR'),		# inroddu
			       ('i' + r[0] + r[0] + v[1] + r[1] + r[2] + 'u', 'LR'),	# irroddu
			       ('in' + r[0] + r[0] + v[1] + r[1] + r[2] + 'u', 'RL')];	# irroddu


	return forms;
#}

def doubled_imp(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	suffix = 'u'

	forms['imp.p2.sg'] = [(r[0] + v[1] + r[1] + r[2], '-')];
	forms['imp.p2.pl'] = [(r[0] + v[1] + r[1] + r[2] + suffix , '-')];

	return forms;
#}

def doubled_pp(root, vowels, pref): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	forms['pp.m.sg'] = [(pref + r[0] + r[1] + 'u' + r[2], '-')];
	forms['pp.f.sg'] = [(pref + r[0] + r[1] + 'u' + r[2] + 'a', '-')];
	forms['pp.mf.pl'] = [(pref + r[0] + r[1] + 'u' + r[2] + 'in', '-')];

	return forms;
#}

def quad_past(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['past.p3.m.sg'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3], '-')];
	forms['past.p3.f.sg'] = [(r[0] + v[0] + r[1] + r[2] + r[3] + 'et', '-')];
	forms['past.p2.sg'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3] + 't', '-')];
	forms['past.p1.sg'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3] + 't', '-')];
	forms['past.p3.pl'] = [(r[0] + v[0] + r[1] + r[2] + r[3] + 'u', '-')];
	forms['past.p2.pl'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3] + 'tu', '-')];
	forms['past.p1.pl'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3] + 'na', '-')];

	return forms;
#}
	
def quad_pres(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['pres.p3.m.sg'] = [('i' + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),		# idardar
				 ('j' + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'), 	# jdardar
				 ('i' + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'RL')];	# ~idardar

	forms['pres.p3.f.sg'] = [('i' + r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),	# iddardar
				 (r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),	# ddardar
				 ('i' + r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'RL')];	# ~iddardar

	forms['pres.p2.sg'] = [('i' + r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),	# iddardar
				 (r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),	# ddardar
				 ('i' + r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'RL')];	# ~iddardar


	forms['pres.p1.sg'] = [('in' + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),		# indardar
			       ('n' + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'LR'),		# ndardar
			       ('in' + r[0] + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], 'RL')];	# indardar

	forms['pres.p3.pl'] = [('i' + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'LR'),		# idardru
				 ('j' + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'LR'), 		# jdardru
				 ('i' + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'RL')];		# ~idardru

	forms['pres.p2.pl'] = [('i' + r[0] + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'LR'),	# iddardru
				 (r[0] + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'LR'),		# ddardru
				 ('i' + r[0] + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', 'RL')];	# ~iddardru

	forms['pres.p1.pl'] = [('in' + r[0] + v[0] + r[1] + r[2] + r[3] + 'u', '-')];		# indardru


	return forms;
#}

def quad_imp(root, vowels): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};
	
	suffix = 'u'

	forms['imp.p2.sg'] = [(r[0] + v[0] + r[1] + r[2] + v[1] + r[3], '-')];
	forms['imp.p2.pl'] = [(r[0] + v[0] + r[1] + r[2] + r[3] + suffix , '-')];

	return forms;
#}

def quad_pp(root, vowels, pref): #{
	r = root.split('-'); # radicals
	v = vowels.split('-'); # vowels

	forms = {};

	forms['pp.m.sg'] = [(pref + r[0] + v[0] + r[1] + r[2] + v[1] + r[3], '-')];	# imdardar
	forms['pp.f.sg'] = [(pref + r[0] + v[0] + r[1] + r[2] + r[3] + 'a', '-')];	# imdardra
	forms['pp.mf.pl'] = [(pref + r[0] + v[0] + r[1] + r[2] + r[3] + 'in', '-')];	# imdardrin

	return forms;
#}


##-----------------------------------------------------------------------------##

iv_with_pprs = ['qagħad', 'raqad'];

stems = [
	{'stem': 'qasam', 'type': 'strong', 'gloss': 'break', 'root': 'q-s-m', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv'},
	{'stem': 'kiteb', 'type': 'strong', 'gloss': 'write', 'root': 'k-t-b', 'vowel_perf': 'i-i', 'vowel_impf': 'i-i', 'trans': 'tv'},
	{'stem': 'ħabat', 'type': 'strong', 'gloss': 'strike', 'root': 'ħ-b-t', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'ħaqar', 'type': 'strong', 'gloss': 'oppress', 'root': 'ħ-q-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'ħalaq', 'type': 'strong', 'gloss': 'create', 'root': 'ħ-l-q', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'ħaraq', 'type': 'strong', 'gloss': 'burn', 'root': 'ħ-r-q', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'ħataf', 'type': 'strong', 'gloss': 'snatch', 'root': 'ħ-t-f', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'għalaq', 'type': 'strong', 'gloss': 'shut', 'root': 'għ-l-q', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD', 'pp': 'ma'},
	{'stem': 'għasar', 'type': 'strong', 'gloss': 'squeeze', 'root': 'għ-s-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'għażaq', 'type': 'strong', 'gloss': 'dig', 'root': 'għ-ż-q', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'TD'},
	{'stem': 'bagħat', 'type': 'strong', 'gloss': 'send', 'root': 'b-għ-t', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'ċaħad', 'type': 'strong', 'gloss': 'deny', 'root': 'ċ-ħ-d', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'daħak', 'type': 'strong', 'gloss': 'laugh', 'root': 'd-ħ-k', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'dalam', 'type': 'strong', 'gloss': 'grow·dark', 'root': 'd-l-m', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'iv'},
	{'stem': 'fadal', 'type': 'strong', 'gloss': 'be·left·over', 'root': 'f-d-l', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'iv'},
	{'stem': 'fasad', 'type': 'strong', 'gloss': 'bleed', 'root': 'f-s-d', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'iv'},
	{'stem': 'laħaq', 'type': 'strong', 'gloss': 'reach', 'root': 'l-ħ-q', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'iv'},
	{'stem': 'lagħab', 'type': 'strong', 'gloss': 'play', 'root': 'l-għ-b', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'bagħad', 'type': 'strong', 'gloss': 'hate', 'root': 'b-għ-d', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'lagħaq', 'type': 'strong', 'gloss': 'lick', 'root': 'l-għ-q', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'marad', 'type': 'strong', 'gloss': 'fall·sick', 'root': 'm-r-d', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'sahar', 'type': 'strong', 'gloss': 'work·overtime', 'root': 's-h-r', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'taħan', 'type': 'strong', 'gloss': 'grind', 'root': 't-ħ-n', 'vowel_perf': 'a-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'wasal', 'type': 'strong', 'gloss': 'arrive', 'root': 'w-s-l', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'daħal', 'type': 'strong', 'gloss': 'enter', 'root': 'd-ħ-l', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'ġabar', 'type': 'strong', 'gloss': 'collect', 'root': 'ġ-b-r', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'saħan', 'type': 'strong', 'gloss': 'become·warm', 'root': 's-ħ-n', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'talab', 'type': 'strong', 'gloss': 'pray, ask', 'root': 't-l-b', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'maxat', 'type': 'strong', 'gloss': 'comb', 'root': 'm-x-t', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'qagħad', 'type': 'strong', 'gloss': 'stand', 'root': 'q-għ-d', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'iv', 'pp': 'ma'},
	{'stem': 'bagħad', 'type': 'strong', 'gloss': 'hate', 'root': 'b-għ-d', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'baram', 'type': 'strong', 'gloss': 'twist', 'root': 'b-r-m', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'ħanaq', 'type': 'strong', 'gloss': 'make', 'root': 'ħ-n-q', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'laqat', 'type': 'strong', 'gloss': 'hit', 'root': 'l-q-t', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'qaras', 'type': 'strong', 'gloss': 'pinch', 'root': 'q-r-s', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'rabat', 'type': 'strong', 'gloss': 'tie, bind', 'root': 'r-b-t', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'TD', 'pp': 'ma'},
	{'stem': 'raqad', 'type': 'strong', 'gloss': 'sleep', 'root': 'r-q-d', 'vowel_perf': 'a-a', 'vowel_impf': 'o-o', 'trans': 'iv'}, # with pprs ??
	{'stem': 'qara', 'type': 'strong', 'gloss': 'read', 'root': 'q-r-j', 'vowel_perf': 'a-a', 'trans': 'TD'},
	{'stem': 'ġara', 'type': 'strong', 'gloss': 'happen', 'root': 'ġ-r-j', 'vowel_perf': 'a-a', 'trans': 'TD'},
	{'stem': 'ħareġ', 'type': 'strong', 'gloss': 'go·out', 'root': 'ħ-r-ġ', 'vowel_perf': 'a-e', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'ħadem', 'type': 'strong', 'gloss': 'work', 'root': 'ħ-d-m', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'ħafer', 'type': 'strong', 'gloss': 'forgive', 'root': 'ħ-f-r', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'ħaleb', 'type': 'strong', 'gloss': 'milk', 'root': 'ħ-l-b', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'ħalef', 'type': 'strong', 'gloss': 'swear', 'root': 'ħ-l-f', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'għalef', 'type': 'strong', 'gloss': 'feed·animals', 'root': 'għ-l-f', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'ħasel', 'type': 'strong', 'gloss': 'wash', 'root': 'ħ-s-l', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD', 'pp': 'ma'},
	{'stem': 'għamel', 'type': 'strong', 'gloss': 'make', 'root': 'għ-m-l', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'qabel', 'type': 'strong', 'gloss': 'agree', 'root': 'q-b-l', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'qabeż', 'type': 'strong', 'gloss': 'jump', 'root': 'q-b-ż', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'għażel', 'type': 'strong', 'gloss': 'choose', 'root': 'għ-ż-l', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'TD'},
	{'stem': 'qatel', 'type': 'strong', 'gloss': 'kill', 'root': 'q-t-l', 'vowel_perf': 'a-e', 'vowel_impf': 'o-o', 'trans': 'TD', 'pp': 'ma'},
	{'stem': 'ħeles', 'type': 'strong', 'gloss': 'deliver', 'root': 'ħ-l-s', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'me'}, # also iv ?
	{'stem': 'għereq', 'type': 'strong', 'gloss': 'stink', 'root': 'għ-r-q', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'hemeż', 'type': 'strong', 'gloss': 'fasten·with·pin', 'root': 'h-m-ż', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'heġem', 'type': 'strong', 'gloss': 'devour', 'root': 'h-ġ-m', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'hebeż', 'type': 'strong', 'gloss': 'recede', 'root': 'h-b-ż', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'heres', 'type': 'strong', 'gloss': 'pestle', 'root': 'h-r-s', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'ħebel', 'type': 'strong', 'gloss': 'rave', 'root': 'ħ-b-l', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'ħemer', 'type': 'strong', 'gloss': 'ferment', 'root': 'ħ-m-r', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'ħerek', 'type': 'strong', 'gloss': 'rise·early', 'root': 'ħ-r-k', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'TD'},
	{'stem': 'deher', 'type': 'strong', 'gloss': 'appear', 'root': 'd-h-r', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'fehem', 'type': 'strong', 'gloss': 'understand', 'root': 'f-h-m', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'xeher', 'type': 'strong', 'gloss': 'wail', 'root': 'x-h-r', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'xegħel', 'type': 'strong', 'gloss': 'light', 'root': 'x-għ-l', 'vowel_perf': 'e-e', 'trans': 'iv'},
	{'stem': 'resaq', 'type': 'strong', 'gloss': 'approach', 'root': 'r-s-q', 'vowel_perf': 'e-a', 'vowel_impf': 'e-a', 'trans': 'TD'},
	{'stem': 'feraħ', 'type': 'strong', 'gloss': 'rejoice', 'root': 'f-r-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'refa', 'type': 'strong', 'gloss': 'raise', 'root': 'r-f-għ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD', 'pp': 'me'},# check impf_v
	{'stem': 'fetaħ', 'type': 'strong', 'gloss': 'open', 'root': 'f-t-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'felaħ', 'type': 'strong', 'gloss': 'be·strong', 'root': 'f-l-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'kesaħ', 'type': 'strong', 'gloss': 'be·cold', 'root': 'k-s-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'mesaħ', 'type': 'strong', 'gloss': 'wipe', 'root': 'm-s-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'lemaħ', 'type': 'strong', 'gloss': 'perceive', 'root': 'l-m-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'rebaħ', 'type': 'strong', 'gloss': 'win', 'root': 'r-b-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'reżaħ', 'type': 'strong', 'gloss': 'shiver', 'root': 'r-ż-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'sebaħ', 'type': 'strong', 'gloss': 'dawn', 'root': 's-b-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'seraq', 'type': 'strong', 'gloss': 'steal', 'root': 's-r-q', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'telaq', 'type': 'strong', 'gloss': 'depart', 'root': 't-l-q', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'TD'},
	{'stem': 'selaħ', 'type': 'strong', 'gloss': 'skin', 'root': 's-l-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'żebagħ', 'type': 'strong', 'gloss': 'paint', 'root': 'ż-b-għ', 'vowel_perf': 'e-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'żelaq', 'type': 'strong', 'gloss': 'slip', 'root': 'ż-l-q', 'vowel_perf': 'e-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'sebaq', 'type': 'strong', 'gloss': 'outstrip', 'root': 's-b-q', 'vowel_perf': 'e-a', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'nefaħ', 'type': 'strong', 'gloss': 'blow', 'root': 'n-f-ħ', 'vowel_perf': 'e-a', 'vowel_impf': 'o-o', 'trans': 'iv'},
	{'stem': 'nefaq', 'type': 'strong', 'gloss': 'spend', 'root': 'n-f-q', 'vowel_perf': 'e-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'beżaq', 'type': 'strong', 'gloss': 'spit', 'root': 'b-ż-q', 'vowel_perf': 'e-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'fetaq', 'type': 'strong', 'gloss': 'unstitch', 'root': 'f-t-q', 'vowel_perf': 'e-a', 'vowel_impf': 'o-o', 'trans': 'TD'},
#	{'stem': 'wera', 'type': 'strong', 'gloss': 'show', 'root': 'w-r-j', 'vowel_perf': 'e-a', 'trans': 'TD'},
	{'stem': 'ġema', 'type': 'strong', 'gloss': 'gather', 'root': 'ġ-m-għ', 'vowel_perf': 'e-a', 'trans': 'TD'},
	{'stem': 'kiser', 'type': 'strong', 'gloss': 'break', 'root': 'k-s-r', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'niżel', 'type': 'strong', 'gloss': 'descend', 'root': 'n-ż-l', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'bidel', 'type': 'strong', 'gloss': 'change', 'root': 'b-d-l', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'difen', 'type': 'strong', 'gloss': 'bury', 'root': 'd-f-n', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'dilek', 'type': 'strong', 'gloss': 'smear', 'root': 'd-l-k', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'fired', 'type': 'strong', 'gloss': 'separate', 'root': 'f-r-d', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'firex', 'type': 'strong', 'gloss': 'spread', 'root': 'f-r-x', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'ġibed', 'type': 'strong', 'gloss': 'pull', 'root': 'ġ-b-d', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'gideb', 'type': 'strong', 'gloss': 'lie', 'root': 'g-d-b', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'gidem', 'type': 'strong', 'gloss': 'bite', 'root': 'g-d-m', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'kiber', 'type': 'strong', 'gloss': 'grow', 'root': 'k-b-r', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'kines', 'type': 'strong', 'gloss': 'sweep', 'root': 'k-n-s', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'giref', 'type': 'strong', 'gloss': 'scratch', 'root': 'g-r-f', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'nidem', 'type': 'strong', 'gloss': 'repent', 'root': 'n-d-m', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'kixef', 'type': 'strong', 'gloss': 'unveil', 'root': 'k-x-f', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD', 'pp': 'mi'},
	{'stem': 'siker', 'type': 'strong', 'gloss': 'get·drunk', 'root': 's-k-r', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'silef', 'type': 'strong', 'gloss': 'lend', 'root': 's-l-f', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'tilef', 'type': 'strong', 'gloss': 'lose', 'root': 't-l-f', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'żifen', 'type': 'strong', 'gloss': 'dance', 'root': 'ż-f-n', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'TD'},
	{'stem': 'wiżen', 'type': 'strong', 'gloss': 'weigh', 'root': 'w-ż-n', 'vowel_perf': 'i-e', 'trans': 'TD'},
	{'stem': 'siket', 'type': 'strong', 'gloss': 'be·silent', 'root': 's-k-t', 'vowel_perf': 'i-e', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'sogħol', 'type': 'strong', 'gloss': 'cough', 'root': 's-għ-l', 'vowel_perf': 'o-o', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'sogħob', 'type': 'strong', 'gloss': 'be·sorry', 'root': 's-għ-b', 'vowel_perf': 'o-o', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'xorob', 'type': 'strong', 'gloss': 'drink', 'root': 'x-r-b', 'vowel_perf': 'o-o', 'vowel_impf': 'i-o', 'trans': 'TD'},
	{'stem': 'ħolom', 'type': 'strong', 'gloss': 'dream', 'root': 'ħ-l-m', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'korob', 'type': 'strong', 'gloss': 'groan', 'root': 'k-r-b', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'ħoloq', 'type': 'strong', 'gloss': 'create', 'root': 'ħ-l-q', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'forogħ', 'type': 'strong', 'gloss': 'ebb', 'root': 'f-r-għ', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'kotor', 'type': 'strong', 'gloss': 'abound', 'root': 'k-t-r', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'għodos', 'type': 'strong', 'gloss': 'dive', 'root': 'għ-d-s', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'għokos', 'type': 'strong', 'gloss': 'decay', 'root': 'għ-k-s', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'għorok', 'type': 'strong', 'gloss': 'rub', 'root': 'għ-r-k', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'TD'},
	{'stem': 'għolob', 'type': 'strong', 'gloss': 'grow·thin', 'root': 'għ-l-b', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'iv'},
	{'stem': 'qorob', 'type': 'strong', 'gloss': 'get·near', 'root': 'q-r-b', 'vowel_perf': 'o-o', 'vowel_impf': 'o-o', 'trans': 'iv'},

	# - Whether the middle radical of a hollow verb is 'j' or 'w' can be known by the second vowel of the 
	#   vocalic sequence of the imperfect. If this vowel is long 'u', the middle radical is 'w' if it is 
	#   long 'i' then the middle radical is 'j'. 
	# - Of all the hollow verbs, only a few have past participles
	{'stem': 'dar', 'type': 'hollow', 'gloss': 'turn', 'root': 'd-w-r', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'sar', 'type': 'hollow', 'gloss': 'become', 'root': 's-j-r', 'vowel_perf': 'a-a', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'miet', 'type': 'hollow', 'gloss': 'die', 'root': 'm-w-t', 'vowel_perf': 'ie-a', 'trans': 'iv'},
	{'stem': 'dieq', 'type': 'hollow', 'gloss': 'taste', 'root': 'd-w-q', 'vowel_perf': 'ie-a', 'trans': 'iv'},
	{'stem': 'daq', 'type': 'hollow', 'gloss': 'taste', 'root': 'd-w-q', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'dam', 'type': 'hollow', 'gloss': 'take.time', 'root': 'd-w-m', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'sam', 'type': 'hollow', 'gloss': 'fast', 'root': 's-w-m', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'far', 'type': 'hollow', 'gloss': 'boil', 'root': 'f-w-r', 'vowel_perf': 'a-a', 'trans': 'iv'},
#	{'stem': 'mar', 'type': 'hollow', 'gloss': 'go', 'root': 'm-w-r', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'sab', 'type': 'hollow', 'gloss': 'find', 'root': 's-j-b', 'vowel_perf': 'a-a', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'għam', 'type': 'hollow', 'gloss': 'swim', 'root': 'għ-w-m', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'qam', 'type': 'hollow', 'gloss': 'rise', 'root': 'q-w-m', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'żar', 'type': 'hollow', 'gloss': 'visit', 'root': 'ż-w-r', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'ġab', 'type': 'hollow', 'gloss': 'bring', 'root': 'ġ-j-b', 'vowel_perf': 'a-a', 'trans': 'iv', 'pp': 'me'},
	{'stem': 'ġieb', 'type': 'hollow', 'gloss': 'bring', 'root': 'ġ-j-b', 'vowel_perf': 'ie-a', 'trans': 'iv', 'pp': 'me'},
	{'stem': 'biegħ', 'type': 'hollow', 'gloss': 'sell', 'root': 'b-j-għ', 'vowel_perf': 'ie-a', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'fieq', 'type': 'hollow', 'gloss': 'recuperate', 'root': 'f-j-q', 'vowel_perf': 'ie-a', 'trans': 'iv'},
	{'stem': 'għab', 'type': 'hollow', 'gloss': 'disappear', 'root': 'għ-j-b', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'għan', 'type': 'hollow', 'gloss': 'help', 'root': 'għ-j-n', 'vowel_perf': 'a-a', 'trans': 'iv', 'pp': 'me'},
	{'stem': 'għar', 'type': 'hollow', 'gloss': 'envy', 'root': 'għ-j-r', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'għax', 'type': 'hollow', 'gloss': 'live', 'root': 'għ-j-x', 'vowel_perf': 'a-a', 'trans': 'iv'},
	{'stem': 'qies', 'type': 'hollow', 'gloss': 'measure', 'root': 'q-j-s', 'vowel_perf': 'ie-a', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'ried', 'type': 'hollow', 'gloss': 'want', 'root': 'r-j-d', 'vowel_perf': 'ie-a', 'trans': 'tv'},
	{'stem': 'tar', 'type': 'hollow', 'gloss': 'fly', 'root': 't-j-r', 'vowel_perf': 'a-a', 'trans': 'tv'},
	{'stem': 'żied', 'type': 'hollow', 'gloss': 'increase', 'root': 'ż-j-d', 'vowel_perf': 'ie-a', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'qiem', 'type': 'hollow', 'gloss': 'venerate', 'root': 'q-w-m', 'vowel_perf': 'ie-a', 'trans': 'tv', 'pp': 'me'},

	
	{'stem': 'qara', 'type': 'weak', 'gloss': 'read', 'root': 'q-r-j', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'p_stem': 'qra', 'pp': 'mo'},
	{'stem': 'mexa', 'type': 'weak', 'gloss': 'walk', 'root': 'm-x-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-i', 'trans': 'iv', 'p_stem': 'mxie'},
	{'stem': 'beda', 'type': 'weak', 'gloss': 'start', 'root': 'b-d-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'tv', 'p_stem': 'bdie', 'pp': 'mi'},
	{'stem': 'mela', 'type': 'weak', 'gloss': 'fill', 'root': 'm-l-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'reħa', 'type': 'weak', 'gloss': 'let·go', 'root': 'r-ħ-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'tv', 'pp': 'me'},
	{'stem': 'ħela', 'type': 'weak', 'gloss': 'waste', 'root': 'ħ-l-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'tv', 'pp': 'mo'},
	{'stem': 'ħeba', 'type': 'weak', 'gloss': 'hide', 'root': 'ħ-b-j', 'vowel_perf': 'e-a', 'vowel_impf': 'i-a', 'trans': 'tv', 'pp': 'mo'},
	{'stem': 'rema', 'type': 'weak', 'gloss': 'throw·away', 'root': 'r-m-j', 'vowel_perf': 'e-a', 'vowel_impf': 'a-i', 'trans': 'tv', 'p_stem': 'rmie', 'pp': 'mo'},


	{'stem': 'radd', 'type': 'doubled', 'gloss': 'restore', 'root': 'r-d-d', 'vowel_perf': 'a-a', 'vowel_impf': 'a-o', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'mess', 'type': 'doubled', 'gloss': 'touch', 'root': 'm-s-s', 'vowel_perf': 'e-e', 'vowel_impf': 'e-i', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'qarr', 'type': 'doubled', 'gloss': 'go·to·confession', 'root': 'q-r-r', 'vowel_perf': 'a-a', 'vowel_impf': 'i-e', 'trans': 'iv', 'pp': 'ma'},
	{'stem': 'raqq', 'type': 'doubled', 'gloss': 'become·thin', 'root': 'r-q-q', 'vowel_perf': 'a-a', 'vowel_impf': 'i-e', 'trans': 'iv', 'pp': 'ma'},
	{'stem': 'saħħ', 'type': 'doubled', 'gloss': 'materialise', 'root': 's-ħ-ħ', 'vowel_perf': 'a-a', 'vowel_impf': 'i-e', 'trans': 'iv', 'pp': 'ma'},
	{'stem': 'xaħħ', 'type': 'doubled', 'gloss': 'be·stingy', 'root': 'x-ħ-ħ', 'vowel_perf': 'a-a', 'vowel_impf': 'i-e', 'trans': 'iv', 'pp': 'ma'},
	{'stem': 'damm', 'type': 'doubled', 'gloss': 'string·together', 'root': 'd-m-m', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'daqq', 'type': 'doubled', 'gloss': 'play', 'root': 'd-q-q', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'iv', 'pp': 'mi'},
	{'stem': 'ġarr', 'type': 'doubled', 'gloss': 'carry', 'root': 'ġ-r-r', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'ħakk', 'type': 'doubled', 'gloss': 'scratch', 'root': 'ħ-k-k', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'ħall', 'type': 'doubled', 'gloss': 'loosen', 'root': 'ħ-l-l', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'ħass', 'type': 'doubled', 'gloss': 'feel', 'root': 'ħ-s-s', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'ħatt', 'type': 'doubled', 'gloss': 'unload', 'root': 'ħ-t-t', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'għażż', 'type': 'doubled', 'gloss': 'cherish', 'root': 'għ-ż-ż', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'rass', 'type': 'doubled', 'gloss': 'press', 'root': 'r-s-s', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'ma'},
	{'stem': 'sadd', 'type': 'doubled', 'gloss': 'plug', 'root': 's-d-d', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'xaqq', 'type': 'doubled', 'gloss': 'crack', 'root': 'x-q-q', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'żamm', 'type': 'doubled', 'gloss': 'hold', 'root': 'ż-m-m', 'vowel_perf': 'a-a', 'vowel_impf': 'i-o', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'leqq', 'type': 'doubled', 'gloss': 'glitter', 'root': 'l-q-q', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'iv'},
	{'stem': 'temm', 'type': 'doubled', 'gloss': 'finish', 'root': 't-m-m', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'bell', 'type': 'doubled', 'gloss': 'wet', 'root': 'b-l-l', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'bexx', 'type': 'doubled', 'gloss': 'sprinkle', 'root': 'b-x-x', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'ġeżż', 'type': 'doubled', 'gloss': 'shear', 'root': 'ġ-ż-ż', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'mi'},
	{'stem': 'kedd', 'type': 'doubled', 'gloss': 'vex', 'root': 'k-d-d', 'vowel_perf': 'e-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'mi'},
	
	{'stem': 'qaħqaħ', 'type': 'quad', 'gloss': 'hack', 'root': 'q-ħ-q-ħ', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'dardar', 'type': 'quad', 'gloss': 'make·turbid', 'root': 'd-r-d-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'farfar', 'type': 'quad', 'gloss': 'shake·off·dust', 'root': 'f-r-f-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ħarbat', 'type': 'quad', 'gloss': 'rout', 'root': 'ħ-r-b-t', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'każbar', 'type': 'quad', 'gloss': 'revile', 'root': 'k-ż-b-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'bandal', 'type': 'quad', 'gloss': 'swing', 'root': 'b-n-d-l', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċaflas', 'type': 'quad', 'gloss': 'splash', 'root': 'ċ-f-l-s', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċaħħad', 'type': 'quad', 'gloss': 'deprive', 'root': 'ċ-ħ-ħ-d', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċanfar', 'type': 'quad', 'gloss': 'reproach', 'root': 'ċ-n-f-r', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċapċap', 'type': 'quad', 'gloss': 'clap', 'root': 'ċ-p-ċ-p', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċappas', 'type': 'quad', 'gloss': 'smear', 'root': 'ċ-p-p-s', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċaqlaq', 'type': 'quad', 'gloss': 'shake', 'root': 'ċ-q-l-q', 'vowel_perf': 'a-a', 'vowel_impf': 'a-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'qarmeċ', 'type': 'quad', 'gloss': 'crunch', 'root': 'q-r-m-ċ', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ħawtel', 'type': 'quad', 'gloss': 'be·diligent', 'root': 'ħ-w-t-l', 'vowel_perf': 'a-e', 'vowel_impf': 'a-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'kexkex', 'type': 'quad', 'gloss': 'shock', 'root': 'k-x-k-x', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'petpet', 'type': 'quad', 'gloss': 'blink', 'root': 'p-t-p-t', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'temtem', 'type': 'quad', 'gloss': 'stutter', 'root': 't-m-t-m', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'xengel', 'type': 'quad', 'gloss': 'swing', 'root': 'x-n-g-l', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'ċempel', 'type': 'quad', 'gloss': 'ring', 'root': 'ċ-m-p-l', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'dendel', 'type': 'quad', 'gloss': 'hang', 'root': 'd-n-d-l', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'gerbeb', 'type': 'quad', 'gloss': 'roll', 'root': 'g-r-b-b', 'vowel_perf': 'e-e', 'vowel_impf': 'e-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'fesdaq', 'type': 'quad', 'gloss': 'shell·peas', 'root': 'f-s-d-q', 'vowel_perf': 'e-a', 'vowel_impf': 'e-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'tertaq', 'type': 'quad', 'gloss': 'shatter', 'root': 't-r-t-q', 'vowel_perf': 'e-a', 'vowel_impf': 'e-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'werżaq', 'type': 'quad', 'gloss': 'scream', 'root': 'w-r-ż-q', 'vowel_perf': 'e-a', 'vowel_impf': 'e-a', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'fixkel', 'type': 'quad', 'gloss': 'obstruct', 'root': 'f-x-k-l', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'bixkel', 'type': 'quad', 'gloss': 'cheat', 'root': 'b-x-k-l', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'iv', 'pp': 'im'},
	{'stem': 'biddel', 'type': 'quad', 'gloss': 'alter', 'root': 'b-d-d-l', 'vowel_perf': 'i-e', 'vowel_impf': 'i-e', 'trans': 'tv', 'pp': 'im'},
	{'stem': 'berbaq', 'type': 'quad', 'gloss': 'squander', 'root': 'b-r-b-q', 'vowel_perf': 'e-a', 'vowel_impf': 'e-a', 'trans': 'tv', 'pp': 'im'},
];

##-----------------------------------------------------------------------------##

infl = {};

for stem in stems: #{

	if stem['type'] == 'strong': #{
		infl[stem['stem']] = strong_past(stem['root'], stem['vowel_perf']);

		if stem['trans'] == 'tv' or stem['stem'] in iv_with_pprs:
			infl[stem['stem']].update(strong_pprs(stem['root'], stem['vowel_perf']));

		if 'pp' in stem: 
			infl[stem['stem']].update(strong_pp(stem['root'], stem['vowel_perf'], stem['pp']));

		if 'vowel_impf' in stem: 
			infl[stem['stem']].update(strong_pres(stem['root'], stem['vowel_impf']));
			infl[stem['stem']].update(strong_imp(stem['root'], stem['vowel_impf']));
	elif stem['type'] == 'hollow': #{

		infl[stem['stem']] = hollow_past(stem['root'], stem['vowel_perf']);
		infl[stem['stem']].update(hollow_pres(stem['root'], stem['vowel_perf']));
		if 'pp' in stem: #{
			infl[stem['stem']].update(hollow_pp(stem['root'], stem['vowel_perf'], stem['pp']));
		infl[stem['stem']].update(hollow_imp(stem['root'], stem['vowel_perf']));

	elif stem['type'] == 'weak': #{

		infl[stem['stem']] = weak_past(stem['root'], stem['vowel_perf']);
		infl[stem['stem']].update(weak_pres(stem['root'], stem['vowel_impf']));
		infl[stem['stem']].update(weak_imp(stem['root'], stem['vowel_impf']));
		if 'pp' in stem: #{
			infl[stem['stem']].update(weak_pp(stem['root'], stem['vowel_perf'], stem['pp']));

	elif stem['type'] == 'doubled': #{

		infl[stem['stem']] = doubled_past(stem['root'], stem['vowel_perf']);
		if 'vowel_impf' in stem: 
			infl[stem['stem']].update(doubled_pres(stem['root'], stem['vowel_impf']));
			infl[stem['stem']].update(doubled_imp(stem['root'], stem['vowel_impf']));
		if 'pp' in stem: #{
			infl[stem['stem']].update(doubled_pp(stem['root'], stem['vowel_perf'], stem['pp']));

	elif stem['type'] == 'quad': #{

		infl[stem['stem']] = quad_past(stem['root'], stem['vowel_perf']);
		infl[stem['stem']].update(quad_pres(stem['root'], stem['vowel_perf']));
		infl[stem['stem']].update(quad_imp(stem['root'], stem['vowel_perf']));
		if 'pp' in stem: #{
			infl[stem['stem']].update(quad_pp(stem['root'], stem['vowel_perf'], stem['pp']));
	#}
#}

print header().decode('utf-8');

for stem in infl: #{

	for flex in infl[stem]: #{
		for subflex in infl[stem][flex]: #{
			# restriction attribute, lm attribute, postgenerator tag:
			r, lm, a = '', '', ''	 
			if flex == 'past.p3.m.sg':
				lm = ' lm="%s"' % (stem,)
			if subflex[1] == 'LR':
				r = ' r="%s"' % (subflex[1],)
				a = ''
			elif subflex[1] == 'RL':
				r = ' r="%s"' % (subflex[1],)
				a = '<a/>'

			left = subflex[0];
			right = stem + '<s n="vblex"/>' + sym(flex);

			entry  = '<e%s%s><p><l>%s%s</l><r>%s</r></p></e>\n' % (r, lm, a, left,right);
			entry += '<e%s><p><l>%s%sx</l><r>%s<j/>x<s n="neg"/></r></p></e>\n' % (r, a, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/ni"/></e>\n' % (r, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/nix"/></e>\n' % (r, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/lha"/></e>\n' % (r, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/lhiex"/></e>\n' % (r, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/hielha"/></e>\n' % (r, left, right);
			entry += '<e%s><p><l>%s</l><r>%s</r></p><par n="S__qatlu/hielhiex"/></e>\n' % (r, left, right);
			print entry.decode('utf-8')
			#}
		#}
	#}
#}

print footer();
