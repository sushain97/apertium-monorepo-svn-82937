<?php

/*	
	
	Input: Bidix entries
	Output: Only lemmas 
	
	Usage: Get a list of lemmas to translate


*/

	$content1 = file_get_contents("Input1.txt", "r");

	$lines = explode("\n", $content1);

	$sorted_output = "";
	
	foreach ($lines as $line => $key) {
			
		$lemma = explode("<l>", $key);
		$pozicija_taga = strpos($lemma[1], "<s n=");
		
		$iskana_lemma = substr($lemma[1], 0, $pozicija_taga); //lemma za iskat po bidixu
		
		$sorted_output .= $iskana_lemma . "\n";
	
	}
	
	echo $sorted_output;


	

?>