#Usage: Place in apertium-af-nl/nl
import sys, time
fulldix = open('apertium-sl-es.sl.dix.full', 'r')
exp = open('/tmp/apertium-sl-es.sl-es.exp', 'r')
posList = ['n','vbser','vblex', 'vbmod', 'vbhaver', 'vaux', 'adj', 'adv', 'pr', 'prn', 'det',
           'np', 'cnj', 'num', 'ij', 'rel', 'preadv', 'predet', 'otr'
           ]
posFileDict = {}
for pos in posList:
    posFileDict[pos] = open(pos + '.xml', 'w')
fulldixDict = {}

for line in fulldix:
    if line.find('lm=\"') != -1:
        lemma = line[line.find('lm=\"')+4:line.find('\"',line.find('lm=\"')+4)]
        if line.find('_',line.find('__')+2) != -1:
            pos = line[line.find('__')+2:line.find('_',line.find('__')+2)]
        else:
            pos = line[line.find('__')+2:line.find('\"',line.find('__')+2)]
         
        fulldixDict[(lemma, pos)] = fulldixDict.get((lemma, pos),"") + line
        
for line in exp:
    lanPart = line[line.rfind(':')+1:]
    lemma = lanPart[:lanPart.find("<")]
    pos = lanPart[lanPart.find("<")+1:lanPart.find(">")]
    try:
        posFileDict[pos].writelines(fulldixDict.get((lemma, pos),""))
    except KeyError:
        if pos == 'cnjcoo' or pos == 'cnjsub' or pos == 'cnjadv':
            posFileDict['cnj'].writelines(fulldixDict.get((lemma, pos),""))
        else:
            posFileDict['otr'].writelines(fulldixDict.get((lemma, pos),""))

#For which lemma's don't match.
lemPosList = [('subject pronouns','prn'),('object pronouns','prn'),
              ('reflexive pronouns','prn'),
              ('object \'unstressed\' pronouns','prn')]
for pair in lemPosList:
    try:
        posFileDict[pair[1]].writelines(fulldixDict.get(pair,""))
    except KeyError:
        if pos == 'cnjcoo' or pos == 'cnjsub' or pos == 'cnjadv':
            posFileDict['cnj'].writelines(fulldixDict.get(pair,""))
        else:
            posFileDict['otr'].writelines(fulldixDict.get(pair,""))    
