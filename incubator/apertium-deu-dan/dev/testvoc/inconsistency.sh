TMPDIR=/tmp
DIR=$1
SRCDEU=`cat ../../config.status | grep AP_SRC1 | cut -f2 -d'=' | tr -d '"'`
SRCDAN=`cat ../../config.status | grep AP_SRC2 | cut -f2 -d'=' | tr -d '"'`

if [[ $DIR == "deu-dan" ]]; then

    lt-expand $SRCDEU/apertium-deu.deu.dix | grep -v '<lower>' | grep -v '<cmp>'| grep -v '<cmp-split>'| grep -v 'NON_ANALYSIS'| grep -v 'REGEX' | grep -v ':<:' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |\
    apertium-pretransfer|\
    lt-proc -b ../../deu-dan.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |\
    lrx-proc -m ../../deu-dan.autolex.bin |\
    apertium-transfer -b ../../apertium-deu-dan.deu-dan.t1x  ../../deu-dan.t1x.bin | tee $TMPDIR/tmp_testvoc3.txt |\
    apertium-interchunk ../../apertium-deu-dan.deu-dan.t2x  ../../deu-dan.t2x.bin | tee $TMPDIR/tmp_testvoc4.txt |\
    apertium-postchunk ../../apertium-deu-dan.deu-dan.t3x  ../../deu-dan.t3x.bin | tee $TMPDIR/tmp_testvoc5.txt |\
    lt-proc -d ../../deu-dan.autogen.bin  | sed 's/ \.//g' > $TMPDIR/tmp_testvoc6.txt

    lt-proc -d ../../dan-deu.autogen.bin $TMPDIR/tmp_testvoc1.txt | sed 's/ \.//g'  > $TMPDIR/tmp_testvoc0.txt

    paste -d _ $TMPDIR/tmp_testvoc0.txt $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc5.txt $TMPDIR/tmp_testvoc6.txt | sed 's/\^.<sent>\$//g' | sed 's/_/ ------>  /g'

elif [[ $DIR == "dan-deu" ]]; then

    lt-expand $SRCDAN/apertium-dan.dan.dix | grep -v '<lower>' | grep -v '<cmp>'| grep -v '<cmp-split>'| grep -v 'NON_ANALYSIS'| grep -v 'REGEX' | grep -v ':<:' | sed 's/:>:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |\
    apertium-pretransfer|\
    lt-proc -b ../../dan-deu.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |\
    lrx-proc -m ../../dan-deu.autolex.bin |\
    apertium-transfer -b ../../apertium-deu-dan.dan-deu.t1x  ../../dan-deu.t1x.bin | tee $TMPDIR/tmp_testvoc3.txt |\
    apertium-interchunk ../../apertium-deu-dan.dan-deu.t2x  ../../dan-deu.t2x.bin | tee $TMPDIR/tmp_testvoc4.txt |\
    apertium-postchunk ../../apertium-deu-dan.dan-deu.t3x  ../../dan-deu.t3x.bin | tee $TMPDIR/tmp_testvoc5.txt |\
    lt-proc -d ../../dan-deu.autogen.bin  | sed 's/ \.//g' > $TMPDIR/tmp_testvoc6.txt

    lt-proc -d ../../deu-dan.autogen.bin $TMPDIR/tmp_testvoc1.txt | sed 's/ \.//g'  > $TMPDIR/tmp_testvoc0.txt

    paste -d _ $TMPDIR/tmp_testvoc0.txt $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc5.txt $TMPDIR/tmp_testvoc6.txt | sed 's/\^.<sent>\$//g' | sed 's/_/ ------>  /g' 

else
	echo "Unsupported mode.";
fi
