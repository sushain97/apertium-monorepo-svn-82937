TMF=$(mktemp -d mitemporal.XXXXXXXX)

echo $1;

if [[ $1 == "hbs_HR-hbs_SR" ]]; then


lt-comp lr apertium-hbs.hbs_HR-hbs_SR.dix $TMF/hbs_HR-hbs_SR.bin
#TODO: <g></g> <b/>
lt-expand .deps/apertium-hbs.hbs.dix  | grep -v 'REGEX' | grep -v '\/' | grep -v ':<:' | LC_ALL=C sed 's/:>:/:/g' | cut -f2 -d':' | LC_ALL=C sed 's/^/^/g' | LC_ALL=C sed 's/$/$/g' | apertium-pretransfer | sed -e 's:\$[ ]*\^:$\n^:g'  | lt-proc -b $TMF/hbs_HR-hbs_SR.bin > $TMF/biltrans
cat $TMF/biltrans | grep '@' | cut -f1 -d'/' | LC_ALL=C sed 's/\^//g' | sort -u |  python expand-to-dix.py | LC_ALL=C sed 's/&/&amp;/g'  | sort -u >$TMF/dix
cat apertium-hbs.hbs_HR-hbs_SR.dix | LC_ALL=C sed -e '/<!-- @@@ -->/{r '`echo $TMF/dix` -e 'd;}' > $TMF/hbs_HR-hbs_SR.dix
cp $TMF/hbs_HR-hbs_SR.dix .deps/

elif [[ $1 == "hbs_SR-hbs_HR" ]]; then

lt-comp rl apertium-hbs.hbs_HR-hbs_SR.dix $TMF/hbs_SR-hbs_HR.bin
lt-expand .deps/apertium-hbs.hbs.dix  | grep -v 'REGEX' | grep -v '\/' | grep -v ':<:' | LC_ALL=C sed 's/:>:/:/g' | cut -f2 -d':' | LC_ALL=C sed 's/^/^/g' | LC_ALL=C sed 's/$/$/g' | apertium-pretransfer | sed -e 's:\$[ ]*\^:$\n^:g'  | lt-proc -b $TMF/hbs_SR-hbs_HR.bin > $TMF/biltrans
cat $TMF/biltrans | grep '@' | cut -f1 -d'/' | LC_ALL=C sed 's/\^//g' | sort -u |  python expand-to-dix.py | LC_ALL=C sed 's/&/&amp;/g'  | sort -u >$TMF/dix
cat apertium-hbs.hbs_HR-hbs_SR.dix | LC_ALL=C sed -e '/<!-- @@@ -->/{r '`echo $TMF/dix` -e 'd;}' > $TMF/hbs_SR-hbs_HR.dix
cp $TMF/hbs_SR-hbs_HR.dix .deps/;

        
else

echo "Please specify a direction";

fi

rm -Rf $TMF
