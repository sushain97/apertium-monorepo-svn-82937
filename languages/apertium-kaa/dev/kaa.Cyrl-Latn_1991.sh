#!/bin/bash

sed 's/:/\\:/g' | hfst-strings2fst  | hfst-compose-intersect -2 kaa.Cyrl-Latn_1991.hfst  | hfst-fst2strings

#cat ../../../../turkiccorpora/kaa.nt.gospelgo.txt | sed 's/$/¶/'  | ./kaa.Cyrl-Latn_1991.sh  | sed 's/.*¶://g' | sed 's/¶//g' | sed 's/Kuday/Quday/g' > ../../../../turkiccorpora/kaa.ntlatn.gospelgo.txt
