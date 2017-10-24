<?php

/*

	Input: awkout.txt - Output generated with previous script - list of lemmas + genders (ugly output) - can contain more genders
	Manual works: Replace ^ with "nothing" -> delete ^
	
	Output: List: lemma + gender (the first one)

*/


	$content1 = file_get_contents("awkout.txt", "r");

	$lines = explode("\n", $content1);

	$output = "";
	
	foreach ($lines as $line => $key) {
		
		$razdelitev = explode("/", $key);
		$lemma = $razdelitev[0];
		
		if(strpos($key, "<m>") !== false) { $spol = "<m>"; }
		else if(strpos($key, "<ma>") !== false) { $spol = "<ma>"; }
		else if (strpos($key, "<mi>") !== false) { $spol = "<mi>"; }
		else if (strpos($key, "<f>") !== false) { $spol = "<f>"; }
		else if (strpos($key, "<nt>") !== false) { $spol = "<nt>"; }
		else if (strpos($key, "<mf>") !== false) { $spol = "<mf>"; }
		
		$output .= $lemma . $spol . "\n";
		
		
	}
	
	
	echo "\n\nOUTPUT:\n" . $output;

?>