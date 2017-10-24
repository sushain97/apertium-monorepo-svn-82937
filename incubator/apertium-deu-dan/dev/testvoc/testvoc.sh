TMPDIR=/tmp

if [[ $1 = "dan-deu" ]]; then

  echo "==Danish->German===========================";
  bash inconsistency.sh dan-deu > $TMPDIR/dan-deu.testvoc;
  bash inconsistency-summary.sh $TMPDIR/dan-deu.testvoc dan-deu
  echo ""

elif [[ $1 = "deu-dan" ]]; then

  echo "==German->Danish===========================";
  bash inconsistency.sh deu-dan > $TMPDIR/deu-dan.testvoc;
  bash inconsistency-summary.sh $TMPDIR/deu-dan.testvoc deu-dan
  echo ""

else
  echo ""
  echo "==unknown language pair=====================";
fi
