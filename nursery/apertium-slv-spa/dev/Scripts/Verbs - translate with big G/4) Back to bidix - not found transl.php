<?php

/*

	Generate bidix entries for NOT FOUND TRANSLATIONS
	
	Input1: Generated list from step 3 - TRANSLATIONS NOT FOUND
	Input2: Bidix entries (from the beginning when we output only lemmas from)


	Output: Bidix entries for NOT FOUND TRANSLATIONS


*/

	$content1 = file_get_contents("Not_translated-list.txt", "r");
	$content2 = file_get_contents("Bidix.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output = "";
	$output_not = "";
	
	foreach ($lines as $line => $key) {
		
		$slo_lemma = $key;
		
		$slo_flag = 0;

		
		foreach ($lines2 as $line2 => $key2) {

			$lemma2 = explode("<l>", $key2);
			$pozicija_taga = strpos($lemma2[1], "<s n=");

			$iskana_SLO_lemma = substr($lemma2[1], 0, $pozicija_taga); //SLO lemma
			
			
			if($slo_lemma == $iskana_SLO_lemma) {
				
				$output .= $key2 . "\n";
				
				$slo_flag = 1;
			}

		}
		
		if($slo_flag == 0) {
			
			$output_not .= $key . "\n";
			
		}	
				
	}
	
	echo "NAREJENO:\n\n";
	echo $output;
	echo "\n\nNenajdeno: \n\n";
	echo $output_not;
	


?>