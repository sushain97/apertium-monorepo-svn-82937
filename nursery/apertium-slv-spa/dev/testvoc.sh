echo "==Slovenian->Spanish===========================";
bash inconsistency.sh sl-es > /tmp/sl-es.testvoc; bash inconsistency-summary.sh /tmp/sl-es.testvoc sl-es
echo ""
#echo "==Spanish->Slovenian===========================";
#bash inconsistency.sh es-sl > /tmp/es-sl.testvoc; bash inconsistency-summary.sh /tmp/es-sl.testvoc es-sl
