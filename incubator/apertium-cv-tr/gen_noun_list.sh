for noun in `cat tests/n.txt` ; do
#	./gen_noun.sh $noun
	echo "^$noun<n><px2sg><loc>$" | hfst-proc -g tr-cv.autogen.hfst
#	echo
done
	echo "^Наталья<np><ant><f><px2sg><loc>$" | hfst-proc -g tr-cv.autogen.hfst
	echo "^Катя<np><ant><f><px2sg><loc>$" | hfst-proc -g tr-cv.autogen.hfst
	echo "^Оксана<np><ant><f><px2sg><loc>$" | hfst-proc -g tr-cv.autogen.hfst
	echo "^Саша<np><ant><f><px2sg><loc>$" | hfst-proc -g tr-cv.autogen.hfst
