VERSION=0.9.2
LANG1=epo
LANG2=fra
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-epo-fra
BILNAME=apertium-epo-fra.epo-fra.dix

TARGETS_COMMON = $(PREFIX2).automorf.bin $(PREFIX2).autobil.bin $(PREFIX2).autogen.bin $(PREFIX2).autolex.bin \
	$(PREFIX2).t1x.bin $(PREFIX2).antaux1_t2x.bin $(PREFIX2).antaux2_t2x.bin \
	$(PREFIX2).antaux3_t2x.bin $(PREFIX2).antaux4_t2x.bin $(PREFIX2).t2x.bin \
	$(PREFIX2).post_t2x.bin $(PREFIX2).t3x.bin modes $(PREFIX2).mode \
	$(PREFIX1).automorf.bin $(PREFIX1).autobil.bin $(PREFIX1).autogen.bin $(PREFIX1).autolex.bin \
	$(PREFIX1).t0x.bin $(PREFIX1).t1x.bin $(PREFIX1).autopgen.bin \
	$(PREFIX1).mode

TARGETS = $(TARGETS_COMMON)

$(PREFIX2).antaux1_t2x.bin: $(BASENAME).$(PREFIX2).antaux1_t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).antaux1_t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).antaux1_t2x $@

$(PREFIX2).antaux2_t2x.bin: $(BASENAME).$(PREFIX2).antaux2_t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).antaux2_t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).antaux2_t2x $@

$(PREFIX2).antaux3_t2x.bin: $(BASENAME).$(PREFIX2).antaux3_t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).antaux3_t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).antaux3_t2x $@

$(PREFIX2).antaux4_t2x.bin: $(BASENAME).$(PREFIX2).antaux4_t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).antaux4_t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).antaux4_t2x $@

$(PREFIX2).post_t2x.bin: $(BASENAME).$(PREFIX2).post_t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).post_t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).post_t2x $@

$(PREFIX2).automorf.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp lr $(BASENAME).$(LANG2).dix $@ $(BASENAME).$(LANG2).acx

$(PREFIX2).autobil.bin: $(BILNAME)
	apertium-validate-dictionary $(BILNAME)
	lt-comp rl $(BILNAME) $@

$(PREFIX2).autogen.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp rl $(BASENAME).$(LANG1).dix $@

$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp lr $(BASENAME).$(LANG1).dix $@

$(PREFIX1).autolex.bin: $(BASENAME).$(PREFIX1).lrx
	lrx-comp $< $@

$(PREFIX2).autolex.bin: $(BASENAME).$(PREFIX2).lrx
	lrx-comp $< $@

$(PREFIX1).autobil.bin: $(BILNAME)
	apertium-validate-dictionary $(BILNAME)
	lt-comp lr $(BILNAME) $@

$(PREFIX1).autogen.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp rl $(BASENAME).$(LANG2).dix $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX2).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX1).t0x.bin: $(BASENAME).$(PREFIX1).t0x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t0x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t0x $@

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

$(PREFIX2).t2x.bin: $(BASENAME).$(PREFIX2).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t2x $@

$(PREFIX2).t3x.bin: $(BASENAME).$(PREFIX2).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX2).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t3x $@

$(PREFIX1).autopgen.bin: $(BASENAME).post-$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).post-$(LANG2).dix
	lt-comp lr $(BASENAME).post-$(LANG2).dix $@

EXTRA_DIST= \
	$(BASENAME).$(LANG1).dix $(BILNAME) \
	$(BASENAME).post-$(LANG1).dix \
	$(BASENAME).$(LANG2).dix \
	$(PREFIX2).prob \
	$(BASENAME).$(PREFIX2).t1x \
	$(BASENAME).$(PREFIX2).antaux1_t2x \
	$(BASENAME).$(PREFIX2).antaux2_t2x \
	$(BASENAME).$(PREFIX2).antaux3_t2x \
	$(BASENAME).$(PREFIX2).antaux4_t2x \
	$(BASENAME).$(PREFIX2).t2x \
	$(BASENAME).$(PREFIX2).post_t2x \
	$(BASENAME).$(PREFIX2).t3x \
	$(PREFIX1).prob \
	$(BASENAME).$(PREFIX1).t1x \
	$(LANG1)-pn.dat \
	$(LANG2)-pn.dat \
	modes.xml

apertium_epo_fra_DATA= \
	$(PREFIX2).automorf.bin \
	$(PREFIX2).autobil.bin  \
	$(PREFIX2).autolex.bin  \
	$(PREFIX2).autogen.bin  \
	$(PREFIX2).prob \
	$(PREFIX2).t1x.bin \
	$(PREFIX2).antaux1_t2x.bin \
	$(PREFIX2).antaux2_t2x.bin \
	$(PREFIX2).antaux3_t2x.bin \
	$(PREFIX2).antaux4_t2x.bin \
	$(PREFIX2).t2x.bin \
	$(PREFIX2).post_t2x.bin \
	$(PREFIX2).t3x.bin \
	$(BASENAME).$(PREFIX2).t1x \
	$(BASENAME).$(PREFIX2).t2x \
	$(BASENAME).$(PREFIX2).t3x \
	$(LANG1)-pn.dat \
	$(LANG2)-pn.dat \
	$(PREFIX2).mode \
	$(PREFIX1).automorf.bin \
	$(PREFIX1).autobil.bin \
	$(PREFIX1).autolex.bin \
	$(PREFIX1).autogen.bin \
	$(PREFIX1).autopgen.bin \
	$(PREFIX1).prob \
	$(PREFIX1).t0x.bin \
	$(PREFIX1).t1x.bin \
	$(PREFIX1).mode

apertium_epo_fradir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_epo_framodesdir=$(prefix)/share/apertium/modes/

$(PREFIX2).mode: modes.xml
	apertium-gen-modes modes.xml
	cp *.mode modes/

$(PREFIX1).mode: modes.xml
	apertium-gen-modes modes.xml
	cp *.mode modes/

modes: modes.xml
	apertium-gen-modes modes.xml

install-data-local:
	apertium-gen-modes modes.xml apertium-$(PREFIX1)
	test -d $(DESTDIR)$(apertium_epo_framodesdir) || mkdir $(DESTDIR)$(apertium_epo_framodesdir)
	$(INSTALL_DATA) $(PREFIX2).mode $(DESTDIR)$(apertium_epo_framodesdir)
	$(INSTALL_DATA) $(PREFIX1).mode $(DESTDIR)$(apertium_epo_framodesdir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).t1x $(DESTDIR)$(apertium_epo_fradir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).antaux1_t2x $(BASENAME).$(PREFIX2).antaux2_t2x $(BASENAME).$(PREFIX2).antaux3_t2x $(BASENAME).$(PREFIX2).antaux4_t2x $(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).post_t2x $(DESTDIR)$(apertium_epo_fradir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).t3x $(DESTDIR)$(apertium_epo_fradir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t0x $(DESTDIR)$(apertium_epo_fradir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t1x $(DESTDIR)$(apertium_epo_fradir)


CLEANFILES = -rf $(TARGETS) modes 
