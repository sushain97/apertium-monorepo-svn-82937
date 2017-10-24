#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-
#
#Tafuhulu=tafuh+lilu=tafu+h+lilu (Literally: You (pl) know it(m) to him)
#
#Nafhulu=nafhu+lilu=naf+hu+lilu (Literally: I know it(m) to him)
#Tafhulu=tafhu+lilu=taf+hu+lilu (Literally: You (sing) know it(m) to him)
#Jafhulu=jafhu+lilu=jaf+hu+lilu (Literally: He knows it(m) to him)
#Tafhulu=tafhu+lilu=taf+hu+lilu (Literally: She know it(m) to him)
#Nafuhulu=nafuh+lilu=nafu+hu+lilu (Literally: We know it(m) to him)
#Tafuhulu=tafuh+lilu=tafu+h+lilu (Literally: You (pl) know it(m) to him)
#Jafuhulu=Jafuh+lilu=jafu+h+lilu (Literally: They know it(m) to him)
#
#Nafhielu=nafha+lilu=naf+ha+lilu (Literally: I know it(f) to him)
#Tafhielu=tafha+lilu=taf+ha+lilu (Literally: You (sing) know it(f) to him)
#Jafhielu=jafha+lilu=jaf+ha+lilu (Literally: He knows it(f) to him)
#Tafhielu=tafha+lilu=taf+ha+lilu (Literally: She know it(f) to him)
#Nafuhielu=nafuha+lilu=nafu+ha+lilu (Literally: We know it(f) to him)
#Tafuhielu=tafuha+lilu=tafu+ha+lilu (Literally: You (pl) know it(f) to him)
#Jafuhielu=Jafuha+lilu=jafu+ha+lilu (Literally: They know it(f) to him)
#

#"Only in a very few instances is the Perfect/Imperfect opposition
# lacking, e.g.: jaf 'he knows' lacks a Perfect form.
# 'Maltese' p.220


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


def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem
	sp['pres.p1.sg'] = 'naf'
	sp['pres.p2.sg'] = 'taf'
	sp['pres.p3.m.sg'] = 'jaf'
	sp['pres.p3.f.sg'] = 'taf'
	sp['pres.p1.pl'] = 'nafu'
	sp['pres.p2.pl'] = 'tafu'
	sp['pres.p3.pl'] = 'jafu'

	return sp

