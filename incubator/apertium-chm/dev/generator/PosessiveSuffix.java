
public class PosessiveSuffix extends Attribute {
	
	private int number;
	
	public static final int NO_POS = 0;
	
	public static final int FIRST_SING_PERS = 1;

	public static final int SEC_SING_PERS = 2;
	
	public static final int THIRD_SING_PERS = 3;
	
	public static final int FIRST_PLUR_PERS = 4;

	public static final int SEC_PLUR_PERS = 5;
	
	public static final int THIRD_PLUR_PERS = 6;
	
	public PosessiveSuffix(int number) {
		this.number = number;
	}
	public int toInt() {
		return number;
	}
	@Override
	String getTag() {
		switch (number) {
		case 0:
			return "";
		case 1:
			return "<px1sg>";
		case 2:
			return "<px2sg>";
		case 3:
			return "<px3sg>";
		case 4:
			return "<px1pl>";
		case 5:
			return "<px2pl>";
		case 6:
			return "<px3pl>";
		case 7:
			return "<px3sp>";
		}
		return null;
	}
}
