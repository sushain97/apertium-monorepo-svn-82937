#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# talab; tlabt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 't'

def past_p2_sg(stem, root, vowels):
	# talab; tlabt; past.p2.sg; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 't'

def past_p3_m_sg(stem, root, vowels):
	# talab; talab; past.p3.m.sg; vblex
	return stem
	
def past_p3_f_sg(stem, root, vowels):
	# talab; talbet; past.p3.f.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'et'

def past_p1_pl(stem, root, vowels):
	# talab; tlabna; past.p1.pl; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 'na'

def past_p2_pl(stem, root, vowels):
	# talab; tlabtu; past.p2.pl; vblex
	return root[0] + root[1] + vowels[0] + root[2] + 'tu'

def past_p3_pl(stem, root, vowels):
	# talab; talbu; past.p3.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'u'

def pres_p1_sg(stem, root, vowels):
	# talab; nitlob; pres.p1.sg; vblex
	return 'ni' + root[0] + root[1] + 'o' + root[2]

def pres_p2_sg(stem, root, vowels):
	# talab; titlob; pres.p2.sg; vblex
	return 'ti' + root[0] + root[1] + 'o' + root[2]

def pres_p3_m_sg(stem, root, vowels):
	# talab; jitlob; pres.p3.m.sg; vblex
	return 'ji' + root[0]  + root[1] + 'o' + root[2]

def pres_p3_f_sg(stem, root, vowels):
	# talab; titlob; pres.p3.f.sg; vblex
	return 'ti' + root[0] + root[1] + 'o' + root[2]

def pres_p1_pl(stem, root, vowels):
	# talab; nitolbu; pres.p1.pl; vblex
	return 'ni' + root[0] + 'o' + root[1] + root[2] + 'u'

def pres_p2_pl(stem, root, vowels):
	# talab; titolbu; pres.p2.pl; vblex
	return 'ti' + root[0] + 'o' + root[1] + root[2] + 'u'

def pres_p3_pl(stem, root, vowels):
	# talab; jitolbu; pres.p3.pl; vblex
	return 'ji' + root[0] + 'o' + root[1] + root[2] + 'u'

def imp_p2_sg(stem, root, vowels):
	# talab; itlob; imp.p2.sg; vblex
	return 'i' + root[0] + root[1] + 'o' + root[2]

def imp_p2_pl(stem, root, vowels):
	# talab; itolbu; imp.p2.pl; vblex
	return 'i' + root[0] + 'o' + root[1] + root[2] + 'u'

def pp_sg(stem, root, vowels):
	# talab; mitlub; pp.sg; vblex
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
