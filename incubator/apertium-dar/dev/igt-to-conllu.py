import libhfst;
import re
import sys;

	
def read_rules(sf): #{
	symbs = [];
	# Read in the replacement rules
	for line in sf.readlines(): #{
	
		line = line.strip('\n');
		row = line.split('\t')
		inn_lem = row[0].strip();
		inn_pos = row[1].strip();
		inn_feat = row[2].strip();
		out_lem = row[3].strip();
		out_pos = row[4].strip();
		out_feat = row[5].strip();
	
		inn_lem_l = row[0].strip().lower();
		inn_pos_l = row[1].strip().lower();
		inn_feat_l = row[2].strip().lower();
	
		inn_tem_t = row[0].strip().title();
		inn_pos_t = row[1].strip().title();
		inn_feat_t = row[2].strip().title();
	
		nivell = -1;
		inn = set();
		if inn_pos != '_' and inn_feat != '_': #{
			inn = set([inn_pos] + inn_feat.split('|'));	
			nivell = 1;
		elif inn_pos == '_' and inn_feat != '_': #{
			inn = set(inn_feat.split('|'));	
			nivell = 2;
		elif inn_pos != '_' and inn_feat == '_': #{
			inn = set([inn_pos]);	
			nivell = 2;
		#}
	
		out = set();
		if out_pos != '_' and out_feat != '_': #{
			out = set([out_pos] + out_feat.split('|'));	
		elif out_pos == '_' and out_feat != '_': #{
			out = set(out_feat.split('|'));	
		elif out_pos != '_' and out_feat == '_': #{
			out = set([out_pos]);	
		#}
	
		rule = (nivell, inn, out);
	
		symbs.append(rule)
	
	#	print(nivell, inn, out, file=sys.stderr);
	
		nivell = -1;
		inn_l = set();
		if inn_pos_l != '_' and inn_feat_l != '_': #{
			inn_l = set([inn_pos_l] + inn_feat_l.split('|'));	
			nivell = 1;
		elif inn_pos_l == '_' and inn_feat_l != '_': #{
			inn_l = set(inn_feat_l.split('|'));	
			nivell = 2;
		elif inn_pos_l != '_' and inn_feat_l == '_': #{
			inn_l = set([inn_pos_l]);	
			nivell = 2;
		#}
		rule_l = (nivell, inn_l, out);
	
		symbs.append(rule_l)
			
	#	print(nivell, inn_l, out, file=sys.stderr);
	
		nivell = -1;
		inn_t = set();
		if inn_pos_t != '_' and inn_feat_t != '_': #{
			inn_t = set([inn_pos_t] + inn_feat_t.split('|'));	
			nivell = 1;
		elif inn_pos_t == '_' and inn_feat_t != '_': #{
			inn_t = set(inn_feat_t.split('|'));	
			nivell = 2;
		elif inn_pos_t != '_' and inn_feat_t == '_': #{
			inn_t = set([inn_pos_t]);	
			nivell = 2;
		#}
		rule_t = (nivell, inn_t, out);
	
		symbs.append(rule_t)
			
	#	print(nivell, inn_t, out, file=sys.stderr);
	
	#}
	# Order the rules by priority
	symbs.sort(); 
	
	return symbs;
#}


# List of rules in the format: 
# (priority, set([in, tags]), set([out, tags]))
# The priority is used to determine rule application order. Things that are more specific
# should come first, then backoff stuffs

def generic_convert(lema, xpos, feat, s): #{
	u_lema = lema;
	u_pos = '_';
	u_feat = '';

	msd = set([xpos] + feat);

#	print('>', lema, '|', xpos, '|', feat,'|||', msd, file=sys.stderr);

	for i in s: #{
		remainder = msd - i[1];
		intersect = msd.intersection(i[1]);
		if intersect == i[1]: #{
			#print('-', msd, intersect, remainder, i[2], '|||', u_pos, u_feat, file=sys.stderr);
			for j in list(i[2]): #{
				if j == j.upper(): #{
					u_pos = j;
				else: #{
					if u_feat == '': #{
						u_feat = j
					else: #{
						u_feat = u_feat + '|' + j
					#}
				#}
			#}
			msd = remainder;
		#}
	#}

	u_feat_s = list(set(u_feat.split('|')));
	u_feat_s.sort(key=str.lower);
	u_feat = '|'.join(u_feat_s);


	if u_feat == '': #{
		u_feat = '_';
	#}

	return (u_lema, u_pos, u_feat);
#}

def apertium_convert(analyses, s): #{
	retval = [];
	for analysis in analyses: #{

		loca = analysis[0].replace('><','|').replace('<','|').replace('>','').replace('@_EPSILON_SYMBOL_@', '');
		if '+' in loca: #{
			# Do something better here
			loca = loca.split('+')[0]; 
		#}
		lema = loca.split('|')[0];
		pos = loca.split('|')[1];
		feats = loca.split('|')[2:]
		#print(lema, file=sys.stderr);
		#print(pos, file=sys.stderr);
		#print(feats, file=sys.stderr);
		(u_lema, u_pos, u_feat) = generic_convert(lema, pos, feats, s);
		retval.append((u_lema, u_pos, u_feat));
	#}

	return retval;
#}

