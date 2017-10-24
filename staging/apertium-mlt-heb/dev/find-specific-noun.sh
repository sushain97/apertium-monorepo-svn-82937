if [ $# -lt 2 ]; then
	echo 'sh find-specific-noun.sh <corpus> <noun>';
	exit;
fi
CORPUS=$1
NOUN=$2

cat $CORPUS | grep -i $NOUN | apertium -d ../ mt-he-morph | grep -i '<det><def><mf><sp>\$ *\^'$NOUN'\/\*'$NOUN'\$ *\^[ABĊDEFĠGGHĦIIJKLMNOPQRSTUVWXZŻabċdefġgħghieiejklmnopqrstuvwxzżycYCáéíóúàèìòùñöëäïüç]\+\/[ABĊDEFĠGGHĦIIJKLMNOPQRSTUVWXZŻabċdefġgħghieiejklmnopqrstuvwxzżycYCáéíóúàèìòùñöëäïüç]\+<adj><\(m\|f\|mf\)><\(sg\|pl\)>\$' |\
#^kliem/*kliem$
sed "s/\^$NOUN\/\*$NOUN\\$ *\^[ABĊDEFĠGGHĦIIJKLMNOPQRSTUVWXZŻabċdefġgħghieiejklmnopqrstuvwxzżycYCáéíóúàèìòùñöëäïüç]\+\/[ABĊDEFĠGGHĦIIJKLMNOPQRSTUVWXZŻabċdefġgħghieiejklmnopqrstuvwxzżycYCáéíóúàèìòùñöëäïüç]\+<adj><\(m\|f\|mf\)><\(sg\|pl\)>\\$/@&@/g" |\
cut -f2 -d'@' 
