#!/usr/bin/perl

use warnings;
use strict;
use utf8;

use XML::LibXML::Reader;

binmode(STDOUT, ":utf8");
binmode(STDERR, ":utf8");

my $token="";
my $base="";
my $tags="";

my $DEBUG=1;

print $#ARGV."\n";
print $ARGV[0]."\n";

if ($#ARGV != 0)
{
	print "Usage: frek2apertium.pl input\n";
	exit;
}

my $reader = new XML::LibXML::Reader(location => $ARGV[0]) 
	or die "cannot open input: $ARGV[1]";

while ($reader->read) {
	next if ($reader->name eq "cesAna");
	next if ($reader->name eq "chunk");

	if ($reader->name eq "tok" && $reader->nodeType == XML_READER_TYPE_ELEMENT) {
		$token = '^';
		next;
	}
	if ($reader->name eq "tok" && $reader->nodeType == XML_READER_TYPE_END_ELEMENT) {
		$token .= '$';
		next;
	}

	if ($reader->name eq "orth" && $reader->nodeType == XML_READER_TYPE_ELEMENT) {
		$reader->read;
		$token .= $reader->value if ($reader->name eq "#text");
		print STDERR "orth: $token\n" if ($DEBUG);
		next;
	}
	if ($reader->name eq "orth" && $reader->nodeType == XML_READER_TYPE_END_ELEMENT) {
		$token .= '/';
		next;
	}

	if ($reader->name eq "base" && $reader->nodeType == XML_READER_TYPE_ELEMENT) {
		$reader->read;
		$base = $reader->value if ($reader->name eq "#text");
		print STDERR "base: $base\n" if ($DEBUG);
		next;
	}
	if ($reader->name eq "base" && $reader->nodeType == XML_READER_TYPE_END_ELEMENT) {
		next;
	}

	if ($reader->name eq "ctag" && $reader->nodeType == XML_READER_TYPE_ELEMENT) {
		$reader->read;
		$tags = $reader->value if ($reader->name eq "#text");
		print STDERR "tags: $tags\n" if ($DEBUG);
		next;
	}
	if ($reader->name eq "ctag" && $reader->nodeType == XML_READER_TYPE_END_ELEMENT) {
		next;
	}

}
