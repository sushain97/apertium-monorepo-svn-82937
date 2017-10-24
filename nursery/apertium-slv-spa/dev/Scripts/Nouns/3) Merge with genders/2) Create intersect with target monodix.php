<?php

/*

	Input1: Generated list of nouns (bidix entries) with genders - generated in step 1 (with '_something_')
	Input2: Target language monodix
	
	Output: Found + not Found list of nouns in the target monodix


*/

	$content1 = file_get_contents("Spisek_bidix.txt", "r");
	$content2 = file_get_contents("ES-monodix.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output_found = "";
	$output_not = "";
	
	foreach ($lines as $line => $key) {
		
		$lemmas = explode("'", $key);
		$es_flag = 0;
		
		$es_lemma = $lemmas[3];
		
		foreach ($lines2 as $line2 => $key2) {

			$lemmas2 = explode("\"", $key2);

			$monodix_lemma = $lemmas2[1];
			
			if($es_lemma == $monodix_lemma && $es_flag == 0) {
				
				$es_flag = 1;
				$output_found .= $key . "\n";
				
			}
		

		}
		
		if($es_flag == 0) {
			
			$output_not .= $key . "\n";
			
		}	
				
	}
	
	echo "Najdeno v preseku:\n\n";
	echo $output_found;
	echo "\n\nNenajdeno: \n\n";
	echo $output_not;
	


?>