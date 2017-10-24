BEGIN { }

{
	
	if (lemme[$0] == 1) {  duplikati = duplikati "\n" $0;  }
	else if (lemme[$0] != 1) {lemme[$0] = 1; izpis = izpis "\n" $0;}
	else { izpis = izpis "\n" $0; }

}


END {

	print izpis;

	print "<!-- Duplicates -->";

	print duplikati;
}
