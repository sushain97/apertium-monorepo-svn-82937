#!/bin/bash

if test $# -lt 1 ; then
   echo "Usage: $0 INPUT"
   exit 1
fi
if test ! -r $1 ; then
    echo Cannot test -r $1
    exit 1
fi

# fin.lexc is already at languages/apertium-fin
#apertium -d . fin-isl-debug < $1 | egrep -o '\*[^ .:,]*' | sort | uniq | sed -e 's/^.*$/\0%<XXX%>:\0 # ;/' >> apertium-fin-isl.fin.lexc


echo '<!-- additions -->' >> apertium-fin-isl.fin-isl.dix
apertium -d . fin-isl-debug < $1 | egrep -o '@[^ .:,]*'  | sed -e 's/><.*/>/' -e 's/<\([^>]*\)>/<s n="\1"\/>/g' -e 's/@/    <e><p><l>/' -e 's:$:</l><r>XXX<s n="Y"/></r></p></e>:' | sort | uniq >> apertium-fin-isl.fin-isl.dix
echo '<!-- vim: set ft=xml: -->' >> apertium-fin-isl.fin-isl.dix

apertium -d . fin-isl-debug < $1 | egrep -o '#[^<]*<[^>]*>' > isl-misses.ape
echo '! Nouns' >> apertium-fin-isl.lexc
fgrep '<n>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<n%>:\0 N ;/' >> apertium-fin-isl.isl.lexc
echo '! Verbs' >> apertium-fin-isl.lexc
fgrep '<vblex>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<vblex%>:\0 V ;/' >> apertium-fin-isl.isl.lexc
echo '! Adjectives' >> apertium-fin-isl.lexc
fgrep '<adj>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<adj%>:\0 A ;/' >> apertium-fin-isl.isl.lexc
echo '! Adverbs' >> apertium-fin-isl.lexc
fgrep '<adv>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<adv%>:\0 # ;/' >> apertium-fin-isl.isl.lexc
echo '! Adps' >> apertium-fin-isl.lexc
egrep '<(pr|post)>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<pr%>:\0 # ;/' >> apertium-fin-isl.isl.lexc
echo '! Prons' >> apertium-fin-isl.lexc
fgrep '<prn>' < isl-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<prn%>:\0 PRON ;/' >> apertium-fin-isl.isl.lexc
echo -n '! vi' >> apertium-fin-isl.lexc
echo 'm: set ft=xfst-lexc:' >> apertium-fin-isl.lexc

