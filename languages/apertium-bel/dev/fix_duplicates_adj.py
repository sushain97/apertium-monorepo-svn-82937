import sys
import lxml.etree as ET

"""
Add direction (LR) in to paradigm definition.
"""


def to_string(tree):
    return ET.tostring(tree, encoding='utf-8', pretty_print=False).decode('utf-8')

parser = ET.XMLParser(remove_blank_text=True, remove_comments=True)
tree = ET.parse(sys.argv[1], parser)
print("<dictionary>")
for x in tree.getroot():
    if x.tag == 'pardefs':
        print((" " * 2) + "<pardefs>")
        for pardef in x.findall('pardef'):
            print((" " * 4) + '<pardef n="{}">'.format(pardef.attrib['n']))
            print("pardef: {}".format(pardef.attrib['n']), file=sys.stderr)
            forms = {}
            # Save forms
            for e in pardef.findall('e'):
                llemma = e.find('p').find('l').text
                rlemma = e.find('p').find('r').text
                llemma = llemma if llemma is not None else ''
                rlemma = rlemma if rlemma is not None else ''
                rtags = []
                for s in e.find('p').find('r').findall('s'):
                    rtags += [s.attrib['n']]
                rtags_repr = '.'.join(rtags)
                key = rlemma + ':' + rtags_repr
                if key in forms:
                    print('    dupl found: {} {}'.format(
                        llemma, key), file=sys.stderr)
                    forms[key] += [(llemma, e)]
                else:
                    forms[key] = [(llemma, e)]
            # Check forms and mark duplicates
            for f in forms:
                if len(forms[f]) == 1:
                    print((" " * 6) + to_string(forms[f][0][1]))
                else:
                    # words end by these strings will not have direction "LR"
                    pp = {'adj.f.an.sg.gen': 'ай', 'adj.f.an.sg.ins': 'ай'}
                    tags = f.split(':')[1]
                    if tags in pp:
                        repl = False
                        bid = False
                        ces = len(forms[f])
                        for d in forms[f]:
                            if (not repl and d[0] == pp[tags]) or (not repl and ces == 1):
                                print((" " * 6) + to_string(d[1]))
                                repl = True
                            else:
                                print(
                                    (" " * 6) + to_string(d[1]).replace('<e>', '<e r="LR">'))
                            ces -= 1
                    else:
                        repl = False
                        for d in forms[f]:
                            if not repl:
                                print((" " * 6) + to_string(d[1]))
                                repl = True
                            else:
                                print(
                                    (" " * 6) + to_string(d[1]).replace('<e>', '<e r="LR">'))
            print((" " * 4) + "</pardef>")
        print((" " * 2) + "</pardefs>")
    else:
        if str(x) != '':
            print(to_string(x).replace(
                "</e>", "</e>\n").replace("<e", (' ' * 4) + "<e"))
print("</dictionary>")
