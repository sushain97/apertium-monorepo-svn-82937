import java.io.*;
import java.net.URL;
import java.util.*;

import javax.xml.parsers.*;
import javax.xml.transform.*;
import javax.xml.transform.dom.*;
import javax.xml.transform.stream.*;

import net.sf.okapi.common.LocaleId;
import net.sf.okapi.connectors.google.GoogleMTConnector;
import net.sf.okapi.connectors.microsoft.MicrosoftMTConnector;
import net.sf.okapi.lib.translation.IQuery;
import net.sf.okapi.lib.translation.QueryResult;

import org.apertium.api.ApertiumXMLRPCClient;
import org.w3c.dom.*;
import org.xml.sax.SAXException;

public class Main {

	public static String makeTransXML(List<Translation> trans) throws Exception {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = factory.newDocumentBuilder();
		DOMImplementation impl = builder.getDOMImplementation();

		Document doc = impl.createDocument(null, null, null);
		Element root = doc.createElement("translations");
		doc.appendChild(root);

		for (Translation t : trans) {

			Element el = doc.createElement("translation");
			root.appendChild(el);

			el.setAttribute("original", t.original);
			el.setAttribute("translation", t.translation);
			if (t.correct != null) {
				el.setAttribute("correct", t.correct);
			}
		}
		
        DOMSource domSource = new DOMSource(doc);

        TransformerFactory tf = TransformerFactory.newInstance();
        Transformer transformer = tf.newTransformer();

        transformer.setOutputProperty(OutputKeys.METHOD, "xml");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        
        java.io.StringWriter sw = new java.io.StringWriter();
        StreamResult sr = new StreamResult(sw);
        
        transformer.transform(domSource, sr);
        
        String xml = sw.toString();
        
        return xml;
	}
	
	public static List<Translation> readTranslations(String path) throws Exception {
		List<Translation> ret = new LinkedList<Translation>();
		File file = new File(path);
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		Document doc = db.parse(file);
		doc.getDocumentElement().normalize();
		NodeList translationNodes = doc.getElementsByTagName("translation");
		
		for (int i = 0; i < translationNodes.getLength(); ++i) {
			Node translationNode = translationNodes.item(i);
			NamedNodeMap attributes = translationNode.getAttributes();
			
			String original = attributes.getNamedItem("original").getNodeValue();
			String translation = attributes.getNamedItem("translation").getNodeValue();
			
			Translation t = new Translation();
			t.original = original;
			t.translation = translation;
			ret.add(t);
		}
		
		return ret;
	}
	
	private static String _translate(String text, IQuery q) throws InterruptedException {
		String ret = text;
		
		if (q instanceof MicrosoftMTConnector) {
			net.sf.okapi.connectors.microsoft.Parameters p = new net.sf.okapi.connectors.microsoft.Parameters();
			p.setAppId("28AEB40E8307D187104623046F6C31B0A4DF907E");
			q.setParameters(p);
		}
		
		q.setLanguages(LocaleId.fromString("en"), LocaleId.fromString("it"));
		
		int tries = 3;
		int hits = 0;
		
		do {
			try {
				if (hits == 0) {
					Thread.sleep(200);
				}
				hits = q.query(text);
			} catch (Exception e) {
				e.printStackTrace();
				Thread.sleep(5000);
			}
		} while (--tries > 0 && hits == 0);
		
		
		if (q.hasNext()) {
			ret = q.next().target.toString();
		}
		
		return ret;
	}

	
	public static void main(String[] args) throws Exception {
		
		IQuery g = new GoogleMTConnector();
		IQuery m = new MicrosoftMTConnector();
		
		g.open();
		m.open();
		
		Set<String> enfiles = DataSet.getFiles();
		Set<String> enwords = new TreeSet<String>();
		
		for (String file : enfiles) {
			Set<String> words = DataSet.getWords("kvtml/" + file);
			for (String word : words) {
				if (!enwords.contains(word)) {
					enwords.add(word);
				}
			}
		}
		
		List<Translation> translated = DataSet.getTranslatedWords();
		Set<String> toTranslate = new TreeSet<String>();
		
		for (String enword : enwords) {
			if (!DataSet.isInTranslated(enword, translated)) {
				toTranslate.add(enword);
			}
		}

		for (String tot : toTranslate) {
			Translation t = new Translation();
			String gt = _translate(tot, g);
			String mt = _translate(tot, m);
			
			String toAdd = gt;
			if (!gt.equals(mt)) {
				if (gt.equals(tot)) {
					toAdd = mt;
				} else if (mt.equals(tot)) {
					toAdd = gt;
				} else {
					toAdd = gt + "|" + mt;
				}
			}
			
			t.original = tot;
			t.translation = toAdd;

			//System.out.println("Adding: " + t.original + " - " + t.translation);
			
			translated.add(t);
		}
		
		System.out.println(makeTransXML(translated));
		
	}
	
}
