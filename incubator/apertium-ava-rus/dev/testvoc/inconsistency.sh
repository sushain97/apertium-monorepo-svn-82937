TMPDIR=/tmp
LANG1=../../../../languages/apertium-ava/
LANG2=../../../../languages/apertium-rus/

DIR=$1

if [[ $DIR = "ava-rus" ]]; then

hfst-fst2strings $LANG1/.deps/ava.LR-debug.hfst | grep -v '<\(lpar\|rpar\|sent\)>' | grep -v 'REGEX' | grep -v '\+' | sed 's/:/%/g' | cut -f1 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/$DIR.tmp_testvoc1.txt |
        apertium-pretransfer|
	lt-proc -b ../../ava-rus.autobil.bin |  tee $TMPDIR/$DIR.tmp_testvoc2.txt |
        lrx-proc -m ../../ava-rus.autolex.bin |
        apertium-transfer -b ../../apertium-ava-rus.ava-rus.t1x  ../../ava-rus.t1x.bin |
        apertium-interchunk ../../apertium-ava-rus.ava-rus.t2x  ../../ava-rus.t2x.bin |
        apertium-postchunk ../../apertium-ava-rus.ava-rus.t3x  ../../ava-rus.t3x.bin  | tee $TMPDIR/$DIR.tmp_testvoc3.txt |
        lt-proc -d ../../ava-rus.autogen.bin > $TMPDIR/$DIR.tmp_testvoc4.txt
paste -d _ $TMPDIR/$DIR.tmp_testvoc1.txt $TMPDIR/$DIR.tmp_testvoc2.txt $TMPDIR/$DIR.tmp_testvoc3.txt $TMPDIR/$DIR.tmp_testvoc4.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

else
	echo "bash inconsistency.sh <direction>";
fi
