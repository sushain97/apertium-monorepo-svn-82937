TMPDIR=/tmp

if [[ $1 = "gd-ga" ]]; then

lt-expand ../apertium-ga-gd.gd.dix | grep -v '<prn><enc>' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-ga-gd.gd-ga.t1x  ../gd-ga.t1x.bin  ../gd-ga.autobil.bin |
        apertium-interchunk ../apertium-ga-gd.gd-ga.t2x  ../gd-ga.t2x.bin |
        apertium-postchunk ../apertium-ga-gd.gd-ga.t3x  ../gd-ga.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../gd-ga.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "ga-gd" ]]; then

lt-expand ../apertium-ga-gd.ga.dix | grep -v '<prn><enc>' | grep -e ':>:' -e '\w:\w' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-ga-gd.ga-gd.t1x  ../ga-gd.t1x.bin  ../ga-gd.autobil.bin |
        apertium-interchunk ../apertium-ga-gd.ga-gd.t2x  ../ga-gd.t2x.bin |
        apertium-postchunk ../apertium-ga-gd.ga-gd.t3x  ../ga-gd.t3x.bin  | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../ga-gd.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "sh inconsistency.sh <direction>";
fi
