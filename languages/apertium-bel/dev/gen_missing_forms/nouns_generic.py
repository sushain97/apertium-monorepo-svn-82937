import utils
import sys

'''
This script generates plural forms by given lemma.
'''

'''
для окончаний _
nn:
      <e>       <p><l>ы</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>ы</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ам</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ах</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>амі</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="ins"/></r></p></e>
aa:
      <e>       <p><l>ы</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ам</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ах</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>амі</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="ins"/></r></p></e>
'''

lemma = input()
forms = []
cases = ['nom', 'acc', 'gen', 'dat', 'loc', 'ins']
kk = {}
kk['_'] = {'nom': 'ы', 'acc': 'ы', 'gen': 'аў',
           'dat': 'ам', 'loc': 'ах', 'ins': 'амі'}
kk['ль'] = {'nom': 'лі', 'acc': 'лі', 'gen': 'ляў',
            'dat': 'лям', 'loc': 'лях', 'ins': 'лямі'}
kk['й'] = {'nom': 'і', 'acc': 'і', 'gen': 'яў',
           'dat': 'ям', 'loc': 'ях', 'ins': 'ямі'}
kk['а'] = {'nom': 'ы', 'acc': 'ы', 'gen': '',
           'dat': 'ам', 'loc': 'ах', 'ins': 'амі'}
kk['я'] = {'nom': 'і', 'acc': 'і', 'gen': 'яў',
           'dat': 'ям', 'loc': 'ях', 'ins': 'ямі'}
kk['ыя'] = {'nom': 'ыя', 'acc': 'ыю', 'gen': 'ыі',
            'dat': 'ыі', 'loc': 'ыі', 'ins': 'ыяй'}
kk['ія'] = {'nom': 'ія', 'acc': 'ію', 'gen': 'іі',
            'dat': 'іі', 'loc': 'іі', 'ins': 'іяй'}
for c in cases:
    forms += [(lemma, ['np', 'f', 'sg', c])]
for c in forms:
    word, tags = c[0], c[1]
    # or tags[2] not in ['nn', 'aa']:
    if tags[-2] != 'sg' or tags[:2] != ['np', 'f']:
        print(word, tags, file=sys.stderr)
        assert False
    kanchatki = kk[sys.argv[1]]
    kanchatok = kanchatki[tags[-1]]
    ln = len(sys.argv[1])
    if sys.argv[1] == '_':
        ln = 0
    suff = ''
    if len(sys.argv) == 3:
        suff = sys.argv[2]
    ww = word if ln == 0 else word[:-ln]
    # if ww[-1] in ['к', 'г'] and sys.argv[1] == 'а' and tags[-1] in ['nom', 'acc']:
    # kanchatok = 'і'
    print("{}; {}; {}; {}".format(word + suff, ww +
                                  kanchatok, '.'.join(tags[-2:]), '.'.join(tags[:2])))
    print("{}; {}; {}; {}".format(word + suff, ww + kanchatok,
                                  '.'.join(tags[-2:]), '.'.join(tags[:2])), file=sys.stderr)
