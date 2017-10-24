#!/usr/bin/perl

use warnings;
use strict;
#use utf8;

my @line;
my $inf;
my @forms;
my @pers;
my $reading = 0;
my $infline = 0;
my $first = 1;
my $curpers;
my $curtense;
my $DEBUG = 0;

my @tense = qw(pri past fut);

#binmode STDIN, ':encoding(UTF-8)'; 
#binmode STDOUT, ':encoding(UTF-8)';

sub person ($)
{
	my $_ = shift;
	return 'p1.sg' if (/Es/);
	return 'p2.sg' if (/Tu/);
	return 'p3.sp' if (/Viņš; viņa/);
	return 'p1.pl' if (/Mēs/);
	return 'p2.pl' if (/Jūs/);
	return 'p3.sp' if (/Viņi; viņas/);
	return "";
}

sub resetvar ()
{
	$inf = "";
	$curpers = "";
	@forms = ();
	@pers = ();
	$reading = 0;
}

sub dumpverb ()
{
	my $i; # Yeah, yeah, C-ism
	die "Error with $inf\n" if ($#forms != $#pers);
	print "$inf;$inf;inf;vblex;\n";
	for ($i=0;$i<=$#forms;$i++)
	{
		print "$inf;$forms[$i];$pers[$i];vblex;\n";
	}
	resetvar();
}

while (<>)
{
	if ((/Table/) && ($first == 1)) {$first = 0;next;};
	if ((/Table/) && ($first != 1)) {dumpverb(); next;};
	if ($_ =~ /Nenoteiksme/) {$infline = 1;next;};
	if (($infline == 1) && ($_ =~ /,/))
	{
		@line = split /,/;
		$inf = $line[1];
		print "Got Infinitive: $inf\n" if $DEBUG;
		$infline = 0;
		next;
	};
	if (($infline != 1) && ($_ =~ /,/))
	{
		next if (/Darbības vārdu locīšana/);
		next if (/Īstenības izteiksme/);
		next if (/Tagadne/);
		chomp;
		print "Processing line: $_\n" if $DEBUG;
		@line = split /,/;
		$curpers = $line[0];
		next if ($curpers eq " ");
		print "Current person: $curpers:". person($curpers)."\n" if $DEBUG;
		shift(@line);
		my $i;
		for ($i=0;$i<=$#line;$i++)
		{
			if ($line[$i] !~ /;/) {
				print "$line[$i], $tense[$i]\n" if $DEBUG;
				$line[$i] =~ s/\n//g;
				push (@forms, $line[$i]);
				$curtense = "$tense[$i]." . person($curpers);
				push (@pers, $curtense);
			}
			else {
				my @group = split(/; /, $line[$i]);
				for (my $j = 0; $j <= $#group;$j++) {
					push (@forms, $group[$j]);
					$curtense = "$tense[$i]." . person($curpers);
					push (@pers, $curtense);
				}
			}
		}
		next;
	};
}
