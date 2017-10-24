all:
	lt-comp lr apertium-tt-ky.tt-ky.dix tt-ky.autobil.bin
	apertium-validate-transfer apertium-tt-ky.tt-ky.t1x
	apertium-preprocess-transfer apertium-tt-ky.tt-ky.t1x tt-ky.t1x.bin
	apertium-validate-interchunk apertium-tt-ky.tt-ky.t2x
	apertium-preprocess-transfer apertium-tt-ky.tt-ky.t2x tt-ky.t2x.bin
	apertium-validate-postchunk apertium-tt-ky.tt-ky.t3x
	apertium-preprocess-transfer apertium-tt-ky.tt-ky.t3x tt-ky.t3x.bin
