DIX=apertium-guj.guj.dix
BIN=guj.automorf.bin

cat data/wiki.txt | apertium-destxt | nice -n 19 lt-proc -w $BIN | apertium-retxt | sed 's/\$\W*\^/$\n^/g' > /tmp/guj.coverage.txt

EDICT=`cat $DIX | grep '<e lm' | wc -l`;
EPARA=`cat $DIX | grep '<pardef n' | wc -l`;
TOTAL=`cat /tmp/guj.coverage.txt | wc -l`;
KNOWN=`cat /tmp/guj.coverage.txt | grep -v '\*' | wc -l`;
COVER=`calc $KNOWN / $TOTAL`;
DATE=`date`;

echo -e $DATE"\t"$EPARA":"$EDICT"\t"$KNOWN"/"$TOTAL"\t"$COVER >> history.log
tail -1 history.log
