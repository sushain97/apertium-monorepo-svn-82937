
echo "Охват языков системы:"

for fajl in *.automorf.*; do 
	dir=`echo $fajl | cut -f1 -d'.'`;
	sl=`echo $fajl | cut -f1 -d'-'`;
	tipus=`echo $fajl | cut -f3 -d'.'`;
	proc="hfst-proc";
	if [[ $tipus == "bin" ]]; then
		proc="lt-proc";
	fi
	known=`cat text/$sl.txt | apertium-destxt | $proc -w $fajl | apertium-retxt | sed 's/\$\W*\^/$\n^/g' | grep -v '\*' | wc -l`
	total=`cat text/$sl.txt | apertium-destxt | $proc -w $fajl | apertium-retxt |  sed 's/\$\W*\^/$\n^/g' | wc -l `
	echo " "$dir": "$total" "$known;
done
