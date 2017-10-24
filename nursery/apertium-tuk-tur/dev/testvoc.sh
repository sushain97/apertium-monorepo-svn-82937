if [ -z $TMPDIR ] ;then 
	TMPDIR=/tmp
fi
bash inconsistency.sh tuk-tur > $TMPDIR/testvoc.tuk-tur; bash inconsistency-summary.sh $TMPDIR/testvoc.tuk-tur tuk-tur
#bash inconsistency.sh tur-tuk > $TMPDIR/testvoc.tur-tuk; bash inconsistency-summary.sh $TMPDIR/testvoc.tur-tuk tur-tuk
