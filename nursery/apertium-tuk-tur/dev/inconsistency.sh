if [ -z $TMPDIR ] ;then
        TMPDIR=/tmp
fi


if [[ $1 = "tur-tuk" ]]; then

hfst-fst2strings ../.deps/tur.LR-debug.hfst | sort -u |  sed 's/:/%/g' | cut -f1 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |\
        apertium-pretransfer|\
        apertium-transfer ../apertium-tuk-tur.tur-tuk.t1x  ../tur-tuk.t1x.bin  ../tur-tuk.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |\
        hfst-proc -d ../tur-tuk.autogen.hfst > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "tuk-tur" ]]; then

hfst-fst2strings ../.deps/tuk.LR-debug.hfst | sort -u | sed 's/:/%/g' | cut -f1 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |\
        apertium-pretransfer|\
        apertium-transfer ../apertium-tuk-tur.tuk-tur.t1x  ../tuk-tur.t1x.bin  ../tuk-tur.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |\
        hfst-proc -d ../tuk-tur.autogen.hfst > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "sh inconsistency.sh <direction>";
fi
