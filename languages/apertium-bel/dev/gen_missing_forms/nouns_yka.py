import utils
import sys

'''
This script generates plural forms by given lemma (testvoc).
'''


'''
для окончаний ыка
nn:
      <e>       <p><l>кі</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="nom"/></r></p></e>
      <e>       <p><l>кі</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="acc"/></r></p></e>
      <e>       <p><l>к</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="gen"/></r></p></e>
      <e>       <p><l>кам</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="dat"/></r></p></e>
      <e>       <p><l>ках</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="loc"/></r></p></e>
      <e>       <p><l>камі</l><r>ка<s n="n"/><s n="f"/><s n="nn"/><s n="pl"/><s n="ins"/></r></p></e>
aa:
  acc: к instead of кі

some words has different acc/gen forms (e. g. тактыка)
i assume that i don't have these
'''

inp = sys.stdin.readlines()
for l in inp:
    parsed = utils.parse_testvoc_line(l)
    assert len(parsed) == 2
    tt = "[\^{}\/$]".format(parsed[1].replace('\\', '').strip('#'))
    word, tags = utils.parse_testvoc_line(tt)[0]
    if tags[-2] != 'pl' or tags[:2] != ['n', 'f'] or tags[2] not in ['nn', 'aa']:
        print(word, tags, file=sys.stderr)
        continue
    kanchatki = {'nom': 'кi', 'acc': 'кі', 'gen': 'к',
                 'dat': 'кам', 'loc': 'ках', 'ins': 'камі'}
    kanchatok = kanchatki[tags[-1]]
    if tags[-1] == 'acc' and tags[2] == 'aa':
        kanchatok = 'кі'
    print("{}; {}; {}; {}".format(word, word[
          :-2] + kanchatki[tags[-1]], '.'.join(tags[-2:]), '.'.join(tags[:3])))
