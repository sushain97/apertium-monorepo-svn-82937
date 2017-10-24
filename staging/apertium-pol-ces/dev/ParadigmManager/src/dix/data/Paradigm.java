package dix.data;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Joanna Ruth
 */
public class Paradigm {

    private String name = null;
    private List<Entry> entries = null;
    private List<Paradigm> childParadigms = null;

    public Paradigm(String name, List<Entry> entries) {
        this.name = name;
        this.entries = entries;
    }

    public Paradigm(String name) {
        this(name, null);
    }

    public boolean isBaseParadigm() {
        return this.childParadigms != null && this.childParadigms.size() > 0;
    }

    public void addChildParadigm(Paradigm par) {
        if (childParadigms == null) {
            childParadigms = new ArrayList<Paradigm>();
        }
        childParadigms.add(par);
    }

    public List<Paradigm> getChildParadigms() {
        return this.childParadigms;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addEntry(Entry entry) {
        if (entries == null) {
            entries = new ArrayList<Entry>();
        }
        entries.add(entry);
    }

    public List<Entry> getEntries() {
        return this.entries;
    }

    public List<Symbol> getParadigmSymbols() {
        return getParadigmSymbols(this, null);
    }

    


    private static List<Symbol> getParadigmSymbols(Paradigm par, List<Symbol> result) {
        if(result == null) {
            result = new ArrayList<Symbol>();
        }
        Entry ent = par.getEntries().get(0);
        List<Symbol> entryPos = ent.getSymbols();
        if (entryPos != null && !entryPos.isEmpty()) {
            result.addAll(entryPos);
        }
        if(ent.hasBaseParadigm()) {
            List<Symbol> baseResult = getParadigmSymbols(ent.getBaseParadigm(), null);
            result.addAll(baseResult);
        }
        return result;
    }
}

