<?php

/*

	Input1: List of verbs (bidix entries) (without aspect)
	Example of List1: <e><p><l>'pogrešiti'<s n="vblex"/></l><r>'extrañar'<s n="vblex"/></r></p>
	
	Input2: List of aspects (manually remove ^) (Generated in step 1)
	Example of List2: navezati/navezati<vblex><perf><inf>$./.<sent>$


	Output: Bidix entries - Added imperf / perf paradigms in bidix


*/

	$content1 = file_get_contents("List1.txt", "r");
	$content2 = file_get_contents("awk_out.txt", "r");

	$lines = explode("\n", $content1);
	$lines2 = explode("\n", $content2);

	$output = "";
	
	foreach ($lines as $line => $key) {
		
		$lemmas = explode("'", $key);
		
		$slo_lemma = $lemmas[1];
		
		$flag1 = 0;
		
		if ($key != "") {
			
			foreach ($lines2 as $line2 => $key2) {
				
				$slo_lemma_spisek = explode("/", $key2);
				
				if($flag1 == 0) {
				
					if($slo_lemma_spisek[0] == $slo_lemma) {
					
						if(strpos($key2, "<imperf>") !== FALSE) {//Potem je imperf
						
							$output .= $key . "<par n=\"imperf\"/></e>" . "\n";
							$flag1++;
						
						}
						else if(strpos($key2, "<perf>") !== FALSE) {//Potem je imperf
						
							$output .= $key . "<par n=\"perf\"/></e>" . "\n";
							$flag1++;
						
						}
						else {
							
							$output .= $key . "</e>" . "\n";
							$flag1++;
							
						}
					
					}
					
				}
				
			}
			
		}
		else { $output .= "\n"; }
	
	}
	
	echo $output;


?>