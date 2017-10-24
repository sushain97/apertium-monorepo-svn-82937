package dix.data;

import java.util.List;

/**
 *
 * @author Joanna Ruth
 */
public enum SymbolType {

    CASE,
    GENDER,
    NUMBER,
    PERSON,
    COUNT,
    TENSE,
    MOOD,
    PART_OF_SPEECH,
    PROPER_NOUN_TYPE,
    COMPARISON,
    OTHER,
    NOT_DEFINED;

    public static Symbol getCase(List<Symbol> list) {
        return getSymbolByType(list, CASE);
    }

    public static Symbol getGender(List<Symbol> list) {
        return getSymbolByType(list, GENDER);
    }

    public static Symbol getNumber(List<Symbol> list) {
        return getSymbolByType(list, NUMBER);
    }

    public static Symbol getPerson(List<Symbol> list) {
        return getSymbolByType(list, PERSON);
    }

    public static Symbol getPartOfSpeech(List<Symbol> list) {
        return getSymbolByType(list, PART_OF_SPEECH);
    }

    public static Symbol getComparison(List<Symbol> list) {
        return getSymbolByType(list, COMPARISON);
    }

    public static Symbol getProperNounType(List<Symbol> list) {
        return getSymbolByType(list, PROPER_NOUN_TYPE);
    }

    private static Symbol getSymbolByType(List<Symbol> list, SymbolType type) {
        for (Symbol s : list) {
            if (s.getType() == type) {
                return s;
            }
        }
        return Symbol.NOT_DEFINED;
    }
}
