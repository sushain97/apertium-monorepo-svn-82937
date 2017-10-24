#!/bin/bash

if [[ -z "$1" ]]; then
    echo "Usage: ./coverage.sh <path_to_corpora>"
else
    cat $1 | apertium -d ../.. bel-morph | sed 's/\$\W*\^/$\n^/g' > /tmp/bel.raw.coverage.txt
    calc `cat /tmp/bel.raw.coverage.txt | grep -v '\*' | wc -l `/`cat /tmp/bel.raw.coverage.txt | wc -l`
fi
