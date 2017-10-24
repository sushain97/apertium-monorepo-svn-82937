#!/usr/bin/perl -w
use warnings;
use strict;
use utf8;
use FindBin;
# use Term::ANSIColor;
# This should use ':utf8' also for diamond operator files:
#use open qw(:std :utf8);
# binmode(STDOUT, ":utf8");
# binmode(STDIN, ":utf8");
# binmode(STDERR, ":utf8");

use lib "$FindBin::Bin/lib";
# use lib qw(./lib);
use DicEntry;


sub split_dicentry($);
sub main();

my $usage =	"$FindBin::Script [-2] [html-file]\n" . 
			"        you can provide input by passing a filename via the command line arguments\n" . 
			"        or by STDIN.\n\n" . 
			"Options:" . 
			"        -c        combine broken lines\n" . 
			"                  [This produces more meanings, as some meanings are broken across\n" . 
			"                   lines, but also produces a lot of garbage in the translated phrases\n" .
			"                   due to the existence of entries without the meta-tags (mn, vb, prep, etc.)]\n\n" .
			"        -d        debug (more verbose output to STDERR\n" .
			"        -utf8     force UTF-8 _output_\n";

my $combine;
my $debug;
my $utf8;

while ($_ = $ARGV[0], /^-/) {
    shift;
    last if /^--$/;
    if (/^-h$/ or /^--help$/) { print $usage; exit 0; }
    if (/^-c$/)     { $combine++;  next; }
    if (/^-d$/)     { $debug++;  next; }
    if (/^-utf8$/)  { $utf8++; next; }
    # ...           # other switches
}

print STDERR @ARGV if ($debug);
print STDERR "POS_INFO: ", DicEntry::POS_INFO() if ($debug);

if ($utf8) {
    binmode(STDOUT, ":utf8");
    print STDOUT "# UTF-8 encoded...\n";
} else {
    print STDOUT "# No encoding conversion. This file is encoded the same way as the input (probably ISO 8859-3 (Turkish, Esperanto, Irish (with dotted g, b, etc.))\n";
}

print STDOUT '# "irish","english","POS","gender"'."\n";
main();



sub main() {
	# This variable is used for buffering lines before processing
	# (to be able to handle broken lines)
	my $buffer = '';

	while (<>) {
		print STDERR "." if ($debug);
	
		# Throw away NEWLINEs
		chomp;
  
		# entries are formatted the following way:
		next if ($_ !~ /\<nobr><span.*?>(.*?)\</);

		# Get the textual entry without the HTML stuff
		my $entry = $1;

		# The lines formatted this way are:
		# ft0: alphabet letter headers
		# ft474: copyright notices
		next if ($_ =~ /span class="ft(0|474)"/);


		# we only want more ore lessintact entries.
		# some are broken across lines
		if ($entry =~ /(.*?) ((??{DicEntry::POS_INFO()}) .*?)$/) {
			# if the buffer is empty (at first read!), do nothing.
			if ($buffer) {
			
				if (my $l = new DicEntry(entry => $buffer)) {
					$l->print_csv();
				} else {
					print STDERR "Could not parse '$buffer'\n"
				}
			
			}
			$buffer = $entry;
			
		} else {
			if ($combine) {
				$buffer .= ' '.$entry;
			} else {
				print STDERR "<context string=\"$buffer\" /> $entry <!-- No POS markers detected -->\n";
			}
		}

	} # while (<>)
	
	# Here empty the buffer!
	if (my $l = new DicEntry(entry => $buffer)) {
		$l->print_csv();
	} else {
		print STDERR "Could not parse '$buffer'\n"
	}
	
	exit 0;
}



