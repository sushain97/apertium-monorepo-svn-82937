#!/bin/bash

if [ $# -ne 2 ]; then
    echo "Usage: $0 inconsistency direction"
    echo "e.g. $0 inconsistency.txt mt-he"
    echo "where inconsistency.txt is the output of dev/mt-he.inconsistency.sh"
    exit 1
fi

INC=$1
PAIR=$2
OUT=testvoc-summary.$PAIR.txt
POS="abbr adj adv cm cnjadv cnjcoo cnjsub det guio ij n np num pr preadv prn rel vaux vbhaver vblex vbser vbmod predet"
G=`mktemp -t g.XXXXXXXX`;

echo -n "" > $OUT;

date >> $OUT
echo -e "=======================================================" >> $OUT
echo -e "POS\tTotal\tClean\tWith @\tClean %\tWith #\tClean %" >> $OUT
for i in $POS; do
    case "$i" in
	"det" ) IGNORE='<n>\|<np>';;
	"preadv" ) IGNORE='<adj>\|<adv>' ;;
	"adv" ) IGNORE='<adj>\|<v' ;;
	"cnjsub" ) IGNORE='<v' ;;
	"prn" ) IGNORE='<pr>' ;;
	"vbhaver" ) IGNORE='<pp' ;;
	"vblex" ) IGNORE='<prn\|<adv' ;;
	"pr" ) IGNORE='<prn\|<ger\|<det' ;;
	"rel" ) IGNORE='<pr' ;;
	* ) IGNORE='__REGEXP__' ;;
    esac
    grep "<$i>" $INC | grep -v -e '__REGEXP__\|'$IGNORE > $G;
    TOTAL=`grep -c . $G`;
    if [ $TOTAL == 0 ]; then continue; fi
    AT=`grep -c '@' $G`
    ATCLEAN=`calc -p "100 - $AT/$TOTAL*100" | sed 's/~//g' | head -c 5`
    HASH=`grep -c '>  *#' $G`;
    UNCLEAN=`grep -c -e '@' -e '>  *#' $G`;
    CLEAN=`calc -p $TOTAL-$UNCLEAN`;
    PERCLEAN=`calc -p "100 - $UNCLEAN/$TOTAL*100" | sed 's/~//g' | head -c 5`;
    echo -e $TOTAL";"$i";"$CLEAN";"$AT";"$ATCLEAN";"$HASH";"$PERCLEAN;
done | sort -gr | awk -F';' '{printf "%-7s\t",$2; print $1"\t"$3"\t"$4"\t"$5"\t"$6"\t"$7}' >> $OUT

echo -e "=======================================================" >> $OUT
cat $OUT;

rm -f "$G"
