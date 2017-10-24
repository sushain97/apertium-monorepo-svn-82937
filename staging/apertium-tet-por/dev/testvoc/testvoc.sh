if [[ $1 = "por-tet" ]]; then
echo "==Portuguese->Tetum===========================";
bash inconsistency.sh por-tet > /tmp/por-tet.testvoc; bash inconsistency-summary.sh /tmp/por-tet.testvoc por-tet
echo ""

elif [[ $1 = "tet-por" ]]; then
echo "==Tetum->Portuguese===========================";
bash inconsistency.sh tet-por > /tmp/tet-por.testvoc; bash inconsistency-summary.sh /tmp/tet-por.testvoc tet-por

fi
