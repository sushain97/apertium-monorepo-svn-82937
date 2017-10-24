all:
	hfst-twolc kaa.Cyrl-Latn_1991.twol | hfst-fst2fst -O -o kaa.Cyrl-Latn_1991.ohfst
	hfst-twolc kaa.Cyrl-Latn_1991.twol -o kaa.Cyrl-Latn_1991.hfst

clean:
	rm -rf *.ohfst
