#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, re

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

if len(sys.argv)<3:
    print "Usage: gen_stems.py <verb.py> <stems.csv>"
    sys.exit(1)

verbsf = sys.argv[1]
stemsf = sys.argv[2]

# stems to look for
try:
    code = file(verbsf)
    lines = file(stemsf)
except IOError as e:
    sys.stderr.write("Error reading file\n")
    sys.exit(1)

rex = re.compile("^\s*{'stem': '([^']*)'")
stems = []
for line in code:
    stem = rex.findall(line)
    if stem:
        stems.append(stem[0])

print stems

rex = re.compile("^[^,]*")
for line in lines:
    if line[0] == '#':
        continue

    stem = rex.findall(line)[0]
    if stem and stem in stems:
        sys.stdout.write('#' + line)
    else:
        sys.stdout.write(line)
