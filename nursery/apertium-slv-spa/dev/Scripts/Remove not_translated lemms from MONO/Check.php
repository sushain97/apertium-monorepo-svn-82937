<?php

/*

	Input1: Monodix entries
	Input2: Bidix entries
	
	Output: Monodix with entries that "exist" in the bidix


*/

	$content1 = file_get_contents("SL_monodix.txt", "r");
	$content2 = file_get_contents("Bidix.txt", "r");
	
	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);
	
	$sorted_output = "";
	$garbage_output = "";
	
	foreach ($lines as $line => $key) {
			
		$lemma = explode("\"", $key);
		$lemma_flag = 0;
		
		$iskana_lemma = $lemma[1]; //lemma za iskat po bidixu
		$iskana_lemma_vrsta = $lemma[3]; //ime paradigme
		
		//Izlocimo nepotrebne podatke iz imena paradigme (potrebujemo le vblex, n, adj, adv, ...)
		$pozicija = strripos($iskana_lemma_vrsta, "__"); //Poisce zadnjo pojavitev stringa __
		$dolzina = strlen($iskana_lemma_vrsta);
		
		$iskana_lemma_vrsta_koncnica = substr($iskana_lemma_vrsta, $pozicija+2, ($dolzina-$pozicija-2));
		
		//Gremo iskat po bidixu
		
		foreach ($lines2 as $line2 => $key2) {
			
			if (strpos($key2, "<e><p><l>$iskana_lemma<s") !== false && strpos($key2, "<s n=\"$iskana_lemma_vrsta_koncnica\"") !== false) { //nasa lemma 
				
					$sorted_output .= $key . "\n";
					$lemma_flag++;
			}
			
		}
		
		if($lemma_flag == 0) {
			
			$garbage_output .= $key . "\n";
			//fwrite($fh, $key2 . "\n");
		}
	
	}
	
	//fclose($fh);
	
	echo $sorted_output;
	echo "\n\n\nGARBAGE:\n\n";
	echo $garbage_output;

	

?>