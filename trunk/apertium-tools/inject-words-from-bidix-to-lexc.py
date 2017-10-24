#!/usr/bin/env python3

### THIS SCRIPT DOESN'T WORK YET

# Previous strategy not so great:
# IFS=$'\n'; for rawword in `grep "\!\"Use\/MT\"" apertium-kaz.kaz.lexc | cut -d':' -f1`; do word=`echo $rawword | sed 's:% :<b />:g'`; rawtranslation=`grep ">$word<" ../../staging/apertium-eng-kaz/apertium-eng-kaz.eng-kaz.dix | sed 's/.*<l>//' | sed 's/<.*//'`; translation=`echo $rawtranslation | sed 's/\n/; /g'`; echo $word : $translation; sed -E "s|$rawword:$rawword (\w+) ;\s*\!\"Use\/MT\"|$rawword:$rawword \1 ; \! \"$translation\" \! Use/MT \! translation from kaz-eng bidix|" apertium-kaz.kaz.lexc_orig > apertium-kaz.kaz.lexc_modified; cp apertium-kaz.kaz.lexc_modified apertium-kaz.kaz.lexc_orig ;  done;

import sys
import re
from lxml import etree

#unglossedLine = re.compile("^\w+:\w+\s+[\w+]\s*;\s*((?!\"\w+\").)*")
#unglossedLine = re.compile("^[\w% -]+:[\w% -]+\s+[\w-]+\s*;\s*(?!\"\w+\").*")
entryLine = re.compile("^[\w% -]+:[\w% -]+\s+[\w-]+\s*;")
hasTranslation = re.compile (";\s*!\s*\"(.+)\"")
entryParser = re.compile("^([\w% -]+):([\w% -]+)\s+([\w-]+)\s*;\s*(.*)")
#commentsHasGloss = re.compile("!\s*


lexcfile = sys.argv[1]
dixfile = sys.argv[2]

dixL = re.sub('.*\.([a-z]{2,3})-([a-z]{2,3})\.dix', '\g<1>', dixfile)
dixR = re.sub('.*\.([a-z]{2,3})-([a-z]{2,3})\.dix', '\g<2>', dixfile)
lexcLg = re.sub('.*\.([a-z]{2,3})\.lexc', '\g<1>', lexcfile)

#print(dixL, dixR, lexcLg)

if lexcLg == dixL:
	dixdirection = 'l'
	dixopposite = 'r'
elif lexcLg == dixR:
	dixdirection = 'r'
	dixopposite = 'l'
else:
	dixdirection = None
	dixopposite = None

#print(dixdirection)

def getUnglossedWordsFromLexc(lexcfile):
	outLines = []
	with open(lexcfile, 'r') as lexc:
		for line in lexc:
			line = line.strip()
			#print(line)
			if entryLine.match(line):
				if not hasTranslation.search(line):
					outLines.append(line)
					#print("^^^")
				else:
					if hasTranslation.search(line).groups()[0] == "Use/MT":
						outLines.append(line)
						#print("^^^^")
	#for line in outLines:
	#	print(line)
	outDict = dict.fromkeys(outLines)
	for entry in outDict:
		outDict[entry] = {'lemma': '', 'form': '', 'category': '', 'comments': ''}
		groups = entryParser.search(entry).groups()
		#print(entry, groups)
		outDict[entry]['lemma'] = groups[0]
		outDict[entry]['form'] = groups[1]
		outDict[entry]['category'] = groups[2]
		outDict[entry]['comments'] = groups[3]
	return outDict

