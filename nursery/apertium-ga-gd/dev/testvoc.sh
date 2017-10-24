echo "==Irish->Scottish Gaelic===========================";
sh inconsistency.sh ga-gd > /tmp/ga-gd.testvoc; sh inconsistency-summary.sh /tmp/ga-gd.testvoc ga-gd
echo ""
#echo "==Scottish Gaelic->Irish===========================";
#sh inconsistency.sh gd-ga > /tmp/gd-ga.testvoc; sh inconsistency-summary.sh /tmp/gd-ga.testvoc gd-ga
