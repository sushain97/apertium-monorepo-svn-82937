#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs
from subprocess import Popen, PIPE

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

if len(sys.argv)<3:
    print "Usage: mark_analysed.py <freqlist> <automorf>"
    sys.exit(1)

freqlist = sys.argv[1]
automorf = sys.argv[2]

try:
    lines = file(freqlist)
except IOError as e:
    sys.stderr.write("Error reading file {0}\n".format(freqlist))
    sys.exit(1)

# go over freqlist and check analyse
for line in lines:
    try:
        word = line.split('^')[2].split('/')[0]
    except IndexError:
        sys.stdout.write(line)
        continue

    p1 = Popen(["echo", word], stdout=PIPE)
    p2 = Popen(["lt-proc", automorf], stdin=p1.stdout, stdout=PIPE)
    p1.stdout.close()
    out = p2.communicate()[0]

    if out.find('*') == -1 and line[0] != ';':
        line = ";{0}\t; {1}".format(line.strip(), out)

    sys.stdout.write(line)
