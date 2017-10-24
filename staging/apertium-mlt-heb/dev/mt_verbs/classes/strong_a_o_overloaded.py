#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# ħanaq; ħnaqt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 't'

def past_p2_sg(stem, root, vowels):
	# ħanaq; ħnaqt; past.p2.sg; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 't'

def past_p3_m_sg(stem, root, vowels):
	# ħanaq; ħanaq; past.p3.m.sg; vblex
	return stem
	
def past_p3_f_sg(stem, root, vowels):
	# ħanaq; ħanqet; past.p3.f.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'et'

def past_p1_pl(stem, root, vowels):
	# ħanaq; ħnaqna; past.p1.pl; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 'na'

def past_p2_pl(stem, root, vowels):
	# ħanaq; ħnaqtu; past.p2.pl; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 'tu'

def past_p3_pl(stem, root, vowels):
	# ħanaq; ħanqu; past.p3.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'u'

def pres_p1_sg(stem, root, vowels):
	# ħanaq; noħnoq; pres.p1.sg; vblex
	return 'no' + root[0] + root[1] + 'o' + root[2]

def pres_p2_sg(stem, root, vowels):
	# ħanaq; toħnoq; pres.p2.sg; vblex
	return 'to' + root[0] + root[1] + 'o' + root[2]

def pres_p3_m_sg(stem, root, vowels):
	# ħanaq; joħnoq; pres.p3.m.sg; vblex
	return 'jo' + root[0]  + root[1] + 'o' + root[2]

def pres_p3_f_sg(stem, root, vowels):
	# ħanaq; toħnoq; pres.p3.f.sg; vblex
	return 'to' + root[0] + root[1] + 'o' + root[2]

def pres_p1_pl(stem, root, vowels):
	# ħanaq; noħonqu; pres.p1.pl; vblex
	return 'no' + root[0] + 'o' + root[1] + root[2] + 'u'

def pres_p2_pl(stem, root, vowels):
	# ħanaq; toħonqu; pres.p2.pl; vblex
	return 'to' + root[0] + 'o' + root[1] + root[2] + 'u'

def pres_p3_pl(stem, root, vowels):
	# ħanaq; joħonqu; pres.p3.pl; vblex
	return 'jo' + root[0] + 'o' + root[1] + root[2] + 'u'

def imp_p2_sg(stem, root, vowels):
	# ħanaq; oħnoq; imp.p2.sg; vblex
	return 'o' + root[0] + root[1] + 'o' + root[2]

def imp_p2_pl(stem, root, vowels):
	# ħanaq; oħonqu; imp.p2.pl; vblex
	return 'o' + root[0] + 'o' + root[1] + root[2] + 'u'

def pp_sg(stem, root, vowels):
	# ħanaq; miħnuq; pp.sg; vblex
	return 'm' + vowels[0] + root[0] + root[1] + 'u' + root[2]

def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem
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
	sp['pp.sg'] = pp_sg(stem, root, vowels)
	
	return sp
