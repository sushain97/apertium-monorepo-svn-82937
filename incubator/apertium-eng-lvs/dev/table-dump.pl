#!/usr/bin/perl

use HTML::TableExtract;

local (*FH);
open (FH, $ARGV[0]) or die "error\n";
my $text = do { local($/); <FH> };

$te = HTML::TableExtract->new(depth => 6, count => 0);
$te->parse($text);
foreach $ts ($te->tables) {
  print "Table with border=1 found at ", join(',', $ts->coords), ":\n";
  foreach $row ($ts->rows) {
     print "   ", join(',', @$row), "\n";
  }
}

