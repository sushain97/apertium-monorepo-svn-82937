import utils
import sys

'''
This script generates plural forms by given lemma (testvoc).
'''

'''
nn:
      <e>       <p><l>і</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>і</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>ей</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>ям</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ях</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>ямі</l><r>ь<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="ins"/></r></p></e>
aa:
  в винительном падеже окончание ей
'''

inp = sys.stdin.readlines()
for l in inp:
    parsed = utils.parse_testvoc_line(l)
    assert len(parsed) == 2
    tt = "[\^{}\/$]".format(parsed[1].replace('\\', '').strip('#'))
    word, tags = utils.parse_testvoc_line(tt)[0]
    if tags[-2] != 'pl' or tags[:2] != ['n', 'f'] or tags[2] not in ['aa', 'nn']:
        print(word, tags, file=sys.stderr)
        continue
    kanchatki = {'nom': 'i', 'acc': 'i', 'gen': 'ей',
                 'dat': 'ям', 'loc': 'ях', 'ins': 'ямі'}
    kanchatok = kanchatki[tags[-1]]
    if tags[-1] == 'acc' and tags[2] == 'aa':
        kanchatok = 'ей'
    print("{}; {}; {}; {}".format(word, word[
          :-1] + kanchatki[tags[-1]], '.'.join(tags[-2:]), '.'.join(tags[:3])))
