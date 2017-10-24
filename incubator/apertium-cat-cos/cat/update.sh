echo "" > n.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<n>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g' | sed 's/#//'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep -e "lm=\"$lem\".*__$pos\"" -e "lm=\"$lem\".*<s n=\"$pos\"" >> n.xml;
done
wc -l n.xml
echo "" > vblex.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<vb' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g' | sed 's/#//'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep -e "lm=\"$lem\".*__$pos\"" -e "lm=\"$lem\".*<s n=\"$pos\"" >> vblex.xml;
done
wc -l vblex.xml
echo "" > adj.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<adj>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g' | sed 's/#//'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> adj.xml;
done
wc -l adj.xml
echo "" > adv.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<adv>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> adv.xml;
done
wc -l adv.xml
echo "" > pr.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<pr>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> pr.xml;
done
wc -l pr.xml
echo "" > prn.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<prn>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep -e "lm=\"$lem\".*__$pos\"" -e "lm=\"$lem\".*<s n=\"$pos\"" >> prn.xml;
done
wc -l prn.xml
echo "" > det.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<det>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep -e "lm=\"$lem\".*__$pos\"" -e "lm=\"$lem\".*<s n=\"$pos\"" >> det.xml;
done
wc -l det.xml
echo "" > np.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<np>' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> np.xml;
done
wc -l np.xml
echo "" > cnj.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<cnj' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> cnj.xml;
done
wc -l cnj.xml
echo "" > num.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<num' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> num.xml;
done
wc -l num.xml
echo "" > rel.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<rel' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> rel.xml;
done
cat apertium-cat-cos.cat.dixtmp1 | grep '<e.*"del.*qual.*">' >> rel.xml;
wc -l rel.xml
echo "" > preadv.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<preadv' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> preadv.xml;
done
wc -l preadv.xml
echo "" > predet.xml
for i in `lt-expand ../apertium-cat-cos.cat-cos.dix | grep '<predet' | cut -f1 -d':' | sed 's/><.*/>/g' | sed 's/</:/g' | sed 's/>//g' | sed 's/ /_/g'`; do 
	lem=`echo $i | cut -f1 -d':' | sed 's/_/ /g'`; 
	pos=`echo $i | cut -f2 -d':'`; 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$lem\".*__$pos\"" >> predet.xml;
done
wc -l predet.xml

#####################################################################################

HEAD=`grep -nH '<section id="main"' apertium-cat-cos.cat.dixtmp1  | cut -f2 -d':'`;
TAIL=`grep -nH '</section>' apertium-cat-cos.cat.dixtmp1  | head -2 | tail -1 | cut -f2 -d':'`;
LENGTH=`cat apertium-cat-cos.cat.dixtmp1 | wc -l`;
DIX=cat.dix

echo "" > $DIX
head -n $HEAD apertium-cat-cos.cat.dixtmp1 > $DIX
for i in *.xml; do 
	echo "<!-- "$i" -->" >> $DIX
	echo "" >> $DIX
	cat $i | sort -u >> $DIX
done
echo "</section>" >> $DIX
echo "<section id=\"apostrophe\" type=\"postblank\">" >> $DIX
for char in l d m t s n; do 
	cat apertium-cat-cos.cat.dixtmp1 | grep "lm=\"$char'\"" >> $DIX
done
echo "</section>" >> $DIX

T=`expr $LENGTH - $TAIL`;
tail -n $T apertium-cat-cos.cat.dixtmp1 >> $DIX;

cp cat.dix ../apertium-cat-cos.cat.dix
