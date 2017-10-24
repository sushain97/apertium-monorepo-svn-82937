# -*- coding: cp1252 -*-
import urllib2
from urllib import unquote
import time

def extractInflections():
    outputNoun = []
    outputNounNoNumber = []
    outputNounNoGender = []
    outputNounDiminutives = []

    #Initialize fetcher
    fetcher = urllib2.build_opener()
    #Specify unique User-agent, as per wikimedia guidelines
    fetcher.addheaders = [('User-agent', 'MyNewCoolApertiumFetcher/0.1')]

    #Start with nouns

    nounList = getListNouns()
    #nounList = ["Afghaan", "Afghaanse", "Afrikaan", "Albanees", "aal", "haag", "oase", "oerknal", "vertaler", "vertaling"]
    #nounList = []
    e1 = 0
    count = 0

    for noun in nounList:
        if count%100 == 0:
            print count, noun.encode('utf-8')
            f = open("noun.txt", "a")
            for item in outputNoun:
                f.writelines(item+ "\n")
            f.close()
            f = open("nounNoNumber.txt", "a")
            for item in outputNounNoNumber:
                f.writelines(item+ "\n")
            f.close()   
            f = open("nounNoGender.txt", "a")
            for item in outputNounNoGender:
                f.writelines(item+ "\n")
            f.close()
            f = open("nounDiminutives.txt", "a")
            for item in outputNounDiminutives:
                f.writelines(item+ "\n")
            f.close()
            f = open("noun" + str(count)+ ".txt", "w")
            for item in outputNoun:
                f.writelines(item+ "\n")
            f = open("nounDiminutives" + str(count)+ ".txt", "w")
            for item in outputNounDiminutives:
                f.writelines(item+ "\n")
            f.close()
            outputNoun = []
            outputNounNoNumber = []
            outputNounNoGender = []
            outputNounDiminutives = []            
        count += 1
            
        curPage = fetcher.open("http://en.wiktionary.org/w/index.php?action=render&title=" + noun)
        curSource = curPage.read()
        curPage.close()
        #Find Dutch Section
        minIndex = 0
        e1= 0
        while curSource.find("<h2>",minIndex) != -1 and e1 < 10000:
            e1+=1
			#Dutch-specific
            if curSource.find(">Maltese<", curSource.find("<h2>",minIndex), curSource.find("</h2>",minIndex)) != -1:
                startIndex = curSource.find("<h2>")
                endIndex = curSource.find("<h2>",curSource.find("<h2>")+1)
                break
            else:
                minIndex = curSource.find("</h2>",minIndex)+1
        if e1 > 9000:
            print str(e1), noun, "1"
        minIndex = startIndex
        paragraphList = []
        e1=0
        while curSource.find("<p>", minIndex,endIndex) != -1 and e1 <10000:
            e1+=1
            paragraphList.append((curSource.find("<p>", minIndex,endIndex),curSource.find("</p>", minIndex,endIndex)+4))
            minIndex = curSource.find("</p>",minIndex,endIndex)+4
        if e1 > 9000:
            print str(e1), noun, "2"            
        for p in paragraphList:

            if curSource.find("class=\"gender ",p[0],p[1]) != -1:
                gender = curSource[curSource.find("class=\"gender ",p[0],p[1])+14]
            else:
                gender = "GD"
            if gender == "n":
                gender = "nt"
            if gender == "c":
                gender = "mf"
            
            if curSource.find(" plural-form-of ",p[0],p[1]) != -1:
                #First instance of title=" after plural-form-of class element
                startFormOf = curSource.find(">",curSource.find("title=\"",curSource.find(" plural-form-of ",p[0],p[1])))+1
                #First instance of " after title="
                endFormOf = curSource.find("<",curSource.find("title=\"",curSource.find(" plural-form-of ",p[0],p[1]),p[1]))
                if gender == "GD":
                    outputNounNoGender.append(noun + "; " + curSource[startFormOf:endFormOf] + "; pl; n." + gender)
                    outputNounNoGender.append(noun + "; " + noun + "; sg; n." + gender)
                    
                else:
                    outputNoun.append(noun + "; " + curSource[startFormOf:endFormOf] + "; pl; n." + gender)
                    outputNoun.append(noun + "; " + noun + "; sg; n." + gender)
                
            else:
                outputNounNoNumber.append(noun + "; " + noun + "; ND; n." + gender)
                
                                            
                
            if curSource.find(" diminutive-form-of ",p[0],p[1]) != -1:
                #First instance of title=" after diminutive-form-of class element
                startFormOf = curSource.find(">",curSource.find("title=\"",curSource.find(" diminutive-form-of ",p[0],p[1])))+1
                #First instance of " after title="
                endFormOf = curSource.find("<",curSource.find("title=\"",curSource.find(" diminutive-form-of ",p[0],p[1]),p[1]))                                            
                outputNounDiminutives.append(curSource[startFormOf:endFormOf] + "; " + curSource[startFormOf:endFormOf] + "; sg; n.nt")
                
                if curSource.find(" diminutive-plural-form-of ",p[0],p[1]) != -1:
                    #First instance of title=" after diminutive-form-of class element
                    startFormOf = curSource.find(">",curSource.find("title=\"",curSource.find(" diminutive-plural-form-of ",p[0],p[1])))+1
                    #First instance of " after title="
                    endFormOf = curSource.find("<",curSource.find("title=\"",curSource.find(" diminutive-plural-form-of ",p[0],p[1]),p[1]))
                                                
                    outputNounDiminutives.append(curSource[startFormOf:endFormOf] + "; " + curSource[startFormOf:endFormOf] + "; pl; n.nt")

       
    f = open("noun.txt", "a")
    for item in outputNoun:
        f.writelines(item+ "\n")
    f.close()
    f = open("nounNoNumber.txt", "a")
    for item in outputNounNoNumber:
        f.writelines(item+ "\n")
    f.close()   
    f = open("nounNoGender.txt", "a")
    for item in outputNounNoGender:
        f.writelines(item+ "\n")
    f.close()
    f = open("nounDiminutives.txt", "a")
    for item in outputNounDiminutives:
        f.writelines(item+ "\n")
    f.close()    
    print outputNoun
    print outputNounNoNumber
    print outputNounNoGender
    print outputNounDiminutives
          
            
