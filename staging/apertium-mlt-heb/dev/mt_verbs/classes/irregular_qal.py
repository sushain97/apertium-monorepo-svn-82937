#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# qal; għidt; past.p1.sg; vblex
	return root[0] + root[1] + 'i' + root[2] + 't'
def past_p2_sg(stem, root, vowels):
	# qal; għidt; past.p2.sg; vblex
	return root[0] + root[1] + 'i' + root[2] + 't'
def past_p3_m_sg(stem, root, vowels):
	# qal; qal; past.p3.m.sg; vblex
	return stem
def past_p3_f_sg(stem, root, vowels):
	# qal; qalet; past.p3.f.sg; vblex
	return stem + 'et'
def past_p1_pl(stem, root, vowels):
	# qal; għidna; past.p1.pl; vblex
	return root[0] + root[1] + 'i' + root[2] + 'na'
def past_p2_pl(stem, root, vowels):
	# qal; għidtu; past.p2.pl; vblex
	return root[0] + root[1] + 'i' + root[2] + 'tu'
def past_p3_pl(stem, root, vowels):
	# qal; qalu; past.p3.pl; vblex
	return stem + 'u'
def pres_p1_sg(stem, root, vowels):
	# qal; ngħid; pres.p1.sg; vblex
	return 'n' + root[0] + root[1] + 'i' + root[2]
def pres_p2_sg(stem, root, vowels):
	# qal; tgħid; pres.p2.sg; vblex
	return 't' + root[0] + root[1] + 'i' + root[2]
def pres_p3_m_sg(stem, root, vowels):
	# qal; jgħid; pres.p3.m.sg; vblex
	return 'j' + root[0] + root[1] + 'i' + root[2]
def pres_p3_f_sg(stem, root, vowels):
	# qal; ngħid; pres.p3.f.sg; vblex
	return 'n' + root[0] + root[1] + 'i' + root[2]
def pres_p1_pl(stem, root, vowels):
	# qal; ngħidu; pres.p1.pl; vblex
	return 'n' + root[0] + root[1] + 'i' + root[2] + 'u'
def pres_p2_pl(stem, root, vowels):
	# qal; tgħidu; pres.p2.pl; vblex
	return 't' + root[0] + root[1] + 'i' + root[2] + 'u'
def pres_p3_pl(stem, root, vowels):
	# qal; jgħidu; pres.p3.pl; vblex
	return 'j' + root[0] + root[1] + 'i' + root[2] + 'u'
def imp_p2_sg(stem, root, vowels):
	# qal; għid; imp.p2.sg; vblex
	return root[0] + root[1] + 'i' + root[2]
def imp_p2_pl(stem, root, vowels):
	# qal; għidu; imp.p2.pl; vblex
	return root[0] + root[1] + 'i' + root[2] + 'u'

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
