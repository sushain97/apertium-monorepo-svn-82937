/*

	Input: List of BIDIX entries for SL-ES (with '_something_')
	
	Bidix entry example: <e><p><l>'letovišče'<s n="n"/></l><r>'recurso'<s n="n"/></r></p></e>
	
	Output: awkout.txt with GENDERS


*/

BEGIN {

FS="\'";

}

{
	
	print system("echo " $2 " | apertium -d . sl-es-anmor");


}

END {}