##    f = open("file.txt", "w")
##    for item in inflList:
##        f.writelines(item+ "\n")
##    f.close()
    
        
        
    




def getListNouns():
    #Initialize list
    #Dutch-specific
    startword = "abaku"
    nounList = [startword]
    #Initialize fetcher, urllib2 is used over urllib specifically because it allows to specify a User-agent
    fetcher = urllib2.build_opener()
    #Specify unique User-agent, as per wikimedia guidelines
    fetcher.addheaders = [('User-agent', 'AureiAnimusGCIFetcher/0.1')]
    while True:
        #Get next page as file and read it
	    #Hacky-bugfixes specific to Dutch
        if startword == "INGREDI%C3%8BNT":
            startword = "INGREEP"
        if startword.find("%0A") != -1:
            startword = startword[:startword.find("%0A")]
        #Dutch-specific
        curPage = fetcher.open("http://en.wiktionary.org/w/index.php?&action=render&title=Category:Maltese_nouns&from=" + startword) 
        curSource = curPage.read()
        curPage.close()
        
        #Plusses in php parameters are underscores in HTML. 
        startword = startword.replace("+","_")
        #Find first word

        curSource = curSource[curSource.lower().find("wiki/" + startword.lower() + "\""):]
        
        while True:
            #Skip to next word
            curSource = curSource[curSource.find("wiki/")+5:]
            #Test if end of file has been reached            
            if curSource.find("<li>") != -1:
                #End not yet reached
                #Add word to list
                nounList.append(unquote(curSource[:curSource.find("\"")]))
            else:
                #End reached
                #Add last word
                nounList.append(unquote(curSource[:curSource.find("\"")]))
                #Find next startword
                startword = curSource[curSource.find("pagefrom=")+9:curSource.find("\"",curSource.find("pagefrom="))]
                break
        #Test if there is a next page
        if curSource.find("pagefrom=") == -1:
            break
    return nounList
extractInflections()
