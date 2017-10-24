<?php

/*

	Input1: A list of lemmas (generated with: Bidix - output lemmas.php)
	Input2: Same list translated
	
	Output: List of translated verbs + not translated verbs (sorted)
	

*/

	$content1 = file_get_contents("Only_lemmas.txt", "r");
	$content2 = file_get_contents("Only_lemmas-translated.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$prevedeno_output = "";
	$neprevedeno_output = "";
	
	foreach ($lines as $line => $key) {
			
		$lines2[$line] = mb_strtolower($lines2[$line], 'UTF-8');
			
		if($lines[$line] == $lines2[$line]) {
			
			$neprevedeno = $lines2[$line] . "\n";
			
			$neprevedeno_output .= $neprevedeno;
			
		}
		else {
			
			$prevedeno = $lines[$line] . "---" . $lines2[$line] . "\n";
			
			$prevedeno_output .= $prevedeno;
			
		}
		
	}
	
	echo "Prevedeno:\n\n";
	echo $prevedeno_output;
	echo "\n\nNeprevedeno i: \n\n";
	echo $neprevedeno_output;
	


?>