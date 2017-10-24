if [[ $1 = "ava-rus" ]]; then
echo "==Avar->Russian===========================";
bash inconsistency.sh ava-rus > /tmp/ava-rus.testvoc; bash inconsistency-summary.sh /tmp/ava-rus.testvoc ava-rus
echo ""

fi
