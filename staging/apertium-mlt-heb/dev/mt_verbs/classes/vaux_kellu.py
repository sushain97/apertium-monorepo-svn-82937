#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

def main(stem, root, vowels):
	sp = {}

	# sp['inf'] = stem

        sp['past.p1.sg'] = [
            'ikolli',
            ('jkolli', 'LR'),
            ('ikolli', 'LR'),
            ('ikolli', 'RL')
        ]
        sp['past.p2.sg'] = [
            'ikollok',
            ('jkollok', 'LR'),
            ('ikollok', 'LR'),
            ('ikollok', 'RL')
        ]
        sp['past.p3.m.sg'] = [
            'ikollu',
            ('jkollu', 'LR'),
            ('ikollu', 'LR'),
            ('ikollu', 'RL')
        ]
        sp['past.p3.f.sg'] = [
            'ikollha',
            ('jkollha', 'LR'),
            ('ikollha', 'LR'),
            ('ikollha', 'RL')
        ]
        sp['past.p1.pl'] = [
            'ikollna',
            ('jkollna', 'LR'),
            ('ikollna', 'LR'),
            ('ikollna', 'RL')
        ]
        sp['past.p2.pl'] = [
            'ikollkom',
            ('jkollkom', 'LR'),
            ('ikollkom', 'LR'),
            ('ikollkom', 'RL')
        ]
        sp['past.p3.pl'] = [
            'ikollhom',
            ('jkollhom', 'LR'),
            ('ikollhom', 'LR'),
            ('ikollhom', 'RL')
        ]

	sp['pres.p1.sg'] = 'kelli'
	sp['pres.p2.sg'] = 'kellek'
	sp['pres.p3.m.sg'] = 'kellu'
	sp['pres.p3.f.sg'] = 'kellha'
	sp['pres.p1.pl'] = 'kellna'
	sp['pres.p2.pl'] = 'kellkom'
	sp['pres.p3.pl'] = 'kellhom'

	return sp

