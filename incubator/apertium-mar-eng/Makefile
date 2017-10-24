all:
	lt-comp lr apertium-mar-eng.mar.dix mar-eng.automorf.bin
	lt-comp rl apertium-mar-eng.mar.dix eng-mar.autogen.bin
	lt-comp lr apertium-mar-eng.mar-eng.dix mar-eng.autobil.bin
	lt-comp rl apertium-mar-eng.mar-eng.dix eng-mar.autobil.bin
	lt-comp lr apertium-mar-eng.post-eng.dix mar-eng.autopgen.bin
	lrx-comp apertium-mar-eng.mar-eng.lrx mar-eng.autolex.bin
	cg-comp apertium-mar-eng.mar-eng.rlx mar-eng.rlx.bin
	apertium-preprocess-transfer apertium-mar-eng.mar-eng.t1x mar-eng.t1x.bin
	apertium-preprocess-transfer apertium-mar-eng.mar-eng.t2x mar-eng.t2x.bin
	apertium-preprocess-transfer apertium-mar-eng.mar-eng.t3x mar-eng.t3x.bin
	lt-comp lr apertium-mar-eng.eng.dix eng-mar.automorf.bin
	lt-comp rl apertium-mar-eng.eng.dix mar-eng.autogen.bin
	apertium-gen-modes modes.xml
	cp *.mode modes/
