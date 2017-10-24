<?php

	/*
	
		Custom form: 220 ^@parlamentaren<adj>$parlamentario
		
		$main_tag = which file to read
		
		Output: Bidix form
	
	
	*/



	$main_tag = "vblex";

	$content1 = file_get_contents("Spisek_$main_tag.txt", "r");

	$lines = explode("\n", $content1);

	$output = "";
	$output2 = "";
	
	foreach ($lines as $line => $key) {
		
		$razdelitev = explode("@", $key);
		
		$pravi_del = $razdelitev[1];
		$pozicija_taga = strpos($pravi_del, "<");
		
	    $lema1 = substr($pravi_del, 0, $pozicija_taga);
	
		$razdelitev2 = explode("\$", $pravi_del);
		
		$lema2 = $razdelitev2[1];
		
		if(strpos($lema2, "--") === FALSE) { //Ce je dejansko lema
			
			//Generiramo bidix obliko
			$output .= ("<e><p><l>$lema1<s n=\"$main_tag\"/></l><r>$lema2<s n=\"$main_tag\"/></r></p></e>\n");
			
		}
		else {
			
			$output2 .= ("<e><p><l>$lema1<s n=\"$main_tag\"/></l><r>NI<s n=\"$main_tag\"/></r></p></e>\n");
			
		}
		
	}
	
	
	echo "GENERIRANO:\n\n$output";
	echo "\n\nFAIL: $output2";
	


?>