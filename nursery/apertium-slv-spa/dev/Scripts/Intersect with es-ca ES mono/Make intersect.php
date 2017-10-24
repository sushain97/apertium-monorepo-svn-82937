<?php

/*

	Input1: List of BIDIX entries (with '_something_')
	Input 1 entry example: <e><p><l>'nastrgati'<s n="vblex"/></l><r>'rallar'<s n="vblex"/></r></p></e>
	
	Input2: Target language monodix (es from es-ca) entries
	
	
	Output: Found and NOT found lists + Paradigm names of the found ones (if missing from main ES monodix, copy)

*/

	$content1 = file_get_contents("List.txt", "r");
	$content2 = file_get_contents("ES-monodix(es-ca).txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output_found = "";
	$output_not = "";
	
	$paradigms = "";
	
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
				
				$paradigms .= $key2 . "\n";
				
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
	
	echo "\n\nKar je bilo najdeno, je bilo s sledecimi paradigmami: \n $paradigms";
	


?>