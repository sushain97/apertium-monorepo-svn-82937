TMPDIR=/tmp

DIR=$1

if [[ $DIR = "rus-ces" ]]; then

lt-expand ../../apertium-ces-rus.rus.dix | grep -v '<prn><enc>' | grep -v 'REGEX' | grep -v ':<:' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/$DIR.tmp_testvoc1.txt |
        apertium-pretransfer|
	lt-proc -b ../../rus-ces.autobil.bin |  tee $TMPDIR/$DIR.tmp_testvoc2.txt |
        lrx-proc ../../rus-ces.autolex.bin |
        apertium-transfer -b ../../apertium-ces-rus.rus-ces.t1x  ../../rus-ces.t1x.bin |
        apertium-interchunk ../../apertium-ces-rus.rus-ces.t2x  ../../rus-ces.t2x.bin |
        apertium-postchunk ../../apertium-ces-rus.rus-ces.t3x  ../../rus-ces.t3x.bin  | tee $TMPDIR/$DIR.tmp_testvoc3.txt |
        lt-proc -d ../../rus-ces.autogen.bin > $TMPDIR/$DIR.tmp_testvoc4.txt
paste -d _ $TMPDIR/$DIR.tmp_testvoc1.txt $TMPDIR/$DIR.tmp_testvoc2.txt $TMPDIR/$DIR.tmp_testvoc3.txt $TMPDIR/$DIR.tmp_testvoc4.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $DIR = "ces-rus" ]]; then

lt-expand ../../apertium-ces-rus.ces.dix | grep -v '<prn><enc>' | grep -v 'REGEX' | grep -v ':<:' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/$DIR.tmp_testvoc1.txt |
        apertium-pretransfer|
	lt-proc -b ../../ces-rus.autobil.bin | tee $TMPDIR/$DIR.tmp_testvoc2.txt |
        lrx-proc ../../ces-rus.autolex.bin |
        apertium-transfer -b ../../apertium-ces-rus.ces-rus.t1x  ../../ces-rus.t1x.bin |
        apertium-interchunk ../../apertium-ces-rus.ces-rus.t2x  ../../ces-rus.t2x.bin |
        apertium-postchunk ../../apertium-ces-rus.ces-rus.t3x  ../../ces-rus.t3x.bin  | tee $TMPDIR/$DIR.tmp_testvoc3.txt |
        lt-proc -d ../../ces-rus.autogen.bin > $TMPDIR/$DIR.tmp_testvoc4.txt
paste -d _ $TMPDIR/$DIR.tmp_testvoc1.txt $TMPDIR/$DIR.tmp_testvoc2.txt $TMPDIR/$DIR.tmp_testvoc3.txt $TMPDIR/$DIR.tmp_testvoc4.txt| sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "bash inconsistency.sh <direction>";
fi
