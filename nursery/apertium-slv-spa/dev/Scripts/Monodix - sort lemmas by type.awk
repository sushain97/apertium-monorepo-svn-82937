/*
	
	Input: Monodix - lemmas
	Output: Monodix lemmas grouped by its type
	
	Types: adj, n, vblex, num, everything_else


*/

BEGIN {

FS = "\"";

}
{

	if ($0 != "") {	


		if ($4 ~ /__adj/) { paradigme1[$4] = paradigme1[$4] "\n" $0;  }
		else if ($4 ~ /__n/) { paradigme2[$4] = paradigme2[$4] "\n" $0; }
		else if ($4 ~ /__vblex/) { paradigme3[$4] = paradigme3[$4] "\n" $0; }
		else if ($4 ~ /__num/) { paradigme4[$4] = paradigme4[$4] "\n" $0; }
		else { paradigme_none[$4] = paradigme_none[$4] "\n" $0; }

	}

	else { para_else = para_else "\n" $0; } 


}
END {

	for (par in paradigme1) {

		print paradigme1[par];

	}
	for (par in paradigme2) {

		print paradigme2[par];

	}
	for (par in paradigme3) {

		print paradigme3[par];

	}
	for (par in paradigme4) {

		print paradigme4[par];

	}
	for (par in paradigme_none) {

		print paradigme_none[par];

	}

	print para_else;

}
