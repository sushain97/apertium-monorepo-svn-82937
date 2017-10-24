#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	return stem + 'jt'
def past_p2_sg(stem, root, vowels):
	return stem + 'jt'
def past_p3_m_sg(stem, root, vowels):
	return stem
def past_p3_f_sg(stem, root, vowels):
	return stem + 't'
def past_p1_pl(stem, root, vowels):
	return stem + 'jna'
def past_p2_pl(stem, root, vowels):
	return stem + 'jtu'
def past_p3_pl(stem, root, vowels):
	return stem + 'w'
def pres_p1_sg(stem, root, vowels):
	return 'n' + stem
def pres_p2_sg(stem, root, vowels):
	return 't' + stem
def pres_p3_m_sg(stem, root, vowels):
	return 'j' + stem
def pres_p3_f_sg(stem, root, vowels):
	return 't' + stem
def pres_p1_pl(stem, root, vowels):
	return 'n' + stem + 'w'
def pres_p2_pl(stem, root, vowels):
	return 't' + stem + 'w'
def pres_p3_pl(stem, root, vowels):
	return 'j' + stem + 'w'
def imp_p2_sg(stem, root, vowels):
	return stem
def imp_p2_pl(stem, root, vowels):
	return stem + 'w'

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
