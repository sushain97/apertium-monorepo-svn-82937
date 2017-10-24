package dix.view;

import dix.data.MonoDictionary;
import dix.data.Paradigm;
import dix.print.Printer;
import java.util.List;

/**
 *
 * @author Joanna Ruth
 */
public class Main {

    public static void main(String[] args) {
        Main m = new Main();
        m.runParadigmManager(args);
    }
    private MonoDictionary dict = null;

    private void runParadigmManager(String[] args) {
        if (args.length < 2) {
            printProgramInfo();
        } else {
            String dictPath = args[0].toString();
            String opt = args[1].toString();
            dict = MonoDictionary.loadFromFile(dictPath);
            CmdOption option = CmdOption.getOption(opt.trim().toLowerCase());
            switch (option) {
                case VIEW_HELP:
                    printProgramInfo();
                    break;
                case VIEW_PARDEF:
                    if (args.length < 3) {
                        System.out.println("The name of the paradigm was not specified");
                        return;
                    }
                    String parName = args[2];
                    viewSpecifiedPardef(parName);
                    break;
                case VIEW_ALL_PARDEFS:
                    viewAllPardefs();
                    break;
            }
        }
    }

    private static void printProgramInfo() {
        System.out.println("------------------------------------------");
        System.out.println("Program ParadigmManager ver 1.0");
        System.out.println("Usage: java -jar ParadigmManager.jar <monodix> <option> <arguments>");
        System.out.println("Options:");
        for (CmdOption opt : CmdOption.values()) {
            System.out.println(opt.getOption() + "\t\t- " + opt.getDescription());
        }
        System.out.println("------------------------------------------");
    }

    private void viewSpecifiedPardef(String pardefName) {
        Paradigm par = dict.findParadigmByName(pardefName);
        if (par == null) {
            System.out.println("There is no paradigm called " + pardefName);
        }
        Printer printer = new Printer();
        printer.printParadigm(par, "|");
    }

    private void viewAllPardefs() {
        List<Paradigm> paradigms = dict.getParadigms();
        Printer printer = new Printer();
        for(Paradigm par: paradigms) {
            printer.printParadigm(par, "|");
        }
    }
}
