BASENAME=apertium-pes
LANG1=pes

all: test

$(LANG1).xsl: $(BASENAME).$(LANG1).metadix buscaPar.xsl
	xsltproc buscaPar.xsl $< |uniq >$@.tmp
	mv $@.tmp $@

$(LANG1).dix: $(LANG1).xsl
	xsltproc $< $(BASENAME).$(LANG1).metadix > $@.tmp
	mv $@.tmp $@

$(LANG1).automorf.bin: $(LANG1).dix
	lt-comp lr $< $@

.PHONY=test
test: $(LANG1).automorf.bin
	@echo
	echo 'rā raftan'   | lt-proc $<
	@echo
	echo 'rā miraftam' | lt-proc $<
