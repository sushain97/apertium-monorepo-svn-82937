all:
	lt-comp rl apertium-ron-ina.ron-ina.dix ina-ron.autobil.bin
	lt-comp lr apertium-ron-ina.ina.dix ina-ron.automorf.bin
	lt-comp rl apertium-ron-ina.ron.dix ina-ron.autogen.bin
	apertium-preprocess-transfer apertium-ron-ina.ron-ina.t1x ron-ina.t1x.bin
	apertium-preprocess-transfer apertium-ron-ina.ina-ron.t1x ina-ron.t1x.bin
	apertium-gen-modes modes.xml
