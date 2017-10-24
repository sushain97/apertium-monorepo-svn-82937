#!/bin/bash
# git clone https://github.com/n0nick/hspell here, then run this script
cd hspell

./woo | uconv -f hebrew -t utf-8 | grep -v '(skipme)' |\
awk -F'; *' '/^$/ { print; } # keep whitespace
/./ {
    # simple conversion from speling to dix:
    tags = "<s n=\"" $4 "\"/>";
    n=split($3,t,".");
    for(i=1;i<=n;i++) { tags = tags "<s n=\""t[i]"\"/>"; }
    print "<e lm=\"" $1 "\"><p><l>" $2 "</l><r>" $1 tags "</r></p></e>";
}'


# Does not bunch into paradigms, see
# trunk/apertium-tools/speling/speling-paradigms.py for that
# (but seems impossible for hebrew verbs anyway)
