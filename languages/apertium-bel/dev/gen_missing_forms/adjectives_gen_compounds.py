import sys

'''
It takes speling file and generate compounds basing on <nt><sg><nom> form:
    ваеннае -> ваенна
Usage: python3 $0 < speling.txt
'''

inp = sys.stdin.readlines()
undefined = 0
for l in inp:
    p = l.strip('\n').split('; ')
    assert p[-1].split('.')[0] == 'adj'
    tags = p[-2].split('.')
    if p[1].find('-') != -1:
        continue
    if [tags[0], tags[2], tags[3]] != ['nt', 'sg', 'nom']:
        continue
    if p[1][-2:] != 'ае':
        print(p[1], file=sys.stderr)
        undefined += 1
    print("{}; {}; {}; {}".format(p[0], p[1][:-1], 'cmp', p[-1]))
print(undefined, file=sys.stderr)