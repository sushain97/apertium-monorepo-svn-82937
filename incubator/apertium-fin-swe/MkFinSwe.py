import re
import string
import urllib
import subprocess

def notEmpty(str):
    return "variants {} ;" not in str and "mkW" not in str #mkW[A-Z] has weird patterns in fin

def funName(str):
    pat = "(?:[a-zA-Z]+_)+[A-Z][a-z]*"
    matches = re.findall(pat,str)
    if matches: return matches[0]
    else: return ""

# example input 
# DictionarySwe: lin neurosis_N = mkN "neuros" "neuroser" ; -- SaldoWN
# DictionaryFin: lin football_N = mkN "jalka" (mkN "pallo") ;
def linName(str):
    # normalise compound nouns
    compoundPat = 'mkN "(.*?)" .mkN "(.*?)"'
    parts = re.findall(compoundPat,str)
    if parts: 
        return ''.join(parts[0])
    else:
        pat = '"(.*?)"' # first form in quotes
        matches = re.findall(pat,str)
        if matches: 
            return matches[0]
        else: 
            return ""

# example input:
# lin refusal_N = mkN "avslag" neutrum;
# lin regression_N = mkN "regression" "regressioner" ;
# for 1-arg smart paradigm, assume it's utrum
# TODO find this information somewhere more reliable place,
# and use GF lexicon just to map Swedish words to Finnish
def gender(str):
    # for explicit cases
    if "neutrum" in str: 
        return "nt"
    if "utrum" in str: 
        return "ut"

    # string-based heuristics         # ; for end or | for option
    twoargPat = 'mkN "(.*?)" "(.*?)" (?:;|\|)'
    twoargs = re.findall(twoargPat,str)
    if twoargs: 
        val,valar = twoargs[0]
        if val==valar:
            return "nt"
        else:
            return "ut"
    
    else:
        return "ut"
    
        

def cat(str):
    matches = re.findall(".*_(.*)",str)
    if matches: return matches[0]
    else: return "N"


# making dix entries out of the data        
def mkN(fin,swe,gender):
    return '<e><p><l>%s<s n="n"/></l><r>%s<s n="n"/><s n="%s"/></r></p></e>' % (fin,swe,gender)

def mkV(fin,swe):
    return '<e><p><l>%s<s n="vblex"/></l><r>%s<s n="vblex"/></r></p></e>'  % (fin,swe)

def mkA(fin,swe):
    return '<e><p><l>%s<s n="adj"/></l><r>%s<s n="adj"/><s n="pst"/></r></p></e>' % (fin,swe)

def mkAdp(fin,swe):
    return '<e><p><l>%s<s n="post"/></l><r>%s<s n="pr"/></r></p></e>' % (fin,swe)

def mkAdv(fin,swe):
    return '<e><p><l>%s<s n="adv"/></l><r>%s<s n="adv"/></r></p></e>' % (fin,swe)

def mkIj(fin,swe):
    return '<e><p><l>%s<s n="ij"/></l><r>%s<s n="ij"/></r></p></e>' % (fin,swe)

# TODO rest of the categories

def w(fun,fin,swe):
    return dictFinSwe.write('%s\n' % fun(fin,swe))

if __name__ == '__main__':
    # download & read GF lexica
    urllib.urlretrieve('http://www.grammaticalframework.org/lib/src/translator/DictionaryFin.gf', filename='/tmp/DictionaryFin.gf')
    urllib.urlretrieve('http://www.grammaticalframework.org/lib/src/translator/DictionarySwe.gf', filename='/tmp/DictionarySwe.gf')
    with open('/tmp/DictionarySwe.gf', 'r') as f:
        dictSwe = f.read().split('\n')
    with open('/tmp/DictionaryFin.gf', 'r') as f:
        dictFin = f.read().split('\n')

    # read original dix
    with open('apertium-fin-swe.fin-swe.dix', 'r') as f:
        dictFinSweOrig = f.read().split('\n')
        beginning = '\n'.join(dictFinSweOrig[:-5])
        end = '\n'.join(dictFinSweOrig[-5:])

    # create new file
    dictFinSwe = open('apertium-fin-swe.fin-swe-GF.dix', 'a')
    
    neSwe = filter(notEmpty, dictSwe)
    neFin = filter(notEmpty, dictFin)
    wordsSwe = zip( map(funName, neSwe), map(linName, neSwe), map(gender, neSwe) )
    wordsFin = zip( map(funName, neFin), map(linName, neFin) ) 
    
    wordsFinSwe = []
    for funF, linF in wordsFin:
        for funS, linS, genS in wordsSwe:
            if funF!='' and linF!='' and linS!='' and funF==funS:
                wordsFinSwe.append((linF, linS, cat(funF), genS))

    uniqwords = list(set(list(wordsFinSwe)))      # remove duplicates
    words = sorted(uniqwords, key=lambda x: x[2]) # sort by category

    # put together the new bidix   
    dictFinSwe.write(beginning)       # headers & all entries from existing bidix
    dictFinSwe.write('\n\n<!-- Automatically generated from GF lexicon -->\n\n')
    
    for fin, swe, c, gender in words: # new entries
        if c=='N': dictFinSwe.write('%s\n' % mkN(fin,swe,gender)) 
        if c=='A': w(mkA,fin,swe)
        if c=='Adv': w(mkAdv,fin,swe)
        if c=='Prep': w(mkAdp,fin,swe)
        if c=='Interj': w(mkIj,fin,swe)
        if c.startswith('V') and linS.endswith('a'): w(mkV,fin,swe)

    dictFinSwe.write(end)             # end tags etc. from existing bidix

                

# uncomment this line, or just do `svn revert apertium-fin-swe.fin-swe.dix'
# subprocess.call(["mv", "apertium-fin-swe.fin-swe.dix", "apertium-fin-swe.fin-swe.dix.bak"])
subprocess.call(["mv", "apertium-fin-swe.fin-swe-GF.dix", "apertium-fin-swe.fin-swe.dix"])

