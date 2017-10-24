#!/usr/bin/perl

use warnings;
use strict;
use utf8;

binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";
binmode STDERR, ":utf8";

my @cas = qw(nom gen dat acc voc loc ins);
my %gen = (
	"i" => "mi",
	"f" => "f",
	"n" => "nt",
	"m" => "ma",
	);
my %num = (
	"s" => "sg",
	"p" => "pl",
	);

while (<>) {
	my ($sf, $lem, $tag) = split/\t/, $_;
	if ($tag =~ /SS([mifn])([sp])([1-7])/) {
		print "$lem; $sf; ".$gen{$1}.".".$num{$2}.".".$cas[$3-1]."; n\n";
	}
}


