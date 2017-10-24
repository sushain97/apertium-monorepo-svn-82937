import subprocess;

PATH="/home/vmsanchez/hybridmt/tools/local/bin/"

def translate(src,format,mode):
	p=subprocess.Popen([PATH+"apertium","-u", "-f", format, mode],-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple=p.communicate(src.encode('utf-8'))
	supForm=tuple[0].decode('utf-8')
	return supForm
	
def translateAndReformat(src,mode):
	p=subprocess.Popen([PATH+"apertium", "-u","-f", "none", mode],-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple=p.communicate(src.encode('utf-8'))
	unformattedtranslation=tuple[0].decode('utf-8')
	
	p2=subprocess.Popen(PATH+"apertium-retxt",-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple2=p2.communicate(unformattedtranslation.encode('utf-8'))
	return tuple2[0].decode('utf-8')
	
def preTransfer(src):
	p=subprocess.Popen([PATH+"apertium-pretransfer"],-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple=p.communicate(src.encode('utf-8'))
	result=tuple[0].decode('utf-8')
	return result

def reFormatTxt(unformattedtranslation):
	p2=subprocess.Popen(PATH+"apertium-retxt",-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple2=p2.communicate(unformattedtranslation.encode('utf-8'))
	return tuple2[0].decode('utf-8')

def deFormatTxt(formattedtranslation):
	p2=subprocess.Popen(PATH+"apertium-destxt",-1,None,subprocess.PIPE,subprocess.PIPE)
	tuple2=p2.communicate(formattedtranslation.encode('utf-8'))
	return tuple2[0].decode('utf-8')

