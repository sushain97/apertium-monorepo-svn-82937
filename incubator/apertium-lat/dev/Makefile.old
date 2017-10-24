INFILE=apertium-lat.lat
OUTFILE=lat

all:
#	hfst-lexc -f foma $(INFILE).lexc -o $(OUTFILE).gen.hfst
#	hfst-lexc -f foma $(INFILE).lexc -o $(OUTFILE).lexc.hfst
#	hfst-twolc -f foma -i $(INFILE).twol -o $(OUTFILE).twol.hfst
#	hfst-compose-intersect -1 $(OUTFILE).lexc.hfst -2 $(OUTFILE).twol.hfst -o $(OUTFILE).gen.hfst
#	hfst-invert $(OUTFILE).gen.hfst | hfst-fst2fst -O -o $(OUTFILE).hfst
	lt-comp lr $(INFILE).dix $(OUTFILE).automorf.bin
	lt-comp rl $(INFILE).dix $(OUTFILE).autogen.bin

clean:
	rm *.bin
