#!/bin/bash

cat /tmp/$1.coverage.txt | cut -f2 -d'^' | cut -f2 -d'/' | sed 's/\$$//' | grep -E '<(?v|vaux)>' | sed -r 's/<(vaux|iv|tv)>.*/<\1>/' | sort -f | uniq -c | sort -gr > parade/$1.verbs.txt
