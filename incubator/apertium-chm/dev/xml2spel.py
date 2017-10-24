# Converts mari dict.xml dictionary to HFST lexc format

import xml.etree.ElementTree as ET
import re


tree = ET.parse('dict.xml')
root = tree.getroot()

for superentry in root:
    for entry in superentry:
        base_word = ""
        alternative_form = ""
        for tag in entry:
            if tag.tag == "{urn:MARI}lex":
                base_word = tag.text.strip()
                base_word = base_word.replace("•", "") + ":" + base_word
                base_word = re.sub(r" \(.*\).*:", ":", base_word)
                base_word = re.sub(r"\(.*\):", ":", base_word)

            if tag.tag == "{urn:MARI}cl":
                if (base_word):
                    pattern = re.compile("( \(.*\))")
                    inflects = pattern.findall(base_word)

                    if (len(inflects) > 1):
                        print ("===========ERROR========")

                    base_word = re.sub(r" \(.*\)", "", base_word)
                    inflection = ""

                    if inflects:
                        inflection = inflects[0].strip()
                    inflection = inflection.replace("(", "")
                    inflection = inflection.replace(")", "")
                    base_word = re.sub(r"\(.*\)", "", base_word)
                    print(base_word, tag.attrib["value"] + inflection + " ;")
                else:
                    print("============ERROR==========")
