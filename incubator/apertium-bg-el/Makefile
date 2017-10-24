all:
	lt-comp lr apertium-bg-el.bg.dix bg-el.automorf.bin
	lt-comp lr apertium-bg-el.bg-el.dix bg-el.autobil.bin
	lt-comp rl apertium-bg-el.el.dix bg-el.autogen.bin

	apertium-preprocess-transfer apertium-bg-el.bg-el.t1x bg-el.t1x.bin

clean:
	rm bg-el.automorf.bin bg-el.autobil.bin bg-el.autogen.bin bg-el.t1x.bin
