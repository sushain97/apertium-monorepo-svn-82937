
public class WordCase extends Attribute {
	
	private int tagNumber;
	
	public static final int NOMINATIVE = 1;
	public static final int GENITIVE = 2;
	public static final int DATIVE = 3;
	public static final int ACCUSATIVE = 4;
	public static final int COMPARATIVE = 5;
	public static final int COMITATIVE = 6;
	public static final int INESSIVE = 7;
	public static final int ILLATIVE = 8;
	public static final int SHORT = 9;
	public static final int LATIVE = 10;
	public static final int ORIENTATIVE = 11;
	public static final int ADESSIVE = 12;
	
	/**
	 * Creates new case attribute
	 * 
	 * @param tagNumber marimorph tag number corresponding to a case
	 */
	public WordCase(int tagNumber) {
		if (tagNumber < 1 || tagNumber > 12)
			System.out.println("===ERROR===");
		this.tagNumber = tagNumber;
	}
	
	public int toInt() {
		return tagNumber;
	}

	@Override
	String getTag() {
		switch (tagNumber) {
		case NOMINATIVE:
			return "<nom>";
		case GENITIVE:
			return "<gen>";
		case DATIVE:
			return "<dat>";
		case ACCUSATIVE:
			return "<acc>";
		case COMPARATIVE:
			return "<comp>";
		case COMITATIVE:
			return "<comi>";
		case INESSIVE:
			return "<ine>";
		case ILLATIVE:
			return "<ill>";
		case SHORT:
			return "<shILL>";
		case LATIVE:
			return "<lat>";
		case ORIENTATIVE:
			return "<ori>";
		case ADESSIVE:
			return "<ade>";
		}
		return null;
	}
}
