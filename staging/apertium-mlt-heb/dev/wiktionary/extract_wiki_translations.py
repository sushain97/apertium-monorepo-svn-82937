import urllib2
import time
def extractTranslations():
    outputNoun = []

    #Initialize fetcher
    fetcher = urllib2.build_opener()
    #Specify unique User-agent, as per wikimedia guidelines
    fetcher.addheaders = [('User-agent', 'AureiAnimusGCIFetcher/0.1')]

    nounList = getListNouns()
    #nounList = ["aa", "aankloppen", "aanklacht", "aanklager", "aanloop", "Afghaan"]
    #print nounList
    count = 0
    for noun in nounList:
        count += 1
        if count%100 == 0:
            print count
        try:
            curPage = fetcher.open("http://en.wiktionary.org/w/index.php?action=raw&title=" + noun)
            curSource = curPage.read()
            curPage.close()
        except:
            print "ERROR" , noun
            continue
        noun = noun.replace("_", "<b/>")

        startPoint = curSource.find("=Noun=", curSource.find("=Maltese="))
        endPoint = curSource.find("==", startPoint+8)
        partWithInfo = curSource[startPoint:endPoint].splitlines()
        gender = ""
        for line in partWithInfo:
            if line.find("|g=") != -1:
                beginGender = line.find("|g=")+3
                if line.find("|",line.find("|g=")+1) == -1:
                    endGender = line.find("}")
                else:
                    endGender = line.find("|",line.find("|g=")+1)
                gender = line[beginGender:endGender]
                break
            if line.find("g1=m|g2=f") != -1 or line.find("g1=f|g2=m") != -1 :
                gender = "mf"
                break

                
        if gender == "":
            print noun
            continue
        if gender == "c":
            gender = "mf"
        trNum = 0
        for line in partWithInfo:
            if line.find("#") != -1 and line.find("[[") != -1 :
                tr = line[line.find("[[")+2:line.find("]]")].replace(" ", "<b/>")
                if tr.find("|") != -1:
                    if tr.find("#",0,tr.find("|")) != -1:
                        tr = tr[tr.find("|")+1:]
                    else:
                        tr = tr[:tr.find("|")]

                outputNoun.append("<e slr=\"" + str(trNum) + "\"><p><l>" + noun +
                                  "<s n=\"n\"/><s n=\"" + gender + "\"/><r>" +
                                  tr + "<s n=\"n\"/></r></p></e>")
                trNum += 1
    f = open("noun2.txt", "w")
    for item in outputNoun:
        f.writelines(item+ "\n")
    f.close()
        
        
    
    
def getListNouns():
    #Initialize list
    startword = "aa"
    nounList = [startword]
    #Initialize fetcher, urllib2 is used over urllib specifically because it allows to specify a User-agent
    fetcher = urllib2.build_opener()
    #Specify unique User-agent, as per wikimedia guidelines
    fetcher.addheaders = [('User-agent', 'MyNewCoolApertiumFetcher/0.1')]
    while True:
        #Get next page as file and read it
        if startword == "INGREDI%C3%8BNT":
            startword = "INGREEP"
        if startword.find("%0A") != -1:
            startword = startword[:startword.find("%0A")]
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
                nounList.append(curSource[:curSource.find("\"")])
            else:
                #End reached
                #Add last word
                nounList.append(curSource[:curSource.find("\"")])
                #Find next startword
                startword = curSource[curSource.find("pagefrom=")+9:curSource.find("\"",curSource.find("pagefrom="))]
                break
        #Test if there is a next page
        if curSource.find("pagefrom=") == -1:
            break
    return nounList
extractTranslations()
