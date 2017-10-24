all:
	if [ ! -d .deps ]; then mkdir .deps; fi
	xsltproc --stringparam alt hbs --stringparam var ijek alt.xsl apertium-ces-hbs.hbs.metadix > .deps/hbs.dix
	lt-comp lr .deps/hbs.dix hbs-ces.automorf.bin
	xsltproc --stringparam alt hbs_BS --stringparam var ijek alt.xsl apertium-ces-hbs.hbs.metadix > .deps/hbs_BS.dix
	lt-comp rl .deps/hbs_BS.dix ces-hbs_BS.autogen.bin
	xsltproc --stringparam alt hbs_HR --stringparam var ijek alt.xsl apertium-ces-hbs.hbs.metadix > .deps/hbs_HR.dix
	lt-comp rl .deps/hbs_HR.dix ces-hbs_HR.autogen.bin
	xsltproc --stringparam alt hbs_SR --stringparam var ek alt.xsl apertium-ces-hbs.hbs.metadix > .deps/hbs_SR.dix
	lt-comp rl .deps/hbs_SR.dix ces-hbs_SR.autogen.bin
	lt-comp lr apertium-ces-hbs.ces.dix ces-hbs.automorf.bin
	lt-comp lr apertium-ces-hbs.ces-hbs.dix ces-hbs.autobil.bin
	lt-comp rl apertium-ces-hbs.ces.dix hbs-ces.autogen.bin
	cg-comp apertium-ces-hbs.ces-hbs.rlx ces-hbs.rlx.bin
	apertium-preprocess-transfer apertium-ces-hbs.ces-hbs.t1x ces-hbs.t1x.bin
	apertium-preprocess-transfer apertium-ces-hbs.ces-hbs.t2x ces-hbs.t2x.bin
	apertium-preprocess-transfer apertium-ces-hbs.ces-hbs.t3x ces-hbs.t3x.bin
	apertium-gen-modes modes.xml
	cp *.mode modes/
