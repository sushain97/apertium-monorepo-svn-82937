#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-


#My guess is that the forms in -u are plural; as for the difference between
#j-initial and i-initial, this has to do, I believe, with whether the
#preceding word ends in a consonant or vowel: if it ends in a vowel, then
#the j-initial form is used; if it ends in a consonant, then the i-initial
#form is used. 


def main(stem, root, vowels):
    sp = {}

    # sp['inf'] = stem
    sp['past.p1.sg'] = 'inkun'
    sp['past.p1.sg'] = 'jnkun'
    sp['past.p2.sg'] = 'tkun' # thun
    sp['past.p3.m.sg'] = 'ikun'
    sp['past.p3.m.sg'] = 'jkun'
    sp['past.p3.f.sg'] = 'tkun' #thun
    sp['past.p1.pl'] = 'nkunu'
    sp['past.p2.pl'] = 'tkunu' # tirunu
    sp['past.p3.pl'] = [
        'ikunu',
        ('jkunu', 'LR'),
        ('ikunu', 'LR'),
        ('ikunu', 'RL')
    ]
    sp['pres.p1.sg'] = 'kont'
    sp['pres.p2.sg'] = 'kont'
    sp['pres.p3.m.sg'] = [
        'kien',
        ('jkun', 'LR'),
        ('ikun', 'LR'),
        ('ikun', 'RL')
    ]
    sp['pres.p3.f.sg'] = 'kienet'
    sp['pres.p1.pl'] = 'konna'
    sp['pres.p2.pl'] = 'kontu'
    sp['pres.p3.pl'] = 'kienu'

    return sp

