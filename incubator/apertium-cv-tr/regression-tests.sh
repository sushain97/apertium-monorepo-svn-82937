#!/bin/bash

C=2
GREP='.'
if [ $# -eq 1 ]
then
    C=$1
    GREP='WORKS'
fi

sh wiki-tests.sh Regression tr cv update | grep -C $C "$GREP"

sh wiki-tests.sh Regression cv tr update | grep -C $C "$GREP"

