#!/bin/bash
cat verb-wiki.txt | sed s/^/^$2\<v\>\<$1\>/g | sed 's/$/$/g' | hfst-proc -g tr-cv.autogen.hfst > /tmp/$2
cp wiki_verb.tmpl wiki/$2.wiki
cat wiki/$2.wiki | sed "s/Name/$2/g" | sed "s/Inf/$2/g" > wiki/$2.wiki.tmp
mv wiki/$2.wiki.tmp wiki/$2.wiki

let n=1
for temps in pres evid imp pmp pih fut cond opt ; do
for nbr in sg pl ; do
for pers in p1 p2 p3 ; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><$temps><$pers><$nbr>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		# per a imp (forma negativa)
		cat wiki/$2.wiki | sed "s/<v><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1
done
done
done

# formes negatives
for temps in pres evid pmp pih fut cond opt ; do
for nbr in sg pl ; do
for pers in p1 p2 p3 ; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><neg><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><neg><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><neg><$temps><$pers><$nbr>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1
done
done
done

# modes
for mode in caus abil 'caus><abil' ; do
for temps in pres ; do
#for temps in pres evid pmp pih fut cond opt ; do
for nbr in sg pl ; do
for pers in p1 p2 p3 ; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><$mode><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><$mode><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><$mode><$temps><$pers><$nbr>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1
done
done
done

# formes negatives
for temps in pres ; do
#for temps in pres evid pmp pih fut cond opt ; do
for nbr in sg pl ; do
for pers in p1 p2 p3 ; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><$mode><neg><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><$mode><neg><$temps><$pers><$nbr>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><$mode><neg><$temps><$pers><$nbr>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1
done
done
done
done

for temps in ger1 ger2 ger3 ger5 ger6 ger8 ger9 gna8 gna9 ger11 ger12 ger14 ger15 ger16 ger17 partpl1 partpl3 partpl4; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><$temps>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><$temps>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><$temps>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1

	# neg
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><neg><$temps>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	else
		if [ `echo $linia | cut -f1 -d'#'` ] ; then		# the form does no exist?
			forma=`echo $linia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><neg><$temps>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
			cat wiki/$2.wiki | sed "s/<br.><v><neg><$temps>//" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		else
			forma='-'
			cat wiki/$2.wiki | sed "s/<v><neg><$temps>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
			cat wiki/$2.wiki | sed "s/<br.><v><neg><$temps>//" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		fi
	fi
	let n=$n+1

	for suf in cop str pl px3sp ben abl_ins subst_и subst_скер subst_хи ; do
	linia=`head -n $n /tmp/$2 | tail -n 1`;
	if [ `echo $linia | cut -f1 -d'/' -s` ] ; then		# more than one option?
		for times in 1 2 ; do
			sublinia=`echo $linia | cut -f$times -d'/'`;
			forma=`echo $sublinia | cut -f2 -d':'`;
			cat wiki/$2.wiki | sed "s/<v><$temps><$suf>/$forma/" > wiki/$2.wiki.tmp
			mv wiki/$2.wiki.tmp wiki/$2.wiki
		done
	elif [[ "$linia" =~ "#" ]] ; then			# the form does no exist?
		forma='-'
		cat wiki/$2.wiki | sed "s/<v><$temps><$suf>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><neg><$temps><$suf>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	else
		forma=`echo $linia | cut -f2 -d':'`;
		cat wiki/$2.wiki | sed "s/<v><$temps><$suf>/$forma/" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
		cat wiki/$2.wiki | sed "s/<br.><v><$temps><$suf>//" > wiki/$2.wiki.tmp
		mv wiki/$2.wiki.tmp wiki/$2.wiki
	fi
	let n=$n+1
	done

done

cat wiki/$2.wiki
