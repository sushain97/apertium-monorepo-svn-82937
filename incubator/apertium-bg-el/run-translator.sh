lt-proc bg-el.automorf.bin  |\
gawk 'BEGIN{RS="$"; FS="/";}{nf=split($1,COMPONENTS,"^"); for(i = 1; i<nf; i++) printf COMPONENTS[i]; if($2 != "") printf("^%s$",$2);}' |\
apertium-transfer apertium-bg-el.bg-el.t1x bg-el.t1x.bin bg-el.autobil.bin |\
lt-proc -g bg-el.autogen.bin
