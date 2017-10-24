all:
	lt-comp lr apertium-as-hi.as.dix as-hi.automorf.bin
	lt-comp lr apertium-as-hi.hi.dix hi-as.automorf.bin
	lt-comp rl apertium-as-hi.as.dix hi-as.autogen.bin
	lt-comp rl apertium-as-hi.hi.dix as-hi.autogen.bin
	lt-comp lr apertium-as-hi.as-hi.dix as-hi.autobil.bin
	lt-comp rl apertium-as-hi.as-hi.dix hi-as.autobil.bin
	apertium-validate-transfer apertium-as-hi.as-hi.t1x
	apertium-preprocess-transfer apertium-as-hi.as-hi.t1x as-hi.t1x.bin
	apertium-gen-modes modes.xml
	cp *.mode modes/
