LANG1=mfe
LANG2=en
BASENAME=apertium-$(LANG1)-$(LANG2)
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

all:
	# Mauritian Creole -> English

	lt-comp lr $(BASENAME).mfe.dix $(PREFIX1).automorf.bin
	lt-comp lr $(BASENAME).$(PREFIX1).dix $(PREFIX1).autobil.bin
	lt-comp rl $(BASENAME).en.dix $(PREFIX1).autogen.bin
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $(PREFIX1).t1x.bin
	lt-comp lr $(BASENAME).post-en.dix $(PREFIX1).autopgen.bin

	# English -> Mauritian Creole

	lt-comp lr $(BASENAME).mfe.dix $(PREFIX2).automorf.bin
	lt-comp rl $(BASENAME).$(PREFIX1).dix $(PREFIX2).autobil.bin
	lt-comp rl $(BASENAME).en.dix $(PREFIX2).autogen.bin
	#apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $(PREFIX2).t1x.bin

	apertium-gen-modes modes.xml
	cp *.mode modes/
 
clean:
	rm -f *.bin 
	rm -r modes/

