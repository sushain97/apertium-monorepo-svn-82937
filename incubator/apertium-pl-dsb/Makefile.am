VERSION=0.0.0
LANG1=pl
LANG2=dsb
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON = $(PREFIX2).automorf.bin

TARGETS = $(TARGETS_COMMON) 

$(BASENAME).($LANG2).dix: $(BASENAME).$(LANG2).metadix
	xsltproc buscaPar.xsl $(BASENAME).$(LANG2).metadix | uniq >$$$$tmp1 && \
	xsltproc $$$$tmp1 $(BASENAME).$(LANG2).metadix > $@ && rm $$$$tmp1

$(PREFIX2).automorf.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp lr $(BASENAME).$(LANG2).dix $@ 


