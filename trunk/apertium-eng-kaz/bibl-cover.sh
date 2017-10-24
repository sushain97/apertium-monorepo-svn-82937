DIX=/home/apertium/apertium-testing/apertium-eng-kaz/apertium-eng-kaz.eng.dix
BIN=/home/apertium/apertium-testing/apertium-eng-kaz/eng-kaz.automorf.bin
cat /home/apertium/apertium-testing/apertium-eng-kaz/texts/New\ World\ Bible\ \(32358\).eng | cut -f2 | grep -v '>(' | sed 's/&lt;/</g' | sed 's/&gt;/>/g' | apertium-destxt | lt-proc -w $BIN | apertium-retxt | sed 's/\$\W*\^/$\n^/g' > /tmp/eng.coverage.txt

EDICT=`cat $DIX | grep '<e lm' | wc -l`;
EPAR=`cat $DIX | grep '<pardef n' | wc -l`;
TOTAL=`cat /tmp/eng.coverage.txt | wc -l`
KNOWN=`cat /tmp/eng.coverage.txt | grep -v '*' | wc -l`
COV=`calc $KNOWN / $TOTAL`;
DATE=`date`;

echo -e $DATE"\t"$EPAR":"$EDICT"\t"$KNOWN"/"$TOTAL"\t"$COV >> history.log
tail -1 history.log
