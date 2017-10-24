###############################################################################
## Makefile for French--Italian
###############################################################################

VERSION=0.0.1
LANG1=fr
LANG2=it
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON = \
	$(PREFIX1).automorf.bin \
	$(PREFIX1).autobil.bin \
	$(PREFIX1).autogen.bin \
	$(PREFIX1).autopgen.bin \
	$(PREFIX1).t1x.bin \
	$(PREFIX1).t2x.bin \
	$(PREFIX1).t3x.bin \
	$(PREFIX2).automorf.bin \
	$(PREFIX2).autobil.bin \
	$(PREFIX2).autogen.bin \
	$(PREFIX2).autopgen.bin \
    $(PREFIX2).t1x.bin \
	$(PREFIX2).t2x.bin \
	$(PREFIX2).t3x.bin



# This include defines goals for install-modes, .deps/.d and .mode files:
@ap_include@

###############################################################################
## Monolingual transducers
###############################################################################

# -------------------
# French analysis:
# -------------------

.deps/$(LANG1).metadix: $(BASENAME).$(LANG1).metadix .deps/.d
	xsltproc --stringparam alt std alt.xsl $< >$@

.deps/$(LANG1).dix: .deps/$(LANG1).metadix
	xsltproc buscaPar.xsl $< | uniq >$$$$tmp1 && \
	xsltproc $$$$tmp1 $< > $@ && rm $$$$tmp1

$(PREFIX1).automorf.bin: .deps/$(LANG1).dix $(BASENAME).$(LANG1).acx
	apertium-validate-dictionary $<
	apertium-validate-acx $(BASENAME).$(LANG1).acx
	lt-comp lr $< $@ $(BASENAME).$(LANG1).acx

# -------------------
# French generation:
# ---------------------

$(PREFIX2).autogen.bin: .deps/$(LANG1).dix
	apertium-validate-dictionary $<
	lt-comp rl $< $@

# -------------------
# Italian analysis:
# -------------------

$(PREFIX2).automorf.bin: $(BASENAME).$(LANG2).dix $(BASENAME).$(LANG2).acx
	apertium-validate-dictionary $<
	apertium-validate-acx $(BASENAME).$(LANG2).acx
	lt-comp lr $< $@ $(BASENAME).$(LANG2).acx

# -------------------
# Italian generation:
# ---------------------

$(PREFIX1).autogen.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $<
	lt-comp rl $< $@

###############################################################################
## Tagger models
###############################################################################

###############################################################################
## Disambiguation rules
###############################################################################

###############################################################################
## Bilingual dictionaries
###############################################################################

$(PREFIX1).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $<
	lt-comp lr $< $@

$(PREFIX2).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $<
	lt-comp rl $< $@

###############################################################################
## Lexical selection rules
###############################################################################

###############################################################################
## Structural transfer rules
###############################################################################

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $<
	apertium-preprocess-transfer $< $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-validate-transfer $<
	apertium-preprocess-transfer $< $@

$(PREFIX1).t2x.bin: $(BASENAME).$(PREFIX1).t2x
	apertium-validate-interchunk $<
	apertium-preprocess-transfer $< $@

$(PREFIX2).t2x.bin: $(BASENAME).$(PREFIX2).t2x
	apertium-validate-interchunk $<
	apertium-preprocess-transfer $< $@

$(PREFIX1).t3x.bin: $(BASENAME).$(PREFIX1).t3x
	apertium-validate-postchunk $<
	apertium-preprocess-transfer $< $@

$(PREFIX2).t3x.bin: $(BASENAME).$(PREFIX2).t3x
	apertium-validate-postchunk $<
	apertium-preprocess-transfer $< $@

###############################################################################
## Postgeneration dictionaries
###############################################################################

$(PREFIX1).autopgen.bin: $(BASENAME).post-$(LANG1).dix
	apertium-validate-dictionary $<
	lt-comp lr $< $@

$(PREFIX2).autopgen.bin: $(BASENAME).post-$(LANG2).dix
	apertium-validate-dictionary $<
	lt-comp lr $< $@

###############################################################################
## Distribution
###############################################################################

EXTRA_DIST=$(BASENAME).post-$(LANG1).dix $(BASENAME).post-$(LANG2).dix \
	$(BASENAME).$(LANG1).tsx \
	$(BASENAME).$(LANG2).tsx \
	$(PREFIX1).prob $(PREFIX2).prob \
	$(BASENAME).$(LANG1).metadix \
	$(BASENAME).$(LANG2).dix \
	buscaPar.xsl principal.xsl alt.xsl \
	$(BASENAME).$(PREFIX1).t1x $(BASENAME).$(PREFIX1).t2x \
	$(BASENAME).$(PREFIX1).t3x $(BASENAME).$(PREFIX2).t1x \
	$(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).t3x \
	$(BASENAME).$(LANG1).acx $(BASENAME).$(LANG2).acx \
	modes.xml


###############################################################################
## Installation
###############################################################################

apertium_fr_itdir=$(prefix)/share/apertium/$(BASENAME)/

# Files which should be installed to $(prefix)/share/apertium/$(BASENAME)/:
apertium_fr_it_DATA= \
	$(TARGETS_COMMON) \
	$(PREFIX1).prob $(PREFIX2).prob \
	$(BASENAME).$(PREFIX1).t1x \
	$(BASENAME).$(PREFIX1).t2x \
	$(BASENAME).$(PREFIX1).t3x \
	$(BASENAME).$(PREFIX2).t1x \
	$(BASENAME).$(PREFIX2).t2x \
	$(BASENAME).$(PREFIX2).t3x

# All modes are created by the same goal, listing several will just give problems with make -j2
noinst_DATA=modes/$(PREFIX1).mode

install-data-local: install-modes

###############################################################################
## Cleanup
###############################################################################

CLEANFILES = $(TARGETS_COMMON)
clean-local:
	-rm -rf .deps modes

###############################################################################
## Test
###############################################################################

test: all
	echo "maison" | apertium -d . fr-it | tee .test-mt
	@echo "casa" > .test-ref
	@diff .test-ref .test-mt
	echo "casa" | apertium -d . it-fr | tee .test-mt
	@echo "maison" > .test-ref
	@diff .test-ref .test-mt
	@rm .test-ref .test-mt

