#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# gie; gejt; past.p1.sg; vblex
	return root[0] + root[2] + 'jt'
def past_p2_sg(stem, root, vowels):
	# gie; gejt; past.p2.sg; vblex
	return root[0] + root[2] + 'jt'
def past_p3_m_sg(stem, root, vowels):
	# gie; gie; past.p3.m.sg; vblex
	return stem
def past_p3_f_sg(stem, root, vowels):
	# gie; giet; past.p3.f.sg; vblex
	return stem + 't'
def past_p1_pl(stem, root, vowels):
	# gie; gejna; past.p1.pl; vblex
	return root[0] + root[2] + 'jna'
def past_p2_pl(stem, root, vowels):
	# gie; gejtu; past.p2.pl; vblex
	return root[0] + root[2] + 'jtu'
def past_p3_pl(stem, root, vowels):
	# gie; gew; past.p3.pl; vblex
	return root[0] + root[2] + 'w'
def pres_p1_sg(stem, root, vowels):
	# gie; nigi; pres.p1.sg; vblex
	return 'ni' + root[0] + root[1]
def pres_p2_sg(stem, root, vowels):
	# gie; tigi; pres.p2.sg; vblex
	return 'ti' + root[0] + root[1]
def pres_p3_m_sg(stem, root, vowels):
	# gie; jigi; pres.p3.m.sg; vblex
	return 'ji' + root[0] + root[1]
def pres_p3_f_sg(stem, root, vowels):
	# gie; tigi; pres.p3.f.sg; vblex
	return 'ti' + root[0] + root[1]
def pres_p1_pl(stem, root, vowels):
	# gie; nigu; pres.p1.pl; vblex
	return 'ni' + root[0] + 'u'
def pres_p2_pl(stem, root, vowels):
	# gie; tigu; pres.p2.pl; vblex
	return 'ti' + root[0] + 'u'
def pres_p3_pl(stem, root, vowels):
	# gie; jigu; pres.p3.pl; vblex
	return 'ji' + root[0] + 'u'
def imp_p2_sg(stem, root, vowels):
	# gie; ejja; imp.p2.sg; vblex
	return 'ejja'
def imp_p2_pl(stem, root, vowels):
	# gie; ejjew; imp.p3.sg; vblex
	return 'ejjew'

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
	sp['pprs.m.sg'] = 'ġej';
	sp['pprs.f.sg'] = 'ġejja';
	sp['pprs.mf.pl'] = 'ġejjin';
	
	return sp
