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
	rm -f /tmp/ro-it.corpus.txt
	for i in `seq 1 $#`; do 
		if [[ ${args[$i]} != "" && -f ${args[$i]} ]]; then 
			cat ${args[$i]} >> /tmp/ro-it.corpus.txt
		fi
	done
	echo "done.";
	echo -n "Translating corpus for generation test (this could take some time)... ";
	cat /tmp/ro-it.corpus.txt | apertium -d ../ ro-it-postchunk | sed 's/\$[\W–“\|\-°ḗȯųÍ—”´§„:ɐ₤¬`×=µ_ʁ√£\-\/‘’"«»*%ְֲִֵֶַָֹَّ־ׁׂʉἀ़਼aáàăâậǎåäãąāảạæbcćçdďḍðeéèêếềệěėęēẹəfgǵğĝǧġhĥȟħḥḫiíìîǐïĩīỉịıjkķlľŀłḷmnńņñoóòŏôốồổộöõøǫōọờɔºœpqrŕřṛsśšşṣßtţṭuúùûǔůüűũūủȗụứựvwxyýỳÿzźżþʒآأإابپةتثجحخدذرزسشصضطعغفقكگلمنهويىئאבגדהוזחיכלםמןנסעףפצקרשתαάβγδεέζηήθιίκλμνξοόπρσςτυύφχψωώабвгдеєёжзийклмнњопрстуфхцчшщъыьэюяագդեէիլծկհմյնոպջսվտրքआउओकखगजटठडढणतदनपफबमयरलवशषसहािीुूेैोौंँ्ਸਹਕਗਘਜਥਦਬਮਰਲਵਾਿੀੁੂੋੰ੍ംമയലളാ丁三东中久之交京今任伊俊保元光八军凡出刀切北南县发同名向咏喜嘉国國土地圳城堤声夜大如妃姫婚子安宏定宮小尾岡岭島崎川巢平幽廷形悪拜撲操方族日昌曾會朋朝本村束東松歩民水永沙深清漢濱灣獞玄琳电的盟相真短硫礼社神稲空約美联聯腹臉臥荒荷薇薔藏藤虎蛇訓語謝變軍輔輝道部里铁長闪靖静韓風颱香高魔鮮鰲鲜鳥黄龍 ]*\^/$\n^/g' > /tmp/ro-it.gentest.postchunk
	echo "done.";
fi

if [[ ! -f /tmp/ro-it.gentest.postchunk ]]; then
	echo "Something went wrong in processing the corpus, you have no output file.";
	echo "Try running:"
	echo "   sh generation-test.sh -r <corpus>";
	exit;
fi

cat /tmp/ro-it.gentest.postchunk  | sed 's/^ //g' | grep -v -e '@' -e '*' -e '[0-9]<num>' -e '#}' -e '#{' | sed 's/\$>/$/g' | sed 's/^\W*\^/^/g' | sort -f | uniq -c | sort -gr > /tmp/ro-it.gentest.stripped
cat /tmp/ro-it.gentest.stripped | grep -v '\^\W<' | lt-proc -d ../ro-it.autogen.bin > /tmp/ro-it.gentest.surface
cat /tmp/ro-it.gentest.stripped | grep -v '\^\W<'  | sed 's/^ *[0-9]* \^/^/g' > /tmp/ro-it.gentest.nofreq
paste /tmp/ro-it.gentest.surface /tmp/ro-it.gentest.nofreq  > /tmp/ro-it.generation.errors.txt
cat /tmp/ro-it.generation.errors.txt  | grep -v '#' | grep '\/' > /tmp/ro-it.multiform
cat /tmp/ro-it.generation.errors.txt  | grep '[0-9] #.*\/' > /tmp/ro-it.multibidix 
cat /tmp/ro-it.generation.errors.txt  | grep '[0-9] #' | grep -v '\/' > /tmp/ro-it.tagmismatch 

echo "";
echo "===============================================================================";
echo "Multiple surface forms for a single lexical form";
echo "===============================================================================";
cat /tmp/ro-it.multiform

echo "";
echo "===============================================================================";
echo "Multiple bidix entries for a single source language lexical form";
echo "===============================================================================";
cat /tmp/ro-it.multibidix

echo "";
echo "===============================================================================";
echo "Tag mismatch between transfer and generation";
echo "===============================================================================";
cat /tmp/ro-it.tagmismatch

echo "";
echo "===============================================================================";
echo "Summary";
echo "===============================================================================";
wc -l /tmp/ro-it.multiform /tmp/ro-it.multibidix /tmp/ro-it.tagmismatch
