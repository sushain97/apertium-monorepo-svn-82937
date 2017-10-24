#!/bin/bash


cd $(dirname $0)

# data dir
d_dir="data"
# temp dir
t_dir="temp"
# output dir
o_dir="output"
# file name
f_name="irishionary_$(date +%Y-%m-%d_%H:%M)"

pdf_source="$d_dir/$f_name.pdf"
html_temp="$t_dir/$f_name.html"
csv_temp="$t_dir/$f_name.csv"
csv_output="$o_dir/$f_name.csv"

if [ -z "$1" ]; then
  echo "Fetching dictionary..."
  wget http://www.irishionary.com/pdf/download/irishionary.com.ga-en.pdf -O "$pdf_source"
  if [ "$?" -ne 0 ]; then
    echo "WGET error" >&2
    echo "Don't foget to set proxy!" >&2
    echo '  export http_proxy="http://proxy.example.com:8080"' >&2
    exit 1;
  fi
  # chmod a-w "$d_dir"/*

else
  if [ ! -f "$1" ]; then
    echo "File does not exist" >&2
    exit 1;
  fi
  pdf_source="$1"
fi


echo "Converting to HTML..."

pdftohtml -f 2 -i -c -noframes "$pdf_source" "$html_temp" 

echo "Parsing to CSV..."

# You can use switch `-c' to combine lines following each other given that the following line
# does not contain any POS-marker (this indicates a broken line).
# This gives you (as of 2010-01-27) ca. 100 more meanings for lexemes which are already included
# in the file (i.e. second, third, fourth meanings, synonyms), but it also generates betwenn 50-100
# garbage English translations (not a subset of the new meanings!) due to new lemma lines in
# the dictionary which lack a POS-marker (actually "in error")!

./irishionary.pl -utf8 "$html_temp" >"$csv_temp" 2>"$csv_temp.err"

echo "Cleaning up..."

# As of 2010-01-25 the following entries are wrong, they have to be cleaned up manually.
# These commands and the list have to be reviewed regularly.
#   Use e.g.:  # cut -d, -f1 irishionary_2010-01-26_20-05.csv | grep " " | less
# The words are:
#   ar fad
#   cailín
#   fada
#   míle
#   roimh
#   sé
#   slán
#   sláinte

temp_file="$t_dir/t"

grep -vE  '(ar fad|cailín|fada|míle|roimh|sé|slán|sláinte) ' "$csv_temp" > "$temp_file"

# For now, I have not added the numeral and the greeting meanings,
# as they do not have a defined class (I can define num, but it does
# not else occur else in the processing. If you want them, uncomment the lines
# however, be aware, that other numerals (which have no other meaning)
# and are of the structure "<irish> <english>" without the obligatory
# meta id (POS and gender)  "<irish> <meta> <english>" are neither incluede
# from the original dictionary.

echo '"ar fad","altogether","adv","NA"' >>"$temp_file"
echo '"ar fad","fully","adj","NA"' >>"$temp_file"
echo '"ar fad","outright","adj","NA"' >>"$temp_file"
echo '"cailín","girlfriend","noun","f"' >>"$temp_file"
echo '"cailín","girl","noun","f"' >>"$temp_file"
echo '"cailín","lass","noun","f"' >>"$temp_file"
echo '"fada","accent mark","noun","NULL"' >>"$temp_file"
echo '"fada","long","adj","NA"' >>"$temp_file"
# echo '"míle","thousand","num","NA"' >>"$temp_file"
echo '"míle","mile","noun","m"' >>"$temp_file"
echo '"roimh","ahead","adv","NA"' >>"$temp_file"
echo '"roimh","before","prep","NA"' >>"$temp_file"
# echo '"sé","six","num","NA"' >>"$temp_file" 
echo '"sé","he","pron","NA"' >>"$temp_file"
echo '"sé","him","pron","NA"' >>"$temp_file"
echo '"sé","it","pron","NA"' >>"$temp_file"
# echo '"slán","bye","greet","NA"' >>"$temp_file"
# echo '"slán","farewell","greet","NA"' >>"$temp_file"
# echo '"slán","goodby","greet","NA"' >>"$temp_file"
echo '"slán","safe","adj","NA"' >>"$temp_file"
# echo '"sláinte","cheers","greet","NA"' >>"$temp_file"
echo '"sláinte","health","noun","f"' >>"$temp_file"

# OK, so sort does not work, as it sorts binarily... (á comes after z)
# sort $temp_file > $csv_output
cp "$temp_file" "$csv_output"

echo "DONE"
echo


