/*
	
	Input: Monodix or Bidix Lemmas
	Output: a List of unique entries + duplicates at the end


*/

BEGIN {
FR = "\"";

}

{
	
	if (lemme[$2] == 1) {  duplikati = duplikati "\n" $0;  }
	else if (lemme[$2] != 1) {lemme[$2] = 1; izpis = izpis "\n" $0;}
	else { izpis = izpis "\n" $0; }

}


END {

	print izpis;

	print "<!-- Duplicates -->";

	print duplikati;
}
