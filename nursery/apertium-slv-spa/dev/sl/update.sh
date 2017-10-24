dos2unix apertium-sl-es.sl.dix.full 
echo "Processing..."
`lt-expand ../../apertium-sl-es.sl-es.dix | grep -v '__REGEXP__' > /tmp/apertium-sl-es.sl-es.exp`
echo "Processing #2..."

HEAD=`grep -nH '<section id="main"' apertium-sl-es.sl.dix.full  | cut -f2 -d':'`;
TAIL=`grep -nH '</section>' apertium-sl-es.sl.dix.full  | head -1 | tail -1 | cut -f2 -d':'`;
LENGTH=`cat apertium-sl-es.sl.dix.full | wc -l`;
DIX=sl.dix
echo "Processing #3..."
`python trimDict.py`
echo "Processing #4..."

echo "" > gen.xml
cat apertium-sl-es.sl.dix.full | grep '<e lm="s" r="RL">' >> gen.xml
wc -l gen.xml
cat apertium-sl-es.sl.dix.full | grep '<e lm="~" r="RL">' >> gen.xml
echo "Processing #5..."
#####################################################################################

echo "" > $DIX
head -n $HEAD apertium-sl-es.sl.dix.full > $DIX
for i in *.xml; do 
	echo "<!-- "$i" -->" >> $DIX
	echo "" >> $DIX
	cat $i >> $DIX
done
echo "Processing #6..."
echo "</section>" >> $DIX

T=`expr $LENGTH - $TAIL`;
tail -n $T apertium-sl-es.sl.dix.full >> $DIX;
echo "Processing #7..."
cp $DIX ../../apertium-sl-es.sl.dix
