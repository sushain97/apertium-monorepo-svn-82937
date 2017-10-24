
#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

sectlist = ['post', 'cnjcoo', 'prn', 'det', 'num', 'n', 'np', 'adj', 'adv', 'v'];

sections = {
	'post': 'Postpositions',
	'cnjcoo': 'Conjunctions',
	'prn': 'Pronouns',
	'det': 'Determiners',
	'num': 'Numerals',
	'n': 'Nouns',
	'np': 'Proper nouns',
	'adj': 'Adjectives',
	'adv': 'Adverbs',
	'v': 'Verbs'
};

def syms(symlist): #{
	if len(symlist) < 1: #{
		return '';
	#}
	if symlist[0] == '.': #{
		symlist = symlist[1:];
	#}
	symlist = symlist.replace(':', '.');
	output = '';

	for symbol in symlist.strip().split('.'): #{
		output = output + '<s n="' + symbol + '"/>';
	#}

	return output;
#}

categories = {};
symbols = set();
for line in file(sys.argv[1]).read().split('\n'): #{
	if line.count('\t') < 1: #{
		continue;
	#}

	row = line.split('\t');

	cat = '';
	if row[1].count('.') > 0: #{
		cat = row[1].split('.')[0].strip();
		symbols.update(row[1].split('.'));
	else: #{
		cat = row[1].strip();
		symbols.update([cat]);
	#}
	if cat not in categories: #{
		categories[cat] = [];
	#}

	line = '    <e c="' + row[4] + '"><p><l>' + row[0].replace(' ', '<b/>') + syms(row[1]) + '</l><r>' + row[2].replace(' ', '<b/>') + syms(row[3]) + '</r></p></e>'; 
	categories[cat].append(line);
#}

print '<dictionary>';
print '  <alphabet/>';
print '  <sdefs>';
for sym in symbols: #{
	if sym == '': #{
		continue;
	#}
	print '    <sdef n="' + sym + '"     c=""/>';
#}
print '  </sdefs>';
print '  <section id="main" type="standard">';

for cat in sectlist: #{
	print '    <!-- SECTION: ' + sections[cat] + ' -->';
	if cat not in categories: #{
		continue;
	#}
	for line in categories[cat]: #{
		print line;
	#}
	print '';
#}

print '  </section>';
print '</dictionary>';
