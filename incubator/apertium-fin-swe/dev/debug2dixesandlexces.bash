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
#apertium -d . fin-swe-debug < $1 | egrep -o '\*[^ .:,]*' | sort | uniq | sed -e 's/^.*$/\0%<XXX%>:\0 # ;/' >> apertium-fin-swe.fin.lexc


echo '<!-- additions -->' >> apertium-fin-swe.fin-swe.dix
apertium -d . fin-swe-debug < $1 | egrep -o '@[^ .:,]*'  | sed -e 's/><.*/>/' -e 's/<\([^>]*\)>/<s n="\1"\/>/g' -e 's/@/    <e><p><l>/' -e 's:$:</l><r>XXX<s n="Y"/></r></p></e>:' | sort | uniq >> apertium-fin-swe.fin-swe.dix
echo '<!-- vim: set ft=xml: -->' >> apertium-fin-swe.fin-swe.dix

apertium -d . fin-swe-debug < $1 | egrep -o '#[^<]*<[^>]*>' > swe-misses.ape
echo '! Nouns' >> apertium-fin-swe.lexc
fgrep '<n>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<n%>:\0 N ;/' >> apertium-fin-swe.swe.lexc
echo '! Verbs' >> apertium-fin-swe.lexc
fgrep '<vblex>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<vblex%>:\0 V ;/' >> apertium-fin-swe.swe.lexc
echo '! Adjectives' >> apertium-fin-swe.lexc
fgrep '<adj>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<adj%>:\0 A ;/' >> apertium-fin-swe.swe.lexc
echo '! Adverbs' >> apertium-fin-swe.lexc
fgrep '<adv>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<adv%>:\0 # ;/' >> apertium-fin-swe.swe.lexc
echo '! Adps' >> apertium-fin-swe.lexc
egrep '<(pr|post)>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<pr%>:\0 # ;/' >> apertium-fin-swe.swe.lexc
echo '! Prons' >> apertium-fin-swe.lexc
fgrep '<prn>' < swe-misses.ape | sed -e 's/#//' -e 's/<.*//' | sort | uniq | sed -e 's/^.*$/\0%<prn%>:\0 PRON ;/' >> apertium-fin-swe.swe.lexc
echo -n '! vi' >> apertium-fin-swe.lexc
echo 'm: set ft=xfst-lexc:' >> apertium-fin-swe.lexc

