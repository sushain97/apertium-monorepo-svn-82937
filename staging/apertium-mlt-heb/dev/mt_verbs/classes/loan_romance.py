#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

# Based on:
# http://en.wiktionary.org/wiki/Special:WhatLinksHere/Template:mt-conj/ita/a-a
# http://en.wiktionary.org/wiki/Special:WhatLinksHere/Template:mt-conj/ita/a-i

def past_p1_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantajt; past.p1.sg; vblex
		res = stem + 'jt'
	elif vowels == ['a','i']:
		# falla; fallejt; past.p1.sg; vblex
		res = stem[:-1] + 'ejt'
	elif vowels == ['e','e']:
		# espressa; espressa; past.p1.sg; vblex
		res = stem
	return res

def past_p2_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantajt; past.p2.sg; vblex
		res = stem + 'jt'
	elif vowels == ['a','i']:
		# falla; fallejt; past.p2.sg; vblex
		res = stem[:-1] + 'ejt'
	elif vowels == ['e','e']:
		# espressa; espressi; past.p2.sg; vblex
		res = stem[:-1] + 'i'
	return res
	
def past_p3_m_sg(stem, root, vowels):
	res = ''
	if vowels == ['e','e']:
		# espressa; esprima; past.p3.m.sg; vblex
		res = 'e' + root[1] + root[2] + root[3] + 'ima'
	else:
		# kanta; kanta; past.p3.m.sg; vblex
		res = stem
	return res
	
def past_p3_f_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantat; past.p3.f.sg; vblex
		res = stem + 't'
	elif vowels == ['a','i']:
		# falla; falliet; past.p3.f.sg; vblex
		res = stem[:-1] + 'iet'
	elif vowels == ['e','e']:
		# espressa; espressa; past.p3.f.sg; vblex
		res = stem
	return res
	
def past_p1_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantajna; past.p1.pl; vblex
		res = stem + 'jna'
	elif vowels == ['a','i']:
		# falla; fallejna; past.p1.pl; vblex
		res = stem[:-1] + 'ejna'
	elif vowels == ['e','e']:
		# espressa; espressi; past.p1.pl; vblex
		res = stem[-1] + 'i'
	return res
	
def past_p2_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantajtu; past.p2.pl; vblex
		res = stem + 'jtu'
	elif vowels == ['a','i']:
		# falla; fallejtu; past.p2.pl; vblex
		res = stem[:-1] + 'ejtu'
	elif vowels == ['e','e']:
		# espressa; espressi; past.p2.pl; vblex
		res = stem[:-1] + 'i'
	return res
		
def past_p3_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantaw; past.p3.pl; vblex
		res = stem + 'w'
	elif vowels == ['a','i']:
		# falla; fallew; past.p3.pl; vblex
		res = stem[:-1] + 'ew'
	elif vowels == ['e','e']:
		# espressa; espressi; past.p3.pl; vblex
		res = stem[:-1] + 'i'
	return res
	
def pres_p1_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; nkanta; pres.p1.sg; vblex
		res = 'n' + stem
	elif vowels == ['a','i']:
		# falla; nfalli; pres.p1.sg; vblex
		res = 'n' + stem[:-1] + 'i'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p1.sg; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p2_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; tkanta; pres.p2.sg; vblex
		res = 't' + stem
	elif vowels == ['a','i']:
		# falla; tfalli; pres.p2.sg; vblex
		res = 't' + stem[:-1] + 'i'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p2.sg; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p3_m_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; jkanta; pres.p3.m.sg; vblex
		res = 'j' + stem
	elif vowels == ['a','i']:
		# falla; jfalli; pres.p3.m.sg; vblex
		res = 'j' + stem[:-1] + 'i'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p3.m.sg; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p3_f_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; tkanta; pres.p3.f.sg; vblex
		res = 't' + stem
	elif vowels == ['a','i']:
		# falla; tfalli; pres.p3.f.sg; vblex
		res = 't' + stem[:-1] + 'i'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p3.f.sg; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p1_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; nkantaw; pres.p1.pl; vblex
		res = 'n' + stem + 'w'
	elif vowels == ['a','i']:
		# falla; nfallu; pres.p1.pl; vblex
		res = 'n' + stem[:-1] + 'u'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p1.pl; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p2_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; tkantaw; pres.p2.pl; vblex
		res = 't' + stem + 'w'
	elif vowels == ['a','i']:
		# falla; tfallu; pres.p2.pl; vblex
		res = 't' + stem[:-1] + 'u'
	elif vowels == ['e','e']:
		# espressa; jesprimu; pres.p2.pl; vblex
		res = 'j' + vowels[0] + root[1] + root[2] + root[3] + 'imu'
	return res
	
def pres_p3_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; jkantaw; pres.p3.pl; vblex
		res = 'j' + stem + 'w'
	elif vowels == ['a','i']:
		# falla; jfallu; pres.p3.pl; vblex
		res = 'j' + stem[:-1] + 'u'
	elif vowels == ['e','e']:
		# espressa; esprimew; pres.p3.pl; vblex
		res = vowels[0] + root[1] + root[2] + root[3] + 'imew'
	return res
	
def imp_p2_sg(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kanta; imp.p2.sg; vblex
		res = stem
	elif vowels == ['a','i']:
		# falla; falli; imp.p2.sg; vblex
		res = stem[:-1] + 'i'
	elif vowels == ['e','e']:
		# espressa; espressa; imp.p2.sg; vblex
		res = stem
	return res
	
def imp_p2_pl(stem, root, vowels):
	res = ''
	if vowels == ['a','a']:
		# kanta; kantaw; imp.p2.pl; vblex
		res = stem + 'w'
	elif vowels == ['a','i']:
		# falla; fallu; imp.p2.pl; vblex
		res = stem[:-1] + 'u'
	elif vowels == ['e','e']:
		# espressa; espressa; imp.p2.pl; vblex
		res = stem
	return res

def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem;
	sp['past.p1.sg'] = past_p1_sg(stem, root, vowels)
	sp['past.p2.sg'] = past_p2_sg(stem, root, vowels)
	sp['past.p3.m.sg'] = past_p3_m_sg(stem, root, vowels)
	sp['past.p3.f.sg'] = past_p3_f_sg(stem, root, vowels)
	sp['past.p1.pl'] = past_p1_pl(stem, root, vowels)
	sp['past.p2.pl'] = past_p2_pl(stem, root, vowels)
	sp['past.p3.pl'] = past_p3_pl(stem, root, vowels)
	sp['pres.p1.sg'] = pres_p1_sg(stem, root, vowels)
	sp['pres.p2.sg'] = pres_p2_sg(stem, root, vowels)
	sp['pres.p3.m.sg'] = pres_p3_m_sg(stem, root, vowels)
	sp['pres.p3.f.sg'] = pres_p3_f_sg(stem, root, vowels)
	sp['pres.p1.pl'] = pres_p1_pl(stem, root, vowels)
	sp['pres.p2.pl'] = pres_p2_pl(stem, root, vowels)
	sp['pres.p3.pl'] = pres_p3_pl(stem, root, vowels)
	sp['imp.p2.sg'] = imp_p2_sg(stem, root, vowels)
	sp['imp.p2.pl'] = imp_p2_pl(stem, root, vowels)
	
	return sp
