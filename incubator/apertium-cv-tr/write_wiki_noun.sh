cat noun_decl_wiki.txt | sed s/^/^$1\<n\>/g | sed 's/$/$/g' | hfst-proc -g tr-cv.autogen.hfst > /tmp/$1
cp wiki_noun.tmpl wiki/$1.wiki
cat wiki/$1.wiki | sed "s/Name/$1/g" > wiki/$1.wiki.tmp
mv wiki/$1.wiki.tmp wiki/$1.wiki

let n=1
for cas in nom gen dat loc abl ins abe ben ; do
	linia=`head -n $n /tmp/$1 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d' ' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d' '`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$1.wiki | sed "s/<n><$cas>/$forma/" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$1.wiki | sed "s/<n><$cas>/$forma/" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
		cat wiki/$1.wiki | sed "s/<br.><n><$cas>//" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
	fi
	let n=$n+1
done

for cas in nom gen dat loc abl ins abe ben ; do
	linia=`head -n $n /tmp/$1 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d' ' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d' '`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$1.wiki | sed "s/<n><pl><$cas>/$forma/" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$1.wiki | sed "s/<n><pl><$cas>/$forma/" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
		cat wiki/$1.wiki | sed "s/<br.><n><pl><$cas>//" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
	fi
	let n=$n+1
done

for pos in px1sg px2sg px3sp px1pl px2pl ; do
	for cas in nom gen dat loc abl ins abe ben ; do
		linia=`head -n $n /tmp/$1 | tail -n 1`;
		if [ `echo $linia | cut -f1 -d' ' -s` ] ; then		# more than one option?
			for times in 1 2 ; do
				sublinia=`echo $linia | cut -f$times -d' '`;
				forma=`echo $sublinia | cut -f2 -d':'`;
				cat wiki/$1.wiki | sed "s/<n><$pos><$cas>/$forma/" > wiki/$1.wiki.tmp
				mv wiki/$1.wiki.tmp wiki/$1.wiki
			done
		else
			forma=`echo $linia | cut -f2 -d':'`;
			cat wiki/$1.wiki | sed "s/<n><$pos><$cas>/$forma/" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
			cat wiki/$1.wiki | sed "s/<br.><n><$pos><$cas>//" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
		fi
		let n=$n+1
	done
done

for pos in px1sg px2sg px3sp px1pl px2pl ; do
	for cas in nom gen dat loc abl ins abe ben ; do
		linia=`head -n $n /tmp/$1 | tail -n 1`;
		if [ `echo $linia | cut -f1 -d' ' -s` ] ; then		# more than one option?
			for times in 1 2 ; do
				sublinia=`echo $linia | cut -f$times -d' '`;
				forma=`echo $sublinia | cut -f2 -d':'`;
				cat wiki/$1.wiki | sed "s/<n><$pos><pl><$cas>/$forma/" > wiki/$1.wiki.tmp
				mv wiki/$1.wiki.tmp wiki/$1.wiki
			done
		else
			forma=`echo $linia | cut -f2 -d':'`;
			cat wiki/$1.wiki | sed "s/<n><$pos><pl><$cas>/$forma/" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
			cat wiki/$1.wiki | sed "s/<br.><n><$pos><pl><$cas>//" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
		fi
		let n=$n+1
	done
done

for morfema in dist str cop ; do
	linia=`head -n $n /tmp/$1 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d' ' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d' '`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$1.wiki | sed "s/<n><$morfema>/$forma/" > wiki/$1.wiki.tmp
			mv wiki/$1.wiki.tmp wiki/$1.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$1.wiki | sed "s/<n><$morfema>/$forma/" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
		cat wiki/$1.wiki | sed "s/<br.><n><$morfema>//" > wiki/$1.wiki.tmp
		mv wiki/$1.wiki.tmp wiki/$1.wiki
	fi
	let n=$n+1
done

cat wiki/$1.wiki
