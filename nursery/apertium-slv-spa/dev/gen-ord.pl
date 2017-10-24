#/usr/bin/perl

use warnings;
use strict;
use utf8;

open (my $sl, ">sl.ord");
open (my $es, ">es.ord");
open (my $sles, ">sl-es.ord");

binmode $sl, ":utf8";
binmode $es, ":utf8";
binmode $sles, ":utf8";

my @es_tens = qw(vigésim trigésim cuadragésim quincuagésim sexagésim 
		septuagésim octogésim nonagésim);
my @es_ones = qw(primer segund terci cuart quint sext séptim octav noven);
my @sl_ones = qw(prv drug tretj četrt pet šest sedm osm devet);
my @sl_tens = qw(dvajset trideset štirideset petdeset šestdeset 
		sedemdeset osemdeset devetdeset);
my @sl_card = qw(ena dva tri štiri pet šest sedem osem devet);

for my $es_mon_ten (@es_tens) {
	for my $es_mon_one (@es_ones) {
		print $es "    <e lm=\"${es_mon_ten}o ${es_mon_one}o\">";
		print $es "<p><l>${es_mon_ten}o<b/>${es_mon_one}o</l>";
		print $es "<r>${es_mon_ten}o<b/>${es_mon_one}o";
		print $es "<s n=\"det\"/><s n=\"ord\"/>";
		print $es "<s n=\"m\"/><s n=\"sg\"/>";
		print $es "</r></p></e>\n";
		print $es "    <e lm=\"${es_mon_ten}o ${es_mon_one}o\">";
		print $es "<p><l>${es_mon_ten}a<b/>${es_mon_one}a</l>";
		print $es "<r>${es_mon_ten}o<b/>${es_mon_one}o";
		print $es "<s n=\"det\"/><s n=\"ord\"/>";
		print $es "<s n=\"f\"/><s n=\"sg\"/>";
		print $es "</r></p></e>\n";
		print $es "    <e lm=\"${es_mon_ten}o ${es_mon_one}o\">";
		print $es "<p><l>${es_mon_ten}os<b/>${es_mon_one}os</l>";
		print $es "<r>${es_mon_ten}o<b/>${es_mon_one}o";
		print $es "<s n=\"det\"/><s n=\"ord\"/>";
		print $es "<s n=\"m\"/><s n=\"pl\"/>";
		print $es "</r></p></e>\n";
		print $es "    <e lm=\"${es_mon_ten}o ${es_mon_one}o\">";
		print $es "<p><l>${es_mon_ten}as<b/>${es_mon_one}as</l>";
		print $es "<r>${es_mon_ten}o<b/>${es_mon_one}o";
		print $es "<s n=\"det\"/><s n=\"ord\"/>";
		print $es "<s n=\"f\"/><s n=\"pl\"/>";
		print $es "</r></p></e>\n";

	}
}

for my $sl_mon_ten (@sl_tens) {
	print $sl "    <e lm=\"${sl_mon_ten}i\">";
	print $sl "<i>${sl_mon_ten}</i>";
	print $sl "<par n=\"prv/i__det\"/></e>\n";
	for my $sl_mon_one (@sl_card) {
		print $sl "    <e lm=\"${sl_mon_one}in${sl_mon_ten}i\">";
		print $sl "<i>${sl_mon_one}in${sl_mon_ten}</i>";
		print $sl "<par n=\"prv/i__det\"/></e>\n";
	}
}

for (my $i = 0; $i <= $#sl_tens; $i++) {
	print $sles "    <e><p><l>$sl_tens[$i]i";
	print $sles "<s n=\"det\"/><s n=\"ord\"/></l><r>$es_tens[$i]o";
	print $sles "<s n=\"det\"/><s n=\"ord\"/></r></p></e>\n";
	for (my $j = 0; $j <= $#sl_card; $j++) {
		print $sles "    <e><p><l>";
		print $sles "$sl_card[$j]in$sl_tens[$i]i";
		print $sles "<s n=\"det\"/><s n=\"ord\"/></l><r>";
		print $sles "$es_tens[$i]o<b/>$es_ones[$j]o";
		print $sles "<s n=\"det\"/><s n=\"ord\"/></r></p></e>\n";
	}
}
