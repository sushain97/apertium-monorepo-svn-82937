import requests
from time import sleep

'''
Parse content of slounik.org
It works with verbs dictionary, but you can edit it.
'''

requests_cnt = 0
url = 'http://slounik.org/dzsl/l{}/{}'
for i in range(1, 33):
    j = 0
    while True:
        if requests_cnt == 6:
            requests_cnt = 0
            sleep(3)
        r = requests.get(url.format(i, j))
        requests_cnt += 1
        page = r.content.decode('utf-8')
        t = page.find('li_poszuk')
        if t == -1:
            break
        else:
            begin = page.find('<font class="n11">') + 18
            end = page.find('</font>', begin)
            content = page[begin:end]
            words = content.split('<li id="li_poszuk">')
            for w in words:
                w = w.replace('</li>', '').strip().replace('<u>',
                                                           '').replace('</u>', '')
                print("###" + w)
        j += 1
