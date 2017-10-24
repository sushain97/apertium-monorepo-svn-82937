#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# fetaħ; ftaħt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[1] + root[2] + 't'

def past_p2_sg(stem, root, vowels):
	# fetaħ; ftaħt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[1] + root[2] + 't'

def past_p3_m_sg(stem, root, vowels):
	# fetaħ; fetaħ; past.p3.m.sg; vblex
    res = [stem]
    if stem[-1] == "'":
        res.append((stem[:-1], 'LR'))
    return res
	
def past_p3_f_sg(stem, root, vowels):
	# fetaħ; fetħet; past.p3.f.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'et'

def past_p1_pl(stem, root, vowels):
	# fetaħ; ftaħna; past.p1.pl; vblex
	return root[0] + root[1] + 'a' + root[2] + 'na'

def past_p2_pl(stem, root, vowels):
	# fetaħ; ftaħtu; past.p2.pl; vblex
	return root[0] + root[1] + 'a' + root[2] + 'tu'

def past_p3_pl(stem, root, vowels):
	# fetaħ; fetħu; past.p3.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'u'

def pres_p1_sg(stem, root, vowels):
	# fetaħ; niftaħ; pres.p1.sg; vblex
	return 'ni' + root[0] + root[1] + vowels[1] + root[2]

def pres_p2_sg(stem, root, vowels):
	# fetaħ; tiftaħ; pres.p2.sg; vblex
	return 'ti' + root[0] + root[1] + vowels[1] + root[2]

def pres_p3_m_sg(stem, root, vowels):
	# fetaħ; jiftaħ; pres.p3.m.sg; vblex
	return 'ji' + root[0]  + root[1] + vowels[1] + root[2]

def pres_p3_f_sg(stem, root, vowels):
	# fetaħ; tiftaħ; pres.p3.f.sg; vblex
	return 'ti' + root[0] + root[1] + vowels[1] + root[2]

def pres_p1_pl(stem, root, vowels):
	# fetaħ; niftħu; pres.p1.pl; vblex
	return 'ni' + root[0] + root[1] + root[2] + 'u'

def pres_p2_pl(stem, root, vowels):
	# fetaħ; tiftħu; pres.p2.pl; vblex
	return 'ti' + root[0] + root[1] + root[2] + 'u'

def pres_p3_pl(stem, root, vowels):
	# fetaħ; jiftħu; pres.p3.pl; vblex
	return 'ji' + root[0] + root[1] + root[2] + 'u'

def imp_p2_sg(stem, root, vowels):
	# fetaħ; iftaħ; imp.p2.sg; vblex
	return 'i' + root[0] + root[1] + vowels[1] + root[2]

def imp_p2_pl(stem, root, vowels):
	# fetaħ; iftħu; imp.p2.pl; vblex
	return 'i' + root[0] + root[1] + root[2] + 'u'

def pp_sg(stem, root, vowels):
	# fetaħ; miftuħ; pp.sg; vblex
	return 'mi' + root[0] + root[1] + 'u' + root[2]

def ger(stem, root, vowels):
	# fetaħ; fitħa; ger; vblex
	return root[0] + 'i' + root[1] + root[2] + 'a'

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
	sp['pp.sg'] = pp_sg(stem, root, vowels)
	sp['ger'] = ger(stem, root, vowels)
	
	return sp
