#!/usr/bin/perl

use warnings;
use strict;
use utf8;

binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";
binmode STDERR, ":utf8";

my $reading = 0;
my $dump = 0;

while (<>)
{
#	chomp;
	if ($dump) {
		if (/{{składnia}}/) {
			$dump = 0;
		} else {
			s/: \(\d+.\d+\) ?//; 
			print;
		}
	}
	if (/\({{([^}]*)}}\)/) {
		if ($1 eq "język dolnołużycki") {
			$reading = 1;
		} else {
			$reading = 0;
		}
	}
	if ($reading && /{{przykłady}}/) {
		$dump = 1;
	}
	if (/<\/text>/) {
		$reading = 0;
	}
}
