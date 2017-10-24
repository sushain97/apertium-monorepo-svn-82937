#!/usr/bin/env python

import sys;

def tagToSym(s): #{
	out = '';
	for c in s: #{
		if c == '<': #{
			out = out + '<s n="';
			continue;
		#}
		if c == '>': #{
			out = out + '"/>';
			#continue;
			return out;
		#}
		out = out + c;
	#}
	return out;
#}

# ^right# of way<n><sg>$
# ^right way<n><sg>$

for line in sys.stdin.readlines(): #
	line = line.strip();
	lemh = '';	
	lemq = '';
	tags = '';
	out = '';
	if line.count('#') > 0: #{
		lemh = line.split('#')[0];
		lemq = line.split('#')[1].split('<')[0].replace(' ', '<b/>');
		tags = '<' + '<'.join(line.split('<')[1:]);
	else: #{
		lemh = line.split('<')[0].replace(' ', '<b/>');
		tags = '<' + '<'.join(line.split('<')[1:]);
	#}
	if lemq == '': #{
		print('<e><i>%s%s</i></e>' % (lemh, tagToSym(tags)));
	else: #{
		print('<e><i>%s<g>%s</g>%s</i></e>' % (lemh, lemq.replace(' ', '<b/>'), tagToSym(tags)));
	#}
#}
