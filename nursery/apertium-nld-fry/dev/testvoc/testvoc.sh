if [[ $1 = "fry-nld" ]]; then
echo "==Frisian->Dutch===========================";
bash inconsistency.sh fry-nld > /tmp/fry-nld.testvoc; bash inconsistency-summary.sh /tmp/fry-nld.testvoc fry-nld
echo ""

elif [[ $1 = "nld-fry" ]]; then
echo "==Dutch->Frisian===========================";
bash inconsistency.sh nld-fry > /tmp/nld-fry.testvoc; bash inconsistency-summary.sh /tmp/nld-fry.testvoc nld-fry

fi
