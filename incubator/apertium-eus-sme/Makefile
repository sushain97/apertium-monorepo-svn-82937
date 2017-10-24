all:

	if [ ! -d .deps ]; then mkdir .deps ; fi

	cat apertium-eus-sme.eus.lexc | hfst-lexc > .deps/eus-sme.lexc.hfst 
	hfst-twolc -R -i apertium-eus-sme.eus.twol -o .deps/eus-sme.twol.hfst
	hfst-compose-intersect -1 .deps/eus-sme.lexc.hfst -2 .deps/eus-sme.twol.hfst -o .deps/eus-sme.gen.hfst
	hfst-invert .deps/eus-sme.gen.hfst | hfst-substitute -F apertium-eus-sme.eus.relabel > .deps/eus-sme.morf.hfst
	hfst-invert .deps/eus-sme.morf.hfst | hfst-fst2fst -O -o sme-eus.autogen.hfst

	hfst-fst2fst -O -i .deps/eus-sme.morf.hfst -o eus-sme.automorf.hfst

	apertium-validate-transfer apertium-eus-sme.eus-sme.t1x
	apertium-preprocess-transfer apertium-eus-sme.eus-sme.t1x eus-sme.t1x.bin
	apertium-validate-interchunk apertium-eus-sme.eus-sme.t2x
	apertium-preprocess-transfer apertium-eus-sme.eus-sme.t2x eus-sme.t2x.bin
	apertium-validate-postchunk apertium-eus-sme.eus-sme.t3x
	apertium-preprocess-transfer apertium-eus-sme.eus-sme.t3x eus-sme.t3x.bin

	apertium-validate-dictionary apertium-eus-sme.eus-sme.dix
	lt-comp lr apertium-eus-sme.eus-sme.dix eus-sme.autobil.bin

	cg-comp dev/apertium-eus-sme.eus.val eus.val.bin
	cg-comp dev/apertium-eus-sme.sme.val sme.val.bin

	cg-comp apertium-eus-sme.eus-sme.dis eus-sme.dis.bin
	cg-comp apertium-eus-sme.eus-sme.val eus-sme.val.bin
	cg-comp apertium-eus-sme.eus-sme.lex eus-sme.lex.bin


	apertium-gen-modes modes.xml
	cp *.mode modes/


clean:
	rm -rf .deps sme-eus.autobil.bin sme-eus.rlx.bin


