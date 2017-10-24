#!usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys, codecs, copy, Ft, os;
from Ft.Xml.Domlette import NonvalidatingReader;
from Ft.Xml.XPath import Evaluate;

sys.stdin  = codecs.getreader('utf-8')(sys.stdin);
sys.stdout = codecs.getwriter('utf-8')(sys.stdout);
sys.stderr = codecs.getwriter('utf-8')(sys.stderr);

# Load the rulez (NO RULEZ!!!)
rulez = sys.argv[1];

if rulez == os.path.basename(rulez): #{
	rulez = os.getcwd() + '/' + rulez;
#}

doc = NonvalidatingReader.parseUri('file:///' + rulez);
path = '/transfer/section-rules/rule';
i = 0;

cats = {};
rule_pattern = [];

for node in Ft.Xml.XPath.Evaluate('/transfer/section-def-cats/def-cat', contextNode=doc): #{
        name = node.getAttributeNS(None, 'n');
	
	print name ;
	if name not in cats: #{
		cats[name] = [];
	#}	

	for child in Ft.Xml.XPath.Evaluate('.//cat-item', contextNode=node): #{
		lemma = child.getAttributeNS(None, 'lemma');
		tags = child.getAttributeNS(None, 'tags');

		print ' ' , lemma , tags;
		cats[name].append((lemma, tags));
	#}
#}

for node in Ft.Xml.XPath.Evaluate(path, contextNode=doc): #{
        rule_comment = node.getAttributeNS(None, 'comment');
	
	print rule_comment ;

	for child in Ft.Xml.XPath.Evaluate('.//pattern', contextNode=node): #{
		for patro in Ft.Xml.XPath.Evaluate('.//pattern-item', contextNode=child): #{
			name = patro.getAttributeNS(None, 'n');

			print ' ' , cats[name];

		#}
	#}

	i = i + 1;
#}

for p in rule_patterns: #{
	print rule_patterns[p];
#} 
