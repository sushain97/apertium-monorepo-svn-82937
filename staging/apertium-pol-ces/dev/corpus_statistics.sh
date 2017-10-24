#!/bin/bash
#Usage: ./corpus_statistics.sh corpus.bz2 pl-cs

SCRIPT_PATH="home/aha/dane/tools/moses/moses_scripts/format_scripts"
TOKENIZER="/$SCRIPT_PATH/tokenizer.perl -l en"
LOWERCASE="/$SCRIPT_PATH/lowercase.perl"
APERTIUM_PATH="/home/aha/dane/apertium/apertium/incubator/apertium-pl-cs/apertium-pl-cs"

WIKI_CORPUS=$1;
DIRECTION=$2;
TMP="$DIRECTION.tmp";
RESULT="$DIRECTION.stats";

function get_statistics {
  cat $TMP | awk -v DIR=$2 '{ 
  		TOTAL +=$1
  		if ($2 ~ /^#/) SUM1 += $1
  		else if ($2 ~ /^@/) SUM2 += $1
  		else if ($2 ~ /^\*/ ) SUM3 += $1
  	} 
  	END { 	
  		CLEAN=TOTAL-(SUM1+SUM2+SUM3)
  		CLEAN_PC=CLEAN/TOTAL*100
  		WITH1_PC=SUM1/TOTAL*100
  		WITH2_PC=SUM2/TOTAL*100
  		WITH3_PC=SUM3/TOTAL*100
  		printf \
  		"===================================\n" \
  		"     CORPUS STATISTICS  %s         \n" \
  		"===================================\n" \
  		"Total: %d \n" \
  		"Clean: %d \t %.2f% \n" \
  		"With#: %d \t %.2f% \n" \
  		"With@: %d \t %.2f% \n" \
  		"With*: %d \t %.2f% \n" \
  		"===================================\n" , 
		DIR, TOTAL, CLEAN, CLEAN_PC, SUM1, WITH1_PC, SUM2, WITH2_PC, SUM3, WITH3_PC }' > $RESULT;
}

if [[ $DIRECTION = "pl-cs" ]]; then

  echo "Processing the pl corpus..";
  bzcat $WIKI_CORPUS | grep '^[A-ZĘÓĄŚŁŻŹĆŃ]' | sed 's/$/\n/g' | sed 's/\[\[.*|//g' | sed 's/\]\]//g' | sed 's/\[\[//g' | \
  	sed 's/&.*;/ /g' | sed 's/\(http\|www\|ftp\|https\)[.:][^ ]*//g' | sed 's/ [^ ]*\.[^ $]*//g' | sed "s/\(''*\)\([^']*\)\1[^ ]*//g" | \
  	sed "s/ [^ ]*'[^ ]* / /g" | $TOKENIZER | sed -e  's/[0-9\>\<{}"@$`–?#&(|)%~/\:_-+=*!^⇒„]/ /g' | \
  	apertium -d $APERTIUM_PATH $DIRECTION | tr ' ' '\012' | grep -v "^$" | $LOWERCASE | grep -v "^\*.*[^a-zęóąśłżźćń ].*$" | \
  	sort | uniq -c | sort -rn | grep -v "\*.$" | grep -v "\*..$"  > $TMP;
  get_statistics;
  
elif [[ $DIRECTION = "cs-pl" ]]; then

  echo "Processing the cs corpus..";
  bzcat $WIKI_CORPUS | grep '^[A-ZÁČŘÉĚÚŮÝ]' | sed 's/$/\n/g' | sed 's/\[\[.*|//g' | sed 's/\]\]//g' | sed 's/\[\[//g' | \
    sed 's/&.*;/ /g' | sed 's/\(http\|www\|ftp\|https\)[.:][^ ]*//g' | sed 's/ [^ ]*\.[^ $]*//g' | \
    sed "s/\(''*\)\([^']*\)\1[^ ]*//g" | sed "s/ [^ ]*'[^ ]* / /g" | $TOKENIZER | sed -e  's/[0-9\>\<{}"@$`–?#&(|)%~/\:_-+=*!^⇒„]/ /g' | \
    apertium -d $APERTIUM_PATH $DIRECTION | tr ' ' '\012' | grep -v "^$" | $LOWERCASE | grep -v "\*.*[^a-záčďéěíňóřšťúůýžĕ].*$" | \
    sort | uniq -c | sort -rn | grep -v "\*.$" | grep -v "\*..$"  > $TMP;
  get_statistics;
 
else 
	echo "Usage: ./corpus_statistics.sh <corpus.bz2> <direction>"; 
fi


