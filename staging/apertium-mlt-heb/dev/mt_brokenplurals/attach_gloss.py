#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, re;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

if len(sys.argv)<3:
    print "Usage: attach_gloss.py <csv> <dix>"
    sys.exit(1)

try:
    csvlines = file(sys.argv[1])
    dixlines = file(sys.argv[2])
except IOError as e:
    sys.stderr.write("Error reading file\n")
    sys.exit(1)

# prepare glosses dictionary
glosses = {}
for line in csvlines:
    row = line.split(',')
    lemma = row[0].strip()
    gloss = row[2].strip()
    glosses[lemma] = gloss

# go over dix file and attach gloss
p = re.compile('(\s*<e lm="([^"]*)")(.*)')
for line in dixlines:
    match = p.match(line)

    if match and glosses[match.group(2)]:
        print "{0} c=\"{1}\" {2}".format(match.group(1), glosses[match.group(2)], match.group(3))
    else:
        sys.stdout.write(line)
