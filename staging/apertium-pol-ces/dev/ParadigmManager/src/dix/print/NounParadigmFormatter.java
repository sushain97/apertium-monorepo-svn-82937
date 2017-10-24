package dix.print;

import dix.data.Entry;
import dix.data.Paradigm;
import dix.data.Symbol;
import dix.data.SymbolType;
import java.util.List;

/**
 * 
 * @author Joanna Ruth
 */
public class NounParadigmFormatter extends ParadigmFormatter {

    private static String[] keys = new String[]{
        "sg_nom", "sg_gen", "sg_dat", "sg_acc", "sg_ins", "sg_loc", "sg_voc",
        "pl_nom", "pl_gen", "pl_dat", "pl_acc", "pl_ins", "pl_loc", "pl_voc"
    };

    public NounParadigmFormatter() {
        super();
    }

    public NounParadigmFormatter(Paradigm paradigm) {
        super(paradigm);
    }

    @Override
    protected List<String> getData() {
        List<String> data = super.getData();
        List<Symbol> symbols = paradigm.getParadigmSymbols();
        String gender = SymbolType.getGender(symbols).getShortcut();
        data.add(gender);
        if (Symbol.listContainsSymbol(symbols, Symbol.INDECLINABLE)) {
            String number = SymbolType.getNumber(symbols).getShortcut();
            data.add(number);
            data.add("indecl");
        } else {
            loadInflection(paradigm, "");
            data.addAll(getInflectionStrings(keys));
        }
        return data;
    }

    protected void loadInflection(Paradigm par, String prefix) {
        List<Entry> entries = par.getEntries();
        String ca, number, ending, key;
        for (Entry ent : entries) {
            ending = prefix + ent.getLeft().get(0);
            if (!ent.hasBaseParadigm()) {
                ca = ent.getCase().getShortcut();
                number = ent.getNumber().getShortcut();
                key = number + "_" + ca;
                addEnding(key, ending);
            } else {
                Paradigm basePar = ent.getBaseParadigm();
                loadInflection(basePar, ending);
            }
        }
    }
}
