#!/bin/bash

TMPDIR=/tmp

lt-expand ../../apertium-hye-eng.hye.dix | grep -v 'REGEX' | grep -v ':>:' | sed 's/:<:/%/g' | sed 's/:/%/g' | cut -f2 -d'%' | sed 's/^/^/g' | sed 's/$/$/g' | grep -v 'REGEX' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        lt-proc -b ../../hye-eng.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |
        apertium-transfer -b ../../apertium-hye-eng.hye-eng.t1x  ../../hye-eng.t1x.bin | 
        apertium-interchunk ../../apertium-hye-eng.hye-eng.t2x  ../../hye-eng.t2x.bin |
        apertium-postchunk ../../apertium-hye-eng.hye-eng.t3x  ../../hye-eng.t3x.bin  | tee $TMPDIR/tmp_testvoc3.txt |
        lt-proc -d ../../hye-eng.autogen.bin > $TMPDIR/tmp_testvoc4.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt $TMPDIR/tmp_testvoc4.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

