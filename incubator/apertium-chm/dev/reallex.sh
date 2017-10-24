# Run grep -v -e ".*-.*:" after this to get compounds out

echo "LEXICON Adjectives"
echo ""
grep -e "ad" $1
echo ""

echo "LEXICON Adverbs"
echo ""
grep -e "av" $1
echo ""

echo "LEXICON Conjunctions"
echo ""
grep -e "co" $1
echo ""

echo "LEXICON Interjections"
echo ""
grep -e "de" $1
echo ""

echo "LEXICON ProperNames"
echo ""
grep -e "na" $1
echo ""

echo "LEXICON Numerals"
echo ""
grep -e "nm" $1
echo ""

echo "LEXICON Nouns"
echo ""
grep -e "no" $1
echo ""

echo "LEXICON PlaceNames"
echo ""
grep -e "pn" $1
echo ""

echo "LEXICON Postpositions"
echo ""
grep -e "po" $1
echo ""

echo "LEXICON Pronouns"
echo ""
grep -e "pr" $1
echo ""

echo "LEXICON Verbs"
echo ""
grep -e "vb" $1
echo ""
