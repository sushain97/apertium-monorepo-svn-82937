ZUL=../apertium-zul/
SSW=../apertium-ssw/

all:
	lt-comp lr $(ZUL)/zul.automorf.att zul-ssw.automorf.bin
	cg-comp $(ZUL)/apertium-zul.zul.rlx zul-ssw.rlx.bin
	lt-comp lr $(SSW)/ssw.autogen.att zul-ssw.autogen.bin

	lt-comp lr apertium-zul-ssw.zul-ssw.dix zul-ssw.autobil.bin
	lt-comp rl apertium-zul-ssw.zul-ssw.dix ssw-zul.autobil.bin

	apertium-preprocess-transfer apertium-zul-ssw.zul-ssw.t1x zul-ssw.t1x.bin
	apertium-preprocess-transfer apertium-zul-ssw.ssw-zul.t1x ssw-zul.t1x.bin

	lrx-comp apertium-zul-ssw.zul-ssw.lrx zul-ssw.autolex.bin
	lrx-comp apertium-zul-ssw.ssw-zul.lrx ssw-zul.autolex.bin

	apertium-gen-modes modes.xml
	cp *.mode modes/

clean:
	rm -rf modes/ *.mode *.bin
