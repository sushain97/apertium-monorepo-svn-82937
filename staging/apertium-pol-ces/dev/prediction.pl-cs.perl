#!/usr/bin/perl
# Replacement patterns pl->cs

# Ending "-yka" 
# 	almost always change to "-ika" (sometimes some other letters change: cybernetyka => kybernetika)
#   sometimes change to "-ie" (beletrystyka => beletrie, filatelistyka => filatelie, akrobatyka => akrobacie) 
#   sometimes change to "-ismus" (ezoteryka => esoterismus)
#   sometimes change to "-ikum" (antyseptyka = antiseptikum)
#
# Ending "-alny"
#   either "-ální" or "-alni" (skalny => skalní)
#
# Ending "-zja"
#	usually change to "-zje" (poezja => poezje, fantazja => fantazje)
#

$patterns{"wać\$"} = "vat";
$patterns{"yka\$"} = "ika";
$patterns{"y\$"} = "ý";
$patterns{"alny\$"} = "ální";
$patterns{"lny\$"} = "lní";
$patterns{"jny\$"} = "cký";
$patterns{"wny\$"} = "vní";
$patterns{"owy\$"} = "ový";
$patterns{"dowy\$"} = "dní";
$patterns{"acja\$"} = "ace";
$patterns{"kcja\$"} = "kce";
$patterns{"ncja\$"} = "nce";
$patterns{"ykt\$"} = "ikt";
$patterns{"at\$"} = "át";
$patterns{"gia\$"} = "gija";
$patterns{"owa\$"} = "áva";
$patterns{"awa\$"} = "áva";
$patterns{"ieć\$"} = "ket";
$patterns{"zia\$"} = "zie";
$patterns{"ter\$"} = "tr";

%letters = ('ó' => 'o', 'ł' => 'l', 'ż' => 'ž', 'ń' => 'n'); 

open(INFILE,$ARGV[0]);
while($line = <INFILE>) {
	chomp($line);	
	$plword = $line;

	foreach $letter (keys %letters) {
		$line =~ s/$letter/$letters{$letter}/g;				
	}

	foreach $pattern (keys %patterns) {
        if($line =~ /$pattern/) {
			$tmp = $line;
            $tmp =~ s/$pattern/$patterns{$pattern}/; 
			print "$plword|$tmp\n";
		}
	}
}
close(INFILE);
