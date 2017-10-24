#!/usr/bin/perl

use warnings;
use strict;

my $parname;
 
while (<>) {
	print;
	if (/"ref"/) {
		if (s!<s n="inf"/></r></p>!</r></p><par n="smie/damies__pprs_act"/>!) {
			s!ties</l>!</l>!;
			s!s</l>!z</l>!;
			print;
		}
	} else {
		if (s!<s n="inf"/></r></p>!</r></p><par n="mez/dams__pprs_act"/>!) {
			s!t</l>!</l>!;
			s!s</l>!z</l>!;
			print;
		}
	}
}
