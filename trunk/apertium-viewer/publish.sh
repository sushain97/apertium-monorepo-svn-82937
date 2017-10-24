ant clean

ant jar

cp apertium-viewer.jar ../../builds/apertium-viewer/
scp apertium-viewer.jar j:javabog.dk/filer/apertium/

echo Commit and update apertium-viewer-newest-version.txt ?
svn commit ../../builds/apertium-viewer/
scp apertium-viewer-newest-version.txt j:javabog.dk/filer/apertium/
