# !/bin/bash

# Extracts lemmas and part-of-speech tags from an Apertium monolingual dictionary
# Creates a file for each PoS with all its lemmas
#Creates another file with the lexical forms which generate/come from multiword surface forms

# $1 : Apertium bin directory
# $2 : Dictionary file
# $3 : Directory where the extracted lemmas will be stored
# $4 : "analysis" for analysis multiwords; "generation" for generation multiwords. Default is analysis

DEFAULTMW="analysis"

MW=${4:-$DEFAULTMW}

DIR=`dirname $0`

mkdir -p $3
$1/lt-expand "$2" | sort | uniq | python $DIR/extractLemmasAndPOSv2.py "$3" "$MW"
