<?php

/*
	
	Input1: List of bidix entries (passe through MONODIX intersection) - Normal form (
	<e><p><l>opomin<s n="n"/><s n="mi"/></l><r>aviso<s n="n"/><s n="m"/></r></p></e>) - without '_something_'
	
	Input2: Current Bidix entries
	
	Output: List of NEW bidix entries + List of duplicates (to be removed)

*/

	$content1 = file_get_contents("Spisek.txt", "r");
	$content2 = file_get_contents("trenutni_bidix.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output_new = "";
	$output_duplicates = "";
	
	foreach ($lines as $line => $key) {
		
		$lemmas = explode("</l>", $key);
		
		$slo_del = $lemmas[0];
		$flag = 0;
		
		foreach ($lines2 as $line2 => $key2) {

			$lemmas2 = explode("</l>", $key2);

			$slo_del2 = $lemmas2[0];
			
			if($slo_del == $slo_del2) {
				
				$flag = 1;
				
			}
		

		}
		
		if($flag == 0) {
			
			$output_new .= $key . "\n";
			
		}
		else {
			
			$output_duplicates .= $key . "\n";
			
		}
				
	}
	
echo "NEW LEMMAS:\n\n $output_new \n\nDUPLICATE LEMMAS: $output_duplicates";
	


?>