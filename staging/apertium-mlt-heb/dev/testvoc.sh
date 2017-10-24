echo "==Maltese->Hebrew==============================";
bash `dirname $0`/mt-he.inconsistency.sh $@ > /tmp/mt-he.testvoc; sh `dirname $0`/inconsistency-summary.sh /tmp/mt-he.testvoc mt-he
echo ""
