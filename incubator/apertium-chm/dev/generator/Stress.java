
public class Stress extends Attribute {
	
	private int stress;
	
	public static final int NORMAL = 0;
	
	public static final int LAST_UNSTRESSED = 1;
	
	public static final int LAST_STRESSED = 2;
	
	public Stress(int stress) {
		this.stress = stress;
	}
	public int toInt() {
		return stress;
	}
	@Override
	String getTag() {
		
// In final version uncomment, now focusing on just normally stressed
//		switch (stress) {
//		case 0:
//			return "<norm>";
//		case 1:
//			return "<uns>";
//		case 2:
//			return "<stres>";
//		}
		return "";
	}
}
