package dix.data;

import java.util.List;

/**
 *
 * @author Joanna Ruth
 */
public enum Symbol {

    NOT_DEFINED ("X", SymbolType.NOT_DEFINED),

    NOMINATIVE  ("nom", SymbolType.CASE),
    GENITIVE    ("gen", SymbolType.CASE),
    DATIVE      ("dat", SymbolType.CASE),
    ACCUSATIVE  ("acc", SymbolType.CASE),
    INSTRUMENTAL("ins", SymbolType.CASE),
    LOCATIVE    ("loc", SymbolType.CASE),
    VOCATIVE    ("voc", SymbolType.CASE),
    
    FEMININE            ("f",  SymbolType.GENDER),
    NEUTER              ("nt", SymbolType.GENDER),
    MASCULINE_ANIMATE   ("ma", SymbolType.GENDER),
    MASCULINE_INANIMATE ("mi", SymbolType.GENDER),
    MASCULINE_PERSONAL  ("mp", SymbolType.GENDER),
    MASCULINE           ("m",  SymbolType.GENDER),
    MASCULINE_FEMININE  ("mf", SymbolType.GENDER),
    NOT_MASCULINE       ("nm", SymbolType.GENDER),
            
    SINGULAR        ("sg", SymbolType.NUMBER),
    PLURAL          ("pl", SymbolType.NUMBER),
    SINGULAR_PLURAL ("sp", SymbolType.NUMBER),
    DUAL            ("du", SymbolType.NUMBER),

    FIRST_PERSON    ("p1",      SymbolType.PERSON),
    SECOND_PERSON   ("p2",      SymbolType.PERSON),
    THIRD_PERSON    ("p3",      SymbolType.PERSON),
    IMPERSONAL      ("impers",  SymbolType.PERSON),

    COUNTABLE       ("cnt",     SymbolType.COUNT),
    UNCOUNTABLE     ("unc",     SymbolType.COUNT),

    NOUN                        ("n",       SymbolType.PART_OF_SPEECH),
    PROPER_NOUN                 ("np",      SymbolType.PART_OF_SPEECH),
    NUMERAL                     ("num",     SymbolType.PART_OF_SPEECH),
    ADJECTIVE                   ("adj",     SymbolType.PART_OF_SPEECH),
    ADVERB                      ("adv",     SymbolType.PART_OF_SPEECH),
    VERB                        ("vblex",   SymbolType.PART_OF_SPEECH),
    VERB_BE                     ("vbser",   SymbolType.PART_OF_SPEECH),
    VERB_HAVE                   ("vbhaver", SymbolType.PART_OF_SPEECH),
    VERB_AUXILIARY              ("vbaux",   SymbolType.PART_OF_SPEECH),
    PRONOUN                     ("prn",     SymbolType.PART_OF_SPEECH),
    PREPOSITION                 ("pr",      SymbolType.PART_OF_SPEECH),
    DETERMINER                  ("det",     SymbolType.PART_OF_SPEECH),
    INTERJECTION                ("ij",      SymbolType.PART_OF_SPEECH),
    CONJUNCTION_CO_ORDINATING   ("cnjcoo",  SymbolType.PART_OF_SPEECH),
    CONJUNCTION_SUB_ORDINATING  ("cnjsub",  SymbolType.PART_OF_SPEECH),
    CONJUNCTIVE_ADVERB          ("cnjadv",  SymbolType.PART_OF_SPEECH),

    ANTHROPONYM     ("ant", SymbolType.PROPER_NOUN_TYPE),   // imię
    TOPONYM         ("top", SymbolType.PROPER_NOUN_TYPE),   // miejsce
    HYDRONUM        ("hyd", SymbolType.PROPER_NOUN_TYPE),   // zbiornik wodny
    COGNOMEN        ("cog", SymbolType.PROPER_NOUN_TYPE),   // nazwisko
    ORGANISATION    ("org", SymbolType.PROPER_NOUN_TYPE),   // organizacja
    ALTRES          ("al",  SymbolType.PROPER_NOUN_TYPE),   // inne

    PRESENT             ("pres", SymbolType.TENSE),
    PRESENT_INDICATIVE  ("pri",  SymbolType.TENSE),
    PRESENT_PARTICIPLE  ("pprs", SymbolType.TENSE),
    FUTURE_INDICATIVE   ("fti",  SymbolType.TENSE),
    PAST                ("past", SymbolType.TENSE),
    PAST_PARTICIPLE     ("pp",   SymbolType.TENSE),

    COMPARATIVE         ("comp", SymbolType.COMPARISON),
    SUPERLATIVE         ("sup", SymbolType.COMPARISON),

    IMPERATIVE          ("imp", SymbolType.MOOD),   // tryb rozkazujący
    CONDITIONAL         ("cni", SymbolType.MOOD),   // tryb przypuszczający
    INFINITIVE          ("inf", SymbolType.MOOD),   // bezokolicznik

    INDECLINABLE        ("indecl",  SymbolType.OTHER),
    DIMINUTIVE          ("dim",     SymbolType.OTHER),
    ADJECTIVE_PO        ("po",      SymbolType.OTHER),
    COMPOUND            ("cpd",     SymbolType.OTHER),
    SYNTHETIC           ("sint",    SymbolType.OTHER);
    
    private final String shortcut;
    private final SymbolType type;

    public String getShortcut() {
        return this.shortcut;
    }

    public SymbolType getType() {
        return this.type;
    }

    Symbol(String shortcut, SymbolType type) {
        this.shortcut = shortcut;
        this.type = type;
    }

    public static Symbol getFromShortcut(String shortcut) {
        for (Symbol elem : Symbol.values()) {
            if (elem.getShortcut().equals(shortcut)) {
                return elem;
            }
        }
        return NOT_DEFINED;
    }

    public static boolean isDefined(String shortcut) {
            return getFromShortcut(shortcut) != NOT_DEFINED;
    }

    public static boolean listContainsSymbol(List<Symbol> syms, Symbol sym) {
        return syms.contains(sym);
    }
}
