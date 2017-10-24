
public class Number extends Attribute {
	
	private int number;
	
	public static final int SINGULAR = 1;
	
	public static final int PLURAL = 2;
	
	public static final int SHORT_PLURAL = 3;
	
	public static final int SECOND_PLURAL = 4;
	
	public static final int SOCIATIVE_PLURAL = 5;

	public Number(int number) {
		this.number = number;
	}
	public int toInt() {
		return number;
	}
	@Override
	String getTag() {
		switch (number) {
		case 1:
			return "<sg>";
		case 2:
			return "<pl>";
		case 3:
			return "<shPL>";
		case 4:
			return "<sPL>";
		case 5:
			return "<socPL>";
		}
		return null;
	}
}
