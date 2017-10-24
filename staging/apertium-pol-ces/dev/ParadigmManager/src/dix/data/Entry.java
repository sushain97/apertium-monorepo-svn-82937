package dix.data;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author Joanna Ruth
 */
public class Entry {

    private List<Symbol> symbols = new ArrayList<Symbol>();
    private Direction direction = Direction.BOTH;
    private List<String> left = null;
    private List<String> right = null;
    private String baseParadigmName = null;
    private Paradigm baseParadigm = null;

    public Entry() {
    }

    public void addSymbol(String symbol) {
        Symbol symbolObj = Symbol.getFromShortcut(symbol);
        addSymbol(symbolObj);
    }

    public void addSymbol(Symbol symbol) {
        if (symbol != null) {
            symbols.add(symbol);
        }
    }

    public void setBaseParadigm(String name) {
        this.baseParadigmName = name;
    }

    public void setBaseParadigm(Paradigm paradigm) {
        this.baseParadigm = paradigm;
    }

    public boolean hasBaseParadigm() {
        return !(this.baseParadigmName == null || this.baseParadigmName.isEmpty());
    }

    public String getBaseParadigmName() {
        return this.baseParadigmName;
    }

    public Paradigm getBaseParadigm() {
        return this.baseParadigm;
    }

    public void setDirection(String value) {
        this.direction = Direction.getDirection(value);
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public Direction getDirection() {
        return this.direction;
    }

    public String getDirectionString() {
        return this.direction.getSymbol();
    }

    public boolean isMultiword() {
        return this.left != null && this.left.size() > 1;
    }

    public void setLeft(String left) {
        if (left == null) {
            return;
        }
        this.left = new ArrayList<String>();
        this.left.add(left);
    }

    public void setOrUpdateLeft(String left) {
        if (left == null) {
            return;
        }
        if (this.left == null) {
            this.left = new ArrayList<String>();
        }
        this.left.add(left);
    }

    public List<String> getLeft() {
        return this.left;
    }

    public void setRight(String right) {
        if (right == null) {
            return;
        }
        this.right = new ArrayList<String>();
        this.right.add(right);
    }

    public void setOrUpdateRight(String right) {
        if (right == null) {
            return;
        }
        if (this.right == null) {
            this.right = new ArrayList<String>();
        }
        this.right.add(right);
    }

    public List<String> getRight() {
        return this.right;
    }

    public boolean hasSymbol(Symbol symbol) {
        if (symbol == null) {
            return false;
        }
        for (Symbol elem : symbols) {
            if (elem.equals(symbol)) {
                return true;
            }
        }
        return false;
    }

    public Symbol getGender() {
        return getElem(SymbolType.GENDER);
    }

    public Symbol getNumber() {
        return getElem(SymbolType.NUMBER);
    }

    public Symbol getCase() {
        return getElem(SymbolType.CASE);
    }

    public Symbol getPartOfSpeech() {
        return getElem(SymbolType.PART_OF_SPEECH);
    }

    public List<Symbol> getSymbols() {
        return symbols;
    }

    private Symbol getElem(SymbolType type) {
        for (Symbol symbol : symbols) {
            if (symbol.getType().equals(type)) {
                return symbol;
            }
        }
        return null;
    }

    private List<Symbol> getElems(SymbolType type) {
        List<Symbol> list = new ArrayList<Symbol>();
        for (Symbol symbol : symbols) {
            if (symbol.getType().equals(type)) {
                list.add(symbol);
            }
        }
        return list;
    }
}
