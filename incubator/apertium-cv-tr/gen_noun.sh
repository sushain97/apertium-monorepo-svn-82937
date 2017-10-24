cat noun_decl.txt | sed s/^/^$1\<n\>/g | sed 's/$/$/g' | hfst-proc -g tr-cv.autogen.hfst
