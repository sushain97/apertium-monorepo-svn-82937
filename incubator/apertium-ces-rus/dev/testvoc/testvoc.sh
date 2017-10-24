if [[ $1 = "rus-ces" ]]; then
echo "==Russian->Czech===========================";
bash inconsistency.sh rus-ces > /tmp/rus-ces.testvoc; bash inconsistency-summary.sh /tmp/rus-ces.testvoc rus-ces
echo ""

elif [[ $1 = "ces-rus" ]]; then
echo "==Czech->Russian===========================";
bash inconsistency.sh ces-rus > /tmp/ces-rus.testvoc; bash inconsistency-summary.sh /tmp/ces-rus.testvoc ces-rus

fi
