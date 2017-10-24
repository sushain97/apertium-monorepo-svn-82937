all:
	hfst-lexc mehweb.lexc -o mehweb.lexc.hfst
	hfst-twolc mehweb.twol -o mehweb.twol.hfst
	hfst-twolc spellrelax.twol -o mehweb.spell.hfst
	hfst-compose-intersect -1 mehweb.lexc.hfst -2 mehweb.twol.hfst -o mehweb.gen.hfst
	hfst-compose-intersect -1 mehweb.gen.hfst -2 mehweb.spell.hfst | hfst-invert | hfst-minimise -o mehweb.mor.hfst

clean:
	rm mehweb.hfst mehweb.lexc.hfst mehweb.twol.hfst
