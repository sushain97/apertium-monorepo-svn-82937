import sys;

#n    ^225/225<num>$ ^барацьбе/барацьба$
#j    ^225/225<num>$ ^асобныя/асобны$
#j    ^225/225<num>$ ^асноўныя/асноўны$

entries = {};

proper = ['t', 'k', 'ž'];

for line in sys.stdin.readlines(): #{
	if line.strip() == '': #{
		continue;
	#}

	category = line.split(' ')[0];
	lemma = line.split('/')[2].split('$')[0];
	freq = int(line.split('^')[1].split('/')[0]);

	if lemma[0] == '*': #{
		print('+unprocessed:', line, file=sys.stderr);
		continue;
	#}
	if category not in proper: #{
		lemma = lemma.lower();
	#}

	if (lemma, category) not in entries: #{
		entries[(lemma, category)] = 0;
	#}	

	entries[(lemma, category)] = entries[(lemma, category)] + freq;
#}

for entry in entries: #{

	print(entries[entry], '\t', entry[1], '\t', entry[0]);
#}
