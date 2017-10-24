#!/bin/bash

C=2
GREP='.'
if [ $# -eq 1 ]
then
    C=$1
    GREP='WORKS'
fi

sh wiki-tests.sh Pending tr cv update | grep -C $C "$GREP"

sh wiki-tests.sh Pending cv tr update | grep -C $C "$GREP"

