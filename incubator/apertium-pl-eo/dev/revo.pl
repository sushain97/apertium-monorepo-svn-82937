#!/usr/bin/perl

use warnings;
use strict;
use utf8;

binmode STDIN, ":utf8";
#binmode STDOUT, ":utf8";
binmode STDERR, ":utf8";

my $pos;

BEGIN{
print <<'__HEAD__';
<dictionary>
  <alphabet></alphabet>
  <sdefs>
    <sdef n="ij"/>
    <sdef n="n"/>
    <sdef n="np"/>
    <sdef n="adj"/>
    <sdef n="adv"/>
    <sdef n="vblex"/>
  </sdefs>
  <section id="main" type="standard">
__HEAD__
}

END{
print <<'__FOOT__';
  </section>
</dictionary>
__FOOT__
}

sub getpos ($) {
	if (/e$/) {
		return 'adv';
	} elsif (/o$/) {
		return 'n';
	} elsif (/a$/) {
		return 'adj';
	} elsif (/i$/) {
		return 'vblex';
	} elsif (/e\!$/) {
		return 'adv';
	} elsif (/\!$/) {
		return 'ij';
	} else {
		return '<UNK>';
	}
}

sub outword ($$$$) {
	my ($l, $r, $pos, $whole) = @_;
	$pos = getpos($r);
	if ($pos eq "n" && $r =~ /^\p{Lu}/) {
		$pos = "np";
	}
	if ($l =~ s/\!$// || $pos eq 'ij' || $pos eq '<UNK>') {
		$pos = "ij";
	}
	if ($pos eq '<UNK>') {
		print "    <!-- $whole -->\n"
#		return;
	} 

	my $l1 = $l;
	my $l2 = $l;
	my $r1 = $r;
	my $r2 = $r;

	if ($l !~ /[\(\)]/ && $r !~ /[\(\)]/) {
		$l =~ s! !<b/>!g;
		$r =~ s! !<b/>!g;

		print "    <e><p><l>$l<s n=\"$pos\"/></l><r>$r<s n=\"$pos\"/></r></p></e>\n";
		return;
	} elsif ($l =~ /[\(\)]/ && $r !~ /[\(\)]/) {
		$l1 =~ s/\([^\)]*\) ?//;
		$l2 =~ s/[\(\)]//g;
		$l1 =~ s/ *$//g;
		$l1 =~ s/^ *//g;

		$l1 =~ s! !<b/>!g;
		$l2 =~ s! !<b/>!g;
		$r =~ s! !<b/>!g;

		print "    <e><p><l>$l1<s n=\"$pos\"/></l><r>$r<s n=\"$pos\"/></r></p></e>\n";
		print "    <e r=\"LR\"><p><l>$l2<s n=\"$pos\"/></l><r>$r<s n=\"$pos\"/></r></p></e>\n";
		return;
	} elsif ($l !~ /[\(\)]/ && $r =~ /[\(\)]/) {
		$r1 =~ s/\([^\)]*\) ?//;
		$r2 =~ s/[\(\)]//g;
		$r1 =~ s/ *$//g;
		$r1 =~ s/^ *//g;

		$r1 =~ s! !<b/>!g;
		$r2 =~ s! !<b/>!g;
		$l =~ s! !<b/>!g;

		print "    <e><p><l>$l<s n=\"$pos\"/></l><r>$r1<s n=\"$pos\"/></r></p></e>\n";
		print "    <e r=\"RL\"><p><l>$l<s n=\"$pos\"/></l><r>$r2<s n=\"$pos\"/></r></p></e>\n";
		return;
	} else {
		$l1 =~ s/\([^\)]*\) ?//;
		$r1 =~ s/\([^\)]*\) ?//;
		$l2 =~ s/[\(\)]//g;
		$r2 =~ s/[\(\)]//g;
		$l1 =~ s/ *$//g;
		$r1 =~ s/ *$//g;
		$l1 =~ s/^ *//g;
		$r1 =~ s/^ *//g;

		$l1 =~ s! !<b/>!g;
		$l2 =~ s! !<b/>!g;
		$r1 =~ s! !<b/>!g;
		$r2 =~ s! !<b/>!g;

		print "    <e><p><l>$l1<s n=\"$pos\"/></l><r>$r1<s n=\"$pos\"/></r></p></e>\n";
		print "    <e r=\"LR\"><p><l>$l2<s n=\"$pos\"/></l><r>$r1<s n=\"$pos\"/></r></p></e>\n";
		print "    <e r=\"RL\"><p><l>$l1<s n=\"$pos\"/></l><r>$r2<s n=\"$pos\"/></r></p></e>\n";
		return;
	}
	print "    <!-- $whole -->\n"
#	return;	
}

while (<>)
{
	chomp;
	my ($l, $r) = split /: ?/;
	next if (!$r || $r eq '');
	$l =~ s/^ *//;
	$l =~ s/ *$//;
	$r =~ s/,$//;
	$r =~ s/^ *//;
	$r =~ s/ *$//;
	if ($r !~ /[;,]/) {
		outword ($l, $r, $pos, $_);
	} else {
		foreach my $ind (split /[;,] ?/, $r) {
			outword ($l, $ind, $pos, $_);
		}
	}
}
