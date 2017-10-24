#!/bin/bash

# Usage:  LANGPATH=/path/to/apertium-wal ./coverage.sh corpus
# Example: APERTIUMPATH=~/Desktop/apertium-wal ./coverage.sh ../texts/wol-new.txt

#LNG=`echo $1 | sed -r 's/^[\.\/]*([a-z][a-z][a-z])\.([^\.]*?)\..*/\1/'`
#CORP=`echo $1 | sed -r 's/^[\.\/]*([a-z][a-z][a-z])\.([^\.]*?)\..*/\2/'`
CORP=`echo $1 | sed -r 's/.*\/(.*)\..*/\1/'`

#APERTIUMPATH=~/src/apertium
if [[ $LANGPATH && ${LANGPATH-x} ]]; then blah=0; else
	echo "LANGPATH not set; please export LANGPATH"; exit;
fi;
LNG=`echo $LANGPATH | sed -r 's/.*apertium-([a-z][a-z][a-z]).*/\1/'`
#echo $LNG

#LANGPATH=$APERTIUMPATH/languages/apertium-$LNG

DIX=$LANGPATH/apertium-$LNG.$LNG.lexc
BIN=$LANGPATH/$LNG.automorf.bin

if [[ $1 =~ .*bz2 ]]; then
	CAT="bzcat"
else
	CAT="cat"
fi;


$CAT "$1" | apertium-destxt | lt-proc -w $BIN | apertium-retxt | sed 's/\$\W*\^/$\n^/g' > /tmp/$CORP.coverage.txt

EDICT=`cat $DIX | grep ' ; ' | grep -v '<' | grep '[A-Za-z]' | wc -l`;
EPAR=`cat $DIX | grep 'LEXICON ' | wc -l`;
TOTAL=`cat /tmp/$CORP.coverage.txt | wc -l`
KNOWN=`cat /tmp/$CORP.coverage.txt | grep -v '*' | wc -l`
COV=`calc $KNOWN/$TOTAL`;
#COV=`echo $KNOWN / $TOTAL | bc -l`
DATE=`date`;

echo -e $CORP $DATE"\t"$EPAR":"$EDICT"\t"$KNOWN"/"$TOTAL"\t"$COV >> history.log
tail -1 history.log
