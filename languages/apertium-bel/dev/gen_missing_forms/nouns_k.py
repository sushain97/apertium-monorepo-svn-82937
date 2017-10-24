import utils
import sys

'''
This script generates plural forms by given lemmas (testvoc).
'''


'''
для окончаний к
nn:
      <e>       <p><l>і</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>і</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ам</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ах</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>амі</l><r><s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="ins"/></r></p></e>
aa:
      <e>       <p><l>і</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>аў</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ам</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ах</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>амі</l><r><s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="ins"/></r></p></e>
'''

inp = sys.stdin.readlines()
for l in inp:
    parsed = utils.parse_testvoc_line(l)
    assert len(parsed) == 2
    tt = "[\^{}\/$]".format(parsed[1].replace('\\', '').strip('#'))
    word, tags = utils.parse_testvoc_line(tt)[0]
    if tags[-2] != 'pl' or tags[:2] != ['n', 'm'] or tags[2] not in ['nn', 'aa']:
        print(word, tags, file=sys.stderr)
        continue
    kanchatki = {'nom': 'і', 'acc': 'і', 'gen': 'аў',
                 'dat': 'ам', 'loc': 'ах', 'ins': 'амі'}
    kanchatok = kanchatki[tags[-1]]
    if tags[-1] == 'acc' and tags[2] == 'aa':
        kanchatok = 'аў'
    print("{}; {}; {}; {}".format(word, word +
                                  kanchatki[tags[-1]], '.'.join(tags[-2:]), '.'.join(tags[:3])))
