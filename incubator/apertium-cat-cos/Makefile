all:
	cd cat ; sh update.sh ; cd ..
	lt-comp lr apertium-cat-cos.cat-cos.dix cat-cos.autobil.bin apertium-cat-cos.cat.acx
	lt-comp rl apertium-cat-cos.cat-cos.dix cos-cat.autobil.bin
	lt-comp rl apertium-cat-cos.cos.dix cat-cos.autogen.bin
	lt-comp lr apertium-cat-cos.cos.dix cos-cat.automorf.bin apertium-cat-cos.cos.acx
	lt-comp lr apertium-cat-cos.post-cos.dix cat-cos.autopgen.bin
	lt-comp lr apertium-cat-cos.post-cat.dix cos-cat.autopgen.bin
	lrx-comp apertium-cat-cos.cat-cos.lrx cat-cos.autolex.bin
	lrx-comp apertium-cat-cos.cos-cat.lrx cos-cat.autolex.bin
	apertium-preprocess-transfer apertium-cat-cos.cat-cos.t1x cat-cos.t1x.bin
	apertium-preprocess-transfer apertium-cat-cos.cos-cat.t1x cos-cat.t1x.bin
	apertium-gen-modes modes.xml	
	cp *.mode modes/
	lt-comp lr apertium-cat-cos.cat.dix cat-cos.automorf.bin
	lt-comp rl apertium-cat-cos.cat.dix cos-cat.autogen.bin


clean:
	rm -rf *.bin *.mode modes
