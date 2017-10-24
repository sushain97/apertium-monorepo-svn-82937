#! /bin/bash

SL=$1
TL=$2
MODES_DIR=$3
MULTILEVELTRANSFER=$4

APERTIUMPATH=`cat $MODES_DIR/${SL}-${TL}.mode | perl -ne 'print  if s/.*[| ](\/[^ ]+\/)apertium-tagger.*/\1/' | tr -d '\n'`

DEBUGPARAMS=`cat $MODES_DIR/${SL}-${TL}.mode | sed -r 's/(apertium-transfer)/\1 -d/' | sed -r 's/(apertium-pretransfer)/\1 -d/' | sed -r 's/(apertium-interchunk)/\1 -d/' | sed -r 's/(apertium-postchunk)/\1 -d/' `

PART1=`echo "$DEBUGPARAMS" | awk -F"${APERTIUMPATH}lt-proc -p" '{ print $1 }' | sed -r 's/\|[^|]*$//' | tr -d '\n'`
PART2=`echo "$DEBUGPARAMS" | awk -F"${APERTIUMPATH}lt-proc -p" '{ print $2 }' | tr -d '\n'`

if [ -n "$MULTILEVELTRANSFER" ] ; then
echo "$PART1 | "'sed  -r "s:(^\]?|pretransfer\\\\\\]\\])(([^[]|\\[[^\\\\])+)(\\[\\\\\\[debug-postchunk):\1\2 [ \\\\[debug-postgen \2 debug-postgen\\]] \4:g" | '"${APERTIUMPATH}lt-proc -p$PART2" > $MODES_DIR/${SL}-${TL}_debug.mode
else
echo "$PART1 | "'sed  -r "s:(^\]?|pretransfer\\\\\\]\\])(([^[]|\\[[^\\\\])+)(\\[\\\\\\[debug-transfer):\1\2 [ \\\\[debug-postgen \2 debug-postgen\\]] \4:g" | '"${APERTIUMPATH}lt-proc -p$PART2" > $MODES_DIR/${SL}-${TL}_debug.mode
fi
