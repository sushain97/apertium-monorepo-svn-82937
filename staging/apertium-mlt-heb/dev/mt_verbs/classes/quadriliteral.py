#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# qarmeċ; qarmiċt; past.p1.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 't'

def past_p2_sg(stem, root, vowels):
	# qarmeċ; qarmiċt; past.p2.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 't'

def past_p3_m_sg(stem, root, vowels):
	# qarmeċ; qarmeċ; past.p3.m.sg; vblex
	return stem
	
def past_p3_f_sg(stem, root, vowels):
	# qarmeċ; qarmċet; past.p3.f.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'et'

def past_p1_pl(stem, root, vowels):
	# qarmeċ; qarmiċna; past.p1.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 'na'

def past_p2_pl(stem, root, vowels):
	# qarmeċ; qarmiċtu; past.p2.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 'tu'

def past_p3_pl(stem, root, vowels):
	# qarmeċ; qarmċu; past.p3.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'

def pres_p1_sg(stem, root, vowels):
	# qarmeċ; inqarmeċ; pres.p1.sg; vblex
	return 'in' + stem

def pres_p2_sg(stem, root, vowels):
	# qarmeċ; tqarmeċ; pres.p2.sg; vblex
	return 't' + stem

def pres_p3_m_sg(stem, root, vowels):
	# qarmeċ; iqarmeċ; pres.p3.m.sg; vblex
	return 'i' + stem

def pres_p3_f_sg(stem, root, vowels):
	# qarmeċ; tqarmeċ; pres.p3.f.sg; vblex
	return 't' + stem

def pres_p1_pl(stem, root, vowels):
	# qarmeċ; inqarmċu; pres.p1.pl; vblex
	return 'in' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'

def pres_p2_pl(stem, root, vowels):
	# qarmeċ; tqarmċu; pres.p2.pl; vblex
	return 't' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'

def pres_p3_pl(stem, root, vowels):
	# qarmeċ; iqarmċu; pres.p3.pl; vblex
	return 'i' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'

def imp_p2_sg(stem, root, vowels):
	# qarmeċ; qarmeċ; imp.p2.sg; vblex
	return stem

def imp_p2_pl(stem, root, vowels):
	# qarmeċ; qarmċu; imp.p2.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'

def pp_sg(stem, root, vowels):
	# qarmeċ; miqrumċ; pp.sg; vblex
	#TODO unchecked!
	return 'm' + 'i' + root[0] + root[1] + 'u' + root[2] + root[3]

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
