import sys

'''
Sort speling file by lemma.
'''

inp = sys.stdin.readlines()

v = {}
for l in inp:
    l = l.strip('\n')
    p = l.split('; ')
    k = p[0] + "__" + p[3]
    if k not in v:
        v[k] = [l]
    else:
        v[k] += [l]

for l in v:
    for e in v[l]:
        print(e)
