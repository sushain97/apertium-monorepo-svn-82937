#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def past_p1_sg(stem, root, vowels):
	# kisser; kissirt; past.p1.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 't'
	
def past_p2_sg(stem, root, vowels):
	# kisser; kissirt; past.p2.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 't'
	
def past_p3_f_sg(stem, root, vowels):
	# kisser; kissret; past.p3.f.sg; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'et'
	
def past_p1_pl(stem, root, vowels):
	# kisser; kissirna; past.p1.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'i' + root[3] + 'na'
	
def past_p2_pl(stem, root, vowels):
	# kisser; kissurtu; past.p2.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'u' + root[3] + 'tu'
	
def past_p3_pl(stem, root, vowels):
	# kisser; kissru; past.p3.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'
	
def pres_p1_sg(stem, root, vowels):
	# kisser; nkisser; pres.p1.sg; vblex
	return 'n' + root[0] + vowels[0] + root[1] + root[2] + vowels[1] + root[3]
	
def pres_p2_sg(stem, root, vowels):
	# kisser; tkisser; pres.p2.sg; vblex
	return 't' + root[0] + vowels[0] + root[1] + root[2] + vowels[1] + root[3]
	
def pres_p3_m_sg(stem, root, vowels):
	# kisser; jkisser; pres.p3.m.sg; vblex
	return 'j' + root[0] + vowels[0] + root[1] + root[2] + vowels[1] + root[3]
	
def pres_p3_f_sg(stem, root, vowels):
	# kisser; tkisser; pres.p3.f.sg; vblex
	return 't' + root[0] + vowels[0] + root[1] + root[2] + vowels[1] + root[3]
	
def pres_p1_pl(stem, root, vowels):
	# kisser; nkissru; pres.p1.pl; vblex
	return 'n' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'
	
def pres_p2_pl(stem, root, vowels):
	# kisser; tkissru; pres.p2.pl; vblex
	return 't' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'
	
def pres_p3_pl(stem, root, vowels):
	# kisser; jkissru; pres.p3.pl; vblex
	return 'j' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'
	
def imp_p2_pl(stem, root, vowels):
	# kisser; kissru; imp.p2.pl; vblex
	return root[0] + vowels[0] + root[1] + root[2] + root[3] + 'u'
	
def pp_m_sg(stem, root, vowels):
	# kisser; imkisser; pp.m.sg; vblex
	return 'im' + root[0] + vowels[0] + root[1] + root[2] + vowels[1] + root[3]
	
def pp_f_sg(stem, root, vowels):
	# kisser; imkissra; pp.f.sg; vblex
	return 'im' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'a'
	
def pp_pl(stem, root, vowels):
	# kisser; imkissrin; pp.pl; vblex
	return 'im' + root[0] + vowels[0] + root[1] + root[2] + root[3] + 'in'

def main(stem, root, vowels):
	sp = {};
	
	# sp['inf'] = stem;
	sp['past.p1.sg'] = past_p1_sg(stem, root, vowels);
	sp['past.p2.sg'] = past_p2_sg(stem, root, vowels);
	sp['past.p3.m.sg'] = stem;
	sp['past.p3.f.sg'] = past_p3_f_sg(stem, root, vowels);
	sp['past.p1.pl'] = past_p1_pl(stem, root, vowels);
	sp['past.p2.pl'] = past_p2_pl(stem, root, vowels);
	sp['past.p3.pl'] = past_p3_pl(stem, root, vowels);
	sp['pres.p1.sg'] = pres_p1_sg(stem, root, vowels);
	sp['pres.p2.sg'] = pres_p2_sg(stem, root, vowels);
	sp['pres.p3.m.sg'] = pres_p3_m_sg(stem, root, vowels);
	sp['pres.p3.f.sg'] = pres_p3_f_sg(stem, root, vowels);
	sp['pres.p1.pl'] = pres_p1_pl(stem, root, vowels);
	sp['pres.p2.pl'] = pres_p2_pl(stem, root, vowels);
	sp['pres.p3.pl'] = pres_p3_pl(stem, root, vowels);
	sp['imp.p2.sg'] = stem;
	sp['imp.p2.pl'] = imp_p2_pl(stem, root, vowels);
	sp['pp.m.sg'] = pp_m_sg(stem, root, vowels);
	sp['pp.f.sg'] = pp_f_sg(stem, root, vowels);
	sp['pp.pl'] = pp_pl(stem, root, vowels);

	return sp
