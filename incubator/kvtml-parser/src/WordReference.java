import java.io.*;
import java.util.*;
import java.net.*;

public class WordReference {
	private static final String baseUrl = "http://www.wordreference.com";
	private static final String baseQuery = "/%s%s/%s";
	
	public static String translate(String lemma, String src, String dest) throws Exception {
		String ret = null;
		URL url = new URL(baseUrl + String.format(baseQuery, src, dest, URLEncoder.encode(lemma, "UTF-8")));
		URLConnection conn = url.openConnection();

		conn.setRequestProperty("User-Agent", "Hello world");
		conn.setRequestProperty("Referer", baseUrl);
		
        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));

        List<String> buffer = new ArrayList<String>();
        String input;

        int i = 0;
        int ind = 0;
        
        while ((input = in.readLine()) != null) {
        	buffer.add(input);
        	if (input.equals("<span id='strAnchors'></span>")) {
        		ind = i + 1;
        	}
        	i++;
        }
        
        String str = buffer.get(ind);

        int state = 0;
        String bufstr = "";
        
        List<String> strings = new ArrayList<String>();
        
        for (int c = 0; c < str.length(); ++c) {
        	if (str.charAt(c) == '<') {
        		state = 1;
        		if (bufstr.trim().length() > 0 && !bufstr.trim().equals("-")) {
        			strings.add(bufstr.trim());
        			bufstr = "";
        		}
        	} else if (str.charAt(c) == '>') {
        		state = 0;
        	} else if (state == 0) {
        		bufstr += str.charAt(c);
        	}
        }
        
        state = 0;
        ind = 0;
        
        for (String type : strings) {
        	if (type.equals("adjective")) {
        		ind = state + 1;
        	}
        	state++;
        }
        
        if (ind != 0) {
        	ret = strings.get(ind);
        } else {
        	ret = "UNK";
        }
        
        in.close();
		
		return ret;
	}
}
