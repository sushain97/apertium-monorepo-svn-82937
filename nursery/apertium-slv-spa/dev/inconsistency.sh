TMPDIR=/tmp

if [[ $1 = "es-sl" ]]; then

lt-expand ../apertium-sl-es.es.dix | grep -v '<prn><enc>' | grep -v 'REGEX' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-sl-es.es-sl.t1x  ../es-sl.t1x.bin  ../es-sl.autobil.bin |
        apertium-interchunk ../apertium-sl-es.es-sl.t2x  ../es-sl.t2x.bin |
        apertium-postchunk ../apertium-sl-es.es-sl.t3x  ../es-sl.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../es-sl.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "sl-es" ]]; then

lt-expand ../apertium-sl-es.sl.dix | grep -v '<prn><enc>' | grep -v 'REGEX' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-sl-es.sl-es.t1x  ../sl-es.t1x.bin  ../sl-es.autobil.bin |
        apertium-interchunk ../apertium-sl-es.sl-es.t2x  ../sl-es.t2x.bin |
        apertium-postchunk ../apertium-sl-es.sl-es.t3x  ../sl-es.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../sl-es.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "bash inconsistency.sh <direction>";
fi
