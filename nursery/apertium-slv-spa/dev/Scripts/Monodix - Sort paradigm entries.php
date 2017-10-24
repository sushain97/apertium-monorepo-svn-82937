<?php
/*
	
	Sort unsorted/randomly generated paradigm entries by:
	- Person
	- Gender
	- Number

	Last sort - nominative/genitive/... is not implemented.
	
	Input: Paradigm with <par ... </paradigm> tags
	Ouput: Sorted paradigm


*/



	function sortGroup($group_toSort, $type, $start_from) {

	$tmp_sorted_group = array(0 => "", 1 => "", 2 => "", 3 => "", 4 => "", 5 => "", 'flag' => 0);
	$tmp_flag = 0;

		$gr_line = explode("\n", $group_toSort);
		$gr_num_of_lines = count($gr_line);

		for($y = 1; $y < $gr_num_of_lines; $y++) { //For each line we DO:

			$def_start = strrpos($gr_line[$y], "<r>") + 3; //get info where we start with our definitions -- +3 to get rid of <r> tag
			$def_end = strrpos($gr_line[$y], "</r>"); //get info where we END with our definitions

			//length of our definitions
			$def_length = $def_end - $def_start;

			//save data
			$definitions = substr($gr_line[$y], $def_start, $def_length);

			//Now we have our definitions in the $definitions variable 
			//We have to check which properties do they have

			if ($type == 1) {

				//1. X. Person
				if (eregi("n=\"p1\"", $definitions)) { $tmp_sorted_group[0] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				else if (eregi("n=\"p2\"", $definitions)) { $tmp_sorted_group[1] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				else if (eregi("n=\"p3\"", $definitions)) { $tmp_sorted_group[2] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }


			}
			else if ($type == 2) {

				//2. Gender
				if (eregi("n=\"m\"", $definitions)) { $tmp_sorted_group[0] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				if (eregi("n=\"f\"", $definitions)) { $tmp_sorted_group[1] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				if (eregi("n=\"nt\"", $definitions)) { $tmp_sorted_group[2] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				if (eregi("n=\"mf\"", $definitions)) { $tmp_sorted_group[3] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				if (eregi("n=\"mfn\"", $definitions)) { $tmp_sorted_group[4] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }

			}
			else if ($type == 3) {

				if (eregi("n=\"sg\"", $definitions)) { $tmp_sorted_group[0] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				else if (eregi("n=\"du\"", $definitions)) { $tmp_sorted_group[1] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				else if (eregi("n=\"pl\"", $definitions)) { $tmp_sorted_group[2] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }
				else if (eregi("n=\"sp\"", $definitions)) { $tmp_sorted_group[3] .= $gr_line[$y] . "\n"; $tmp_flag = 1; }

			}

		}	

	$tmp_sorted_group['flag'] = $tmp_flag;

	return $tmp_sorted_group;

	} 

	///////// END OF FUNCTIONS //////////

	$content = file_get_contents("paradigms.dix", "r");
	$file_to_save = fopen("sorted.dix", "c+");

	
	$paradigms = explode("</pardef>", $content); //it contains all paradigms - array
	
	//Let's see how many paradigms do we have to sort
	$number_of_para = count($paradigms);

	//and let the fun begin

	for($x = 0; $x < $number_of_para-1; $x++) { //this is what happens to EACH paradigm

	/********* VARIABLES ***********/ 
	//Person
	$flag1 = 0;
	$group1_1;
	$group1_2;
	$group1_3;


	//Gender

	//If PERSON == Present
	//First group => First Person
	$flag2_1 = 0;
	$group2_1 = array(); 
	//Second group => Second Person
	$flag2_2 = 0;
	$group2_2 = array();
	//Third group => Third Person
	$flag2_3 = 0;
	$group2_3 = array();

	//If PERSON != Present
	$flag2 = 0;


	//Number
	//If PERSON and GENDER Present
	$flag3_g3_1 = 0;
	$group3_1 = array();
	$flag3_g3_2 = 0;
	$group3_2 = array();
	$flag3_g3_3 = 0;
	$group3_3 = array();

	//If PERSON PRESENT and GENDER NOT Present
	$flag3_g4_1 = 0;
	$group4_1 = array();
	$flag3_g4_2 = 0;
	$group4_2 = array();
	$flag3_g4_3 = 0;
	$group4_3 = array();

	//If PERSON NOT PRESENT and GENDER Present
	$flag3_g5_1 = 0;
	$group5_1 = array();
	$flag3_g5_2 = 0;
	$group5_2 = array();
	$flag3_g5_3 = 0;
	$group5_3 = array();	

	//If PERSON NOT PRESENT and GENDER NOT Present
	$flag3 = 0;
	$group6_1 = array();
	$group6_2 = array();
	$group6_3 = array();



	/////////////////////////////////////////////////////////////// SORT ///////////////////////////////////////////////////////////////

		//Save the selected paradigm
		$sel_paradigm = $paradigms[$x];

		//Let's split our <e> with \n
		$line = explode("\n", $sel_paradigm);

		//let's get the number of lines
		$num_of_lines = count($line);

		//First step, check and sort by PERSON
		$tmp_paradigm = sortGroup($sel_paradigm, 1, 1); //Whole paradigm with start at 1 (Because 0 is <pardef ...>)

		$group1_1 = $tmp_paradigm[0]; //First person
		$group1_2 = $tmp_paradigm[1]; //Second person
		$group1_3 = $tmp_paradigm[2]; //Third person

		$flag1 = $tmp_paradigm['flag'];

		//Second step, Check and sort by GENDER

		if ($flag1 == 1) { //If it was sorted by PERSON - PERSON PRESENT

			//Group1_1
			$tmp1 = sortGroup($group1_1, 2, 0);

			$group2_1[0] = $tmp1[0];
			$group2_1[1] = $tmp1[1];
			$group2_1[2] = $tmp1[2];
			$group2_1[3] = $tmp1[3];
			$group2_1[4] = $tmp1[4];
				
			$flag2_1 = $tmp1['flag'];

			//Group1_2
			$tmp2 = sortGroup($group1_2, 2, 0);

			$group2_2[0] = $tmp2[0];
			$group2_2[1] = $tmp2[1];
			$group2_2[2] = $tmp2[2];
			$group2_2[3] = $tmp2[3];
			$group2_2[4] = $tmp2[4];
				
			$flag2_2 = $tmp2['flag'];

			//Group1_3
			$tmp3 = sortGroup($group1_3, 2, 0);

			$group2_3[0] = $tmp3[0];
			$group2_3[1] = $tmp3[1];
			$group2_3[2] = $tmp3[2];
			$group2_3[3] = $tmp3[3];
			$group2_3[4] = $tmp3[4];
				
			$flag2_3 = $tmp3['flag'];

		}
		else if ($flag1 == 0) { //If it was NOT sorted by PERSON - PERSON NOT PRESENT

		//First step AGAIN, check and sort by GENDER
		if (eregi("<pardef ", $line[0])) { $start = 1; } else { $start = 0; } 
		$tmp_paradigm = sortGroup($sel_paradigm, 2, $start); //Whole paradigm with start at 1 (Because 0 is <pardef ...>)

		$group2_1[0] = $tmp_paradigm[0]; //First person
		$group2_2[0] = $tmp_paradigm[1]; //Second person
		$group2_3[0] = $tmp_paradigm[2]; //Third person

		$flag2 = $tmp_paradigm['flag'];

		}

		//Third step, Check and sort by Numeral (Singular, Dual, Plural, Singular-Plural
		if ($flag1 == 1) { //If it was sorted by PERSON - PERSON PRESENT

			if ($flag2_1 == 1 || $flag2_2 == 1 || $flag2_3 == 1) { //If it was sorted by GENDER - GENDER PRESENT
				
				//Group2_1
				for($b = 0; $b < 5; $b++) {

					$tmp_grp = sortGroup($group2_1[$b], 3, 0);

					$group3_1[$b][0] = $tmp_grp[0];
					$group3_1[$b][1] = $tmp_grp[1];
					$group3_1[$b][2] = $tmp_grp[2];
					$group3_1[$b][3] = $tmp_grp[3];

					$flag3_g3_1  = $tmp_grp['flag'];

				}
				//Group2_2
				for($b = 0; $b < 5; $b++) {

					$tmp_grp = sortGroup($group2_2[$b], 3, 0);

					$group3_2[$b][0] = $tmp_grp[0];
					$group3_2[$b][1] = $tmp_grp[1];
					$group3_2[$b][2] = $tmp_grp[2];
					$group3_2[$b][3] = $tmp_grp[3];

					$flag3_g3_2 = $tmp_grp['flag'];

				}
				//Group2_3
				for($b = 0; $b < 5; $b++) {

					$tmp_grp = sortGroup($group2_3[$b], 3, 0);

					$group3_3[$b][0] = $tmp_grp[0];
					$group3_3[$b][1] = $tmp_grp[1];
					$group3_3[$b][2] = $tmp_grp[2];
					$group3_3[$b][3] = $tmp_grp[3];

					$flag3_g3_3 = $tmp_grp['flag'];

				}


			}
			else { //If it was NOT sorted by GENDER - GENDER NOT PRESENT

				//Group1_1 - First person
				$tmp1 = sortGroup($group1_1, 3, 0);

				$group4_1[0] = $tmp1[0];
				$group4_1[1] = $tmp1[1];
				$group4_1[2] = $tmp1[2];
				$group4_1[3] = $tmp1[3];
				
				$flag3_g4_1 = $tmp1['flag'];

				//Group1_2 - Second person
				$tmp2 = sortGroup($group1_2, 3, 0);

				$group4_2[0] = $tmp2[0];
				$group4_2[1] = $tmp2[1];
				$group4_2[2] = $tmp2[2];
				$group4_2[3] = $tmp2[3];
				
				$flag3_g4_2 = $tmp2['flag'];

				//Group1_3 - Third person
				$tmp3 = sortGroup($group1_3, 3, 0);

				$group4_3[0] = $tmp3[0];
				$group4_3[1] = $tmp3[1];
				$group4_3[2] = $tmp3[2];
				$group4_3[3] = $tmp3[3];
				
				$flag3_g4_3 = $tmp3['flag'];


			}

		} 
		else { //If it was NOT sorted by PERSON - PERSON NOT PRESENT

			if ($flag2 == 1) { //If it was sorted by GENDER - GENDER PRESENT
	
				//Group2_1 - First person
				$tmp1 = sortGroup($group2_1[0], 3, 0);

				$group5_1[0] = $tmp1[0];
				$group5_1[1] = $tmp1[1];
				$group5_1[2] = $tmp1[2];
				$group5_1[3] = $tmp1[3];
				
				$flag3_g5_1 = $tmp1['flag'];

				//Group2_2 - Second person
				$tmp2 = sortGroup($group2_2[0], 3, 0);

				$group5_2[0] = $tmp2[0];
				$group5_2[1] = $tmp2[1];
				$group5_2[2] = $tmp2[2];
				$group5_2[3] = $tmp2[3];
				
				$flag3_g5_2 = $tmp2['flag'];

				//Group2_3 - Third person
				$tmp3 = sortGroup($group2_3[0], 3, 0);

				$group5_3[0] = $tmp3[0];
				$group5_3[1] = $tmp3[1];
				$group5_3[2] = $tmp3[2];
				$group5_3[3] = $tmp3[3];
				
				$flag3_g5_3 = $tmp3['flag'];


			}
			else if ($flag2 == 0) { //If it was NOT sorted by GENDER - GENDER NOT PRESENT

				//First step AGAIN, check and sort by NUMBER
				$tmp_paradigm = sortGroup($sel_paradigm, 3, 1); //Whole paradigm with start at 1 (Because 0 is <pardef ...>)

				$group6_1[0] = $tmp_paradigm[0]; //First person
				$group6_2[0] = $tmp_paradigm[1]; //Second person
				$group6_3[0] = $tmp_paradigm[2]; //Third person

				$flag3 = $tmp_paradigm['flag'];



			}

		}



	/////////////////////////////////// PRINT ///////////////////////////////////

	if ($line[0] == "") {

		$check = true;
		$counter = 1;

		while($check) {

			if ($line[0] == "" && eregi("<pardef ", $line[$counter])) { $line[0] = $line[$counter]; $check = false;}
			else { $counter++; }

		}

	}

		if ($flag1 == 1) { //If Person PRESENT

			if ($flag2_1 == 1 || $flag2_2 == 1 || $flag2_3 == 1) { //If Gender PRESENT

				if ($flag3_g3_1 == 1 || $flag3_g3_2 == 1 || $flag3_g3_3 == 1) { //If Number PRESENT (PERSON + GENDER + NUMBER)
				
					echo $line[0] . "\n";

					for($a = 0; $a < 5; $a++) { 
						for($c = 0; $c < 4; $c++) {

							if ($group3_1[$a][$c] != "") { echo $group3_1[$a][$c] . "\n"; }
						}
					}

					for($a = 0; $a < 5; $a++) { 
						for($c = 0; $c < 4; $c++) {

							if ($group3_2[$a][$c] != "") { echo $group3_2[$a][$c] . "\n"; }
						}
					}

					for($a = 0; $a < 5; $a++) { 
						for($c = 0; $c < 4; $c++) {

							if ($group3_3[$a][$c] != "") { echo $group3_3[$a][$c] . "\n"; }
						}
					}
	
					echo "</pardef>" . "\n\n";

				}
				else { //If Number NOT PRESENT (PERSON + GENDER)

					echo $line[0] . "\n";

					if ($group2_1[0] != "") { echo $group2_1[0] . "\n\n"; }
					if ($group2_1[1] != "") { echo $group2_1[1] . "\n\n"; }
					if ($group2_1[2] != "") { echo $group2_1[2] . "\n\n"; }
					if ($group2_1[3] != "") { echo $group2_1[3] . "\n\n"; }
					if ($group2_1[4] != "") { echo $group2_1[4] . "\n\n"; }

					if ($group2_2[0] != "") { echo $group2_2[0] . "\n\n"; }
					if ($group2_2[1] != "") { echo $group2_2[1] . "\n\n"; }
					if ($group2_2[2] != "") { echo $group2_2[2] . "\n\n"; }
					if ($group2_2[3] != "") { echo $group2_2[3] . "\n\n"; }
					if ($group2_2[4] != "") { echo $group2_2[4] . "\n\n"; }

					if ($group2_3[0] != "") { echo $group2_3[0] . "\n\n"; }
					if ($group2_3[1] != "") { echo $group2_3[1] . "\n\n"; }
					if ($group2_3[2] != "") { echo $group2_3[2] . "\n\n"; }
					if ($group2_3[3] != "") { echo $group2_3[3] . "\n\n"; }
					if ($group2_3[4] != "") { echo $group2_3[4] . "\n\n"; }

					echo "</pardef>" . "\n\n";
				}

			}
			else { //If Gender NOT PRESENT

				if ($flag3_g4_1 == 1 || $flag3_g4_2 == 1 || $flag3_g4_3 == 1) { //If Number PRESENT (PERSON + NUMBER)
				
					echo $line[0] . "\n";

					if ($group4_1[0] != "") { echo $group4_1[0] . "\n\n"; }
					if ($group4_1[1] != "") { echo $group4_1[1] . "\n\n"; }
					if ($group4_1[2] != "") { echo $group4_1[2] . "\n\n"; }
					if ($group4_1[3] != "") { echo $group4_1[3] . "\n\n"; }

					if ($group4_2[0] != "") { echo $group4_2[0] . "\n\n"; }
					if ($group4_2[1] != "") { echo $group4_2[1] . "\n\n"; }
					if ($group4_2[2] != "") { echo $group4_2[2] . "\n\n"; }
					if ($group4_2[3] != "") { echo $group4_2[3] . "\n\n"; }

					if ($group4_3[0] != "") { echo $group4_3[0] . "\n\n"; }
					if ($group4_3[1] != "") { echo $group4_3[1] . "\n\n"; }
					if ($group4_3[2] != "") { echo $group4_3[2] . "\n\n"; }
					if ($group4_3[3] != "") { echo $group4_3[3] . "\n\n"; }

					echo "</pardef>" . "\n\n";

				}
				else { //If Number NOT PRESENT (PERSON)

					echo $line[0] . "\n";

					if ($group1_1 != "") { echo $group1_1 . "\n"; }
					if ($group1_2 != "") { echo $group1_2 . "\n"; }
					if ($group1_3 != "") { echo $group1_3 . "\n"; }

					echo "</pardef>" . "\n\n";
				}

			}
		

		}
		else if ($flag1 == 0) { //If Person NOT PRESENT

			if ($flag2 == 1) { //if Gender Present

				if ($flag3_g5_1 == 1 || $flag3_g5_2 == 1 || $flag3_g5_3 == 1) { //If Number PRESENT (GENDER + NUMBER)
				
					echo $line[0] . "\n";

					if ($group5_1[0] != "") { echo $group5_1[0] . "\n\n"; }
					if ($group5_1[1] != "") { echo $group5_1[1] . "\n\n"; }
					if ($group5_1[2] != "") { echo $group5_1[2] . "\n\n"; }
					if ($group5_1[3] != "") { echo $group5_1[3] . "\n\n"; }

					if ($group5_2[0] != "") { echo $group5_2[0] . "\n\n"; }
					if ($group5_2[1] != "") { echo $group5_2[1] . "\n\n"; }
					if ($group5_2[2] != "") { echo $group5_2[2] . "\n\n"; }
					if ($group5_2[3] != "") { echo $group5_2[3] . "\n\n"; }

					if ($group5_3[0] != "") { echo $group5_3[0] . "\n\n"; }
					if ($group5_3[1] != "") { echo $group5_3[1] . "\n\n"; }
					if ($group5_3[2] != "") { echo $group5_3[2] . "\n\n"; }
					if ($group5_3[3] != "") { echo $group5_3[3] . "\n\n"; }

					echo "</pardef>" . "\n\n";

				}
				else { //If Number NOT PRESENT (GENDER)

					echo $line[0] . "\n";

					if ($group2_1[0] != "") { echo $group2_1[0] . "\n"; }
					if ($group2_2[0] != "") { echo $group2_2[0] . "\n"; }
					if ($group2_3[0] != "") { echo $group2_3[0] . "\n"; }

					echo "</pardef>" . "\n\n";
				}

			}
			else { //if GENDER NOT Present

				if ($flag3 == 1) { //If Number PRESENT (NUMBER)
				
					echo $line[0] . "\n";

					if ($group6_1[0] != "") { echo $group6_1[0] . "\n\n"; }
					if ($group6_1[1] != "") { echo $group6_1[1] . "\n\n"; }
					if ($group6_1[2] != "") { echo $group6_1[2] . "\n\n"; }
					if ($group6_1[3] != "") { echo $group6_1[3] . "\n\n"; }

					if ($group6_2[0] != "") { echo $group6_2[0] . "\n\n"; }
					if ($group6_2[1] != "") { echo $group6_2[1] . "\n\n"; }
					if ($group6_2[2] != "") { echo $group6_2[2] . "\n\n"; }
					if ($group6_2[3] != "") { echo $group6_2[3] . "\n\n"; }

					if ($group6_3[0] != "") { echo $group6_3[0] . "\n\n"; }
					if ($group6_3[1] != "") { echo $group6_3[1] . "\n\n"; }
					if ($group6_3[2] != "") { echo $group6_3[2] . "\n\n"; }
					if ($group6_3[3] != "") { echo $group6_3[3] . "\n\n"; }

					echo "</pardef>" . "\n\n";

				}
				else { //If Number NOT PRESENT (NOTHING)

					echo $sel_paradigm;
					echo "</pardef>" . "\n\n";

				}
			}


		}

	}


?>	
