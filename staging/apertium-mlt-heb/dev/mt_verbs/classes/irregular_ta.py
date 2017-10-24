#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# ta; tajt; past.p1.sg; vblex
	return stem + 'jt'
def past_p2_sg(stem, root, vowels):
	# ta; tajt; past.p2.sg; vblex
	return stem + 'jt'
def past_p3_m_sg(stem, root, vowels):
	# ta; ta; past.p3.m.sg; vblex
	return stem
def past_p3_f_sg(stem, root, vowels):
	# ta; tat; past.p3.f.sg; vblex
	return stem + 't'
def past_p1_pl(stem, root, vowels):
	# ta; tajna; past.p1.pl; vblex
	return stem + 'jna'
def past_p2_pl(stem, root, vowels):
	# ta; tatu; past.p2.pl; vblex
	return stem + 'jtu'
def past_p3_pl(stem, root, vowels):
	# ta; taw; past.p3.pl; vblex
	return stem + 'w'
def pres_p1_sg(stem, root, vowels):
	# ta; nagħti; pres.p1.sg; vblex
	return 'nagħ' + root[0] + 'i'
def pres_p2_sg(stem, root, vowels):
	# ta; tagħti; pres.p2.sg; vblex
	return 'tagħ' + root[0] + 'i'
def pres_p3_m_sg(stem, root, vowels):
	# ta; jagħti; pres.p3.m.sg; vblex
	return 'jagħ' + root[0] + 'i'
def pres_p3_f_sg(stem, root, vowels):
	# ta; tagħti; pres.p3.f.sg; vblex
	return 'tagħ' + root[0] + 'i'
def pres_p1_pl(stem, root, vowels):
	# ta; nagħtu; pres.p1.pl; vblex
	return 'nagħ' + root[0] + 'u'
def pres_p2_pl(stem, root, vowels):
	# ta; tagħtu; pres.p2.pl; vblex
	return 'tagħ' + root[0] + 'u'
def pres_p3_pl(stem, root, vowels):
	# ta; jagħtu; pres.p3.pl; vblex
	return 'jagħ' + root[0] + 'u'
def imp_p2_sg(stem, root, vowels):
	# ta; agħti; imp.p2.sg; vblex
	return 'agħti'
def imp_p2_pl(stem, root, vowels):
	# ta; agħtu; imp.p3.sg; vblex
	return 'agħtu'

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
	sp['pp.m.sg'] = 'mogħti';
	sp['pp.f.sg'] = 'mogħtija';
	sp['pp.mf.pl'] = 'mogħtijin'; # or mogħtija (TYM:p.195)
	
	return sp
