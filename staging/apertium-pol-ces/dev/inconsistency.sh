TMPDIR=/tmp

if [[ $1 = "cs-pl" ]]; then

lt-expand ../apertium-pl-cs.cs.dix | grep -v '<prn><enc>' | sed 's/:>:/%/g' | sed 's/:<:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-pl-cs.cs-pl.t1x  ../cs-pl.t1x.bin  ../cs-pl.autobil.bin |
        apertium-interchunk ../apertium-pl-cs.cs-pl.t2x  ../cs-pl.t2x.bin |
        apertium-postchunk ../apertium-pl-cs.cs-pl.t3x  ../cs-pl.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../cs-pl.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "pl-cs" ]]; then

lt-expand ../apertium-pl-cs.pl.dix | grep -v '<prn><enc>' | sed 's/:>:/%/g' | sed 's/:<:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-pl-cs.pl-cs.t1x  ../pl-cs.t1x.bin  ../pl-cs.autobil.bin |
        apertium-interchunk ../apertium-pl-cs.pl-cs.t2x  ../pl-cs.t2x.bin |
        apertium-postchunk ../apertium-pl-cs.pl-cs.t3x  ../pl-cs.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../pl-cs.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "sh inconsistency.sh <direction>";
fi
