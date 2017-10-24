BEGIN {
    FS="+";
    est="";
    nor="";
    gn="";
    ge="";
}
$1 == "gn" {gn=$2;}
$1 == "ge" {ge=$2;}
$1 == "me" {est=gensub(/[|\\_]|/, "", "g", $2);}
$1 == "nn" {printf("    <e><p><l>%s<s n=\"%s\"/></l><r>%s<s n=\"%s\"/></r></p>\n", est, ge, gensub(/[|\\_]|/, "", "g", $2), gn);}
$1 == "mn" {nor=gensub(/[|\\_]|/, "", "g", $2);}
$1 == "ee" {printf("    <e><p><l>%s<s n=\"%s\"/></l><r>%s<s n=\"%s\"/></r></p>\n", gensub(/[|\\_]|/, "", "g", $2), ge, nor, gn);}
