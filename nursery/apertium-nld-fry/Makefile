all:
	lt-comp lr apertium-nld-fry.nld.dix nld-fry.automorf.bin
	lt-comp rl apertium-nld-fry.nld.dix fry-nld.autogen.bin
	lt-comp lr apertium-nld-fry.nld-fry.dix nld-fry.autobil.bin
	lt-comp rl apertium-nld-fry.nld-fry.dix fry-nld.autobil.bin
	lt-comp rl apertium-nld-fry.fry.dix nld-fry.autogen.bin
	lt-comp lr apertium-nld-fry.fry.dix fry-nld.automorf.bin
	cg-comp apertium-nld-fry.nld-fry.rlx nld-fry.rlx.bin
	lrx-comp apertium-nld-fry.nld-fry.lrx nld-fry.autolex.bin
	lrx-comp apertium-nld-fry.fry-nld.lrx fry-nld.autolex.bin
	apertium-preprocess-transfer apertium-nld-fry.nld-fry.t1x nld-fry.t1x.bin
	apertium-preprocess-transfer apertium-nld-fry.fry-nld.t1x fry-nld.t1x.bin
	apertium-gen-modes modes.xml	
	cp *.mode modes/
