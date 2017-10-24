package DicEntry;
# Package to parse dictionary entries
# DicEntry.pm
use warnings;
use strict;
use Carp;


my $D = '"'; # String delimiter in CSV
# TODO : I want to use these later rather than the fixed if-thens in the `_split()' function...
#        ... but it had some issues...
#my %POS_TAGS = (
#	nm =>  (class=>'noun', gender=>'m'),
#	nf =>  (class=>'noun', gender=>'f'),
#	adj => (class=>'adj',  gender=>'NA'),
#	vb =>  (class=>'verb', gender=>'NA'),
#	nm1 => (class=>'noun', gender=>'m'),
#	n =>   (class=>'noun', gender=>'NULL'),
#	nf2=>  (class=>'noun', gender=>'f'),
#	nm4=>  (class=>'noun', gender=>'f'),
#	nf3=>  (class=>'noun', gender=>'f'),
#	prep =>(class=>'prep', gender=>'NA'),
#	nf4 => (class=>'noun', gender=>'f'),
#	adv => (class=>'adv',  gender=>'NA'),
#	nm3 => (class=>'noun', gender=>'m'),
#	pron =>(class=>'pron', gender=>'NA'),
#	adjf =>(class=>'adj',  gender=>'NA'),
#	n2 =>  (class=>'noun', gender=>'NULL'),
#	nn =>  (class=>'noun', gender=>'m') # This was is a typo for `nm' in the data!
#	# art stands for article, but it collides with the English word /art/ 'Kunst'.
#);
my $POS_INFO= 'nm|nf|adj|vb|nm1|n|nf2|nm4|nf3|prep|nf4|adv|nm3|pron|adjf|n2|nn'; # join('|',keys(%POS_TAGS)); # 'nm|nf|adj|vb|nm1|n|nf2|nm4|nf3|prep|nf4|adv|nm3|pron|adjf|n2|nn';


sub new {
	my $class = shift;
	my $self = {@_};
	bless($self, $class);
	return 0 if (!$self->_split() );
	return 0 if ( !defined $self->{entry} );
	return $self;
}


# Public utility function


sub POS_INFO {
	my $self = shift;
	if (ref $self) {
		croak "Should call POS_INFO with a class, not an object"
	}
	return $POS_INFO; # join('|',keys(%POS_TAGS)); # $POS_INFO
}

sub entry {
	my $self = shift;
	unless (ref $self) {
		croak "Should call entry() with an object, not a class";
	}
	return $self->{entry};
}

sub function {
	my $self = shift;
	my $index = shift;
	unless(ref $self) {
		croak "Should call function() with an object, not a class";
	}
	unless ($index < $self->{functions}) {
		croak "Index out of range. call ::functions(), index range goes from 0..(functions-1)"
	}
	return $self->{function}[$index];
}



sub print_csv {
	my $self = shift;
	unless(ref $self) {
		croak "Should call function() with an object, not a class";
	}	
	foreach my $func (@{$self->{function}}) {
		foreach my $mean (@{$func->{meaning}}) {
			print $D,$self->{ga},$D;
			print ',';
			print $D,$mean,$D;
			print ',';
			print $D,$func->{class},$D;
			print ',';
			print $D,$func->{gender},$D;
			print "\n";
			
		}
	}
}


# Private methods

sub _split {
	
	my $self = shift;
	unless (ref $self) {
		croak "Should call _split() with an object, not a class";
	}
	my $entry = $self->{entry};
	
	return 0 if ( $entry !~ /(.*?)\s+((??{$POS_INFO})\s+.*?)$/ );

	# $ga: Gaelic entry (keyword)
	# $defs: definitions of the word (in English)
	my ($ga, $defs) = ($1,$2);
	$self->{ga} = $ga;
	# print STDERR $defs, "\n";

	# $def: each English definition of a Gaelic word
	#       definition includes: meanings and grammatical metainformation
	$self->{functions} = 0;
	$self->{function} = [];

	foreach my $def (split(/; ?/, $defs)) {
		#  print STDERR $def, "\n";
		if ($def =~ /^\s*((??{$POS_INFO}))\s+(?:[([].*[)\]]\s+)?(.*?)(?:\s+[([].*)?$/) {
			# $class: noun, verb, adjective, adverb, preposition, pronoun, etc.
			# $gender: grammatical gender.
			my $class;
			my $gender;
			# $pos: grammatical metainformation from the definition (POS)
			# $en: english meanings (Pl!!) describing a Gaelic word
			my ($pos,$ens) = ($1,$2);
			
			# These metainformation is used:
			($class, $gender) = ('ERROR','ERROR');
			($class, $gender) = ('noun','NULL' ) if ($pos =~ /^n/  );
			($class, $gender) = ('noun','m') if ($pos =~ /^nm/ );
			($class, $gender) = ('noun','f') if ($pos =~ /^nf/ );
			($class, $gender) = ('adj','NA' ) if ($pos =~ /^adj/);
			($class, $gender) = ('adv','NA' ) if ($pos =~ /^adv/);
			($class, $gender) = ('verb','NA') if ($pos =~ /^vb/ );
			($class, $gender) = ('prep','NA') if ($pos =~ /^prep/);
			($class, $gender) = ('pron','NA') if ($pos =~ /^pron/);

			push(@{$self->{function}},{ class=>$class, gender=>$gender, meaning=>[]});

			# $sing_en: a single english corresponding word or phrase
			foreach my $sing_en (split(/, ?/,$ens)) {
				push(@{$self->{function}[$self->{functions}]{meaning}},$sing_en);
				# print '"',$ga,'","',$sing_en,'","',$class,'","',$gender,'"',"\n";

			} # foreach $sing_en
			
		} # if def =~(nm) (.*?)
		$self->{functions} += 1;
	} # foreach my $def

	return 1;
	
}

1;