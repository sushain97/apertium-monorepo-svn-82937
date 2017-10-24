package dix.print;

import dix.data.Paradigm;
import dix.data.SymbolType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

/**
 * 
 * @author Joanna Ruth
 */
public abstract class ParadigmFormatter {

    protected Dictionary<String, String> inflection = null;
    protected Paradigm paradigm = null;

    public ParadigmFormatter() {
    }

    public ParadigmFormatter(Paradigm paradigm) {
        this();
        this.paradigm = paradigm;
    }

    public void printData(Paradigm par, String delimiter) {
        this.paradigm = par;
        this.printData(delimiter);
    }

    public void printData(String delimiter) {
        inflection = new Hashtable<String, String>();
        List<String> data = this.getData();
        printWithDelimiter(delimiter, data);
    }

    protected List<String> getData() {
        List<String> result = new ArrayList<String>();
        String pos = SymbolType.getPartOfSpeech(paradigm.getParadigmSymbols()).getShortcut();
        result.add(paradigm.getName());
        result.add(pos);
        return result;
    }

    protected void printWithDelimiter(String delimiter, List<String> values) {
        for (int i = 0; i < values.size(); ++i) {
            System.out.print(values.get(i));
            if (i < values.size() - 1) {
                System.out.print(delimiter);
            }
        }
        System.out.println();
    }

    protected boolean inflectionContainsEnding(String key, String ending) {
        String endingString = inflection.get(key);
        if (endingString == null) {
            return false;
        }
        String[] endings = endingString.split("[&]");
        for (String prevEnding : endings) {
            if (prevEnding.equals(ending)) {
                return true;
            }
        }
        return false;
    }

    protected List<String> getInflectionStrings(String[] keys) {
        List<String> endings = new ArrayList<String>();
        String ending = "";
        for (String key : keys) {
            ending = inflection.get(key);
            if (ending != null) {
                if (ending.isEmpty()) {
                    endings.add("*");
                } else {
                    endings.add(ending);
                }
            } else {
                endings.add("X");
            }
        }
        return endings;
    }

    protected void addEnding(String key, String ending) {
        if (inflection.get(key) != null && !inflectionContainsEnding(key, ending)) {
            String prev = inflection.get(key) + "&" + ending;
            String[] prevEndings = prev.split("[&]");
            Arrays.sort(prevEndings);
            String endings = Tools.joinStrings(prevEndings, "&");
            inflection.put(key, endings);
        } else {
            inflection.put(key, ending);
        }
    }
}
