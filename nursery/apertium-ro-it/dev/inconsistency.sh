TMPDIR=/tmp

if [[ $1 = "it-ro" ]]; then

lt-expand ../apertium-ro-it.it.dix | grep -v '<prn><enc>' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-ro-it.it-ro.t1x  ../it-ro.t1x.bin  ../it-ro.autobil.bin |
        apertium-interchunk ../apertium-ro-it.it-ro.t2x  ../it-ro.t2x.bin |
        apertium-postchunk ../apertium-ro-it.it-ro.t3x  ../it-ro.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../it-ro.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "ro-it" ]]; then

lt-expand ../apertium-ro-it.ro.dix | grep -v '<prn><enc>' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-ro-it.ro-it.t1x  ../ro-it.t1x.bin  ../ro-it.autobil.bin |
        apertium-interchunk ../apertium-ro-it.ro-it.t2x  ../ro-it.t2x.bin |
        apertium-postchunk ../apertium-ro-it.ro-it.t3x  ../ro-it.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../ro-it.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "sh inconsistency.sh <direction>";
fi
