#!/usr/bin/perl

use warnings;
use strict;
use utf8;

binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";
binmode STDERR, ":utf8";

while (<>)
{
	# (prawie) całe słowa
	s/\bprzedewszystkiem\b/przede wszystkim/g;
	# nie można zmienić -iem na -im, bo to
	# poprawna końcówka rzeczownikowa
	s/\bwszystkiem\b/wszystkim/g;
	s/\bwysokiem\b/wysokim/g;
	s/\bwielkiem\b/wielkim/g;
	s/\bcennem\b/cennym/g;
	s/\btem\b/tym/g;
	s/\bztąd\b/stąd/g;
	s/\bzkąd\b/skąd/g;
	s/\bmoję\b/moją/g;
	s/\bwogóle\b/w ogóle/g;
	s/\bnietylko\b/nie tylko/g;
	s/\bNietylko\b/Nie tylko/g;
	s/tł[óo]macz/tłumacz/g;

	# litery
	s/([czs])y([aeiouąęó])/$1j$2/g;
	s/([dr])y([aeiouąęó])/$1i$2/g;

	# końcówki
	s/iejszem\b/iejszym/g;
	s/(\pM[^kg])emi/$1ymi/g;
	s/([kg])emi/$1imi/g;
	print;
}
