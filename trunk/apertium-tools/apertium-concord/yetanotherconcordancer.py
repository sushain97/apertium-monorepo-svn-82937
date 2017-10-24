
import sys

import nltk.corpus
from nltk.text import Text
from nltk.tokenize import word_tokenize
nltk.data.path.append(r"/home/selimcan/local/nltk_data/")

"""
Print out a concordance for each word in the FREQS file, namely contexts in which
these words occur in the TEXT file.

USAGE: python3 yetanotherconcordancer.py <frequency-list-file> <plain-text-file-with-sentences>

EXAMPLE:

$ cat /tmp/freqs
foo
bar

$ cat /tmp/text
sdfasdf herwsdf sfasfd foo aasdfasdf asfdsadf foo asfdasfd aasfdsadfsafd bar
bar sdfsafdsfasfas foo asdfasfd asdfasdf asfasfd bar adsfasa

$ python3 concordacer.py /tmp/freqs /tmp/text 
foo
Displaying 3 of 3 matches:
                               sfasfd foo aasdfasdf asfdsadf foo asfdasfd aasfd
                             asfdsadf foo asfdasfd aasfdsadfsafd bar bar sdfsaf
                       sdfsafdsfasfas foo asdfasfd asdfasdf asfasfd bar adsfasa


bar
Displaying 3 of 3 matches:
                        aasfdsadfsafd bar bar sdfsafdsfasfas foo asdfasfd asdfa
                                  bar bar sdfsafdsfasfas foo asdfasfd asdfasdf
                              asfasfd bar adsfasa
"""

FREQS = sys.argv[1]
TEXT = sys.argv[2]

with open(TEXT) as text_file, open(FREQS) as freqs_file:
    corpus = Text(nltk.tokenize.word_tokenize(text_file.read()))
    for word in freqs_file:
        if word:
            word = word.strip()
            print(word)
            corpus.concordance(word)
            print('\n')
