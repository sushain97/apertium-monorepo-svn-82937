#!/bin/bash

LIST=cs.hitparade.txt
ANALYSER=../cs-sl.automorf.bin
HEAD=1000

if [ $# -eq 1 ]; then
	HEAD=$1;
fi

cat $LIST | head -n $HEAD | apertium-destxt | lt-proc $ANALYSER | apertium-retxt | grep '*'
