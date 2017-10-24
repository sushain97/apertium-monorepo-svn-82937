#!/bin/sh

SUSPECTED="./adj_suspected.txt"
CORPORA="../../maltese/combined/mt.crp.txt"

for i in `cat $SUSPECTED | tr \\\t ';'`; do
	msg=`echo $i | cut -f1 -d';'`;
	echo 'm.sg: '$msg;
  cat $CORPORA | grep $msg | python concordancer.py " $msg " | head -10;

	fsg=`echo $i | cut -f2 -d';'`;
	echo 'f.sg: '$fsg;
  cat $CORPORA | grep $fsg | python concordancer.py " $fsg " | head -10;

	mfpl=`echo $i | cut -f3 -d';'`;
	echo 'mf.pl: '$mfpl;
  cat $CORPORA | grep $mfpl | python concordancer.py " $mfpl " | head -10;

	read response;
	echo $response" "$i >> /tmp/verified;
	clear;
done

cat /tmp/verified
