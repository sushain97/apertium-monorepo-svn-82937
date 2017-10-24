#!/bin/bash

SL=$1
TL=$2
APERTIUMPAIR=$3
APERTIUMPREFIX=$4
LANGUAGEPAIRDIR=$5
INSTALLATIONDIR=$6

#Generate Apertium debug mode
echo "Generating new mode file ..."
NUMLINES=`cat $APERTIUMPREFIX/share/apertium/modes/${SL}-${TL}.mode | grep "interchunk" | wc -l`
IS3LEVEL=`expr "$NUMLINES" ">" "0"`

mkdir -p $INSTALLATIONDIR

if [ "$IS3LEVEL" == "1" ]; then
	echo "multilevel" > $INSTALLATIONDIR/transfer
	bash `dirname $0`/generateApertiumDebugMode.sh $SL $TL $APERTIUMPREFIX/share/apertium/modes "multilevel"
else
	echo "onelevel" > $INSTALLATIONDIR/transfer
	bash `dirname $0`/generateApertiumDebugMode.sh $SL $TL $APERTIUMPREFIX/share/apertium/modes
fi


if [ -f $LANGUAGEPAIRDIR/apertium-$APERTIUMPAIR.$SL.dix ]
then
DICTSOURCE=$LANGUAGEPAIRDIR/apertium-$APERTIUMPAIR.$SL.dix
else
DICTSOURCE=$LANGUAGEPAIRDIR/.deps/$SL.dix
fi

#Generate source language lemmas
echo "Generating source language multiwords ..."
bash `dirname $0`/extractLemmasAndPOS.sh "$APERTIUMPREFIX/bin" $DICTSOURCE "$INSTALLATIONDIR/lemmas-src" "analysis"

if [ -f $LANGUAGEPAIRDIR/apertium-$APERTIUMPAIR.$TL.dix ]
then
DICTTARGET=$LANGUAGEPAIRDIR/apertium-$APERTIUMPAIR.$TL.dix
else
DICTTARGET=$LANGUAGEPAIRDIR/.deps/$TL.dix
fi

#Generate target language lemmas
echo "Generating target language multiwords ..."
bash `dirname $0`/extractLemmasAndPOS.sh "$APERTIUMPREFIX/bin" $DICTTARGET "$INSTALLATIONDIR/lemmas-target" "generation"

#Configure apertium.py
echo "Configuring apertium.py ..."
cat  `dirname $0`/apertium_base.py | sed -r "s:^PATH=.*:PATH=\"$APERTIUMPREFIX/bin/\":" >`dirname $0`/apertium.py
