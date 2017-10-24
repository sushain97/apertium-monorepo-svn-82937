all:
	hfst-twolc lat-sjo.twol -o lat-sjo.hfst
	hfst-twolc lat-sjo.twol | hfst-fst2fst -O -o lat-sjo.ohfst

clean:
	rm -rf *.ohfst
