import sys

'''
It produces new file (in speling format) with generated forms (these forms commented below).
Example for adjective "міжваенны":
міжваенны; міжваенны; m.an.sg.nom; adj
міжваенны; міжваеннага; m.an.sg.gen; adj
міжваенны; міжваеннаму; m.an.sg.dat; adj
міжваенны; міжваенны; m.nn.sg.acc; adj        -----> nn - ы     m.an.sg.nom
міжваенны; міжваеннага; m.aa.sg.acc; adj      -----> aa - ага   m.an.sg.gen
міжваенны; міжваенным; m.an.sg.ins; adj
міжваенны; міжваенным; m.an.sg.loc; adj
міжваенны; міжваенная; f.an.sg.nom; adj
міжваенны; міжваеннай; f.an.sg.gen; adj
міжваенны; міжваеннай; f.an.sg.dat; adj
міжваенны; міжваенную; f.an.sg.acc; adj
міжваенны; міжваеннай; f.an.sg.ins; adj       -----> \  f.an.sg.dat
міжваенны; міжваеннаю; f.an.sg.ins; adj       -----> /  f.an.sg.dat + repl й->ю
міжваенны; міжваеннай; f.an.sg.loc; adj
міжваенны; міжваеннае; nt.an.sg.nom; adj
міжваенны; міжваеннага; nt.an.sg.gen; adj
міжваенны; міжваеннаму; nt.an.sg.dat; adj
міжваенны; міжваеннае; nt.an.sg.acc; adj
міжваенны; міжваенным; nt.an.sg.ins; adj
міжваенны; міжваенным; nt.an.sg.loc; adj
міжваенны; міжваенныя; mfn.an.pl.nom; adj
міжваенны; міжваенных; mfn.an.pl.gen; adj
міжваенны; міжваенным; mfn.an.pl.dat; adj
міжваенны; міжваенныя; mfn.nn.pl.acc; adj     -----> nn - ыя    mfn.an.pl.nom
міжваенны; міжваенных; mfn.aa.pl.acc; adj     -----> aa - ых    mfn.an.pl.gen
міжваенны; міжваеннымі; mfn.an.pl.ins; adj
міжваенны; міжваенных; mfn.an.pl.loc; adj
'''

if len(sys.argv) == 1:
    print('usage: python3 fix_adjectives.py file_with_adjectives_in_speling_format.txt')
    exit(0)

speling = open(sys.argv[1]).readlines()

ord_forms = ['m.an.sg.nom', 'm.an.sg.gen', 'm.an.sg.dat', 'm.an.sg.ins', 'm.an.sg.loc',
             'f.an.sg.nom', 'f.an.sg.gen', 'f.an.sg.dat', 'f.an.sg.acc', 'f.an.sg.loc',
             'nt.an.sg.nom', 'nt.an.sg.gen', 'nt.an.sg.dat', 'nt.an.sg.acc', 'nt.an.sg.ins', 'nt.an.sg.loc',
             'mfn.an.pl.nom', 'mfn.an.pl.gen', 'mfn.an.pl.dat', 'mfn.an.pl.ins', 'mfn.an.pl.loc'
             ]

w = {}
for x in speling:
    x = x.strip('\n')
    p = x.split('; ')
    if p[0] not in w:
        w[p[0]] = []
    if p[2] in ord_forms:
        w[p[0]] += [(p[2], p[1])]
added = 0
for x in w:
    if len(w[x]) < 21 or len(w[x]) > 22:
        continue
    # add m.acc
    t1 = None
    for f in w[x]:
        if f[0] == 'm.an.sg.nom':
            assert t1 is None
            t1 = f[1]
    assert t1 is not None
    t2 = None
    for f in w[x]:
        if f[0] == 'm.an.sg.gen':
            assert t2 is None
            t2 = f[1]
    assert t2 is not None
    # add f.dat
    t3 = None
    for f in w[x]:
        if f[0] == 'f.an.sg.dat':
            assert t3 is None
            t3 = f[1]
    assert t3 is not None
    assert t3[-1] == 'й'
    t4 = t3[:-1] + 'ю'
    # add mfn.acc
    t5 = None
    for f in w[x]:
        if f[0] == 'mfn.an.pl.nom':
            assert t5 is None
            t5 = f[1]
    assert t5 is not None
    t6 = None
    for f in w[x]:
        if f[0] == 'mfn.an.pl.gen':
            assert t6 is None
            t6 = f[1]
    assert t6 is not None
    w[x] += [('m.nn.sg.acc', t1), ('m.aa.sg.acc', t2), ('f.an.sg.ins', t3),
             ('f.an.sg.ins', t4), ('mfn.nn.pl.acc', t5), ('mfn.aa.pl.acc', t6)]
    added += 6
    # print(len(w[x]))
for x in w:
    for f in w[x]:
        print("{}; {}; {}; adj".format(x, f[1], f[0]))
