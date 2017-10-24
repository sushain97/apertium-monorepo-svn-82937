<?php

/*

	Explode the translations and check if they exist in the monodix
	
	Input1: List of translations generated with (step 2)
	Input2: Monodix of the target language
	
	Output: List of verbs - found / not found in the monodix.



*/


	$content1 = file_get_contents("Translated_list.txt", "r");
	$content2 = file_get_contents("es-dictionary.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output_found = "";
	$output_not = "";
	
	foreach ($lines as $line => $key) {
		
		$lemmas = explode("---", $key);
		$es_flag = 0;
		
		$es_lemma = $lemmas[1];
		
		foreach ($lines2 as $line2 => $key2) {

			$lemmas2 = explode("\"", $key2);

			$monodix_lemma = $lemmas2[1];
			
			if($es_lemma == $monodix_lemma) {
				
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