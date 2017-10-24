#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy, time;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

if len(sys.argv)<2:
    print "Usage: nouns.py <file>"
    sys.exit(1)

try:
    lines = file(sys.argv[1])
except IOError as e:
    sys.stderr.write("Error reading file: {0}\n".format(sys.argv[1]))
    sys.exit(1)

for line in lines:
    if len(line) < 2 or line[0] == '#':
        continue
    
    row = line.split(',')
    
    #singular, plural, gloss, part
    singular = row[0].strip()
    plural = row[1].strip()
    gloss = row[2].strip()
    part = row[3].strip()

    if not part:
        continue

    print '{0}; {0}; sg; {3}.GD\n{0}; {1}; pl; {3}.GD'.format(singular, plural, gloss, part)


