#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, re;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

if len(sys.argv)<3:
    print "Usage: attach_gloss.py <glossfile> <freqlist>"
    sys.exit(1)

try:
    glines = file(sys.argv[1])
    flines = file(sys.argv[2])
except IOError as e:
    sys.stderr.write("Error reading file\n")
    sys.exit(1)

# prepare glosses dictionary
glosses = {}
p = re.compile('^([A-Z ]*)([^\[]*)')
g = re.compile('^([^\(]*)(\([^\)]\))?')
for line in glines:
    match = p.match(line)
    if match:
        english = match.group(1).strip().upper()
        maltese = match.group(2).strip().split(';')
        for x in maltese:
            mal = g.match(x)
            glosses[mal.group(1).strip().lower()] = "{0} {1}".format(english, mal.group(2) if mal.group(2) else '')

# go over freqlist and attach gloss
p = re.compile('\^.*\/\*(.*)\$$')
for line in flines:
    match = p.match(line.strip())
    key = match.group(1).lower().replace('ħ','h').replace('ġ','g').replace('ż','z') if match else None

    if key and key in glosses:
        print "    {0}\t;\t{1}".format(line.strip(), glosses[key])
    else:
        sys.stdout.write(line)
