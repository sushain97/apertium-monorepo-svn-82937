<?php

/* 

	Clean your bidix from useless comments.
	Input: Bidix entries (main)
	Output: Clean bidix entries
	
	Used to clean: <!-- untrusted no bilingual entry--> 
	and: => Comments 
	
	
*/

	$content = file_get_contents("Input.txt", "r");
	
	$lines = explode("\n", $content);
	
	$output = "";
	
	foreach ($lines as $line => $key) {
		
		if(strpos($key, "<!--") !== false) {
			
			$lemma = explode("<!--", $key);
			
			$output .= $lemma[0] . "\n";
			
		}
		else if (strpos($key, "=>") !== false) {
			
			$lemma = explode("=>", $key);
		
			$output .= $lemma[0] . "\n";
		}
		
		
	}
	
	echo $output;	

?>