package dix.print;

/**
 * 
 * @author Joanna Ruth
 */
public class Tools {

    public static String joinStrings(String[] strings, String separator) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < strings.length; i++) {
            if (i != 0) {
                sb.append(separator);
            }
            sb.append(strings[i]);
        }
        return sb.toString();
    }
}
