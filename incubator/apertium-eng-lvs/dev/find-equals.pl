#!/usr/bin/perl

use warnings;
use strict;

my $lv;
my $eng;
my $enp;

sub trim($)
{
	my $string = shift;
	$string =~ s/^\s+//;
	$string =~ s/\s+$//;
	return $string;
}

sub entrim($)
{
	my $string = shift;
	$string =~ s/^\s+//;
	$string =~ s/^a\s+//;
	$string =~ s/^an\s+//;
	$string =~ s/^the\s+//;
	$string =~ s/^to\s+//;
	$string =~ s/\s+$//;
	return $string;
}

while (<>)
{
	($lv, $eng, $enp) = split ";", $_;
	chomp $lv;
	chomp $enp;
	chomp $eng;
	if (lc(entrim($eng)) eq lc(entrim($enp)))
	{
		print "    <e><p><l>" . entrim($enp) . "<s n=\"n\"/></l><r>" . trim($lv)."<s n=\"n\"/><s n=\"GD\"/></r></p></e>\n";
	}
}


