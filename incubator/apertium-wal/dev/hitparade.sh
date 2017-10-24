#!/bin/bash

#DEFAULTS
#LNG=kaz

#if [[ $1 != "" ]]; then
	##HP=$1
	#LG1=`echo $1 | sed -r 's/^[\.\/]*([a-z][a-z][a-z])\.([^\.]*?)/\1/'`;
	#if [[ $LG1 =~ .*-.* ]]; then
		#LG1=`echo $1 | sed -r 's/([a-z]*)-([a-z]*)\.([^\.]*?)/\1/'`;
		#LG2=`echo $1 | sed -r 's/([a-z]*)-([a-z]*)\.([^\.]*?)/\2/'`;
		#PAIR=$LG1-$LG2 ;
		#PAIRDIR=$APERTIUMPATH/languages/apertium-$PAIR/;
		#if [[ ! -d $PAIRDIR ]]; then
			#DIRECT=$PAIR
			#PAIR=$LG2-$LG1;
			#PAIRDIR=$APERTIUMPATH/languages/apertium-$PAIR/;
		#else
			#DIRECT=$PAIR;
		#fi;
	#else
		#PAIR=$LG1 ;
		#PAIRDIR=$APERTIUMPATH/languages/apertium-$PAIR ;
		#DIRECT=$PAIR ;
	#fi;
	#CORP=`echo $1 | sed -r 's/^[\.\/]*('$DIRECT')\.([^\.]*?)/\2/'`;
#fi

CORP="$1";

if [[ $LANGPATH && ${LANGPATH-x} ]]; then blah=0; else
	echo "LANGPATH not set; please export LANGPATH"; exit;
fi;
PAIRDIR=$LANGPATH
LNG=`echo $LANGPATH | sed -r 's/.*apertium-([a-z][a-z][a-z]).*/\1/'`


#echo "$LNG BLAH $CORP";
HP=parade/$CORP.hitparade.txt

#DIX=$PAIRDIR/apertium-$PAIR.$PAIR.dix
BIN=$PAIRDIR/$LNG.automorf.bin
#echo $LG1 $LG2 $PAIR $DIRECT $PAIRDIR $CORP $DIX $BIN > /tmp/vars


#cat $HP | sed -r 's/\s*[0-9]*//' | apertium-destxt | hfst-proc -w ~/quick/apertium/svn/languages/apertium-tr-ky/ky-tr.automorf.hfst | apertium-retxt 
cat $HP | apertium-destxt | sed 's/[0-9]\+/[&]/1' | lt-proc -w $BIN | apertium-retxt
