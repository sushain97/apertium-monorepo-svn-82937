import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.util.*;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.xml.sax.EntityResolver;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class DataSet {
	
	public static Set<String> getWords(String path) throws Exception {
		Set<String> ret = new TreeSet<String>();
		
		File file = new File(path);

		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		
        db.setEntityResolver(new EntityResolver() {
            @Override
            public InputSource resolveEntity(String publicId, String systemId)
                    throws SAXException, IOException {
                //System.out.println("Ignoring " + publicId + ", " + systemId);
                return new InputSource(new StringReader(""));
            }
        });
		
		try {

			Document doc = db.parse(file);

			doc.getDocumentElement().normalize();

			XPathFactory xpf = XPathFactory.newInstance();
			XPath xpath = xpf.newXPath();
			javax.xml.xpath.XPathExpression expr = xpath.compile("//kvtml/e/o/text()");

			Object result = expr.evaluate(doc, XPathConstants.NODESET);

			NodeList nodes = (NodeList) result;

			for (int i = 0; i < nodes.getLength(); ++i) {
				ret.add(nodes.item(i).getNodeValue());
			}

		} catch (Exception e) {
			//e.printStackTrace();
		}
		
		return ret;
	}
	
	public static List<Translation> getTranslatedWords() throws Exception {
		List<Translation> ret = new LinkedList<Translation>();
		
		File file = new File("kvtml/EnWikt-v1.0-eng-ita.kvtml");

		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		
        db.setEntityResolver(new EntityResolver() {
            @Override
            public InputSource resolveEntity(String publicId, String systemId)
                    throws SAXException, IOException {
                //System.out.println("Ignoring " + publicId + ", " + systemId);
                return new InputSource(new StringReader(""));
            }
        });
		
		try {

			Document doc = db.parse(file);

			doc.getDocumentElement().normalize();

			XPathFactory xpf = XPathFactory.newInstance();
			XPath xpath = xpf.newXPath();
			javax.xml.xpath.XPathExpression expr = xpath.compile("//kvtml/e");

			Object result = expr.evaluate(doc, XPathConstants.NODESET);

			NodeList nodes = (NodeList) result;
			
			for (int i = 0; i < nodes.getLength(); ++i) {
				Translation t = new Translation();
				
				Node e = nodes.item(i);
				NodeList ot = e.getChildNodes();
				
				for (int j = 0; j < ot.getLength(); ++j) {
					Node oort = ot.item(j);
					
					if (oort.getNodeName().equals("o")) {
						t.original = oort.getNodeValue();
					} else if (oort.getNodeName().equals("t")) {
						t.translation = oort.getNodeValue();
					}
				}
				
				ret.add(t);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ret;
	}
	
	public static Set<String> getFiles() {
		Set<String> ret = new TreeSet<String>();
		
		ret.add("EnWikt-v1.0-eng-afrikaans.kvtml");
		ret.add("EnWikt-v1.0-eng-arabic.kvtml");
		ret.add("EnWikt-v1.0-eng-armenian.kvtml");
		ret.add("EnWikt-v1.0-eng-azeri.kvtml");
		ret.add("EnWikt-v1.0-eng-basque.kvtml");
		ret.add("EnWikt-v1.0-eng-belarusian.kvtml");
		ret.add("EnWikt-v1.0-eng-bosnian.kvtml");
		ret.add("EnWikt-v1.0-eng-breton.kvtml");
		ret.add("EnWikt-v1.0-eng-catalan.kvtml");
		ret.add("EnWikt-v1.0-eng-ces.kvtml");
		ret.add("EnWikt-v1.0-eng-dan.kvtml");
		ret.add("EnWikt-v1.0-eng-deu.kvtml");
		ret.add("EnWikt-v1.0-eng-ell.kvtml");
		ret.add("EnWikt-v1.0-eng-eng.kvtml");
		ret.add("EnWikt-v1.0-eng-esperanto.kvtml");
		ret.add("EnWikt-v1.0-eng-est.kvtml");
		ret.add("EnWikt-v1.0-eng-ewe.kvtml");
		ret.add("EnWikt-v1.0-eng-faroese.kvtml");
		ret.add("EnWikt-v1.0-eng-fin.kvtml");
		ret.add("EnWikt-v1.0-eng-fra.kvtml");
		ret.add("EnWikt-v1.0-eng-galician.kvtml");
		ret.add("EnWikt-v1.0-eng-georgian.kvtml");
		ret.add("EnWikt-v1.0-eng-hebrew.kvtml");
		ret.add("EnWikt-v1.0-eng-hindi.kvtml");
		ret.add("EnWikt-v1.0-eng-hrv.kvtml");
		ret.add("EnWikt-v1.0-eng-hun.kvtml");
		ret.add("EnWikt-v1.0-eng-icelandic.kvtml");
		ret.add("EnWikt-v1.0-eng-ido.kvtml");
		ret.add("EnWikt-v1.0-eng-indonesian.kvtml");
		ret.add("EnWikt-v1.0-eng-interlingua.kvtml");
		ret.add("EnWikt-v1.0-eng-irish.kvtml");
		ret.add("EnWikt-v1.0-eng-ita.kvtml");
		ret.add("EnWikt-v1.0-eng-jap.kvtml");
		ret.add("EnWikt-v1.0-eng-kazakh.kvtml");
		ret.add("EnWikt-v1.0-eng-korean.kvtml");
		ret.add("EnWikt-v1.0-eng-latin.kvtml");
		ret.add("EnWikt-v1.0-eng-lav.kvtml");
		ret.add("EnWikt-v1.0-eng-lit.kvtml");
		ret.add("EnWikt-v1.0-eng-macedonian.kvtml");
		ret.add("EnWikt-v1.0-eng-malayalam.kvtml");
		ret.add("EnWikt-v1.0-eng-malay.kvtml");
		ret.add("EnWikt-v1.0-eng-marathi.kvtml");
		ret.add("EnWikt-v1.0-eng-mlt.kvtml");
		ret.add("EnWikt-v1.0-eng-mongolian.kvtml");
		ret.add("EnWikt-v1.0-eng-nld.kvtml");
		ret.add("EnWikt-v1.0-eng-nno.kvtml");
		ret.add("EnWikt-v1.0-eng-novial.kvtml");
		ret.add("EnWikt-v1.0-eng-occitan.kvtml");
		ret.add("EnWikt-v1.0-eng-pes.kvtml");
		ret.add("EnWikt-v1.0-eng-pol.kvtml");
		ret.add("EnWikt-v1.0-eng-por.kvtml");
		ret.add("EnWikt-v1.0-eng-rus.kvtml");
		ret.add("EnWikt-v1.0-eng-scgaelic.kvtml");
		ret.add("EnWikt-v1.0-eng-serbian.kvtml");
		ret.add("EnWikt-v1.0-eng-slk.kvtml");
		ret.add("EnWikt-v1.0-eng-slv.kvtml");
		ret.add("EnWikt-v1.0-eng-spa.kvtml");
		ret.add("EnWikt-v1.0-eng-sqi.kvtml");
		ret.add("EnWikt-v1.0-eng-swa.kvtml");
		ret.add("EnWikt-v1.0-eng-swe.kvtml");
		ret.add("EnWikt-v1.0-eng-tagalog.kvtml");
		ret.add("EnWikt-v1.0-eng-tamil.kvtml");
		ret.add("EnWikt-v1.0-eng-telugu.kvtml");
		ret.add("EnWikt-v1.0-eng-thai.kvtml");
		ret.add("EnWikt-v1.0-eng-turkish.kvtml");
		ret.add("EnWikt-v1.0-eng-ukr.kvtml");
		ret.add("EnWikt-v1.0-eng-urdu.kvtml");
		ret.add("EnWikt-v1.0-eng-vietnamese.kvtml");
		ret.add("EnWikt-v1.0-eng-welsh.kvtml");
		ret.add("EnWikt-v1.0-eng-westfrisian.kvtml");
		ret.add("EnWikt-v1.0-eng-yiddish.kvtml");
		ret.add("EnWikt-v1.0-eng-zho.kvtml");

		return ret;
	}
	
	public static boolean isInTranslated(String w, List<Translation> t) {
		boolean ret = false;
		
		for (Translation tr : t) {
			if (tr.original.equals(w)) {
				ret = true;
			}
		}
		
		return ret;
	}
	
	public static void printTranslated(List<Translation> t) {		
		for (Translation tr : t) {
			System.out.println(tr.original + "\t\t\t" + tr.translation);
		}
	}
	
}
