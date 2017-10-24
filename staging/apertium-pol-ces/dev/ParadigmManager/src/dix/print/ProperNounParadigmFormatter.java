package dix.print;

import dix.data.Paradigm;
import dix.data.Symbol;
import dix.data.SymbolType;
import java.util.List;

/**
 * 
 * @author Joanna Ruth
 */
public class ProperNounParadigmFormatter extends NounParadigmFormatter {

    public ProperNounParadigmFormatter() {
        super();
    }

    public ProperNounParadigmFormatter(Paradigm paradigm) {
        super(paradigm);
    }

    @Override
    protected List<String> getData() {
        List<String> data = super.getData();
        List<Symbol> symbols = paradigm.getParadigmSymbols();
        String type = SymbolType.getProperNounType(symbols).getShortcut();
        data.add(type);
        return data;
    }
}
