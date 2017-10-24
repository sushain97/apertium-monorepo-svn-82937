#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

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
		
def past_p1_sg(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2] + 't'
	sp = add_probjs('past.p1.sg', form)
	# xtaq; xtaqt; past.p1.sg; vblex
	sp['past.p1.sg'] = form
	return sp

def past_p2_sg(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2] + 't'
	sp = add_probjs('past.p2.sg', form)
	# xtaq; xtaqt; past.p2.sg; vblex
	sp['past.p2.sg'] = form
	return sp

def past_p3_m_sg(stem, root, vowels):
	sp = add_probjs('past.p3.m.sg', stem)
	# kiteb; kiteb; past.p3.m.sg; vblex
	sp['past.p3.m.sg'] = stem
	return sp
	
def past_p3_f_sg(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2]
	sp = add_probjs('past.p3.f.sg', form + 'et')
	# xtaq; xtaqet; past.p3.f.sg; vblex
	sp['past.p3.f.sg'] = form + 'et' # not vowels[1]+'t' ?
	return sp

def past_p1_pl(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2] + 'n'
	sp = add_probjs('past.p1.pl', form)
	# kiteb; ktibna; past.p1.pl; vblex
	sp['past.p1.pl'] = form + 'a'
	return sp

def past_p2_pl(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2] + 'tu'
	sp = add_probjs('past.p2.pl', form)
	# kiteb; ktibtu; past.p2.pl; vblex
	sp['past.p2.pl'] = form
	return sp

def past_p3_pl(stem, root, vowels):
	form = root[0] + root[1] + vowels[0] + root[2] + 'u'
	sp = add_probjs('past.p3.pl', form)
	# xtaq; xtaqu; past.p3.pl; vblex
	sp['past.p3.pl'] = form
	return sp


def pres_p1_sg(stem, root, vowels):
	form = 'ni' + root[0] + root[1] + 'ie' + root[2]
	sp = add_probjs('pres.p2.sg', form)
	# xtaq; nixtieq; pres.p1.sg; vblex
	sp['pres.p1.sg'] = form
	return sp

def pres_p2_sg(stem, root, vowels):
	form = 'ti' + root[0] + root[1] + 'ie' + root[2]
	sp = add_probjs('pres.p2.sg', form)
	# kiteb; tikteb; pres.p2.sg; vblex
	sp['pres.p2.sg'] = form
	return sp

def pres_p3_m_sg(stem, root, vowels):
	form = 'ji' + root[0] + root[1] + 'ie' + root[2]
	sp = add_probjs('pres.p3.m.sg', form)
	# kiteb; jikteb; pres.p3.m.sg; vblex
	sp['pres.p3.m.sg'] = form
	return sp

def pres_p3_f_sg(stem, root, vowels):
	form = 'ti' + root[0] + root[1] + 'ie' + root[2]
	sp = add_probjs('pres.p3.f.sg', form)
	# kiteb; tikteb; pres.p3.f.sg; vblex
	sp['pres.p3.f.sg'] = form
	return sp

def pres_p1_pl(stem, root, vowels):
	form = 'ni' + root[0] + root[1] + 'ie' + root[2] + 'u'
	sp = add_probjs('pres.p1.pl', form)
	# kiteb; niktbu; pres.p1.pl; vblex
	sp['pres.p1.pl'] = form
	return sp

def pres_p2_pl(stem, root, vowels):
	form = 'ti' + root[0] + root[1] + 'ie' + root[2] + 'u'
	sp = add_probjs('pres.p2.pl', form)
	# kiteb; tiktbu; pres.p2.pl; vblex
	sp['pres.p2.pl'] = form
	return sp

def pres_p3_pl(stem, root, vowels):
	form = 'ji' + root[0] + root[1] + 'ie' + root[2] + 'u'
	sp = add_probjs('pres.p3.pl', form)
	# kiteb; jiktbu; pres.p3.pl; vblex
	sp['pres.p3.pl'] = form
	return sp

def imp_p2_sg(stem, root, vowels):
	# xtaq; xtieq; imp.p2.sg; vblex
	return root[0] + root[1] + 'ie' + root[2]

def imp_p2_pl(stem, root, vowels):
	# xtaq; xtiequ; imp.p2.pl; vblex
	return root[0] + root[1] + 'ie' + root[2] + 'u'

def pp_sg(stem, root, vowels):
	# xtaq; mixtieq; pp.sg; vblex
	return 'mi' + root[0] + root[1] + 'ie' + root[2]

def ger(stem, root, vowels):
	# kiteb; kitba; ger; vblex
	return root[0] + vowels[0] + root[1] + root[2] + 'a'

def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem
	sp.update( past_p1_sg(stem, root, vowels) )
	sp.update( past_p2_sg(stem, root, vowels) )
	sp.update( past_p3_m_sg(stem, root, vowels) )
	sp.update( past_p3_f_sg(stem, root, vowels) )
	sp.update( past_p1_pl(stem, root, vowels) )
	sp.update( past_p2_pl(stem, root, vowels) )
	sp.update( past_p3_pl(stem, root, vowels) )
	sp.update( pres_p1_sg(stem, root, vowels) )
	sp.update( pres_p2_sg(stem, root, vowels) )
	sp.update( pres_p3_m_sg(stem, root, vowels) )
	sp.update( pres_p3_f_sg(stem, root, vowels) )
	sp.update( pres_p1_pl(stem, root, vowels) )
	sp.update( pres_p2_pl(stem, root, vowels) )
	sp.update( pres_p3_pl(stem, root, vowels) )
	sp['imp.p2.sg'] = imp_p2_sg(stem, root, vowels)
	sp['imp.p2.pl'] = imp_p2_pl(stem, root, vowels)
	sp['pp.sg'] = pp_sg(stem, root, vowels)
	sp['ger'] = ger(stem, root, vowels)
	
	return sp

