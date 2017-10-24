import sys
import re


def parse_lemma_and_tags(s):
    """
    Parse string "abc<a><b><c>" -> ("abc", ['a', 'b', 'c'])
    """
    return s[:s.find("<")], s[s.find("<"):].strip(">").strip("<").split("><")


def get_lemma_and_tags(l, t):
    """
    Return string representation for lemma and tags: ("abc", ['a', 'b', 'c']) -> "abc<a><b><c>"
    """
    return l + "<" + "><".join(t) + ">"


def load_expanded_monodix(path):
    """
    Parse dump of expanded monodix.
    Returns dict where key is lemma and value is list of forms.
    """
    dct = {}
    dump = open(path, mode='r', encoding='utf-8')
    for x in dump.readlines():
        if x.find('__REGEXP__') != -1:
            continue
        x = x.strip("\n")
        t = x.split(":")
        try:
            lemma = t[1] if len(t) == 2 else t[2]
            lemma, tags = parse_lemma_and_tags(lemma)
            form = [t[0], tags]
            form += t[1] if len(t) == 3 else "-"
        except IndexError:
            pass
        else:
            dct[lemma] = [form] if lemma not in dct else dct[lemma] + [form]
    return dct


def load_expanded_bidix(path, reversed=False):
    """
    Parse dump of expanded bidix.
    Returns dict in where key is left-side word (w/o tags) and value are tags and all right-sides.
    Each element in right side has form (lemma, tags)
    If second argument is "True" reversed dict will be returned
    """
    dct = {}
    dump = open(path, mode='r', encoding='utf-8')
    for x in dump.readlines():
        if x.find('__REGEXP__') != -1:
            continue
        x = x.strip("\n")
        t = x.split(":")
        try:
            l, ltags = parse_lemma_and_tags(t[0])
            r, rtags = parse_lemma_and_tags(t[1] if len(t) == 2 else t[2])
        except IndexError:
            pass
        else:
            if not reversed:
                direction = (len(t) == 3 and t[1] == ">") or (len(t) == 2)
            else:
                direction = (len(t) == 3 and t[1] == "<") or (len(t) == 2)
                l, ltags, r, rtags = r, rtags, l, ltags
            if direction:
                k = get_lemma_and_tags(l, ltags)
                dct[k] = [(r, rtags)] if k not in dct else dct[
                    k] + [(r, rtags)]
    return dct


def parse_testvoc_line(s: str):
    """
    Returns parsed line from testvoc in form: ((lemma, tags), result)
    """
    l, r = s.split(" ")[0], " ".join(s.split(" ")[1:-1])
    l = re.match("\\[\\\\\^([^<>]+)\\<(.+)\\>\\\\\/\\$\\]", l).groups()
    t = l[0], l[1].split("><")
    return t, r

if __name__ == "__main__":
    exit(0)
