import java.io.BufferedReader;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;

public class Generate {
    public static void main(String[] args) {
	    
	final String POS = "no";
		
	ArrayList<Enclitic> enclitics = new ArrayList<Enclitic>();

	enclitics.add(new ThirdPersonSingEnclitic());
	enclitics.add(new SEnclitic());
	enclitics.add(new SEnclitic());

	Scanner input = new Scanner(System.in);
		
	while (input.hasNextLine()) {
	    String allSurfaceForms = generateAllForms(input.nextLine(), POS);
	    System.out.println(allSurfaceForms);
	}
		
	input.close();
    }

    public static String generateAllForms(String lemma, String POS) {
		

	// Initalization
	ArrayList<Stress> stresses = getStresses();
	ArrayList<Number> numbers = getNumbers();
	ArrayList<WordCase> cases = getCases();
	ArrayList<PosessiveSuffix> possessiveSuffixes = getPosessiveSuffixes();
	ArrayList<Enclitic> enclitics = getEnclitics();

	StringBuilder lexicalForms = new StringBuilder();

	// Generate every form without enclitics (and derivation and other stresses 
	// (normal stress is only used), and also without "extra"
	for (Stress stress : stresses)
	    for (Number number : numbers)
		for (WordCase wordCase : cases)
		    for (PosessiveSuffix possSuffix : possessiveSuffixes) {
			Nominal surfaceWordObject = new Nominal(lemma, stress,
								number, wordCase, possSuffix,
								new ArrayList<Enclitic>(), false);
			String lexicalAnalyse = surfaceWordObject.getLexicalForm();
			if (lexicalAnalyse != null) 
			    lexicalForms.append(lexicalAnalyse  + " ; " + POS + "\n");
		    }

		
	// Generate every form with enclitics
	//		for (Stress stress : stresses)
	//			for (Number number : numbers)
	//				for (WordCase wordCase : cases)
	//					for (PosessiveSuffix possSuffix : possessiveSuffixes) {
	//						for (HashSet<Enclitic> encliticSubsequence : getSubsequences(enclitics)) {
	//							Nominal surfaceWordObject = new Nominal(lemma, stress,
	//									number, wordCase, possSuffix,
	//									new ArrayList<Enclitic>(encliticSubsequence), false);
	//							String lexicalAnalysises = surfaceWordObject.getLexicalForm();
	//							lexicalForms.append(lexicalAnalysises + "\n");
	//						}
	//					}

		

	return lexicalForms.toString();
    }

    /**
     * 
     * @param tmpList leave it as null
     * @param list list you want to have subsequences
     * @return
     */
    private static <E> HashSet<HashSet<E>> getSubsequences(ArrayList<E> list) {

	HashSet<HashSet<E>> subsequences = new HashSet<HashSet<E>>();

	for (int i = 0; i <= list.size(); i++) {
	    subsequences.addAll(getSubsequencesOfK(list, i));
	}

	return subsequences;
    }

    /**
     * 
     * @param list
     * @param size of the subsequency
     * @return
     */
    private static <E> HashSet<HashSet<E>> getSubsequencesOfK(ArrayList<E> list, int size) {

	HashSet<HashSet<E>> subsequences = new HashSet<HashSet<E>>();

	if (size == 2) {
	    for (int i = 0; i < list.size(); i++) {
		for (int j = 0; j < list.size(); j++) {
		    HashSet<E> tmpSet = new HashSet<E>();
		    tmpSet.add(list.get(i));
		    tmpSet.add(list.get(j));
		    subsequences.add(tmpSet);
		}
	    }
	} else if (size == 1) {
	    for (int i = 0; i < list.size(); i++) {
		HashSet<E> tmpSet = new HashSet<E>(1);
		tmpSet.add(list.get(i));
		subsequences.add(tmpSet);

	    }
	} else if (size < 1) {
	    return new HashSet<HashSet<E>>();
	} else {
	    for (int i = 0; i < list.size(); i++) {
		HashSet<HashSet<E>> tmpSets = getSubsequencesOfK(list, size - 1);
		for (HashSet<E> tmpSet : tmpSets)
		    tmpSet.add(list.get(i));
		subsequences.addAll(tmpSets);
	    }
	}
		
	// Remove all different sized sets
	Iterator<HashSet<E>> it = subsequences.iterator();
	while (it.hasNext())
	    if (it.next().size() != size)
		it.remove();
		
	return subsequences;
    }

    private static ArrayList<Stress> getStresses() {
	ArrayList<Stress> stresses = new ArrayList<Stress>();

	// Only Normal stress in the first version
	//for (int i = 0; i <= 2; i++)
	//	stresses.add(new Stress(i));
	stresses.add(new Stress(Stress.NORMAL));

	return stresses;
    }

    public static ArrayList<Number> getNumbers() {
	ArrayList<Number> numbers = new ArrayList<Number>();
	for (int i = 1; i <= 5; i++)
	    numbers.add(new Number(i));
	return numbers;    		
    }

    public static ArrayList<WordCase> getCases() {
	ArrayList<WordCase> cases = new ArrayList<WordCase>();
	for (int i = 1; i <= 12; i++)
	    cases.add(new WordCase(i));
	return cases;    		
    }

    public static ArrayList<PosessiveSuffix> getPosessiveSuffixes() {
	ArrayList<PosessiveSuffix> posessiveSuffixes = new ArrayList<PosessiveSuffix>();
	for (int i = 0; i <= 6; i++)
	    posessiveSuffixes.add(new PosessiveSuffix(i));
	return posessiveSuffixes;    		
    }

    public static ArrayList<Enclitic> getEnclitics() {
	ArrayList<Enclitic> enclitics = new ArrayList<Enclitic>();

	enclitics.add(new CompDegEnclitic());
	enclitics.add(new ReduplicationEnclitic());
	enclitics.add(new AndEnclitic());
	enclitics.add(new StrengtheningEnclitic());
	enclitics.add(new ThirdPersonSingEnclitic());
	enclitics.add(new SEnclitic());

	return enclitics;    		
    }
}
