#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# qala'; qlajt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[1] + root[2] + 't'

def past_p2_sg(stem, root, vowels):
	# qala'; qlajt; past.p1.sg; vblex
	return root[0] + root[1] + vowels[1] + root[2] + 't'

def past_p3_m_sg(stem, root, vowels):
	# qala'; qala'; past.p3.m.sg; vblex
    res = [stem]
    if stem[-1] == "'":
        res.append((stem[:-1], 'LR'))
    return res
	
def past_p3_f_sg(stem, root, vowels):
	# qala'; qalgħet; past.p3.f.sg; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return root[0] + vowels[0] + root[1] + r2 + 'et'

def past_p1_pl(stem, root, vowels):
	# qala'; qlajna; past.p1.pl; vblex
	return root[0] + root[1] + 'a' + root[2] + 'na'

def past_p2_pl(stem, root, vowels):
	# qala'; qlajtu; past.p2.pl; vblex
	return root[0] + root[1] + 'a' + root[2] + 'tu'

def past_p3_pl(stem, root, vowels):
	# qala'; qalgħu; past.p3.pl; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return root[0] + vowels[0] + root[1] + r2 + 'u'

def pres_p1_sg(stem, root, vowels):
	# qala'; naqla'; pres.p1.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'na' + root[0] + root[1] + vowels[1] + r2

def pres_p2_sg(stem, root, vowels):
	# qala'; taqla'; pres.p2.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'ta' + root[0] + root[1] + vowels[1] + r2

def pres_p3_m_sg(stem, root, vowels):
	# qala'; jaqla'; pres.p3.m.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'ja' + root[0]  + root[1] + vowels[1] + r2

def pres_p3_f_sg(stem, root, vowels):
	# qala'; taqla'; pres.p3.f.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'ta' + root[0] + root[1] + vowels[1] + r2

def pres_p1_pl(stem, root, vowels):
	# qala'; naqilgħu; pres.p1.pl; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return 'na' + root[0] + 'i' + root[1] + r2 + 'u'

def pres_p2_pl(stem, root, vowels):
	# qala'; taqilgħu; pres.p2.pl; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return 'ta' + root[0] + root[1] + r2 + 'u'

def pres_p3_pl(stem, root, vowels):
	# qala'; jaqilgħu; pres.p3.pl; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return 'ja' + root[0] + 'i' + root[1] + r2 + 'u'

def imp_p2_sg(stem, root, vowels):
	# qala'; aqla'; imp.p2.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'a' + root[0] + root[1] + vowels[1] + r2

def imp_p2_pl(stem, root, vowels):
	# qala'; aqilgħu; imp.p2.pl; vblex
	r2 = "għ" if (root[2] == "j") else root[2]
	return 'a' + root[0] + 'i' + root[1] + r2 + 'u'

def pp_sg(stem, root, vowels):
	# qala'; miqlu'; pp.sg; vblex
	r2 = "'" if (root[2] == "j") else root[2]
	return 'mi' + root[0] + root[1] + 'u' + r2

def ger(stem, root, vowels):
	# qala'; qilja; ger; vblex
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
