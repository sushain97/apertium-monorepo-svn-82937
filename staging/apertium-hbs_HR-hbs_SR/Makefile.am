###############################################################################
## Makefile for Croatian to Serbian
###############################################################################

SUBDIRS=$(AP_SUBDIRS)

VERSION=0.5.0
LANG1=hbs
LANG1b=hbs_HR
LANG1c=hbs_SR
PREFIX1=$(LANG1b)-$(LANG1c)
PREFIX2=$(LANG1c)-$(LANG1b)
BASENAME=apertium-$(LANG1)
RELEASE=0.5

TARGETS_COMMON = $(LANG1).automorf.bin $(LANG1b).autogen.bin $(LANG1c).autogen.bin \
	$(BASENAME).$(LANG1).dix \
	$(LANG1b).autopgen.bin $(LANG1c).autopgen.bin \
	$(LANG1).rlx.bin $(PREFIX1).autobil.bin $(PREFIX1).t1x.bin $(PREFIX1).mode \
	$(PREFIX2).autobil.bin $(PREFIX2).t1x.bin $(PREFIX2).mode \
	cyr-lat.automorf.bin lat-cyr.autogen.bin $(LANG1).prob   

# This include defines goals for install-modes, .deps/.d and .mode files:
@ap_include@

###############################################################################
## Transducers
###############################################################################

###Croatian and Serbian analysers

$(LANG1).automorf.bin: $(AP_SRC1)/$(LANG1).automorf.bin 
	cp $< $@


## Croatian generator
$(LANG1b).autogen.bin: $(AP_SRC1)/$(LANG1b).autogen.bin
	cp $< $@

## Serbian generator
$(LANG1c).autogen.bin: $(AP_SRC1)/$(LANG1c).autogen.bin
	cp $< $@

#bilingual

$(BASENAME).$(LANG1).dix: $(AP_SRC1)/.deps/$(BASENAME).$(LANG1).dix
	if [ ! -d .deps ]; then mkdir .deps; fi
	cp $< .deps/$@
	cp $< $@

.deps/$(PREFIX1).dix: $(BASENAME).$(PREFIX1).dix
	if [ ! -d .deps ]; then mkdir .deps; fi
	bash gen-bidix.sh $(PREFIX1)


.deps/$(PREFIX2).dix: $(BASENAME).$(PREFIX1).dix
	if [ ! -d .deps ]; then mkdir .deps; fi
	bash gen-bidix.sh $(PREFIX2)


$(PREFIX1).autobil.bin: .deps/$(PREFIX1).dix
	apertium-validate-dictionary .deps/$(PREFIX1).dix
	lt-comp lr .deps/$(PREFIX1).dix $@
	
#$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
#	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
#	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

	
$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@


$(PREFIX2).autobil.bin: .deps/$(PREFIX2).dix
	apertium-validate-dictionary .deps/$(PREFIX2).dix
	lt-comp rl .deps/$(PREFIX2).dix $@
	
#$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
#	apertium-validate-transfer $(BASENAME).$(PREFIX2).t1x
#	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX1).mode:
	apertium-gen-modes modes.xml
	cp *.mode modes/


$(PREFIX2).mode:
	apertium-gen-modes modes.xml
	cp *.mode modes/


# Croatian post-generator:

$(LANG1b).autopgen.bin: $(AP_SRC1)/$(LANG1b).autopgen.bin
	cp $< $@

# Serbian post-generator:

$(LANG1c).autopgen.bin: $(AP_SRC1)/$(LANG1c).autopgen.bin
	cp $< $@



###############################################################################
## Disambiguation rules and probabilities
###############################################################################

$(LANG1).rlx.bin: $(AP_SRC1)/$(LANG1).rlx.bin
	cp $< $@



$(LANG1).prob: $(AP_SRC1)/$(LANG1).prob 
	cp $< $@

###############################################################################
## Alphabet transliteration 
###############################################################################

lat-cyr.autogen.bin: $(AP_SRC1)/$(BASENAME).Cyrl-Latn.dix
	if [ ! -d .deps ]; then mkdir .deps; fi
	apertium-validate-dictionary $<
	lt-comp rl $< $@

cyr-lat.automorf.bin: $(AP_SRC1)/$(BASENAME).Cyrl-Latn.dix
	if [ ! -d .deps ]; then mkdir .deps; fi
	apertium-validate-dictionary $<
	lt-comp lr $< $@

$(LANG1b)-$(LANG1c)cyr.mode:
	apertium-gen-modes modes.xml
	cp *.mode modes/


$(LANG1c)cyr-$(LANG1b).mode:
	apertium-gen-modes modes.xml
	cp *.mode modes/


###############################################################################
## Distribution
###############################################################################
EXTRA_DIST=$(BASENAME).$(PREFIX1).dix \
	   $(BASENAME).$(PREFIX1).t1x \
	   $(BASENAME).$(PREFIX2).t1x \
	   expand-to-dix.py \
	   gen-bidix.sh \
	   alt.xsl \
	   modes.xml

###############################################################################
## Installation stuff
###############################################################################

   apertium_hbs_dir: This is where the compiled binaries go
   apertium_hbs_srcdir: This is where the source files go

apertium_hbsdir=$(prefix)/share/apertium/$(BASENAME)/
apertium_hbs_srcdir=$(prefix)/share/apertium/$(BASENAME)/
apertium_hbsmodesdir=$(prefix)/share/apertium/modes/

apertium_hbs_DATA=$(TARGETS_COMMON)

noinst_DATA=modes/$(LANG1)-morph.mode

install-data-local:
	mv modes modes.bak
	apertium-gen-modes modes.xml apertium-$(LANG1)
	rm -rf modes
	mv modes.bak modes
	test -d	$(DESTDIR)$(apertium_hbs_srcdir) || mkdir -p $(DESTDIR)$(apertium_hbs_srcdir)
	test -d	$(DESTDIR)$(apertium_hbsmodesdir) || mkdir $(DESTDIR)$(apertium_hbsmodesdir)
	rm $(BASENAME).$(LANG1).dix
	$(INSTALL_DATA)	$(PREFIX1).mode	$(DESTDIR)$(apertium_hbsmodesdir)
	$(INSTALL_DATA)	$(BASENAME).$(PREFIX1).t1x $(DESTDIR)$(apertium_hbs_srcdir)
	$(INSTALL_DATA)	$(PREFIX2).mode	$(DESTDIR)$(apertium_hbsmodesdir)
	$(INSTALL_DATA)	$(BASENAME).$(PREFIX2).t1x $(DESTDIR)$(apertium_hbs_srcdir)
	$(INSTALL_DATA)	$(LANG1b)-$(LANG1c)cyr.mode	$(DESTDIR)$(apertium_hbsmodesdir)
	$(INSTALL_DATA)	$(LANG1c)cyr-$(LANG1b).mode	$(DESTDIR)$(apertium_hbsmodesdir)	
	$(INSTALL_DATA) $(BASENAME).$(LANG1).acx $(DESTDIR)$(apertium_hbs_srcdir)
	$(INSTALL_DATA) $(LANG1).prob $(DESTDIR)$(apertium_hbs_srcdir) 
	$(INSTALL_DATA) alt.xsl $(DESTDIR)$(apertium_hbs_srcdir) 

###############################################################################
## Cleanup
###############################################################################

CLEANFILES = $(TARGETS_COMMON)
clean-local:
	-rm -rf .deps modes
