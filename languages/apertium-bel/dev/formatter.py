import sys
import lxml.etree as ET
import html

'''
Simple formatter.
It sorts entries and paradigms of given dictionary and prints it in pretty form.
It removes all comments (in current version) :(
'''


class Formatter():
    """
    Wrapper class for representation dictionary as XML tree and print it in pretty form.
    """

    # DOM tree for dict
    tree = None

    #
    is_bidix = False

    #
    TAB_SYMBOL = '☐'

    # 1 tab = TAB_WIDTH spaces
    TAB_WIDTH = 2

    # Templates for elements
    templates = {
        'sdef': TAB_SYMBOL + '<sdef n="{:s}" {:s}c="{:s}"/>',
        'pardef': TAB_SYMBOL + '<pardef n="{:s}">\n{:s}' + TAB_SYMBOL + '</pardef>',
        'comment_section': '\n' + TAB_SYMBOL + '<!-- SECTION: {:s} -->',
        'header': TAB_SYMBOL + '<?xml version="1.0" encoding="UTF-8"?>',
        'dictionary': TAB_SYMBOL + '<dictionary>\n{:s}\n' + TAB_SYMBOL + '</dictionary>\n',
        'pardefs': TAB_SYMBOL + '<pardefs>\n{:s}\n' + TAB_SYMBOL + '</pardefs>\n',
        'sdefs': TAB_SYMBOL + '<sdefs>\n{:s}\n' + TAB_SYMBOL + '</sdefs>\n',
        'section': TAB_SYMBOL + '<section id="{:s}" type="{:s}">\n{:s}\n' + TAB_SYMBOL + '</section>\n'
    }

    # Weights for sorting
    weights = [
        {'m': 0, 'f': 1, 'nt': 2, 'mfn': 3},
        {'an': 0, 'nn': 0, 'aa': 0},
        {'sg': 0, 'pl': 1},
        {'nom': 0, 'gen': 1, 'dat': 2, 'acc': 3, 'ins': 4, 'loc': 5}
    ]

    #
    parts_of_speech = [
        'n', 'pr', 'prn', 'det', 'np', 'adv', 'adj', 'vblex', 'vbser', 'vbmod', 'cnjcoo',
        'cnjsub', 'cnjadv', 'abbr', 'ij', 'part', 'num'
    ]

    # These tags will be merged in one
    merged_pos = {
        'vblex': 'vb',
        'vbser': 'vb',
        'vbmod': 'vb',
        'cnjcoo': 'cnj',
        'cnjsub': 'cnj',
        'cnjadv': 'cnj'
    }

    def __init__(self, path, is_bidix=False):
        """
        Init parser.
        """
        self.parser = ET.XMLParser(
            remove_blank_text=True, remove_comments=True)
        self.tree = self.parse(path)
        self.is_bidix = is_bidix

    def parse(self, path_to_file):
        """
        Parse given in @path_to_file dictionary and return that.
        """
        self.tree = ET.parse(path_to_file, self.parser)
        return self.tree

    def format_sdefs(self, subtree):
        """
        Format given subtree with 'sdefs'.
        It finds longest name attribute and align other tags.
        """
        max_len = max([len(sdef.attrib['n'])
                       for sdef in subtree.findall('sdef')])
        out = []
        for sdef in subtree.findall('sdef'):
            add_spaces = (max_len - len(sdef.attrib['n'])) * ' '
            comment = sdef.attrib.get('c', '')
            out += [self.templates['sdef'].format(
                sdef.attrib['n'], add_spaces, comment)]
        return out

    def format_pardefs(self, subtree):
        """
        Format given subtree with 'pardefs'.
        It sorts paradigms by part of speech and add comments in the begin of each section.
        For each paradigm run entries format.
        """
        out = []
        sorted_pardefs = self.sorted_paradigms(subtree)
        # out formatted paradigms
        for bucket in sorted(sorted_pardefs):
            out += [self.templates['comment_section'].format(bucket)]
            for paradigm in sorted_pardefs[bucket]:
                par_content = ""
                for entry in self.sorted_entries(paradigm):
                    par_content += self.TAB_SYMBOL + \
                        self.make_indent(self.TAB_SYMBOL +
                                         self.to_string(entry) + "\n", 1)
                out += [self.templates['pardef'].format(
                    paradigm.attrib['n'], par_content)]
        return out

    def get_pardef_key(self, pardef_name):
        """
        Get bucket key by pardef name.
        """
        if pardef_name.find('BASE') != -1:
            return 'BASE'
        key = pardef_name.split("__")
        if len(key) < 2:
            return key[0]
        return key[1].split("_")[0]

    def sorted_paradigms(self, subtree):
        """
        Sort paradigms by name for each part of speech.
        """
        buckets = {}
        for pardef in subtree.findall('pardef'):
            key = self.get_pardef_key(pardef.attrib['n'])
            if key not in buckets:
                buckets[key] = [pardef]
            else:
                buckets[key] += [pardef]
        for bucket in buckets:
            def key(x):
                return x.attrib['n'].split("__")[0].replace('/', '')
            buckets[bucket] = sorted(buckets[bucket], key=key)
        return buckets

    def sorted_entries(self, subtree):
        """
        Sort given subtree with entries.
        """
        def key(x):
            right_side = x.find('p').find('r')
            tags = right_side.findall('s')
            sn = ''
            for tag in tags:
                exists = False
                for w in self.weights:
                    if tag.attrib['n'] in w:
                        sn += str(w[tag.attrib['n']])
                        exists = True
                        break
                if not exists:
                    sn += tag.attrib['n']
            return '' if tags is None else sn
        return sorted(subtree, key=key)

    def to_string(self, tree):
        """
        Get string representation of given tree.
        """
        return ET.tostring(tree, encoding='utf-8', pretty_print=False).decode('utf-8')

    def format_section(self, subtree):
        """
        Format given subtree with 'e'.
        It sorts entries by part of speech and add comments in the begin of each section.
        """
        out = []
        sorted_section_entries = self.sorted_section_entries(subtree)
        for bucket in sorted(sorted_section_entries):
            out += [self.templates['comment_section'].format(bucket)]
            for e in sorted_section_entries[bucket]:
                out += [self.TAB_SYMBOL + html.unescape(self.to_string(e))]
        return out

    def sorted_section_entries(self, subtree):
        """
        Sort given subtree (section) with entries.
        """
        if self.is_bidix:
            return self.sorted_section_entries_bidix(subtree)
        buckets = {}
        for e in subtree.findall('e'):
            key = None
            for par in e.findall('par'):
                if par.attrib['n'].find('__') != -1:
                    for pos in self.parts_of_speech:
                        if par.attrib['n'].find(pos) != -1:
                            key = pos
            key = key if key is not None else 'other'
            key = self.merged_pos.get(key, key)
            if key not in buckets:
                buckets[key] = [e]
            else:
                buckets[key] += [e]
        for bucket in buckets:
            def key(x):
                return x.attrib.get('lm', '')
            buckets[bucket] = sorted(buckets[bucket], key=key)
        return buckets

    def sorted_section_entries_bidix(self, subtree):
        """
        Sort given subtree (section) with entries in bidix.
        """
        buckets = {}
        for e in subtree.findall('e'):
            key = None
            for ptag in e.find('p').find('l').findall('s'):
                if ptag.attrib['n'] in self.parts_of_speech:
                    key = ptag.attrib['n']
                    break
            key = key if key is not None else 'other'
            key = self.merged_pos.get(key, key)
            if key not in buckets:
                buckets[key] = [e]
            else:
                buckets[key] += [e]
        for bucket in buckets:
            def key(x):
                k = x.find('p').find('l').text
                return '__other' if k is None else k
            buckets[bucket] = sorted(buckets[bucket], key=key)
        return buckets

    def make_indent(self, string, level):
        """
        Replace special tab character by spaces.
        """
        return string.replace(self.TAB_SYMBOL, (level * self.TAB_WIDTH) * ' ')

    def format(self):
        """
        Format dictionary.
        """
        output = self.make_indent(self.templates['header'], 0) + "\n"
        content = ""
        for children in self.tree.getroot():
            if children.tag == 'alphabet':
                content += self.make_indent(self.TAB_SYMBOL +
                                            self.to_string(children), 1) + "\n"
            elif children.tag == 'sdefs':
                sdefs = self.make_indent(
                    '\n'.join(self.format_sdefs(children)), 2)
                content += self.make_indent(
                    self.templates['sdefs'].format(sdefs), 1) + "\n"
            elif children.tag == 'pardefs':
                pardefs = self.make_indent(
                    '\n'.join(self.format_pardefs(children)), 2)
                content += self.make_indent(
                    self.templates['pardefs'].format(pardefs), 1) + "\n"
            elif children.tag == 'section':
                entries = self.make_indent(
                    '\n'.join(self.format_section(children)), 2)
                args = (children.attrib['id'],
                        children.attrib['type'], entries)
                content += self.make_indent(
                    self.templates['section'].format(args[0], args[1], args[2]), 1)
        output += self.make_indent(
            self.templates['dictionary'].format(content), 0)
        return output

    def get_paradigms_count(self):
        """
        Return paradigms count in dictionary.
        """
        return len(self.tree.find('pardefs'))

    def get_entries_count(self):
        """
        Return entries count in dictionary.
        """
        cnt = 0
        for x in self.tree.findall('section'):
            cnt += len(x.findall('e'))
        return cnt


if __name__ == '__main__':
    if len(sys.argv) <= 1:
        print("usage: ./formatter.py monodix|bidix lang.dix")
    else:
        is_bidix = sys.argv[1] == 'bidix'
        f = Formatter(sys.argv[2], is_bidix=is_bidix)
        if not is_bidix:
            print("Paradigms count: {}".format(
                f.get_paradigms_count()), file=sys.stderr)
        print("Entries count: {}".format(
            f.get_entries_count()), file=sys.stderr)
        print(f.format())
