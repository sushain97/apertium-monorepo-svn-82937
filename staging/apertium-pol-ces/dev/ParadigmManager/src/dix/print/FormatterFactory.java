package dix.print;

import dix.data.Symbol;

/**
 * 
 * @author Joanna Ruth
 */
public class FormatterFactory {
    public static ParadigmFormatter getFormatter(Symbol symbol) {
        switch(symbol) {
            case NOUN: return new NounParadigmFormatter();
            case PROPER_NOUN: return new ProperNounParadigmFormatter();
            case ADJECTIVE: return new AdjectiveParadigmFormatter();
        }
        return null;
    }
}
