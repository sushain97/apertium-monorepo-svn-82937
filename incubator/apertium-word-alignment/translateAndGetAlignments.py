#!/usr/bin/python
# coding=utf-8
# -*- encoding: utf-8 -*-

import sys,re,codecs,apertium,getopt;
from expandPTLib import *

ENC='utf-8'

def usage():
	print >>sys.stderr, "Translates the sentences from stdin and shows the alignments between its words."
	print >>sys.stderr, "Treats each input line as an independent sentence. Input MUST BE TOKENIZED (you can use the Moses tokenizer)."
	print >>sys.stderr, "Options (all of them are mandatory):"
	print >>sys.stderr, "-s SOURCE_LANGUAGE "
	print >>sys.stderr, "-t TARGET_LANGUAGE "
	print >>sys.stderr, "-i PRE_GENERATED_DATA_DIR "

sourceLang="es"
targetLang="en"
sourcemwfile="error_Source_MWfile_not_defined"
targetmwfile="error_Target_MWfile_not_defined"
transferTypeFile=""
multiLevelTransfer=False

separator=u"sep_sentence_expandPTv2_apertium"
splitter = re.compile(re.escape(separator)+r'\n?')

try:
	opts, args = getopt.getopt(sys.argv[1:], "s:t:i:", ["debug","sourcelang=","targetlang=","datadir="])
except getopt.GetoptError, err:
	# print help information and exit:
	print str(err) # will print something like "option -a not recognized"
	usage()
	sys.exit(2)

for o, a in opts:
	if o in ("-s", "--sourcelang"):
		sourceLang=a
	elif o in ("-t", "--targetlang"):
		targetLang=a
	elif o in ("-i", "--datadir"):
		sourcemwfile=a+"/lemmas-src/multiwords"
		targetmwfile=a+"/lemmas-target/multiwords"
		transferTypeFile=a+"/transfer"
	else:
		assert False, "unhandled option"

dictReplacements={u'"':u"vmsanchezcomillas", u'\\/':u"vmsanchezbarra", u'º':u"vmsanchezordinal", u'%':u"vmsanchezporcentaje", u'°':u"vmsanchezordinalsin"}
inverseReplacements=dict()
for toreplace in dictReplacements:
	inverseReplacements[dictReplacements[toreplace]]=toreplace

inputSentences=list()

text_file = open(transferTypeFile, "r")
transferInfo = text_file.read().strip()
text_file.close()

if transferInfo=="multilevel":
	multiLevelTransfer=True


for lex in sys.stdin:
	lex=lex.decode(ENC).strip()
	mylex=apertium.deFormatTxt(lex)
	for toreplace in dictReplacements:
		mylex=mylex.replace(toreplace,dictReplacements[toreplace])
	inputSentences.append(mylex)

src=(u"["+separator+"\n]").join(inputSentences) # +u" .[]"

localTranslation=apertium.translateAndReformat(src,sourceLang+"-"+targetLang+"_debug")
translations=splitter.split(localTranslation)

#debug
#print >> sys.stderr, localTranslation.encode(ENC)

smwlf=MultiwordLexicalForms()
smwlf.load(sourcemwfile)

tmwlf=MultiwordLexicalForms()
tmwlf.load(targetmwfile)

numSentence=0

if multiLevelTransfer:
	for tr in translations:
		numSentence+=1
		print >> sys.stderr, "Processing sentence "+str(numSentence)
		debugInfo = DebugInfo(tr,"",tmwlf)
		debugInfo.extractModuleOutputs(True,True, True)
		debugInfo.extractPreTransferAlignments()
		debugInfo.extractTransferAndGenerationAlignments2level()
		debugInfo.extractPostGenerationAlignments()
		debugInfo.extractAnalysisAlignments(smwlf)
		mytranslation=debugInfo.translation.strip()
		for toreplace in inverseReplacements:
			mytranslation=mytranslation.replace(toreplace,inverseReplacements[toreplace])

		finalAlignments=SentenceAlignments()
		alignmentsList=[debugInfo.alignmentsAnalysis,debugInfo.alignmentsPreTransfer,debugInfo.alignmentsTransfer,debugInfo.alignmentsInterchunk,debugInfo.alignmentsPostchunk,debugInfo.alignmentsGeneration,debugInfo.alignmentsPostGeneration]
		finalAlignments.merge(alignmentsList,False)
		print (mytranslation+" ||| "+finalAlignments.toString()).encode(ENC)

#		print (mytranslation+" ||| "+debugInfo.alignmentsAnalysis.toString()+" ||| "+debugInfo.alignmentsPreTransfer.toString()+" ||| "+debugInfo.alignmentsTransfer.toString()+" ||| "+debugInfo.alignmentsInterchunk.toString()+" ||| "+debugInfo.alignmentsPostchunk.toString()+" ||| "+debugInfo.alignmentsGeneration.toString()+" ||| "+debugInfo.alignmentsPostGeneration.toString()).encode(ENC)
else:
	for tr in translations:
		debugInfo = DebugInfo(tr,"",tmwlf)
		debugInfo.extractModuleOutputs(True,True)
		debugInfo.extractPreTransferAlignments()
		debugInfo.extractTransferAndGenerationAlignments()
		debugInfo.extractPostGenerationAlignments()
		debugInfo.extractAnalysisAlignments(smwlf)
		mytranslation=debugInfo.translation.strip()
		for toreplace in inverseReplacements:
			mytranslation=mytranslation.replace(toreplace,inverseReplacements[toreplace])

		finalAlignments=SentenceAlignments()
		alignmentsList=[debugInfo.alignmentsAnalysis,debugInfo.alignmentsPreTransfer,debugInfo.alignmentsTransfer,debugInfo.alignmentsGeneration,debugInfo.alignmentsPostGeneration]
		finalAlignments.merge(alignmentsList,False)
		print (mytranslation+" ||| "+finalAlignments.toString()).encode(ENC)

#		print (mytranslation+" ||| "+debugInfo.alignmentsAnalysis.toString()+" ||| "+debugInfo.alignmentsPreTransfer.toString()+" ||| "+debugInfo.alignmentsTransfer.toString()+" ||| "+debugInfo.alignmentsGeneration.toString()+" ||| "+debugInfo.alignmentsPostGeneration.toString()).encode(ENC)

