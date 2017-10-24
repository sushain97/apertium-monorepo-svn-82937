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
public class AdjectiveParadigmFormatter extends ParadigmFormatter {

    private static String[] keys = new String[]{
        "adjp", "cpd",
        "mp_sg_nom", "mp_sg_gen", "mp_sg_dat", "mp_sg_acc", "mp_sg_ins", "mp_sg_loc", "mp_sg_voc",
        "mp_pl_nom", "mp_pl_gen", "mp_pl_dat", "mp_pl_acc", "mp_pl_ins", "mp_sg_loc", "mp_sg_voc",
        "ma_sg_nom", "ma_sg_gen", "ma_sg_dat", "ma_sg_acc", "ma_sg_ins", "ma_sg_loc", "ma_sg_voc",
        "ma_pl_nom", "ma_pl_gen", "ma_pl_dat", "ma_pl_acc", "ma_pl_ins", "ma_sg_loc", "ma_sg_voc",
        "mi_sg_nom", "mi_sg_gen", "mi_sg_dat", "mi_sg_acc", "mi_sg_ins", "mi_sg_loc", "mi_sg_voc",
        "mi_pl_nom", "mi_pl_gen", "mi_pl_dat", "mi_pl_acc", "mi_pl_ins", "mi_sg_loc", "mi_sg_voc",
        "f_sg_nom", "f_sg_gen", "f_sg_dat", "f_sg_acc", "f_sg_ins", "f_sg_loc", "f_sg_voc",
        "f_pl_nom", "f_pl_gen", "f_pl_dat", "f_pl_acc", "f_pl_ins", "f_sg_loc", "f_sg_voc",
        "nt_sg_nom", "nt_sg_gen", "nt_sg_dat", "nt_sg_acc", "nt_sg_ins", "nt_sg_loc", "nt_sg_voc",
        "nt_pl_nom", "nt_pl_gen", "nt_pl_dat", "nt_pl_acc", "nt_pl_ins", "nt_sg_loc", "nt_sg_voc",};

    public AdjectiveParadigmFormatter() {
        super();
    }

    public AdjectiveParadigmFormatter(Paradigm paradigm) {
        super(paradigm);
    }

    @Override
    protected List<String> getData() {
        List<String> data = super.getData();
        List<Symbol> symbols = paradigm.getParadigmSymbols();

        if (Symbol.listContainsSymbol(symbols, Symbol.SYNTHETIC)) {
            String degree = SymbolType.getComparison(symbols).getShortcut();
            if (degree.equals(Symbol.NOT_DEFINED.getShortcut())) {
                degree = "postv";
            }
            data.add(degree);
        } else {
            data.add("X");
        }

        loadInflection(paradigm, "");
        data.addAll(getInflectionStrings(keys));
        return data;
    }

    protected void loadInflection(Paradigm par, String prefix) {
        List<Entry> entries = par.getEntries();
        String ca, number, ending, gender, key = "";
        for (Entry ent : entries) {
            ending = prefix + ent.getLeft().get(0);
            if (!ent.hasBaseParadigm()) {
                if (ent.hasSymbol(Symbol.ADJECTIVE_PO)) {
                    key = "adjp";
                } else if (ent.hasSymbol(Symbol.COMPOUND)) {
                    key = "cpd";
                } else {
                    gender = ent.getGender().getShortcut();
                    ca = ent.getCase().getShortcut();
                    number = ent.getNumber().getShortcut();
                    key = gender + "_" + number + "_" + ca;
                }
                addEnding(key, ending);
            } else {
                Paradigm basePar = ent.getBaseParadigm();
                loadInflection(basePar, ending);
            }
        }
    }
}
