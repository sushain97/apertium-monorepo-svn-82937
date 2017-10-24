import utils
import sys

'''
This script generates plural forms by given lemmas (testvoc).
'''

'''
для окончаний ль
nn:
      <e>       <p><l>і</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>і</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>яў</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ям</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ях</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>ямі</l><r>ь<s n="n"/><s n="m"/><s n="nn"/><s n="pl"/><s n="ins"/></r></p></e>
aa:
      <e>       <p><l>і</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>яў</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>яў</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ям</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ях</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>ямі</l><r>ь<s n="n"/><s n="m"/><s n="aa"/><s n="pl"/><s n="ins"/></r></p></e>
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
    kanchatki = {'nom': 'і', 'acc': 'і', 'gen': 'яў', 'dat': 'ям', 'loc': 'ях', 'ins': 'ямі'}
    kanchatok = kanchatki[tags[-1]]
    if tags[-1] == 'acc' and tags[2] == 'aa':
        kanchatok = 'яў'
    print("{}; {}; {}; {}".format(word, word[:-1] + kanchatki[tags[-1]], '.'.join(tags[-2:]), '.'.join(tags[:3])))