<?php

/*

	Generate bidix entries for the list generated in "step 3".
	
	Input1: Generated list from step 3 - NOT FOUND in INTERSECT with Target MONODIX
	Input2: Bidix entries (from the beginning when we output only lemmas from)
	
	Output: Generated bidix entries for the ones that were NOT FOUND in the Intersect with MONODIX


*/

	$content1 = file_get_contents("Not_found-intersect.txt", "r");
	$content2 = file_get_contents("Bidix.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output = "";
	$output_not = "";
	
	foreach ($lines as $line => $key) {
		
		$lemmas = explode("---", $key);
		$slo_flag = 0;
		
		$slo_lemma = $lemmas[0];
		$es_lemma = $lemmas[1];
		
		foreach ($lines2 as $line2 => $key2) {

			$lemma2 = explode("<l>", $key2);
			$pozicija_taga = strpos($lemma2[1], "<s n=");

			$iskana_SLO_lemma = substr($lemma2[1], 0, $pozicija_taga); //SLO lemma
			
			
			if($slo_lemma == $iskana_SLO_lemma) {
				
				$split = explode("<r>", $key2);
				
				$levi_del = $split[0]; //za koncni izdelek
				
				$pozicija_drugega_taga = strpos($split[1], "<s n=");
				
				$desni_del = "<r>" . $es_lemma . substr($split[1], $pozicija_drugega_taga) . "\n"; //DESNI DEL
				
				//FINAL OUTPUT 
				$output .= $levi_del . $desni_del;
				
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