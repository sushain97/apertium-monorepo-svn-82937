import utils
import sys

'''
This script generates plural forms by given lemma.
'''

'''
для окончаний л
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

word, tags = sys.argv[1], ['n', 'm', sys.argv[2], 'sg', 'nom']
if tags[-2] != 'pl' or tags[:2] != ['n', 'm'] or tags[2] not in ['nn', 'aa']:
    print(word, tags, file=sys.stderr)
kanchatki = {'nom': 'ы', 'acc': 'ы', 'gen': 'аў',
             'dat': 'ам', 'loc': 'ах', 'ins': 'амі'}
kanchatok = kanchatki[tags[-1]]
if tags[-1] == 'acc' and tags[2] == 'aa':
    kanchatok = 'аў'
print("{}; {}; {}; {}".format(word, word +
                              kanchatki[tags[-1]], '.'.join(tags[-2:]), '.'.join(tags[:3])))
