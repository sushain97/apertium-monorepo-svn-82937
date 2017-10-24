VERSION=0.0.1
LANG1=bg
LANG2=en
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-bg-en

TARGETS_COMMON = $(PREFIX1).automorf.bin $(PREFIX2).automorf.bin \
	$(PREFIX1).autopgen.bin $(PREFIX2).autopgen.bin \
	$(PREFIX1).autobil.bin $(PREFIX2).autobil.bin \
	$(PREFIX1).autogen.bin $(PREFIX2).autogen.bin \
	$(PREFIX1).t1x.bin $(PREFIX2).t1x.bin \
	$(PREFIX1).t2x.bin $(PREFIX2).t2x.bin \
	$(PREFIX1).t3x.bin $(PREFIX2).t3x.bin \
	modes

TARGETS = $(TARGETS_COMMON)

$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	apertium-validate-acx $(BASENAME).$(LANG1).acx
	lt-comp lr $(BASENAME).$(LANG1).dix $@ $(BASENAME).$(LANG1).acx

$(PREFIX2).autogen.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp rl $(BASENAME).$(LANG1).dix $@

.deps/$(LANG2).metadix: $(BASENAME).$(LANG2).metadix
	if [ ! -d .deps ]; then mkdir .deps; fi
	xsltproc --stringparam alt en_GB alt.xsl $(BASENAME).$(LANG2).metadix >$@

.deps/$(LANG2).dix: .deps/$(LANG2).metadix
	xsltproc buscaPar.xsl .deps/$(LANG2).metadix | uniq >$$$$tmp1 && \
	xsltproc $$$$tmp1 .deps/$(LANG2).metadix > $@ && rm $$$$tmp1

$(PREFIX2).automorf.bin: .deps/$(LANG2).dix
	apertium-validate-dictionary .deps/$(LANG2).dix
	apertium-validate-acx $(BASENAME).$(LANG2).acx
	lt-comp lr .deps/$(LANG2).dix $@ $(BASENAME).$(LANG2).acx

$(PREFIX1).autogen.bin: .deps/$(LANG2).dix
	apertium-validate-dictionary .deps/$(LANG2).dix
	lt-comp rl .deps/$(LANG2).dix $@

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX2).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX1).t2x.bin: $(BASENAME).$(PREFIX1).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX1).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t2x $@

$(PREFIX2).t2x.bin: $(BASENAME).$(PREFIX2).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t2x $@

$(PREFIX1).t3x.bin: $(BASENAME).$(PREFIX1).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX1).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t3x $@

$(PREFIX2).t3x.bin: $(BASENAME).$(PREFIX2).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX2).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t3x $@

.deps/$(BASENAME).$(PREFIX1).dix: $(BASENAME).$(PREFIX1).dix lexchoicebil.xsl
	if [ ! -d .deps ]; then mkdir .deps; fi
	xsltproc lexchoicebil.xsl $(BASENAME).$(PREFIX1).dix > $@

$(PREFIX1).autobil.bin: .deps/$(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary .deps/$(BASENAME).$(PREFIX1).dix
	lt-comp lr .deps/$(BASENAME).$(PREFIX1).dix $@

.deps/$(BASENAME).$(PREFIX2).dix: $(BASENAME).$(PREFIX1).dix lexchoicebil.xsl
	if [ ! -d .deps ]; then mkdir .deps; fi
	xsltproc lexchoicebil.xsl $(BASENAME).$(PREFIX1).dix > $@

$(PREFIX2).autobil.bin: .deps/$(BASENAME).$(PREFIX2).dix
	apertium-validate-dictionary .deps/$(BASENAME).$(PREFIX2).dix
	lt-comp rl .deps/$(BASENAME).$(PREFIX2).dix $@

$(PREFIX1).autopgen.bin: $(BASENAME).post-$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).post-$(LANG1).dix
	lt-comp lr $(BASENAME).post-$(LANG1).dix $@

$(PREFIX2).autopgen.bin: $(BASENAME).post-$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).post-$(LANG2).dix
	lt-comp lr $(BASENAME).post-$(LANG2).dix $@

EXTRA_DIST=$(BASENAME).post-$(LANG1).dix $(BASENAME).post-$(LANG2).dix \
	$(BASENAME).$(LANG1).tsx \
	$(BASENAME).$(LANG2).tsx \
	$(PREFIX1).prob $(PREFIX2).prob \
	$(BASENAME).$(LANG1).dix \
	$(BASENAME).$(LANG2).metadix \
	buscaPar.xsl principal.xsl alt.xsl \
	$(BASENAME).$(PREFIX1).t1x $(BASENAME).$(PREFIX1).t2x \
	$(BASENAME).$(PREFIX1).t3x $(BASENAME).$(PREFIX2).t1x \
	$(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).t3x \
	$(BASENAME).$(LANG1).acx $(BASENAME).$(LANG2).acx \
	modes.xml

clean-dicts:
	if [ -d .deps ]; then rm .deps/*; fi

apertium_bg_en_DATA=$(PREFIX1).automorf.bin $(PREFIX2).automorf.bin \
		$(PREFIX1).autobil.bin $(PREFIX2).autobil.bin \
		$(PREFIX1).autogen.bin $(PREFIX2).autogen.bin \
		$(PREFIX1).autopgen.bin $(PREFIX2).autopgen.bin \
		$(PREFIX1).prob $(PREFIX2).prob \
		$(PREFIX1).t1x.bin $(PREFIX2).t1x.bin \
		$(PREFIX1).t2x.bin $(PREFIX2).t2x.bin \
		$(PREFIX1).t3x.bin $(PREFIX2).t3x.bin \
		$(PREFIX1).mode $(PREFIX2).mode 

apertium_bg_endir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_bg_en_modesdir=$(prefix)/share/apertium/modes/

$(PREFIX1).mode: modes.xml
	apertium-gen-modes modes.xml

$(PREFIX2).mode: modes.xml
	apertium-gen-modes modes.xml

modes: modes.xml
	apertium-gen-modes modes.xml
	cp *.mode modes/

install-data-local:
	apertium-gen-modes modes.xml apertium-$(PREFIX1)
	test -d $(DESTDIR)$(apertium_bg_en_modesdir) || mkdir $(DESTDIR)$(apertium_bg_en_modesdir)
	$(INSTALL_DATA) $(PREFIX1).mode $(DESTDIR)$(apertium_bg_en_modesdir)
	$(INSTALL_DATA) $(PREFIX2).mode $(DESTDIR)$(apertium_bg_en_modesdir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t1x $(BASENAME).$(PREFIX1).t2x $(DESTDIR)$(apertium_bg_endir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t3x $(BASENAME).$(PREFIX2).t1x $(DESTDIR)$(apertium_bg_endir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).t3x $(DESTDIR)$(apertium_bg_endir)

CLEANFILES = -rf $(TARGETS) modes

