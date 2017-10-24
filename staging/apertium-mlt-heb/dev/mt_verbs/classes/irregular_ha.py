#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# ħa; ħadt; past.p1.sg; vblex
	return stem + 'dt'
def past_p2_sg(stem, root, vowels):
	# ħa; ħadt; past.p2.sg; vblex
	return stem + 'dt'
def past_p3_m_sg(stem, root, vowels):
	# ħa; ħa; past.p3.m.sg; vblex
	return stem
def past_p3_f_sg(stem, root, vowels):
	# ħa; ħadet; past.p3.f.sg; vblex
	return stem + 'det'
def past_p1_pl(stem, root, vowels):
	# ħa; ħadna; past.p1.pl; vblex
	return stem + 'dna'
def past_p2_pl(stem, root, vowels):
	# ħa; ħadtu; past.p2.pl; vblex
	return stem + 'dtu'
def past_p3_pl(stem, root, vowels):
	# ħa; ħadu; past.p3.pl; vblex
	return stem + 'du'
def pres_p1_sg(stem, root, vowels):
	# ħa; nieħu; pres.p1.sg; vblex
	return 'nie' + root[0] + 'u'
def pres_p2_sg(stem, root, vowels):
	# ħa; tieħu; pres.p2.sg; vblex
	return 'tie' + root[0] + 'u'
def pres_p3_m_sg(stem, root, vowels):
	# ħa; jieħu; pres.p3.m.sg; vblex
	return 'jie' + root[0] + 'u'
def pres_p3_f_sg(stem, root, vowels):
	# ħa; tieħu; pres.p3.f.sg; vblex
	return 'tie' + root[0] + 'u'
def pres_p1_pl(stem, root, vowels):
	# ħa; nieħdu; pres.p1.pl; vblex
	return 'nie' + root[0] + 'du'
def pres_p2_pl(stem, root, vowels):
	# ħa; tieħdu; pres.p2.pl; vblex
	return 'tie' + root[0] + 'du'
def pres_p3_pl(stem, root, vowels):
	# ħa; jieħdu; pres.p3.pl; vblex
	return 'jie' + root[0] + 'du'
def imp_p2_sg(stem, root, vowels):
	# ħa; ħu; imp.p2.sg; vblex
	return root[0] + 'u'
def imp_p2_pl(stem, root, vowels):
	# ħa; ħudu; imp.p3.sg; vblex
	return root[0] + 'udu'

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
	sp['pp.m.sg'] = 'meħud';
	sp['pp.f.sg'] = 'meħuda';
	sp['pp.mf.pl'] = 'meħudin';
	
	return sp
