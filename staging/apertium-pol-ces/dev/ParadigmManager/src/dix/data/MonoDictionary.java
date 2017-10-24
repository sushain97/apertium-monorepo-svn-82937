package dix.data;

import dix.load.XmlLoader;
import java.util.List;

/**
 * 
 * @author Joanna Ruth
 */
public class MonoDictionary {

    private List<Paradigm> paradigms = null;

    public List<Paradigm> getParadigms() {
        return this.paradigms;
    }

    public MonoDictionary(List<Paradigm> paradigms) {
        if (paradigms == null) {
            throw new NullPointerException();
        }
        this.paradigms = paradigms;
        this.setBasePardefsReferences();
    }

    public static MonoDictionary loadFromFile(String filename) {
        XmlLoader manager = new XmlLoader();
        manager.readFromFile(filename);
        List<Paradigm> paradigms = manager.getParadigmList();
        MonoDictionary dict = new MonoDictionary(paradigms);
        return dict;
    }

    private void setBasePardefsReferences() {
        for (Paradigm par : paradigms) {
            for (Entry ent : par.getEntries()) {
                if (ent.hasBaseParadigm()) {
                    String baseParName = ent.getBaseParadigmName();
                    Paradigm baseParadigm = findParadigmByName(baseParName);
                    ent.setBaseParadigm(baseParadigm);
                    baseParadigm.addChildParadigm(par);
                }
            }
        }
    }

    public Paradigm findParadigmByName(String name) {
        for (Paradigm par : paradigms) {
            if (par.getName().equals(name)) {
                return par;
            }
        }
        return null;
    }
}
