all:
	if [ ! -d .deps ]; then mkdir .deps; fi
	cat apertium-ky-en.ky.lexc | grep -v 'Dir/RL' | hfst-lexc > .deps/ky.lexc.morf.hfst
	cat apertium-ky-en.ky.lexc | grep -v 'Dir/LR' | hfst-lexc > .deps/ky.lexc.gen.hfst
	hfst-twolc -R -i apertium-ky-en.ky.twol -o .deps/ky.twol.hfst
	hfst-compose-intersect -1 .deps/ky.lexc.gen.hfst -2 .deps/ky.twol.hfst -o .deps/en-ky.autogen.hfst
	hfst-compose-intersect -1 .deps/ky.lexc.morf.hfst -2 .deps/ky.twol.hfst | hfst-invert -o .deps/ky-en.automorf.hfst

	hfst-fst2fst -O -i .deps/ky-en.automorf.hfst -o ky-en.automorf.hfst
	hfst-fst2fst -O -i .deps/en-ky.autogen.hfst -o en-ky.autogen.hfst

	cg-comp apertium-ky-en.ky-en.rlx ky-en.rlx.bin

