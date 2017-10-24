echo "==Catalan->Portuguese==========================";
bash inconsistency.sh cat-por ../../../../languages/apertium-cat/apertium-cat.cat.dix > /tmp/cat-por.testvoc; sh inconsistency-summary.sh /tmp/cat-por.testvoc cat-por 
echo ""
echo "==Portuguese->Catalan===========================";
bash inconsistency.sh por-cat ../../../../languages/apertium-por/apertium-por.por.dix > /tmp/por-cat.testvoc; bash inconsistency-summary.sh /tmp/por-cat.testvoc por-cat
