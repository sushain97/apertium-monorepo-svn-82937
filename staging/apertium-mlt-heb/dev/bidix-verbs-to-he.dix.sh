#!/bin/bash
echo "    <!-- SECTION: Verbs, converted from n0nick's modified hspell, see dev/hspell-to-dix.sh -->"
GREPS=`mktemp -t greps.XXXXXXXX`;

awk -F'<r>|<s n="vblex"/></r>' '/<r>.*<s n="vblex"\/>/ {print "<e lm=\""$2"\">"}' apertium-mt-he.mt-he.dix > "$GREPS"
grep -f "$GREPS" -F dev/he.verbs.dix |\
# add line-break on new lemma:
awk -F'"' '//{if($2 != lm) {lm=$2;print "";} print}'

echo '    <!-- /verbs -->'

rm -f "$GREPS"
