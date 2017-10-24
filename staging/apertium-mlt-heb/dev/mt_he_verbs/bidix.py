#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy, time;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin)
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
sys.stderr = codecs.getwriter('utf-8')(sys.stderr)
reload(sys); sys.setdefaultencoding("utf-8")

print '  <!-- SECTION: Verbs -->';
print '    <!-- Generated on: ' + time.strftime('%Y-%m-%d %H:%M %Z') + ' -->'; 


for line in file(sys.path[0] + '/verbs-mt-he.csv'):
	if len(line) < 2 or line[0] == '#':
		continue
	
	row = line.split(',')
	
	#maltese, gloss, hebrew
	maltese = row[0].strip()
	hebrew = row[2].strip()
	post = 'vblex' # TODO vaux??
	
	# <e><p><l>kien<s n="vaux"/></l><r>היה<s n="vblex"/></r></p></e>
	print '    <e><p><l>' + maltese + '<s n="' + post + '"/></l><r>' + hebrew + '<s n="vblex"/></r></p></e>'


print '  <!-- END SECTION -->'
