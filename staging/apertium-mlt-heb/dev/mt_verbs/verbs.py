#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy, time;
import classes;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

STEMSFILE=sys.path[0] + '/stems.csv';
FORMAT="speling"

if len(sys.argv)>0:
    if '--help' in sys.argv:
        print "Usage: verbs.py [-F file] [-s \"stem line\"] [--dix]"
        sys.exit(1)

    if '--dix' in sys.argv:
        FORMAT="dix"
    
    if '-F' in sys.argv:
        fi = sys.argv.index('-F')
        if len(sys.argv)>fi+1:
            STEMSFILE=sys.argv[fi+1]
        else:
            sys.stderr.write("Error: no file specified\n")
            sys.exit(1)

    if '-s' in sys.argv:
        si = sys.argv.index('-s')
        if len(sys.argv)>si+1:
            STEMSFILE = False
            lines = [sys.argv[si+1]]
        else:
            sys.stderr.write("Error: no stem line specified\n")
            sys.exit(1)

if STEMSFILE:
    try:
        lines = file(STEMSFILE)
    except IOError as e:
        sys.stderr.write("Error reading file: {0}\n".format(STEMSFILE))
        sys.exit(1)

def format_entry(FORMAT, stem, form, pos, feat, restriction = None):
    if FORMAT=="speling":
        res = stem + '; ' + form + '; ' + feat + '; ' + pos
        if restriction:
            res+= '; ' + restriction

    elif FORMAT=="dix":
        tags = ''.join(['<s n="%s"/>' % tag
                for tag in [pos] + feat.split('.')])
        tags = tags.replace('<s n="+neg"/>', '<j/>x<s n="neg"/>'); # TODO: what should the negative lemma be?
        tags = tags.replace('<s n="+probj"/>', '<j/>u<s n="prn"/>')

        res = "    <e" + (' r="%s"' % restriction if restriction else '') + ">"
        res+= "<p><l>" + ("<a/>" if restriction == 'RL' else '')
        res+= "%s</l>\t<r>%s%s</r></p></e>" % (form, stem, tags)
    else:
        raise(Exception)

    return res

def negative_form(feat, form):
    "Returns negative form for a given one"
    return (feat + '.+neg', form + 'x')

def print_entry(stem, form, pos, feat, restriction = None):
    neg = negative_form(feat, form)

    print format_entry(FORMAT, stem, form, pos, feat, restriction)
    print format_entry(FORMAT, stem, neg[1], pos, neg[0], restriction)

if FORMAT=="dix": 
    print '  <section id="verbs" type="standard">'
    print '    <!-- Generated on: ' + time.strftime('%Y-%m-%d %H:%M %Z') + ' -->'


for line in lines:
    if len(line) < 2 or line[0] == '#':
        continue
    
    row = line.split(',')
    
    #stem, category, gloss, root, vowels, subclass, checked
    stem = row[0].strip()
    category = row[1].strip()
    root = row[3].strip().split('-')
    vowels = row[4].strip().split('-')
    subclass = row[5].strip() if (len(row) >= 5) else None
    pos = 'vaux' if category == 'vaux' else 'vblex'
    
    # build class name
    classname = category
    if subclass:
        classname = classname + '_' + subclass

    try:
        klass = getattr(classes, classname)
    except AttributeError:
        sys.stderr.write("Error: Missing class '{0}'\n".format(classname))
        sys.exit(1)

    speling = klass.main(stem, root, vowels)
    feats = [f for f in speling.keys() if speling[f]]

    feats.sort()    # pretty
    for feat in feats:
        if isinstance(speling[feat], list):
            for ff in speling[feat]:
                restriction = None
                if isinstance(ff, tuple):
                    restriction = ff[1]
                    ff = ff[0]
                print_entry(stem, ff, pos, feat, restriction)
        else:
            print_entry(stem, speling[feat], pos, feat)

    print '' # newline between words


if FORMAT=="dix": print '  </section>';
