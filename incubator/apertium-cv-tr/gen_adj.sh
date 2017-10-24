cat adj_decl.txt | sed s/^/^$1/g | sed 's/$/$/g' | hfst-proc -g tr-cv.autogen.hfst
