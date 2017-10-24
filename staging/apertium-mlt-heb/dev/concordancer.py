#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy;

def concord ():
	for line in infile.read().decode('utf-8').split('\n'): #{
	#	loc = line.find(' ' + findstring + ' ');
		loc = line.find(findstring);

		if loc <= 0: #{
			continue;
		#}

		lgt = len(line);

		mid = lgt / 2;

		text_len = len(findstring);	

		start = loc - 50
		end = loc + 50;

		conc = None
		if start < 0 and end > lgt: #{
			diff = 50 - loc;
			pad = '';
			for x in range(diff): #{
				pad = pad + ' ';
			#}

			conc = '%' + pad + ' ' + line[0:loc] + ' ' + line[loc:end]
		elif start > 0 and end > lgt: #{
			conc = '+' + ' ' + line[start:loc] + ' ' + line[loc:end]

		elif start < 0 and end < lgt: #{
			diff = 50 - loc;
			pad = '';
			for x in range(diff): #{
				pad = pad + ' ';
			#}
			conc = '-' + pad + ' ' + line[0:loc] + ' ' + line[loc:end]

		else: #{
			diff = 50 - loc;
			pad = '';
			for x in range(diff): #{
				pad = pad + ' ';
			#}
			conc = ' ' + pad + ' ' + line[start:loc] + ' ' + line[loc:end]
		#}

		if conc:
			print conc.encode('utf-8')

		sys.stdout.flush()

	#	print loc , lgt, mid;
	#}

if __name__ == '__main__':
	if len(sys.argv) < 2: #{
		print 'Usage: python concordance.py [<file>] "string"';
		print '';
		print '       If no input file specified, reads on stdin';
		print '';
		sys.exit(-1);
	elif len(sys.argv) < 3: #{
		infile = sys.stdin;
		findstring = sys.argv[1].decode('utf-8');
	elif len(sys.argv) < 4: #{
		infile = file(sys.argv[1]);
		findstring = sys.argv[2].decode('utf-8');
	#}
	try:
		concord()
	except IOError:		# ie. Broken pipe
		exit
