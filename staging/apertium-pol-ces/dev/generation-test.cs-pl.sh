#!/bin/bash

if [[ $# -lt 1 ]]; then
	echo "Not enough arguments to generation-test.sh";
	echo "bash generation-test.sh <corpus>";
	exit;
fi

if [[ $1 == "-r" ]]; then
	if [[ $# -lt 2 ]]; then 
		echo $#;
		echo "Not enough arguments to generation-test.sh -r";
		echo "bash generation-test.sh -r <corpus>";
		exit;
	fi
	args=("$@")
	echo "Corpus in: "`dirname $2`;
	echo -n "Processing corpus for generation test... ";
	rm -f /tmp/cs-pl.corpus.txt
	for i in `seq 1 $#`; do 
		if [[ ${args[$i]} != "" && -f ${args[$i]} ]]; then 
			cat ${args[$i]} >> /tmp/cs-pl.corpus.txt
		fi
	done
	echo "done.";
	echo -n "Translating corpus for generation test (this could take some time)... ";
	cat /tmp/cs-pl.corpus.txt | apertium -d ../ cs-pl-postchunk | sed 's/\$\W*\^/$\n^/g' > /tmp/cs-pl.gentest.postchunk
	echo "done.";
fi

if [[ ! -f /tmp/cs-pl.gentest.postchunk ]]; then
	echo "Something went wrong in processing the corpus, you have no output file.";
	echo "Try running:"
	echo "   sh generation-test.sh -r <corpus>";
	exit;
fi

cat /tmp/cs-pl.gentest.postchunk  | sed 's/^ //g' | grep -v -e '@' -e '*' -e '[0-9]<Num>' -e '#}' -e '#{' | sed 's/\$>/$/g' | sort -f | uniq -c | sort -gr > /tmp/cs-pl.gentest.stripped
cat /tmp/cs-pl.gentest.stripped | lt-proc -d ../cs-pl.autogen.bin > /tmp/cs-pl.gentest.surface
cat /tmp/cs-pl.gentest.stripped | sed 's/^ *[0-9]* \^/^/g' > /tmp/cs-pl.gentest.nofreq
paste /tmp/cs-pl.gentest.surface /tmp/cs-pl.gentest.nofreq | grep -e '\/' -e '#'  > /tmp/cs-pl.generation.errors.txt
cat /tmp/cs-pl.generation.errors.txt  | grep -v '#' | grep '\/' > /tmp/cs-pl.multiform
cat /tmp/cs-pl.generation.errors.txt  | grep '#.*\/' > /tmp/cs-pl.multibidix 
cat /tmp/cs-pl.generation.errors.txt  | grep '#' | grep -v '\/' > /tmp/cs-pl.tagmismatch 

echo "";
echo "===============================================================================";
echo "Multiple surface forms for a single lexical form";
echo "===============================================================================";
cat /tmp/cs-pl.multiform

echo "";
echo "===============================================================================";
echo "Multiple bidix entries for a single source language lexical form";
echo "===============================================================================";
cat /tmp/cs-pl.multibidix

echo "";
echo "===============================================================================";
echo "Tag mismatch between transfer and generation";
echo "===============================================================================";
cat /tmp/cs-pl.tagmismatch

echo "";
echo "===============================================================================";
echo "Summary";
echo "===============================================================================";
wc -l /tmp/cs-pl.multiform /tmp/cs-pl.multibidix /tmp/cs-pl.tagmismatch