def best_analysis(sparse, analyses): #{
	maxoverlap = 0;
	best_analysis = ();
	for analysis in analyses: #{
		set_s = set(sparse.split('|'));
		set_a = set(analysis[2].split('|'));
		
		intersect = set_a.intersection(set_s);
		if len(intersect) >= maxoverlap: #{
			maxoverlap = len(intersect);
			best_analysis = analysis;
		#}
		
	#}
	#print(maxoverlap, best_analysis, file=sys.stderr);
	return best_analysis;
#}

def translit(s, table, nyckler): #{
	o = s;
	for c in nyckler: #{
		o = o.replace(c, table[c]);
	#}
	return o;
#}

tf = open(sys.argv[1]);
sf = open(sys.argv[2]);

istr = libhfst.HfstInputStream(sys.argv[3]);
morf = istr.read();
morf.remove_epsilons();

af = open(sys.argv[4]);

table = {};

for line in tf.readlines(): #{
	if line.strip() == '': #{
		continue;
	#}
	row = line.strip('\n').split('\t');
	table[row[0]] = row[1];
#}

nyckler = list(table.keys());
nyckler.sort(key = lambda s: len(s))
nyckler.reverse();

leipzig_symbs = read_rules(sf);
apertium_symbs = read_rules(af);

doc = sys.stdin.read().split('\n\n');

lexicon = {};
cur_id = 0;
total_tok = 0;
total_sent = 0;

#0(1)	ʡaˁli	w-ak’-ib
#1	Ali(nom)	m-come.pfv-aor
#2	‘Ali came’.

for igt in doc: #{
	if igt.strip() == '': #{
		continue;
	#}
	lines = igt.split('\n');
	cur_id = lines[0].split('\t')[0];
	L = lines[0]
	G = lines[1]
	T = lines[2];
	#print(igt); 

	if L != [] and G != []: #{
		row_L = re.sub('[\t ][\t ]*', ' ', L).split(' ')[1:]
		row_G = re.sub('[\t ][\t ]*', ' ', G).split(' ')[1:]
		if len(row_L) == len(row_G): #{
			for i in range(0, len(row_L)): #{
				if row_L[i] not in lexicon: #{
					lexicon[row_L[i]] = [];
				#}
				lexicon[row_L[i]].append(row_G[i]);
			#}			

			if L[0].count('/') > 0: continue;
			if L[0].count('*') > 0: continue;

			trad = '';
			if len(T) > 0: #{
				trad = T;
			#}	
			print('# sent: %s' % (cur_id));
			print('# text: %s' % (' '.join(row_L)));
			print('# gloss: %s' % (' '.join(row_G)));
			print('# text[eng]: %s' % (trad.strip()));
			idx = 1;
			for i in range(0, len(row_L)): #{
				gloss = row_G[i];
				misc = 'Gloss=' + gloss;
				lema = gloss.replace('=', '.').split('-')[0];
				xpos = '_'
				feat = gloss.replace('-', '.').replace('=','.').replace(':','.').replace('(', '.').replace(')','').split('.')
				if '.' in feat: #{
					feat = feat.split('.');
				#}		
				(u_lema, u_pos, u_feat) = generic_convert(lema, xpos, feat, leipzig_symbs);		

				misc = misc + '|Transcript=' + row_L[i];
				sur = translit(row_L[i], table, nyckler);
				if idx == 1: sur = sur.title();

				morfres = morf.lookup(sur);
				if morfres == (): #{
					morfres = morf.lookup(sur.lower());
				#}
				retres = apertium_convert(morfres, apertium_symbs);
				#print(retres, file=sys.stderr);
				best = best_analysis(u_feat, retres);
				if best != (): #{
					u_lema = best[0];
					u_pos = best[1];
					u_feat = best[2];
				else: #{
					u_lema = '_';
				#}
				#misc = misc + '|Morf=' + str(morfres);
				if i == len(row_L)-1 and (row_L[i][-1] == '.' or row_L[i][-1] == '!' or row_L[i][-1] == '?'): #{
					punct = re.findall('[\.!?]$', row_L[i])[0];
					row_L[i] = re.sub('[\.!?]$', '', row_L[i]);
					print('%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' % (idx, sur, u_lema, u_pos, '_', u_feat, '_', '_', '_', misc));
					print('%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' % (idx+1, punct, punct, 'PUNCT', '_', '_', '_', 'punct', '_', '_'));
					total_tok += 2;
				elif row_L[i][-1] == ',': #{
					punct = re.findall('[,]$', row_L[i])[0];
					row_L[i] = re.sub('[,]$', '', row_L[i]);
					print('%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' % (idx, sur, u_lema, u_pos, '_', u_feat, '_', '_', '_', misc));
					print('%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' % (idx+1, punct, punct, 'PUNCT', '_', '_', '_', 'punct', '_', '_'));
					total_tok += 2;
					idx += 1

				else: #{
					print('%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' % (idx, sur, u_lema, u_pos, '_', u_feat, '_', '_', '_', misc));
					total_tok += 1;
				#}
				idx += 1;
			#}
			print('');
			total_sent += 1;
		else: #{
			print('[%d] UNALIGNED:' % (idx), file=sys.stderr)
			print('\t',len(row_L),'||', row_L, file=sys.stderr);
			print('\t',len(row_G),'||', row_G, file=sys.stderr);
		#}
	#}
#}

print(total_tok, total_sent, file=sys.stderr);

#for w in lexicon: #{
#	print(w,'\t', lexicon[w]);
##}