def findTranslations(dixfile, unglossedWords):
	global dixdirection
	global dixopposite

	counter = 0
	dixtree = etree.parse(dixfile)
	xpatheval = etree.XPathEvaluator(dixtree)
	for word in unglossedWords:
		#unglossedWords[word]['translations'] = []
		lemma = unglossedWords[word]['lemma'].replace('% ','')#.replace(' ','')
		# pattern = "{}()".format(lemma)
		pattern = "//p[{}[. = \"{}\"]]".format(dixdirection, lemma)
		#print(xpatheval(pattern+"/l/text()"))
		##print(pattern)
		##xpathsearch = etree.XPath(pattern)
		#xpathmatches = xpatheval(pattern)
		###print(word, xpathsearch(dixtree))
		##for element in xpathsearch(dixtree):
		#for element in xpathmatches:
		#	#translationNode = etree.SubElement(element.getparent(), dixopposite)
		#	#translationNode = etree.XPath(pattern+"/l/text()")(dixtree)
		#	translationNode = xpatheval(pattern+"/l/text()")
		#	if len(translationNode) > 0:
		#		translation = translationNode[0]
		#		unglossedWords[word]['translations'].append(translation)
		#		counter+=1
		#	#print(translationNode.tag, translationNode.text, etree.XPath("string()")(translationNode))
		translations = xpatheval(pattern+"/l/text()")
		if len(translations) > 0:
			unglossedWords[word]['translations'] = translations
			counter+=len(translations)
		else:
			unglossedWords[word]['translations'] = []

		#print(unglossedWords[word], counter, len(unglossedWords))
		print(counter, "/", len(unglossedWords), end="\r")
	print()
	return unglossedWords


def makeNewLexc(lexcfile, unglossedWords):
	newlexcfile = lexcfile+"_new"
	with open(lexcfile, 'r') as lexc:
		lexcContents = lexc.readlines()

	# allIndices = [i for i, s in enumerate(lexcContents) if word in s for word in unglossedWords]
	indexTracker = []
	for word in unglossedWords:
		if len(unglossedWords[word]['translations']) > 0:
			indices = [i for i, s in enumerate(lexcContents) if word in s]
			#indices = [lexcContents.index(i) for i in lexcContents if word == i.strip()]
			if len(indices)>1: print(indices, word)
			indexTracker.append(indices)
	
	#print(indexTracker)
	allIndices = sum(indexTracker, [])
	print(allIndices)
	print(lexcContents[0:20], len(lexcContents))
	
	#translation = "hargle bargle"
	for index in allIndices:
		#print(len(lexcContents), index)
		#print(lexcContents[index].strip())
		print(index)
		print(lexcContents[index])
		translations = unglossedWords[lexcContents[index]]['translations']
		print(index, translations)
		translation = '; '.join(translations)
		#print(index, lexcContents[index], re.sub("\"Use/MT\"", "\"{}\"".format(translation), lexcContents[index]))
		if "\"\"" in lexcContents[index]:
			lexcContents[index] = re.sub("\"\"", " \"{}\"".format(translation), lexcContents[index])
			#print("1", lexcContents[index])
		elif "\"Use/MT\"" in lexcContents[index]:
			lexcContents[index] = re.sub("\"Use/MT\"", "\"{}\" ! Use/MT".format(translation), lexcContents[index])
			#print("2", lexcContents[index])
		elif "!" in lexcContents[index][-3:-1]:  # might be "!\n" or "! \n"...
			lexcContents[index] = re.sub("!", "! \"{}\"".format(translation), lexcContents[index])
			#print("3", lexcContents[index])
		else:
			print("4", lexcContents[index])
		
		lexcContents[index] += " ! translation automatically extracted from kaz-eng bidix"

	with open(newlexcfile, 'w') as outfile:
		outfile.write(''.join(lexcContents))

#print(getUnglossedWordsFromLexc(lexcfile))
unglossedWords = getUnglossedWordsFromLexc(lexcfile)
#print(unglossedWords['бірік:бірік V-IV ; ! ""'])
#for word in unglossedWords:
#	print(unglossedWords[word]['comments'])


# UNCOMMENT
unglossedWords = findTranslations(dixfile, unglossedWords)

makeNewLexc(lexcfile, unglossedWords)
