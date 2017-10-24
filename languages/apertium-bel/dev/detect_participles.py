import sys
import xml.etree.ElementTree as ET

'''
Experimental script for choosing verbs<->participles.
It works with bnkorpus's files.
Usage: $0 participles.xml verbs.xml
Output:
    <participle> <verbs that were found> <levenshtein distance for each verb> <LCP length for each verb> <result>
Example:
    мяшаны ['мяшаць', 'мяшацца', 'змяшацца', 'умяшацца', 'умяшаць'] [0, 0, 1, 1, 1] [4, 4, 0, 0, 0] ['мяшаць', 'мяшацца']
'''

P = ET.parse(sys.argv[1])
V = ET.parse(sys.argv[2])


def remove_ending_p(a):
    assert a[-2:] in ['ны', 'ты', 'чы', 'шы', 'лы', 'мы']
    return a[:-2]


def remove_ending_v(b):
    if b[-2:] in ['ць', 'чы', 'ці']:
        return b[:-2]
    elif b[-3:] in ['цца']:
        return b[:-3]
    elif b[-4:] in ['ціся', 'чыся']:
        return b[:-4]


def distance(a, b):
    a = remove_ending_p(a)
    b = remove_ending_v(b)
    n, m = len(a), len(b)
    if n > m:
        n, m = m, n
        a, b = b, a
    current_row = range(n + 1)
    for i in range(m + 1):
        previous_row, current_row = current_row, [i] + [0] * n
        for j in range(1, n + 1):
            add, delete, change = previous_row[
                j] + 1, current_row[j - 1] + 1, previous_row[j - 1]
            if a[j - 1] != b[i - 1]:
                change += 1
            current_row[j] = min(add, delete, change)
    return current_row[n]


def find_longest_common_prefix(a, b):
    a = remove_ending_p(a)
    b = remove_ending_v(b)
    candidate = ''
    for char in a:
        candidate = candidate + char
        if candidate != b[:len(candidate)]:
            return candidate[:-1]
    return candidate

path = './/Paradigm'
p = set()
for paradigm in P.findall(path):
    lem = paradigm.attrib['Lemma'].replace('´', '')
    # print(lem)
    assert lem[-2:] in ['ны', 'ты', 'чы', 'шы', 'лы', 'мы']
    p.add(lem)
print(len(p))
v = set()
for paradigm in V.findall(path):
    lem = paradigm.attrib['Lemma'].replace('´', '')
    # print(lem)
    assert lem[-2:] in ['ць', 'чы',
                        'ці'] or lem[-3:] in ['цца'] or lem[-4:] in ['ціся', 'чыся']
    tag = paradigm.attrib['Tag']
    v.add(lem)
print(len(v))
c = list(v)
for e in p:
    stat = sorted(c, key=lambda x: distance(e, x))
    candidates = stat[:5]
    distances = [distance(e, x) for x in candidates]
    prefixes = [len(find_longest_common_prefix(e, x)) for x in candidates]
    ans = None
    for o in candidates:
        if ans is None or len(find_longest_common_prefix(e, o)) > len(find_longest_common_prefix(e, ans)):
            ans = o
    answers = []
    lcp_ans = find_longest_common_prefix(e, ans)
    for o in candidates:
        if len(find_longest_common_prefix(e, o)) == len(lcp_ans):
            answers += [o]
    print(e, candidates, distances, prefixes, answers,
          'FOUND' if len(answers) == 1 and len(lcp_ans) > 2 else '')
