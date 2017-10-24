package dix.load;

import dix.data.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

/**
 *
 * @author Joanna Ruth
 */
public class XmlLoader {

    private List<Paradigm> paradigmList = new ArrayList<Paradigm>();

    public List<Paradigm> getParadigmList() {
        return this.paradigmList;
    }

    public void readFromFile(String fileName) {
        InputStream stream = null;
        try {
            stream = new FileInputStream(new File(fileName));
            XMLInputFactory factory = XMLInputFactory.newInstance();
            XMLStreamReader reader = factory.createXMLStreamReader(stream);
            readDictionaryXml(reader);
        } catch (XMLStreamException ex) {
            Logger.getLogger(XmlLoader.class.getName()).log(Level.SEVERE, null, ex);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(XmlLoader.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                stream.close();
            } catch (IOException ex) {
                Logger.getLogger(XmlLoader.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void readDictionaryXml(XMLStreamReader parser) throws XMLStreamException {
        for (int event = parser.next(); event != XMLStreamConstants.END_DOCUMENT; event = parser.next()) {
            switch (event) {
                case XMLStreamConstants.START_ELEMENT:
                    if (parser.getLocalName().equals("pardefs")) {
                        processPardefs(parser);
                        return;
                    }
                    break;
            }
        }
    }

    private void processPardefs(XMLStreamReader parser) throws XMLStreamException {
        for (int event = parser.next(); event != XMLStreamConstants.END_DOCUMENT; event = parser.next()) {
            String name = parser.getLocalName();
            switch (event) {
                case XMLStreamConstants.START_ELEMENT:
                    if (name.equals("pardef")) {
                        String attr = parser.getAttributeValue(null, "n");
                        processPardef(parser, attr);
                    }
                    break;
                case XMLStreamConstants.END_ELEMENT:
                    if (name.equals("pardefs")) {
                        return;
                    }
                    break;
            }
        }
    }

    private void processPardef(XMLStreamReader parser, String pardefName) throws XMLStreamException {
        Paradigm paradigm = new Paradigm(pardefName);
        Entry entry = null;
        String left, right, symbol, direction, basePar;
        boolean isPrevElemLeft = false;
        boolean isPrevElemRight = false;

        for (int event = parser.next(); event != XMLStreamConstants.END_DOCUMENT; event = parser.next()) {
            String name = parser.getLocalName();
            switch (event) {
                case XMLStreamConstants.START_ELEMENT:
                    if ("e".equals(name)) {
                        entry = new Entry();
                        direction = parser.getAttributeValue(null, "r");
                        entry.setDirection(direction);
                    } else if ("l".equals(name) || "b".equals(name)) {
                        isPrevElemLeft = true;
                    } else if ("r".equals(name)) {
                        isPrevElemRight = true;
                    } else if ("s".equals(name)) {
                        symbol = parser.getAttributeValue(null, "n");
                        entry.addSymbol(symbol);
                    } else if("par".equals(name)) {
                        basePar = parser.getAttributeValue(null, "n");
                        entry.setBaseParadigm(basePar);
                    }
                    break;
                case XMLStreamConstants.END_ELEMENT:
                    if (name.equals("pardef")) {
                        paradigmList.add(paradigm);
                        return;
                    } else if ("e".equals(name)) {
                        paradigm.addEntry(entry);
                    }
                    break;
                case XMLStreamConstants.CHARACTERS:
                    String text = parser.getText().trim();
                    if (isPrevElemLeft) {
                        entry.setOrUpdateLeft(text);
                        isPrevElemLeft = false;
                    } else if (isPrevElemRight) {
                        entry.setOrUpdateRight(text);
                        isPrevElemRight = false;
                    }
            }
        }
    }
}
