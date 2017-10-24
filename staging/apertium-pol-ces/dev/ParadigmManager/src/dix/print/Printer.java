package dix.print;

import dix.data.Paradigm;
import dix.data.Symbol;
import dix.data.SymbolType;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

/**
 *
 * @author Joanna Ruth
 */
public class Printer {

    private static Dictionary<Symbol, ParadigmFormatter> cache = new Hashtable<Symbol, ParadigmFormatter>();

    public void printParadigm(Paradigm par, String delimiter) {
        List<Symbol> symbols = par.getParadigmSymbols();
        Symbol pos = SymbolType.getPartOfSpeech(symbols);
        if (pos == null) {
            return;
        }

        ParadigmFormatter formatter = getFormatter(pos);
        if (formatter != null) {
            formatter.printData(par, delimiter);
        }
    }

    private ParadigmFormatter getFormatter(Symbol pos) {
        ParadigmFormatter formatter = null;
        if (cache.get(pos) == null) {
            formatter = FormatterFactory.getFormatter(pos);
            if (formatter != null) {
                cache.put(pos, formatter);
            }
        } else {
            formatter = cache.get(pos);
        }
        return formatter;
    }
    
}
