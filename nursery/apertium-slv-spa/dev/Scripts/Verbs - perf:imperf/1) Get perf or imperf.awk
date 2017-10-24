
/*

	Get aspect from verbs (perf / imperf)

	Input: Bidix entries 
    Example: <e><p><l>'lomiti'<s n="vblex"/></l><r>'quebrar'<s n="vblex"/></r></p></e>


	Output: List of verbs with aspect

*/

BEGIN {

FS="\'";

}

{
	
	print system("echo " $2 " | apertium -d . sl-es-anmor");


}

END {}