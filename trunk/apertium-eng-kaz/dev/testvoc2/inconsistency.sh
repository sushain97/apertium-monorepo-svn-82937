#!/bin/bash

# Passes its input -- a list of lexical units -- through the translator
# (transfer modules and target language generator).
# Creates three text files in TMPDIR:
#     1) INPUT, a list of lexical units taken
#     2) TRANSFOUT, this list after passing transfer modules
#     3) GENOUT, this list after TL generator.
# Outputs "paste INPUT TRANSFOUT GENOUT"
# Supposed to be invoked by ./testvoc.sh, and not run directly.

if [ -z $TMPDIR ]; then
	TMPDIR="/tmp"
fi

INPUT=$TMPDIR/testvoc_input.txt
TRANSFOUT=$TMPDIR/testvoc_transfout.txt
GENOUT=$TMPDIR/testvoc_genout.txt

DIR=$1

if [[ $DIR = "kaz-eng" ]]; then

    PRETRANSFER="apertium-pretransfer"
    LEXTRANSFER="lt-proc -b ../../../kaz-eng.autobil.bin"
    LEXSELECTION="lrx-proc -m ../../../kaz-eng.lrx.bin"
    TRANSFER_1="apertium-transfer -b home/aida/apertium-testing/apertium-eng-kaz.kaz-eng.t1x ../../../kaz-eng.t1x.bin"
    TRANSFER_2="apertium-interchunk ../../../apertium-eng-kaz.kaz-eng.t2x ../../../kaz-eng.t2x.bin"
    TRANSFER_3="apertium-postchunk ../../../apertium-eng-kaz.kaz-eng.t3x ../../../kaz-eng.t3x.bin"
    GENERATOR="lt-proc -d ../../../kaz-eng.autogen.bin"

    tee $INPUT |
    $PRETRANSFER | $LEXTRANSFER | $LEXSELECTION |
    $TRANSFER_1 | $TRANSFER_2 | $TRANSFER_3 |  tee $TRANSFOUT |
    $GENERATOR > $GENOUT
    paste -d % $INPUT $TRANSFOUT $GENOUT |
    sed 's/\^.<sent>\$//g' | sed 's/%/   -->  /g'

else
	echo "Usage: ./inconsistency.sh <direction>";
fi
