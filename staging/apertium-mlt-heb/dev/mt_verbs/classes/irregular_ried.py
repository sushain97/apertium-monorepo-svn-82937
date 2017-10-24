#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-
#



# Functions for adding pronoun objects to forms:
def probj_p1_pl(form): return form + 'na'
def probj_p1_sg(form): return form + 'ni'
def probj_p2_pl(form): return form + 'kom'
def probj_p2_sg(form): return form + ('k'
				      if (form.endswith('ie') or form.endswith('u'))
				      else 'ek')
def probj_p3_f_sg(form): return form + 'ha'
def probj_p3_m_sg(form): return form + ('h'
					if (form.endswith('ie') or form.endswith('u'))
					else 'u')
def probj_p3_pl(form): return form + 'hom'

def add_probjs(feats, form, short_form=None):
	"""The p2.sg and p3.m.sg forms are some times shorter, use three arguments in that case."""
	if not short_form:
		short_form = form
	return {
		feats + '.+probj.p1.mf.pl' : None if '.p1.' in feats else probj_p1_pl(form),
		feats + '.+probj.p1.mf.sg' : None if '.p1.' in feats else probj_p1_sg(form),
		feats + '.+probj.p2.mf.pl' : None if '.p2.' in feats else probj_p2_pl(form),
		feats + '.+probj.p2.mf.sg' : None if '.p2.' in feats else probj_p2_sg(short_form),
		feats + '.+probj.p3.f.sg' : probj_p3_f_sg(form),
		feats + '.+probj.p3.m.sg' : probj_p3_m_sg(short_form),
		feats + '.+probj.p3.mf.pl' : probj_p3_pl(form),
		}

# R-J-D,ried,,,,,,,,,,ntried

# p1.sg:    irrid, ridt, rrid, irid
# p2.sg:    trid, tridna, ridt, irid, tridha, riedu, ridt, 
# p3.f.sg:  trid, riedet, tridna
# p3.m.sg:  ried, jrid, riedna, jridna,
# p1.pl:    rridu, ridna, irridu
# p2.pl:    tridu, ridtu
# p3.pl:    riedu, jridu, iridu, trid, jrid

def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem
	sp['pres.p1.sg'] = ['irrid', ('irrid', 'LR'), ('rrid', 'LR'), ('irrid', 'RL')]
	sp['pres.p2.sg'] = 'trid'
	sp['pres.p3.m.sg'] = ['irid', ('irid', 'LR'), ('jrid', 'LR'), ('irid', 'RL')]
	sp['pres.p3.f.sg'] = 'trid'
	sp['pres.p1.pl'] = ['irridu', ('irridu', 'LR'), ('rridu', 'LR'), ('irridu', 'RL')]
	sp['pres.p2.pl'] = 'tridu'
	sp['pres.p3.pl'] =  ['iridu', ('iridu', 'LR'), ('jridu', 'LR'), ('iridu', 'RL')]

	sp['past.p1.sg'] = 'ridt'
	sp['past.p2.sg'] = 'ridt'
	sp['past.p3.m.sg'] = 'ried'
	sp['past.p3.f.sg'] = 'riedet'
	sp['past.p1.pl'] = 'riedna'
	sp['past.p2.pl'] = 'ridtu'
	sp['past.p3.pl'] = 'riedu'

	return sp
