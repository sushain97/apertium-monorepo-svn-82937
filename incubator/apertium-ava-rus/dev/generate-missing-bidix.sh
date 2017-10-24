CORP=~/corpora/avar/hakikat/ava.crp.txt
PATTERN=$1
cat $CORP |apertium -d ../ ava-rus-biltrans  | sed 's/\$\W*\^/$\n^/g' | grep '\/@' > /tmp/ava-rus.biltrans

echo "$PATTERN" | grep "<np>" > /dev/null
if [[ $? -eq 0 ]]; then
	cat /tmp/ava-rus.biltrans | grep "$PATTERN" | cut -f2 -d'^' | cut -f1 -d'/' | sed 's/<\(all\|abl\|tra\|obl\|dat\|loc\|erg\|nom\|attr\|gen\)>.*//g' | sed 's/<np><cog>.*/<np><cog>/g' | sed 's/ *$//g' | sort -u > /tmp/ava-rus.words
else
	cat /tmp/ava-rus.biltrans | grep "$PATTERN" | uconv -x lower | sort -u | cut -f2 -d'^' > /tmp/ava-rus.words
fi

if [[ $PATTERN == "<vblex>" ]]; then

	cat /tmp/ava-rus.words | sed 's/<iv>.*/<iv>/g' | sed 's/<tv>.*/<tv>/g' | sort -u 
fi
