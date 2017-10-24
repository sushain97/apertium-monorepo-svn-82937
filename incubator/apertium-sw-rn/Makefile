all:
	if [ ! -d .deps ]; then mkdir .deps ; fi

	lt-comp lr apertium-sw-rn.sw-rn.dix sw-rn.autobil.bin

	hfst-lexc apertium-sw-rn.sw.lexc > .deps/sw-rn.lexc.hfst
	hfst-twolc -R -i apertium-sw-rn.sw.twol -o .deps/sw-rn.twol.hfst
	hfst-compose-intersect -1 .deps/sw-rn.lexc.hfst -2 .deps/sw-rn.twol.hfst -o .deps/sw-rn.gen.hfst
	hfst-invert .deps/sw-rn.gen.hfst  > .deps/sw-rn.morf.hfst
	hfst-fst2fst -O -i .deps/sw-rn.morf.hfst -o sw-rn.automorf.hfst

	hfst-lexc apertium-sw-rn.rn.lexc > .deps/rn-sw.lexc.hfst
	hfst-twolc -R -i apertium-sw-rn.rn.twol -o .deps/rn-sw.twol.hfst
	hfst-compose-intersect -1 .deps/rn-sw.lexc.hfst -2 .deps/rn-sw.twol.hfst -o .deps/rn-sw.gen.hfst
	hfst-invert .deps/rn-sw.gen.hfst > .deps/rn-sw.morf.hfst
	hfst-fst2fst -O -i .deps/rn-sw.gen.hfst -o sw-rn.autogen.hfst
	hfst-fst2fst -O -i .deps/rn-sw.morf.hfst -o rn-sw.automorf.hfst

	apertium-validate-transfer apertium-sw-rn.sw-rn.t1x
	apertium-preprocess-transfer apertium-sw-rn.sw-rn.t1x sw-rn.t1x.bin

	apertium-gen-modes modes.xml
	cp *.mode modes/

clean:
	rm -rf modes .deps sw-rn.t1x.bin rn-sw.automorf.hfst sw-rn.autogen.hfst sw-rn.automorf.hfst sw-rn.autobil.bin *.mode
