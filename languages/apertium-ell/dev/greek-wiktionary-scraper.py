import requests
from lxml import html
import sys

def word_list_build(root_url):
    cur_url = root_url
    urls = []
    while cur_url:
        resp = requests.get(cur_url).text
        h = html.fromstring(resp)
        h = h.get_element_by_id('mw-pages')

        for i in h.findall('div//a'):
            urls.append((i.attrib['title'], i.attrib['href']))

        page_urls = h.findall('a')
        if len(page_urls) < 4:
            cur_url = None
        else:
            cur_url = 'http://en.wiktionary.org' + page_urls[1].attrib['href']
    return urls

noun_cases = {
    'nominative': 'nom',
    'accusative': 'acc',
    'genitive': 'gen',
    'vocative': 'voc'
}

noun_numbers = {
    'singular': 'sg',
    'plural': 'pl'
}

noun_genders = {
    'n': 'nt',
    'f': 'f',
    'm': 'm'
}

def noun_page_parse(url):
    resp = requests.get(url).text
    h = html.fromstring(resp)
    h = h.get_element_by_id('mw-content-text')
    try:
        table = h.xpath('.//h2/span[@id="Greek"]/../following-sibling::h3/span[contains(@id,"Noun")]/../following-sibling::div/div/table[@class="inflection-table"]')[0]
    except IndexError:
        return None, None, None
    form_rows = table.findall('.//tr')[1:]
    form_cols = table.findall('.//tr')[0].findall('th')[1:]
    numbers = list(map(lambda x: x.text.strip(), form_cols))
    forms = []
    for i in form_rows:
        try:
            case = noun_cases[i.find('th').text.strip()]
        except AttributeError:
            continue
        words = i.findall('td')
        for w, n in zip(words, numbers):
            possible = w.findall('.//strong') + w.findall('.//a')
            if len(possible) > 0:
                word = possible[0].text
            else:
                continue
            forms.append((word, noun_numbers[n], case))
    if 'Greek nouns of mixed gender' in resp:
        gender = 'mf'
    else:
        gender = noun_genders[h.findall('.//abbr')[0].text]
    return gender, forms, 'n'

def proper_noun_page_parse(url):
    resp = requests.get(url).text
    h = html.fromstring(resp)
    h = h.get_element_by_id('mw-content-text')
    try:
        table = h.xpath('.//h2/span[@id="Greek"]/../following-sibling::h3/span[contains(@id,"Proper_noun")]/../following-sibling::div/div/table[@class="inflection-table"]')[0]
    except IndexError:
        return None, None, None
    form_rows = table.findall('.//tr')[1:]
    form_cols = table.findall('.//tr')[0].findall('th')[1:]
    numbers = list(map(lambda x: x.text.strip(), form_cols))
    forms = []
    for i in form_rows:
        try:
            case = noun_cases[i.find('th').text.strip()]
        except AttributeError:
            continue
        words = i.findall('td')
        for w, n in zip(words, numbers):
            possible = w.findall('.//strong') + w.findall('.//a')
            if len(possible) > 0:
                word = possible[0].text
            else:
                continue
            forms.append((word, noun_numbers[n], case))
    if 'Greek nouns of mixed gender' in resp:
        gender = 'mf'
    else:
        gender = noun_genders[h.findall('.//abbr')[0].text]
    return gender, forms, 'np'

if __name__ == '__main__':
    root_url = 'http://en.wiktionary.org/w/index.php?title=Category:Greek_proper_nouns&from=Α'
    print('getting nouns')
    nouns = word_list_build(root_url)
    with open('greek_speling.txt', 'w', encoding='utf-8') as f:
        print('writing nouns: 0001/', len(nouns))
        for i in range(len(nouns)):
            lemma = nouns[i][0]
            try:
                gender, forms, pos = proper_noun_page_parse('http://en.wiktionary.org' + nouns[i][1])
            except Exception as e:
                print(e)
                print(nouns[i][1])
                print(' '*9)
            if forms:
                for form in forms:
                    f.write('{lemma}; {word}; {number}.{case}; {pos}.{gender}\n'.format(
                        lemma=lemma, word=form[0], number=form[1], case=form[2], pos=pos, gender=gender))
            print('\r\r\r\r\r\r\r\r\r{0:04d}/{1}'.format(i, len(nouns)))
            sys.stdout.flush()
