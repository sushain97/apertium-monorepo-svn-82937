#!/bin/bash
for swe in $(fgrep -v ' ' < fin-swe.expand | fgrep -v REG | cut -f 2 -d :) ; do
    egrep -- ":$swe$" < fin-swe.expand | cut -f 1 -d : > fin.lines
    egrep -- ":$swe$" < isl-swe.expand | cut -f 1 -d : > isl.lines
    while read fin ; do 
        while read isl ; do
            echo -e "$fin\t$isl"
        done < isl.lines
    done < fin.lines
done | sed -e 's/</<s n="/g' -e 's/>/"\/>/g' | awk -F $'\t' '{printf("    <e><p><l>%s</l><r>%s</r></p></e>\n", $1, $2);}' 
