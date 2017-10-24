all:
	#apertium-validate-dictionary apertium-pes.pes.dix
	lt-comp lr apertium-pes.pes.dix pes.automorf.bin
	lt-comp rl apertium-pes.pes.dix pes.autogen.bin
	lt-comp lr apertium-pes.post-pes.dix pes.autopgen.bin

clean:
	rm *.bin
