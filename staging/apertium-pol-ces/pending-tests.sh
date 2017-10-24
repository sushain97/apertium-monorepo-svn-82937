#!/bin/bash

C=2
GREP='.'
if [ $# -eq 1 ]
then
C=$1
GREP='WORKS'
fi

./wiki-tests.sh Pending pl cs  | grep -C $C "$GREP"

echo ""

./wiki-tests.sh Pending cs pl  | grep -C $C "$GREP"


