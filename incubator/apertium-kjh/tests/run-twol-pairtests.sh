count=0
pass=0
for i in `cat ../apertium-kjh.kjh.twol | grep '!@' | cut -f2 -d'@' | tr ' ' '%'`; do 
	count=`expr $count + 1`;	
	x=`echo $i | tr '%' ' '`; 
	echo -e "@@@ $x\n     ---------------------------------" ; 
	echo $x | hfst-pair-test ../.deps/kjh.twol.hfst | sed 's/^/     /g'; 
	npass=`echo $x | hfst-pair-test ../.deps/kjh.twol.hfst | sed 's/^/     /g' | grep passed | wc -l`; 
	pass=`expr $pass + $npass`;
	echo ""; 
done

echo $pass"/"$count" passed.";
