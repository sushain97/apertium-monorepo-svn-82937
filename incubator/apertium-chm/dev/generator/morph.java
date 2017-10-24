import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.io.PrintStream;
import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;

public class morph
  extends JApplet
  implements ActionListener, ItemListener
{
  private boolean inited = false;
  private int cDerr = 1;
  private int cNum = 1;
  private int cCase = 1;
  private int cPoss = 0;
  private int cStress = 0;
  private boolean comN = false;
  private boolean andN = false;
  private boolean sN = false;
  private boolean redN = false;
  private boolean sEnclitN = false;
  private boolean e3 = false;
  private boolean e3V = false;
  private boolean eG = false;
  private int classOver = 0;
  private int cConj = 1;
  private boolean isPositive = true;
  private int cPers = 1;
  private int cTime = 1;
  private int cMood = 1;
  private int cInf = 1;
  private boolean comV = false;
  private boolean andV = false;
  private boolean sV = false;
  private boolean redV = false;
  private boolean sEnclitV = false;
  private boolean wImp1 = false;
  private boolean wImp2 = false;
  private boolean sImp = false;
  private int cVDerr = 0;
  private JTabbedPane tab = new JTabbedPane();
  private JButton goNouns;
  private JButton conjugate;
  private JTextField inNouns;
  private JTextField outNouns;
  private JRadioButton normal;
  private JRadioButton adjective1;
  private JRadioButton adjective2;
  private JRadioButton adjective3;
  private JRadioButton nomad1;
  private JRadioButton nomad2;
  private JRadioButton material;
  private JRadioButton verb1;
  private JRadioButton verb2;
  private JRadioButton verb3;
  private JRadioButton verb4;
  private JRadioButton verb5;
  private JRadioButton singular;
  private JRadioButton plural1;
  private JRadioButton plural2;
  private JRadioButton plural3;
  private JRadioButton plural4;
  private JCheckBox compDegreeN;
  private JCheckBox andParticleN;
  private JCheckBox sParticleN;
  private JCheckBox extra3N;
  private JCheckBox sEnN;
  private JCheckBox redupN;
  private JCheckBox extrag;
  private JRadioButton nominative;
  private JRadioButton genitive;
  private JRadioButton dative;
  private JRadioButton accusative;
  private JRadioButton comparative;
  private JRadioButton comitative;
  private JRadioButton inessive;
  private JRadioButton illativeLong;
  private JRadioButton illativeShort;
  private JRadioButton lative;
  private JRadioButton orientative;
  private JRadioButton adessive;
  private JRadioButton noPerson;
  private JRadioButton fps;
  private JRadioButton sps;
  private JRadioButton tps;
  private JRadioButton fpp;
  private JRadioButton spp;
  private JRadioButton tpp;
  private JRadioButton normalStress;
  private JRadioButton early;
  private JRadioButton late;
  private JButton goVerbs;
  private JButton decline;
  private JTextField inVerbs;
  private JTextField outVerbs;
  private JRadioButton first;
  private JRadioButton second;
  private JRadioButton positive;
  private JRadioButton negative;
  private JRadioButton np;
  private JRadioButton vfps;
  private JRadioButton vsps;
  private JRadioButton vtps;
  private JRadioButton vfpp;
  private JRadioButton vspp;
  private JRadioButton vtpp;
  private JRadioButton present;
  private JRadioButton pret1;
  private JRadioButton pret2;
  private JRadioButton imp1;
  private JRadioButton imp2;
  private JRadioButton perf1;
  private JRadioButton perf2;
  private JRadioButton indicative;
  private JRadioButton imperative;
  private JRadioButton desiderative;
  private JRadioButton finite;
  private JRadioButton infinitive;
  private JRadioButton inDat;
  private JRadioButton nes;
  private JRadioButton nesfut;
  private JRadioButton aPart;
  private JRadioButton pPart;
  private JRadioButton nPart;
  private JRadioButton fPart;
  private JRadioButton aiGer;
  private JRadioButton niGer;
  private JRadioButton nlGer;
  private JRadioButton paGer1;
  private JRadioButton paGer2;
  private JRadioButton saGer;
  private JRadioButton saGer2;
  private JRadioButton mpGer;
  private JRadioButton notHap;
  private JRadioButton nominal;
  private JRadioButton nVerbD;
  private JRadioButton vd1;
  private JRadioButton vd2;
  private JRadioButton vd3;
  private JRadioButton vd4;
  private JCheckBox weak1;
  private JCheckBox weak2;
  private JCheckBox strong;
  private JCheckBox compDegreeV;
  private JCheckBox andParticleV;
  private JCheckBox sParticleV;
  private JCheckBox extra3V;
  private JCheckBox sEnV;
  private JCheckBox redupV;
  private static final int gap = 25;
  private static final int start = 22;
  private static final int level = 0;
  private static final char JO = 'ё';
  private static final char A = 'а';
  private static final char B = 'б';
  private static final char V = 'в';
  private static final char G = 'г';
  private static final char D = 'д';
  private static final char JE = 'е';
  private static final char ZH = 'ж';
  private static final char Z = 'з';
  private static final char I = 'и';
  private static final char J = 'й';
  private static final char K = 'к';
  private static final char L = 'л';
  private static final char M = 'м';
  private static final char N = 'н';
  private static final char O = 'о';
  private static final char P = 'п';
  private static final char R = 'р';
  private static final char S = 'с';
  private static final char T = 'т';
  private static final char U = 'у';
  private static final char F = 'ф';
  private static final char H = 'х';
  private static final char TS = 'ц';
  private static final char CH = 'ч';
  private static final char SH = 'ш';
  private static final char SS = 'щ';
  private static final char HA = 'ъ';
  private static final char Y = 'ы';
  private static final char SO = 'ь';
  private static final char E = 'э';
  private static final char JU = 'ю';
  private static final char JA = 'я';
  private static final char NG = 'ҥ';
  private static final char OE = 'ӧ';
  private static final char UE = 'ӱ';
  private static final int NORMAL = 0;
  private static final int EARLY = 1;
  private static final int LATE = 2;
  private static final char mNG = 'ˆ';
  private static final char mOE = 'Є';
  private static final char mUE = '™';
  private static final char mng = '‰';
  private static final char moe = 'є';
  private static final char mue = 'ў';
  
  static String replace(String in, String replace, String with)
  {
    while (in.indexOf(replace) >= 0) {
      in = in.substring(0, in.indexOf(replace)) + with + in.substring(in.indexOf(replace) + replace.length());
    }
    return in;
  }
  
  private static boolean egroup(char c)
  {
    if ((c == 'а') || (c == 'я') || (c == 'э') || (c == 'е') || (c == 'и')) {
      return true;
    }
    return false;
  }
  
  private static boolean ogroup(char c)
  {
    if ((c == 'о') || (c == 'у') || (c == 'ё') || (c == 'ю')) {
      return true;
    }
    return false;
  }
  
  private static boolean oegroup(char c)
  {
    if ((c == 'ӱ') || (c == 'ӧ')) {
      return true;
    }
    return false;
  }
  
  static char harm(String in)
  {
    for (int i = in.length() - 1; i >= 0; i--)
    {
      if (egroup(in.charAt(i))) {
        return 'е';
      }
      if (ogroup(in.charAt(i))) {
        return 'о';
      }
      if (oegroup(in.charAt(i))) {
        return 'ӧ';
      }
    }
    return 'е';
  }
  
  private static boolean voiceless(char c)
  {
    if ((c == 'к') || (c == 'т') || (c == 'д') || (c == 'п') || (c == 'ф') || (c == 'ш') || (c == 'ч') || (c == 'х')) {
      return true;
    }
    return false;
  }
  
  private boolean voiced(char c)
  {
    if ((c == 'й') || (c == 'л') || (c == 'м') || (c == 'н') || (c == 'ҥ') || (c == 'р')) {
      return true;
    }
    return false;
  }
  
  static boolean pronoun(String in)
  {
    if ((in.equals("мый")) || (in.equals("тый")) || (in.equals("тудо")) || (in.equals("ме")) || (in.equals("те")) || (in.equals("нуно")) || (in.equals("кӧ")) || (in.equals("шке"))) {
      return true;
    }
    return false;
  }
  
  static String pronoun(String in, int cas, int per, int cPoss)
  {
    if (cas == 1) {
      return in;
    }
    if (in.equals("мый")) {
      switch (cas)
      {
      case 2: 
        return "мыйын";
      case 3: 
        return "мыланем";
      case 4: 
        return "мыйым";
      case 5: 
        return "мыйла";
      case 6: 
        return "мыйге";
      }
    }
    if (in.equals("тый")) {
      switch (cas)
      {
      case 2: 
        return "тыйын";
      case 3: 
        return "тыланет";
      case 4: 
        return "тыйым";
      case 5: 
        return "тыйла";
      case 6: 
        return "тыйге";
      }
    }
    if (in.equals("тудо")) {
      switch (cas)
      {
      case 2: 
        return "тудын";
      case 3: 
        return "тудлан";
      case 4: 
        return "тудым";
      case 5: 
        return "тудыла";
      case 6: 
        return "тудыге";
      }
    }
    if (in.equals("ме")) {
      switch (cas)
      {
      case 2: 
        return "мемнан";
      case 3: 
        return "мыланна";
      case 4: 
        return "мемнам";
      case 5: 
        return "мела";
      case 6: 
        return "меге";
      }
    }
    if (in.equals("те")) {
      switch (cas)
      {
      case 2: 
        return "тендан";
      case 3: 
        return "тыланда";
      case 4: 
        return "тендам";
      case 5: 
        return "тела";
      case 6: 
        return "теге";
      }
    }
    if (in.equals("нуно")) {
      switch (cas)
      {
      case 2: 
        return "нунын";
      case 3: 
        return "нунылан";
      case 4: 
        return "нуным";
      case 5: 
        return "нуныла";
      case 6: 
        return "нуныге";
      }
    }
    if (in.equals("кӧ")) {
      switch (cas)
      {
      case 2: 
        return "кӧн";
      case 3: 
        return "кӧлан";
      case 4: 
        return "кӧм";
      case 5: 
        return "кӧла";
      case 6: 
        return "кӧге";
      case 7: 
        return "кушто";
      case 8: 
        return "кушко";
      case 9: 
        return "куш";
      case 10: 
        return "кушан";
      }
    }
    if (in.equals("шке")) {
      if (cas == 2) {
        switch (cPoss)
        {
        case 1: 
          return "шкемын";
        case 2: 
          return "шкендын";
        case 3: 
          return "шкенжын";
        case 4: 
          return "шкенан";
        case 5: 
          return "шкендан";
        case 6: 
          return "шкеныштын";
        }
      } else if (cas == 3) {
        switch (cPoss)
        {
        case 1: 
          return "шкемым";
        case 2: 
          return "шкендым";
        case 3: 
          return "шкенжым";
        case 4: 
          return "шкенам";
        case 5: 
          return "шкендам";
        case 6: 
          return "шкеныштым";
        }
      } else if (cas == 4) {
        switch (cPoss)
        {
        case 1: 
          return "шкаланем";
        case 2: 
          return "шкаланет";
        case 3: 
          return "шкаланже";
        case 4: 
          return "шкаланна";
        case 5: 
          return "шкаланда";
        case 6: 
          return "шкаланышт";
        }
      }
    }
    return "";
  }
  
  static String toC(String in)
  {
    String temp = in;
    
    temp = toLower(temp);
    
    temp = replace(temp, "sh", "š");
    temp = replace(temp, "zh", "ž");
    temp = replace(temp, "ch", "č");
    temp = replace(temp, "štš", "щ");
    temp = replace(temp, "šč", "щ");
    
    temp = replace(temp, "%", "ҥ");
    temp = replace(temp, "ˆ", "ҥ");
    temp = replace(temp, "Є", "ӧ");
    temp = replace(temp, "™", "ӱ");
    
    temp = replace(temp, "‰", "ҥ");
    temp = replace(temp, "є", "ӧ");
    temp = replace(temp, "ў", "ӱ");
    
    temp = replace(temp, "ch", "ч");
    temp = replace(temp, "tš", "ч");
    temp = replace(temp, "'a", "я");
    temp = replace(temp, "ja", "я");
    temp = replace(temp, "'a", "я");
    temp = replace(temp, "ju", "ю");
    temp = replace(temp, "ts", "ц");
    temp = replace(temp, "je", "е");
    temp = replace(temp, "'jo'", "ё");
    
    temp = replace(temp, "n:", "ҥ");
    temp = replace(temp, "ng", "ҥ");
    temp = replace(temp, "lj", "ль");
    temp = replace(temp, "nj", "нь");
    
    temp = replace(temp, "e:", "ё");
    temp = replace(temp, "e'", "э");
    
    temp = replace(temp, "o:", "ӧ");
    temp = replace(temp, "u:", "ӱ");
    temp = replace(temp, "н:", "ҥ");
    temp = replace(temp, "у:", "ӱ");
    temp = replace(temp, "о:", "ӧ");
    temp = replace(temp, "е:", "ё");
    temp = replace(temp, "е'", "э");
    for (int i = 0; i < temp.length(); i++) {
      if (temp.charAt(i) == 'e') {
        if ((i == 0) || (temp.charAt(i - 1) == ' ') || (temp.charAt(i - 1) == 'a') || (temp.charAt(i - 1) == 'e') || (temp.charAt(i - 1) == 'i') || (temp.charAt(i - 1) == 'o') || (temp.charAt(i - 1) == 'u') || (temp.charAt(i - 1) == 'y') || (temp.charAt(i - 1) == 'ü') || (temp.charAt(i - 1) == 'ö') || (vowel(temp.charAt(i - 1)))) {
          temp = temp.substring(0, i) + 'э' + temp.substring(i + 1);
        } else {
          temp = temp.substring(0, i) + 'е' + temp.substring(i + 1);
        }
      }
    }
    String out = "";
    for (int i = 0; i < temp.length(); i++) {
      switch (temp.charAt(i))
      {
      case 'a': 
        out = out + 'а'; break;
      case 'b': 
        out = out + 'б'; break;
      case 'c': 
        out = out + 'ц'; break;
      case 'd': 
        out = out + 'д'; break;
      case 'e': 
        out = out + 'е'; break;
      case 'é': 
        out = out + 'э'; break;
      case 'f': 
        out = out + 'ф'; break;
      case 'g': 
        out = out + 'г'; break;
      case 'h': 
        out = out + 'х'; break;
      case 'i': 
        out = out + 'и'; break;
      case 'j': 
        out = out + 'й'; break;
      case 'k': 
        out = out + 'к'; break;
      case 'l': 
        out = out + 'л'; break;
      case 'm': 
        out = out + 'м'; break;
      case 'n': 
        out = out + 'н'; break;
      case 'o': 
        out = out + 'о'; break;
      case 'p': 
        out = out + 'п'; break;
      case 'q': 
        out = out + 'ы'; break;
      case 'r': 
        out = out + 'р'; break;
      case 's': 
        out = out + 'с'; break;
      case 't': 
        out = out + 'т'; break;
      case 'u': 
        out = out + 'у'; break;
      case 'v': 
        out = out + 'в'; break;
      case 'w': 
        out = out + 'в'; break;
      case 'x': 
        out = out + 'х'; break;
      case 'y': 
        out = out + 'ы'; break;
      case 'z': 
        out = out + 'з'; break;
      case 'š': 
        out = out + 'ш'; break;
      case 'ž': 
        out = out + 'ж'; break;
      case 'č': 
        out = out + 'ч'; break;
      case 'ö': 
        out = out + 'ӧ'; break;
      case 'ü': 
        out = out + 'ӱ'; break;
      case 'õ': 
        out = out + 'ы'; break;
      case '\'': 
        out = out + 'ь'; break;
      case '*': 
        out = out + 'ъ'; break;
      case '|': 
        break;
      case '.': 
        break;
      default: 
        out = out + temp.charAt(i);
      }
    }
    return out;
  }
  
  static String toLower(String in)
  {
    String out = "";
    for (int i = 0; i < in.length(); i++) {
      out = out + toLower(in.charAt(i));
    }
    return out;
  }
  
  static char toLower(char c)
  {
    if (c == 'Ҥ') {
      return 'ҥ';
    }
    if (c == 'Ӧ') {
      return 'ӧ';
    }
    if (c == 'Ӱ') {
      return 'ӱ';
    }
    if (c == 'Ё') {
      return 'ё';
    }
    if (c == 'É') {
      return 'é';
    }
    if ((c == 'Š') || (c == 'Ž') || (c == 'Č')) {
      c = (char)(c + '\001');
    } else if (((c >= 'A') && (c <= 'Z')) || (c == 'Ä') || (c == 'Ö') || (c == 'Ü') || (c == 'Õ') || (c == 'Å') || ((c >= 'А') && (c <= 'Я'))) {
      c = (char)(c + ' ');
    }
    return c;
  }
  
  static boolean vowel(char c)
  {
    if ((c == 'а') || (c == 'э') || (c == 'и') || (c == 'о') || (c == 'у') || (c == 'ы') || (c == 'я') || (c == 'е') || (c == 'ё') || (c == 'ю') || (c == 'ӧ') || (c == 'ӱ')) {
      return true;
    }
    return false;
  }
  
  static boolean reduced(char c)
  {
    if ((c == 'е') || (c == 'о') || (c == 'ӧ')) {
      return true;
    }
    return false;
  }
  
  static String reduce(String in)
  {
    if ((in.length() >= 2) && (in.charAt(in.length() - 1) == 'е') && (vowel(in.charAt(in.length() - 2)))) {
      return in.substring(0, in.length() - 1) + 'й' + 'ы';
    }
    if ((in.length() >= 2) && (in.charAt(in.length() - 1) == 'я') && (vowel(in.charAt(in.length() - 2)))) {
      return in.substring(0, in.length() - 1) + 'й' + 'ы';
    }
    if (in.charAt(in.length() - 1) == 'я') {
      return in.substring(0, in.length() - 1) + 'ь' + 'ы';
    }
    if ((in.length() >= 2) && (vowel(in.charAt(in.length() - 1))) && (vowel(in.charAt(in.length() - 2)))) {
      return in;
    }
    return in.substring(0, in.length() - 1) + 'ы';
  }
  
  static String omit(String in)
  {
    return in.substring(0, in.length() - 1);
  }
  
  static String aSuffix(String out, int stress)
  {
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((c == 'а') && (notOne(out))))
    {
      out = omit(out);
      if ((c == 'е') && (vowel(out.charAt(out.length() - 1)))) {
        out = out + 'й';
      } else if (vowel(out.charAt(out.length() - 1))) {
        out = out + c;
      }
    }
    c = out.charAt(out.length() - 1);
    if ((c == 'й') || (c == 'ь') || (c == 'я')) {
      out = out.substring(0, out.length() - 1) + 'я';
    } else {
      out = out + 'а';
    }
    return out;
  }
  
  static String eSuffix(String out, int stress)
  {
    char c = out.charAt(out.length() - 1);
    if ((c == 'э') || (c == 'е') || (((c == 'а') || (c == 'я')) && (stress != 1))) {
      return out;
    }
    if (c == 'я') {
      return omit(out) + 'е';
    }
    if ((reduced(c)) && (out.length() >= 2) && (vowel(out.charAt(out.length() - 2)))) {
      return out + 'э';
    }
    if (((reduced(c)) || (c == 'а')) && (notOne(out))) {
      out = omit(out);
    }
    c = out.charAt(out.length() - 1);
    if ((c == 'ь') || (c == 'й')) {
      out = out.substring(0, out.length() - 1) + 'е';
    } else if (vowel(c)) {
      out = out + 'э';
    } else {
      out = out + 'е';
    }
    return out;
  }
  
  private static boolean notOne(String in)
  {
    int count = 0;
    for (int i = 0; i < in.length(); i++) {
      if (vowel(in.charAt(i))) {
        count++;
      }
    }
    if (count > 1) {
      return true;
    }
    return false;
  }
  
  static String derr(String in, int stress, int derrNr, int classOver)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    switch (derrNr)
    {
    case 2: 
      out = adjective1(out, stress); break;
    case 3: 
      out = adjective2(out, stress); break;
    case 4: 
      out = adjective3(out, stress); break;
    case 5: 
      out = verb1(out, stress, classOver); break;
    case 6: 
      out = verb2(out, stress, classOver); break;
    case 7: 
      out = verb3(out, stress, classOver); break;
    case 8: 
      out = verb4(out, stress, classOver); break;
    case 9: 
      out = verb5(out, stress, classOver); break;
    case 10: 
      out = nomad1(out, stress); break;
    case 11: 
      out = nomad2(out, stress);
    }
    return out;
  }
  
  private static String adjective1(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'с' + harm(out);
  }
  
  private static String adjective2(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = aSuffix(in, stress);
    
    return out + 'н';
  }
  
  private static String adjective3(String in, int stress)
  {
    String out = in;
    
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    return out + 'д' + 'ы' + 'м' + harm(in);
  }
  
  private static String nomad1(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = aSuffix(in, stress);
    
    return out + 'ш';
  }
  
  private static String nomad2(String in, int stress)
  {
    String out = in;
    
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    return out + 'л' + 'ы' + 'к';
  }
  
  private static String verb1(String in, int stress, int classOver)
  {
    classOver = 1;
    
    String out = aSuffix(in, stress);
    
    return out + 'ҥ' + 'а' + 'ш';
  }
  
  private static String verb2(String in, int stress, int classOver)
  {
    classOver = 1;
    
    String out = eSuffix(in, stress);
    
    return out + 'м' + 'а' + 'ш';
  }
  
  static String verb3(String in, int stress, int classOver)
  {
    classOver = 1;
    
    String out = aSuffix(in, stress);
    
    return out + 'л' + 'а' + 'ш';
  }
  
  private static String verb4(String in, int stress, int classOver)
  {
    classOver = 2;
    
    String out = in;
    
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'к' + 'т' + 'а' + 'ш';
  }
  
  private static String verb5(String in, int stress, int classOver)
  {
    if (in.equals("йӱштӧ")) {
      classOver = 1;
    } else {
      classOver = 2;
    }
    String out = in;
    
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'л' + 'а' + 'ш';
  }
  
  static String number(String in, int stress, int number, int cPoss)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    switch (number)
    {
    case 2: 
      out = plural1(out); break;
    case 3: 
      out = plural2(out, stress, cPoss); break;
    case 4: 
      out = plural3(out); break;
    case 5: 
      out = plural4(out);
    }
    return out;
  }
  
  static String plural1(String in)
  {
    return in + '-' + 'в' + 'л' + 'а' + 'к';
  }
  
  static String plural2(String in, int stress, int cPoss)
  {
    return comparative(in, stress, cPoss);
  }
  
  static String plural3(String in)
  {
    return in + '-' + 'ш' + 'а' + 'м' + 'ы' + 'ч';
  }
  
  static String plural4(String in)
  {
    return in + '-' + 'м' + 'ы' + 'т';
  }
  
  static String also(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    
    out = aSuffix(out, stress);
    
    return out + 'т';
  }
  
  static String weakImp1(String in)
  {
    return in + "-" + 'я';
  }
  
  static String weakImp2(String in)
  {
    return in + "-" + 'я' + 'н';
  }
  
  static String redup(String in, int stress)
  {
    return in + "-" + in;
  }
  
  static String strong(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = aSuffix(in, stress);
    
    return out + 'к';
  }
  
  static String sEnclit(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'с';
  }
  
  static String compDegree(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    return out + 'р' + 'а' + 'к';
  }
  
  static String caseEnding(String in, int stress, int caseNr, int cPoss)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    switch (caseNr)
    {
    case 2: 
      out = genitive(out, stress); break;
    case 3: 
      out = dative(out, stress, cPoss); break;
    case 4: 
      out = accusative(out, stress); break;
    case 5: 
      out = comparative(out, stress, cPoss); break;
    case 6: 
      out = comitative(out, stress, cPoss); break;
    case 7: 
      out = inessive(out, stress); break;
    case 8: 
      out = longIllative(out, stress); break;
    case 9: 
      out = shortIllative(out, stress); break;
    case 10: 
      out = lative(out, stress); break;
    case 11: 
      out = orientative(out, stress); break;
    case 12: 
      out = adessive(out, stress);
    }
    return out;
  }
  
  static String genitive(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'н';
  }
  
  static String accusative(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'м';
  }
  
  static String dative(String in, int stress, int cPoss)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if ((cPoss == 3) && (in.length() >= 3))
    {
      c = in.charAt(in.length() - 3);
      if (vowel(c)) {
        out = omit(out);
      }
    }
    return out + 'л' + 'а' + 'н';
  }
  
  static String comparative(String in, int stress, int cPoss)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if ((cPoss == 3) && (in.length() >= 3))
    {
      c = in.charAt(in.length() - 3);
      if (vowel(c)) {
        out = omit(out);
      }
    }
    return out + 'л' + 'а';
  }
  
  static String comitative(String in, int stress, int cPoss)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if ((cPoss == 3) && (in.length() >= 3))
    {
      c = in.charAt(in.length() - 3);
      if (vowel(c)) {
        out = omit(out);
      }
    }
    return out + 'г' + 'е';
  }
  
  static String inessive(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш' + 'т' + harm(out);
  }
  
  private static String orientative(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш' + 'к' + 'ы' + 'л' + 'а';
  }
  
  private static String adessive(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш' + 'т' + 'ы' + 'л' + 'а';
  }
  
  private static String longIllative(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш' + 'к' + harm(out);
  }
  
  private static String shortIllative(String in, int stress)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш';
  }
  
  private static String lative(String in, int stress)
  {
    String out = eSuffix(in, stress);
    
    return out + 'ш';
  }
  
  static String possessive(String in, int stress, int person, boolean e3)
  {
    if (in.length() == 0) {
      return "";
    }
    String out = in;
    switch (person)
    {
    case 1: 
      out = fps(out, stress); break;
    case 2: 
      out = sps(out, stress); break;
    case 3: 
      out = tps(out, stress); break;
    case 4: 
      out = fpp(out, stress); break;
    case 5: 
      out = spp(out, stress); break;
    case 6: 
      out = tpp(out, stress);
    }
    if (e3) {
      if (person == 0) {
        out = tps(out, stress);
      } else {
        out = tps(out, 0);
      }
    }
    return out;
  }
  
  private static String fps(String in, int stress)
  {
    String out = eSuffix(in, stress);
    
    return out + 'м';
  }
  
  private static String sps(String in, int stress)
  {
    String out = eSuffix(in, stress);
    
    return out + 'т';
  }
  
  private static String tps(String in, int stress)
  {
    String out = in;
    
    char c = out.charAt(out.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (voiceless(c)) {
      out = out + 'ш';
    } else {
      out = out + 'ж';
    }
    return out + harm(out);
  }
  
  private static String fpp(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    return out + 'н' + 'а';
  }
  
  private static String spp(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    return out + 'д' + 'а';
  }
  
  private static String tpp(String in, int stress)
  {
    String out = in;
    
    char c = in.charAt(in.length() - 1);
    if (((stress != 2) && (reduced(c))) || ((stress == 1) && ((c == 'а') || (c == 'я')) && (notOne(out)))) {
      out = reduce(out);
    }
    if (!vowel(c)) {
      out = out + 'ы';
    }
    return out + 'ш' + 'т';
  }
  
  private String derive(String in, int der, int conj)
  {
    switch (der)
    {
    case 1: 
      return vDer1(in, conj);
    case 2: 
      return vDer2(in, conj);
    case 3: 
      return vDer3(in, conj);
    case 4: 
      return vDer4(in, conj);
    }
    return "";
  }
  
  private int derive(String in, int der)
  {
    switch (der)
    {
    case 1: 
      return 1;
    case 2: 
      return 1;
    case 3: 
      return 2;
    case 4: 
      if (in.equals("кычкырлаш")) {
        return 2;
      }
      return 1;
    }
    return 0;
  }
  
  private String vDer1(String in, int conj)
  {
    return in.substring(0, in.length() - 1) + 'л' + 'т' + 'а' + 'ш';
  }
  
  private String vDer2(String in, int conj)
  {
    return in.substring(0, in.length() - 1) + 'л' + 'а' + 'ш';
  }
  
  private String vDer3(String in, int conj)
  {
    String out = stem(in);
    if (!vowel(stem(in).charAt(stem(in).length() - 1))) {
      out = out + 'ы';
    }
    return out + 'к' + 'т' + 'а' + 'ш';
  }
  
  private String vDer4(String in, int conj)
  {
    String out = stem(in);
    if (((!vowel(out.charAt(out.length() - 1))) && (!vowel(out.charAt(out.length() - 2)))) || (out.charAt(out.length() - 1) == 'д')) {
      out = out + 'ы';
    }
    return out + 'л' + 'а' + 'ш';
  }
  
  private String conjugate(String in, int conj, boolean pos, int pers, int time, int mood)
  {
    String out = "";
    if (pos)
    {
      if (time == 1)
      {
        if (mood == 1) {
          out = indPresent(in, conj, pers);
        } else if (mood == 2)
        {
          if (pers == 2) {
            out = impSingular(in, conj);
          } else if (pers == 3) {
            out = imp3sing(in, conj);
          } else if (pers == 4) {
            out = indPresent(in, conj, pers);
          } else if (pers == 5) {
            out = impPlural(in, conj);
          } else if (pers == 6) {
            out = imp3plur(in, conj);
          }
        }
        else if (mood == 3) {
          out = desPresent(in, conj, pers);
        }
      }
      else if (time == 2) {
        out = indPret1(in, conj, pers);
      } else if (time == 3) {
        out = indPret2(in, conj, pers);
      } else if (time == 4) {
        out = conjugate(in, conj, pos, pers, 1, mood) + " " + 'ы' + 'л' + 'е';
      } else if (time == 5) {
        out = conjugate(in, conj, pos, pers, 1, mood) + " " + 'у' + 'л' + 'м' + 'а' + 'ш';
      } else if (time == 6) {
        out = conjugate(in, conj, pos, pers, 3, mood) + " " + 'ы' + 'л' + 'е';
      } else {
        out = conjugate(in, conj, pos, pers, 3, mood) + " " + 'у' + 'л' + 'м' + 'а' + 'ш';
      }
    }
    else if (time == 3) {
      out = affInstGer(in, conj, 0) + " " + ulash("", false, 1, 1, pers);
    } else if (time == 4) {
      out = conjugate(in, conj, pos, pers, 1, mood) + " " + 'ы' + 'л' + 'е';
    } else if (time == 5) {
      out = conjugate(in, conj, pos, pers, 1, mood) + " " + 'у' + 'л' + 'м' + 'а' + 'ш';
    } else if (time == 6) {
      out = affInstGer(in, conj, 0) + " " + ulash("", false, 1, 1, pers) + " " + 'ы' + 'л' + 'е';
    } else if (time == 7) {
      out = affInstGer(in, conj, 0) + " " + ulash("", false, 1, 1, pers) + " " + 'у' + 'л' + 'м' + 'а' + 'ш';
    } else {
      out = negword(pers, time, mood) + " " + impSingular(in, conj);
    }
    return out;
  }
  
  private String negword(int pers, int time, int mood)
  {
    if ((time == 1) && (mood == 1)) {
      switch (pers)
      {
      case 1: 
        return "ом";
      case 2: 
        return "от";
      case 3: 
        return "огеш";
      case 4: 
        return "огына";
      case 5: 
        return "огыда";
      case 6: 
        return "огыт";
      }
    }
    if ((time == 1) && (mood == 2)) {
      switch (pers)
      {
      case 2: 
        return "ит";
      case 3: 
        return "ынже";
      case 4: 
        return "огына";
      case 5: 
        return "ида";
      case 6: 
        return "ынышт";
      }
    }
    if ((time == 1) && (mood == 3)) {
      switch (pers)
      {
      case 1: 
        return "ынем";
      case 2: 
        return "ынет";
      case 3: 
        return "ынеже";
      case 4: 
        return "ынена";
      case 5: 
        return "ынеда";
      case 6: 
        return "ынешт";
      }
    }
    if ((time == 2) && (mood == 1)) {
      switch (pers)
      {
      case 1: 
        return "шым";
      case 2: 
        return "шыч";
      case 3: 
        return "ыш";
      case 4: 
        return "ышна";
      case 5: 
        return "ышда";
      case 6: 
        return "ышт";
      }
    }
    return "";
  }
  
  static boolean ulash(String in, int cConj)
  {
    if ((in.equals("улаш")) && (cConj == 1)) {
      return true;
    }
    return false;
  }
  
  private String ulash(String in, boolean pos, int time, int mood, int pers)
  {
    if ((time == 1) && (pos) && (mood == 1) && (pers == 3)) {
      return "уло";
    }
    if ((time == 1) && (!pos) && (mood == 1))
    {
      switch (pers)
      {
      case 1: 
        return "омыл";
      case 2: 
        return "отыл";
      case 3: 
        return "огыл";
      case 4: 
        return "огынал";
      case 5: 
        return "огыдал";
      case 6: 
        return "огытыл";
      }
    }
    else if ((time == 2) && (pos) && (mood == 1))
    {
      switch (pers)
      {
      case 1: 
        return "ыльым";
      case 2: 
        return "ыльыч";
      case 3: 
        return "ыле";
      case 4: 
        return "ыльна";
      case 5: 
        return "ыльда";
      case 6: 
        return "ыльыч";
      }
    }
    else
    {
      if ((time == 3) && (pos) && (mood == 1) && (pers == 3)) {
        return "улмашын";
      }
      if (((time != 1) && (!pos)) || (mood != 1)) {
        return conjugate("лияш", 1, this.isPositive, this.cPers, this.cTime, this.cMood);
      }
    }
    return conjugate(in, this.cConj, this.isPositive, this.cPers, this.cTime, this.cMood);
  }
  
  private String stem(String in)
  {
    String out = in.substring(0, in.length() - 2);
    if (in.charAt(in.length() - 2) == 'я') {
      if (vowel(in.charAt(in.length() - 3))) {
        out = out + 'й';
      } else {
        out = out + 'ь';
      }
    }
    return out;
  }
  
  private String indPresent(String in, int conj, int pers)
  {
    String out = stem(in);
    if (vowel(out.charAt(out.length() - 1)))
    {
      if (conj == 1) {
        switch (pers)
        {
        case 1: 
          out = out + 'а' + 'м'; break;
        case 2: 
          out = out + 'а' + 'т'; break;
        case 3: 
          out = out + 'э' + 'ш'; break;
        case 4: 
          out = out + 'ы' + 'н' + 'а'; break;
        case 5: 
          out = out + 'ы' + 'д' + 'а'; break;
        case 6: 
          out = out + 'ы' + 'т';
        }
      } else {
        switch (pers)
        {
        case 1: 
          out = out + 'э' + 'м'; break;
        case 2: 
          out = out + 'э' + 'т'; break;
        case 3: 
          out = out + 'а'; break;
        case 4: 
          out = out + 'э' + 'н' + 'а'; break;
        case 5: 
          out = out + 'э' + 'д' + 'а'; break;
        case 6: 
          out = out + 'а' + 'т';
        }
      }
    }
    else if (out.charAt(out.length() - 1) == 'й')
    {
      out = omit(out);
      if (conj == 1) {
        switch (pers)
        {
        case 1: 
          out = out + 'я' + 'м'; break;
        case 2: 
          out = out + 'я' + 'т'; break;
        case 3: 
          out = out + 'е' + 'ш'; break;
        case 4: 
          out = out + 'й' + 'ы' + 'н' + 'а'; break;
        case 5: 
          out = out + 'й' + 'ы' + 'д' + 'а'; break;
        case 6: 
          out = out + 'й' + 'ы' + 'т';
        }
      } else {
        switch (pers)
        {
        case 1: 
          out = out + 'е' + 'м'; break;
        case 2: 
          out = out + 'е' + 'т'; break;
        case 3: 
          out = out + 'я'; break;
        case 4: 
          out = out + 'е' + 'н' + 'а'; break;
        case 5: 
          out = out + 'е' + 'д' + 'а'; break;
        case 6: 
          out = out + 'я' + 'т';
        }
      }
    }
    else if (conj == 1)
    {
      switch (pers)
      {
      case 1: 
        out = out + 'а' + 'м'; break;
      case 2: 
        out = out + 'а' + 'т'; break;
      case 3: 
        out = out + 'е' + 'ш'; break;
      case 4: 
        out = out + 'ы' + 'н' + 'а'; break;
      case 5: 
        out = out + 'ы' + 'д' + 'а'; break;
      case 6: 
        out = out + 'ы' + 'т';
      }
    }
    else
    {
      switch (pers)
      {
      case 1: 
        out = out + 'е' + 'м'; break;
      case 2: 
        out = out + 'е' + 'т'; break;
      case 3: 
        out = out + 'а'; break;
      case 4: 
        out = out + 'е' + 'н' + 'а'; break;
      case 5: 
        out = out + 'е' + 'д' + 'а'; break;
      case 6: 
        out = out + 'а' + 'т';
      }
    }
    return out;
  }
  
  private String desPresent(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = possessive(out + 'н' + 'е', 2, pers, this.e3);
    
    return out;
  }
  
  private String indPret1(String in, int conj, int pers)
  {
    String out = "";
    if (conj == 1)
    {
      String soft = "";
      String soft2 = "";
      char c = stem(in).charAt(stem(in).length() - 1);
      if ((c == 'н') || (c == 'л'))
      {
        soft = "ь";
        soft2 = "$";
        if (harm(stem(in)) != 'е') {
          soft2 = "ь";
        }
      }
      switch (pers)
      {
      case 1: 
        out = stem(in) + soft + 'ы' + 'м'; break;
      case 2: 
        out = stem(in) + soft + 'ы' + 'ч'; break;
      case 3: 
        out = stem(in) + soft2 + harm(stem(in)); break;
      case 4: 
        out = impSingular(in, conj) + 'н' + 'а'; break;
      case 5: 
        out = impSingular(in, conj) + 'д' + 'а'; break;
      case 6: 
        out = stem(in) + soft + 'ы' + 'ч';
      }
    }
    else
    {
      out = reduce(impSingular(in, conj)) + 'ш';
      switch (pers)
      {
      case 1: 
        out = out + 'ы' + 'м'; break;
      case 2: 
        out = out + 'ы' + 'ч'; break;
      case 4: 
        out = out + 'н' + 'а'; break;
      case 5: 
        out = out + 'д' + 'а'; break;
      case 6: 
        out = out + 'т';
      }
    }
    return out;
  }
  
  private String indPret2(String in, int conj, int pers)
  {
    String out = affInstGer(in, conj, 0);
    switch (pers)
    {
    case 1: 
      out = out + 'а' + 'м'; break;
    case 2: 
      out = out + 'а' + 'т'; break;
    case 4: 
      out = out + 'н' + 'а'; break;
    case 5: 
      out = out + 'д' + 'а'; break;
    case 6: 
      out = out + 'ы' + 'т';
    }
    return out;
  }
  
  private String impSingular(String in, int conj)
  {
    String out = stem(in);
    if ((conj == 2) && ((out.length() != 2) || (!vowel(out.charAt(1)))))
    {
      out = out + harm(out);
    }
    else
    {
      if ((out.charAt(out.length() - 2) == 'к') && (out.charAt(out.length() - 1) == 'т')) {
        out = out.substring(0, out.length() - 1);
      } else if ((out.charAt(out.length() - 2) == 'ш') && (out.charAt(out.length() - 1) == 'к')) {
        out = out.substring(0, out.length() - 1);
      } else if ((out.charAt(out.length() - 2) == 'ч') && (out.charAt(out.length() - 1) == 'к')) {
        out = out.substring(0, out.length() - 1);
      } else if ((out.charAt(out.length() - 2) == 'н') && (out.charAt(out.length() - 1) == 'ч')) {
        out = out.substring(0, out.length() - 2) + 'ч';
      }
      if (out.charAt(out.length() - 1) == 'з') {
        out = out.substring(0, out.length() - 1) + 'ч';
      }
    }
    return out;
  }
  
  private String impPlural(String in, int conj)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    if ((vowel(c)) || (voiced(c))) {
      out = out + 'з' + 'а';
    } else {
      out = out + 'с' + 'а';
    }
    return out;
  }
  
  private String imp3sing(String in, int conj)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    if ((vowel(c)) || (voiced(c))) {
      out = out + 'ж' + harm(out);
    } else {
      out = out + 'ш' + harm(out);
    }
    return out;
  }
  
  private String imp3plur(String in, int conj)
  {
    String out = stem(in);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out) + 'ш' + 'т';
    } else {
      out = out + 'ы' + 'ш' + 'т';
    }
    return out;
  }
  
  private String inf(String in, int conj, int inf, int pers)
  {
    String out = "";
    switch (inf)
    {
    case 2: 
      out = infinitive(in, pers); break;
    case 3: 
      out = necessive(in, conj); break;
    case 4: 
      out = necFuture(in, conj, 0); break;
    case 5: 
      out = aPart(in, conj, pers); break;
    case 6: 
      out = pPart(in, conj, pers); break;
    case 7: 
      out = nPart(in, conj, pers); break;
    case 8: 
      out = fPart(in, conj, pers); break;
    case 9: 
      out = affInstGer(in, conj, pers); break;
    case 10: 
      out = negInstGer(in, conj, pers); break;
    case 11: 
      out = gpa(in, conj, pers); break;
    case 12: 
      out = gfa(in, conj, pers); break;
    case 13: 
      out = gsa(in, conj, pers); break;
    case 14: 
      out = nominal(in, conj, pers); break;
    case 15: 
      out = notHappen(in, conj, pers); break;
    case 16: 
      out = infDat(in, pers); break;
    case 17: 
      out = necFuture(in, conj, pers); break;
    case 18: 
      out = gmpa(in, conj, pers); break;
    case 19: 
      out = negLongGer(in, conj, pers);
    }
    return out;
  }
  
  private String infinitive(String in, int pers)
  {
    return possessive(in, 0, pers, this.e3);
  }
  
  private String infDat(String in, int pers)
  {
    return possessive(in + 'л' + 'а' + 'н', 0, pers, this.e3);
  }
  
  private String necessive(String in, int conj)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    return out + 'м' + 'а' + 'н';
  }
  
  private String necFuture(String in, int conj, int pers)
  {
    String out = possessive(pPart(in, conj, 0), 0, pers, this.e3);
    if (pers == 3) {
      out = out.substring(0, out.length() - 1);
    }
    if (pers == 0) {
      out = out.substring(0, out.length() - 1) + 'ы';
    }
    return out + 'л' + 'а';
  }
  
  private String aPart(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'ш' + harm(out);
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String pPart(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'м' + harm(out);
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String nPart(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'д' + 'ы' + 'м' + harm(out);
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String fPart(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'ш' + 'а' + 'ш';
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String affInstGer(String in, int conj, int pers)
  {
    String out = stem(in);
    if (conj == 1) {
      out = out + 'ы' + 'н';
    } else if (vowel(out.charAt(out.length() - 1))) {
      out = out + 'э' + 'н';
    } else {
      out = out + 'е' + 'н';
    }
    return out;
  }
  
  private String negInstGer(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'д' + 'е';
    
    return out;
  }
  
  private String negLongGer(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'д' + 'е' + 'г' + 'е' + 'ч';
    
    return out;
  }
  
  private String gpa(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'м' + 'е' + 'к';
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String gfa(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'м' + 'е' + 'ш' + 'к' + 'е';
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String gsa(String in, int conj, int pers)
  {
    String out = possessive(aPart(in, conj, 0), 0, pers, this.e3);
    if (pers == 3) {
      out = out.substring(0, out.length() - 1);
    }
    return out + 'л' + 'а';
  }
  
  private String gmpa(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'ш' + 'ы' + 'н';
    
    return out;
  }
  
  private String notHappen(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'д' + 'ы' + 'м' + 'а' + 'ш';
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  private String nominal(String in, int conj, int pers)
  {
    String out = impSingular(in, conj);
    char c = out.charAt(out.length() - 1);
    if (reduced(c)) {
      out = reduce(out);
    }
    out = out + 'м' + 'а' + 'ш';
    if (pers != 0) {
      out = possessive(out, 0, pers, this.e3);
    }
    return out;
  }
  
  public void init()
  {
    createLayout();
  }
  
  private void createLayout()
  {
    JPanel nouns = new JPanel();
    
    nouns.setLayout(null);
    
    this.tab.addTab("Nominals", nouns);
    
    this.inNouns = new JTextField(50);
    this.inNouns.setEditable(true);
    this.inNouns.setBounds(13, 25, 229, 25);
    nouns.add(this.inNouns);
    
    this.outNouns = new JTextField(50);
    this.outNouns.setEditable(false);
    this.outNouns.setBounds(293, 25, 229, 25);
    nouns.add(this.outNouns);
    
    this.goNouns = new JButton(">");
    this.goNouns.addActionListener(this);
    this.goNouns.setBounds(245, 25, 45, 25);
    nouns.add(this.goNouns);
    
    this.conjugate = new JButton("Inflect");
    this.conjugate.addActionListener(this);
    this.conjugate.setBounds(525, 25, 105, 25);
    this.conjugate.setEnabled(false);
    nouns.add(this.conjugate);
    
    JPanel stressPanel = new JPanel();
    stressPanel.setLayout(null);
    stressPanel.setBounds(13, 62, 206, 113);
    stressPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Stress"));
    
    nouns.add(stressPanel);
    
    this.normalStress = new JRadioButton("Normal Accentuation");
    this.normalStress.addItemListener(this);
    this.normalStress.setBounds(12, 22, 182, 25);
    this.normalStress.setSelected(true);
    stressPanel.add(this.normalStress);
    
    this.early = new JRadioButton("Last Syllable Unstressed");
    this.early.setBounds(12, 47, 182, 25);
    this.early.addItemListener(this);
    stressPanel.add(this.early);
    
    this.late = new JRadioButton("Last Syllable Stressed");
    this.late.setBounds(12, 72, 182, 25);
    this.late.addItemListener(this);
    stressPanel.add(this.late);
    
    ButtonGroup stress = new ButtonGroup();
    stress.add(this.normalStress);
    stress.add(this.early);
    stress.add(this.late);
    
    JPanel derivPanel = new JPanel();
    derivPanel.setLayout(null);
    derivPanel.setBounds(13, 170, 206, 379);
    derivPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Derivation"));
    
    nouns.add(derivPanel);
    
    this.normal = new JRadioButton("No Derivation");
    this.normal.setBounds(12, 22, 182, 25);
    this.normal.addItemListener(this);
    this.normal.setSelected(true);
    derivPanel.add(this.normal);
    
    this.adjective1 = new JRadioButton("Adjective (Like X)");
    this.adjective1.setBounds(12, 47, 182, 25);
    this.adjective1.addItemListener(this);
    derivPanel.add(this.adjective1);
    
    this.adjective2 = new JRadioButton("Adjective (With X)");
    this.adjective2.setBounds(12, 72, 182, 25);
    this.adjective2.addItemListener(this);
    derivPanel.add(this.adjective2);
    
    this.adjective3 = new JRadioButton("Adjective (Without X)");
    this.adjective3.setBounds(12, 97, 182, 25);
    this.adjective3.addItemListener(this);
    derivPanel.add(this.adjective3);
    
    this.nomad1 = new JRadioButton("Nominal (Material/Size/...)");
    this.nomad1.setBounds(12, 122, 182, 25);
    this.nomad1.addItemListener(this);
    derivPanel.add(this.nomad1);
    
    this.nomad2 = new JRadioButton("Nominal (Material/for X/...)");
    this.nomad2.setBounds(12, 147, 182, 25);
    this.nomad2.addItemListener(this);
    derivPanel.add(this.nomad2);
    
    this.verb1 = new JRadioButton("Verb (to Become X)");
    this.verb1.setBounds(12, 172, 182, 25);
    this.verb1.addItemListener(this);
    derivPanel.add(this.verb1);
    
    this.verb2 = new JRadioButton("Verb (to Become X)");
    this.verb2.setBounds(12, 197, 182, 25);
    this.verb2.addItemListener(this);
    derivPanel.add(this.verb2);
    
    this.verb3 = new JRadioButton("Verb (to Put X on)");
    this.verb3.setBounds(12, 222, 182, 25);
    this.verb3.addItemListener(this);
    derivPanel.add(this.verb3);
    
    this.verb4 = new JRadioButton("Verb (to Make into X)");
    this.verb4.setBounds(12, 247, 182, 25);
    this.verb4.addItemListener(this);
    derivPanel.add(this.verb4);
    
    this.verb5 = new JRadioButton("Verb (Various)");
    this.verb5.setBounds(12, 272, 182, 25);
    this.verb5.addItemListener(this);
    derivPanel.add(this.verb5);
    
    ButtonGroup derivation = new ButtonGroup();
    derivation.add(this.normal);
    derivation.add(this.adjective1);
    derivation.add(this.adjective2);
    derivation.add(this.adjective3);
    derivation.add(this.nomad1);
    derivation.add(this.nomad2);
    derivation.add(this.verb1);
    derivation.add(this.verb2);
    derivation.add(this.verb3);
    derivation.add(this.verb4);
    derivation.add(this.verb5);
    
    JPanel casePanel = new JPanel();
    casePanel.setLayout(null);
    casePanel.setBounds(220, 62, 206, 313);
    casePanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Case"));
    
    nouns.add(casePanel);
    nouns.add(casePanel);
    
    this.nominative = new JRadioButton("Nominative");
    this.nominative.setBounds(12, 22, 182, 25);
    this.nominative.addItemListener(this);
    this.nominative.setSelected(true);
    casePanel.add(this.nominative);
    
    this.genitive = new JRadioButton("Genitive");
    this.genitive.setBounds(12, 47, 91, 25);
    this.genitive.addItemListener(this);
    casePanel.add(this.genitive);
    
    this.extrag = new JCheckBox("(Extra)");
    this.extrag.setBounds(101, 47, 91, 25);
    this.extrag.addItemListener(this);
    casePanel.add(this.extrag);
    
    this.dative = new JRadioButton("Dative");
    this.dative.setBounds(12, 72, 182, 25);
    this.dative.addItemListener(this);
    casePanel.add(this.dative);
    
    this.accusative = new JRadioButton("Accusative");
    this.accusative.setBounds(12, 97, 182, 25);
    this.accusative.addItemListener(this);
    casePanel.add(this.accusative);
    
    this.comparative = new JRadioButton("Comparative");
    this.comparative.setBounds(12, 122, 182, 25);
    this.comparative.addItemListener(this);
    casePanel.add(this.comparative);
    
    this.comitative = new JRadioButton("Comitative");
    this.comitative.setBounds(12, 147, 182, 25);
    this.comitative.addItemListener(this);
    casePanel.add(this.comitative);
    
    this.inessive = new JRadioButton("Inessive");
    this.inessive.setBounds(12, 172, 91, 25);
    this.inessive.addItemListener(this);
    casePanel.add(this.inessive);
    
    this.adessive = new JRadioButton("Adessive");
    this.adessive.setBounds(101, 172, 91, 25);
    this.adessive.addItemListener(this);
    casePanel.add(this.adessive);
    
    this.illativeLong = new JRadioButton("Illative");
    this.illativeLong.setBounds(12, 197, 91, 25);
    this.illativeLong.addItemListener(this);
    casePanel.add(this.illativeLong);
    
    this.illativeShort = new JRadioButton("(Short)");
    this.illativeShort.setBounds(101, 197, 91, 25);
    this.illativeShort.addItemListener(this);
    casePanel.add(this.illativeShort);
    
    this.lative = new JRadioButton("Lative");
    this.lative.setBounds(12, 222, 91, 25);
    this.lative.addItemListener(this);
    casePanel.add(this.lative);
    
    this.orientative = new JRadioButton("Orientative");
    this.orientative.setBounds(101, 222, 91, 25);
    this.orientative.addItemListener(this);
    casePanel.add(this.orientative);
    
    ButtonGroup cases = new ButtonGroup();
    cases.add(this.nominative);
    cases.add(this.genitive);
    cases.add(this.dative);
    cases.add(this.accusative);
    cases.add(this.comparative);
    cases.add(this.comitative);
    cases.add(this.inessive);
    cases.add(this.illativeLong);
    cases.add(this.illativeShort);
    cases.add(this.lative);
    cases.add(this.orientative);
    cases.add(this.adessive);
    
    JPanel plurPanel = new JPanel();
    plurPanel.setLayout(null);
    plurPanel.setBounds(220, 370, 206, 179);
    plurPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Number"));
    
    nouns.add(plurPanel);
    nouns.add(plurPanel);
    
    this.singular = new JRadioButton("Singular");
    this.singular.setBounds(12, 22, 182, 25);
    this.singular.addItemListener(this);
    this.singular.setSelected(true);
    plurPanel.add(this.singular);
    
    this.plural1 = new JRadioButton("Plural");
    this.plural1.setBounds(12, 47, 182, 25);
    this.plural1.addItemListener(this);
    plurPanel.add(this.plural1);
    
    this.plural2 = new JRadioButton("Plural (Short)");
    this.plural2.setBounds(12, 72, 182, 25);
    this.plural2.addItemListener(this);
    plurPanel.add(this.plural2);
    
    this.plural3 = new JRadioButton("Second Plural");
    this.plural3.setBounds(12, 97, 182, 25);
    this.plural3.addItemListener(this);
    plurPanel.add(this.plural3);
    
    this.plural4 = new JRadioButton("Plural (Sociative)");
    this.plural4.setBounds(12, 122, 182, 25);
    this.plural4.addItemListener(this);
    plurPanel.add(this.plural4);
    
    ButtonGroup number = new ButtonGroup();
    number.add(this.singular);
    number.add(this.plural1);
    number.add(this.plural2);
    number.add(this.plural3);
    number.add(this.plural4);
    
    JPanel possPanel = new JPanel();
    possPanel.setLayout(null);
    possPanel.setBounds(427, 62, 206, 221);
    possPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Possessive Suffix"));
    
    nouns.add(possPanel);
    nouns.add(possPanel);
    
    this.noPerson = new JRadioButton("No Possessive suffix");
    this.noPerson.setBounds(12, 22, 182, 25);
    this.noPerson.addItemListener(this);
    this.noPerson.setSelected(true);
    possPanel.add(this.noPerson);
    
    this.fps = new JRadioButton("1st Person Singular");
    this.fps.setBounds(12, 47, 182, 25);
    this.fps.addItemListener(this);
    possPanel.add(this.fps);
    
    this.sps = new JRadioButton("2nd Person Singular");
    this.sps.setBounds(12, 72, 182, 25);
    this.sps.addItemListener(this);
    possPanel.add(this.sps);
    
    this.tps = new JRadioButton("3rd Person Singular");
    this.tps.setBounds(12, 97, 182, 25);
    this.tps.addItemListener(this);
    possPanel.add(this.tps);
    
    this.fpp = new JRadioButton("1st Person Plural");
    this.fpp.setBounds(12, 122, 182, 25);
    this.fpp.addItemListener(this);
    possPanel.add(this.fpp);
    
    this.spp = new JRadioButton("2nd Person Plural");
    this.spp.setBounds(12, 147, 182, 25);
    this.spp.addItemListener(this);
    possPanel.add(this.spp);
    
    this.tpp = new JRadioButton("3rd Person Plural");
    this.tpp.setBounds(12, 172, 182, 25);
    this.tpp.addItemListener(this);
    possPanel.add(this.tpp);
    
    ButtonGroup person = new ButtonGroup();
    person.add(this.noPerson);
    person.add(this.fps);
    person.add(this.sps);
    person.add(this.tps);
    person.add(this.fpp);
    person.add(this.spp);
    person.add(this.tpp);
    
    JPanel eNPanel = new JPanel();
    eNPanel.setLayout(null);
    eNPanel.setBounds(427, 278, 206, 271);
    eNPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Enclitics, etc."));
    
    nouns.add(eNPanel);
    
    this.compDegreeN = new JCheckBox("Comparative Degree");
    this.compDegreeN.setBounds(12, 22, 182, 25);
    this.compDegreeN.addItemListener(this);
    eNPanel.add(this.compDegreeN);
    
    this.redupN = new JCheckBox("Reduplication");
    this.redupN.setBounds(12, 47, 182, 25);
    this.redupN.addItemListener(this);
    eNPanel.add(this.redupN);
    
    this.andParticleN = new JCheckBox("\"and\" Particle");
    this.andParticleN.setBounds(12, 72, 182, 25);
    this.andParticleN.addItemListener(this);
    eNPanel.add(this.andParticleN);
    
    this.sParticleN = new JCheckBox("Strengthening Particle");
    this.sParticleN.setBounds(12, 97, 182, 25);
    this.sParticleN.addItemListener(this);
    eNPanel.add(this.sParticleN);
    
    this.extra3N = new JCheckBox("3rd Person Singular Enclitic");
    this.extra3N.setBounds(12, 122, 182, 25);
    this.extra3N.addItemListener(this);
    eNPanel.add(this.extra3N);
    
    this.sEnN = new JCheckBox("-с Enclitic");
    this.sEnN.setBounds(12, 147, 182, 25);
    this.sEnN.addItemListener(this);
    eNPanel.add(this.sEnN);
    
    JPanel verbs = new JPanel();
    
    verbs.setLayout(null);
    
    this.tab.addTab("Verbs", verbs);
    
    this.inVerbs = new JTextField(50);
    this.inVerbs.setEditable(true);
    this.inVerbs.setBounds(13, 25, 229, 25);
    verbs.add(this.inVerbs);
    
    this.goVerbs = new JButton(">");
    this.goVerbs.addActionListener(this);
    this.goVerbs.setBounds(245, 25, 45, 25);
    verbs.add(this.goVerbs);
    
    this.outVerbs = new JTextField(50);
    this.outVerbs.setEditable(false);
    this.outVerbs.setBounds(293, 25, 229, 25);
    verbs.add(this.outVerbs);
    
    this.decline = new JButton("Inflect");
    this.decline.addActionListener(this);
    this.decline.setBounds(525, 25, 105, 25);
    this.decline.setEnabled(false);
    verbs.add(this.decline);
    
    JPanel leftBox = new JPanel();
    leftBox.setLayout(null);
    leftBox.setBounds(13, 62, 102, 88);
    leftBox.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Conjugation"));
    
    verbs.add(leftBox);
    
    this.first = new JRadioButton("I (-ам)");
    this.first.setBounds(12, 22, 75, 25);
    this.first.addItemListener(this);
    this.first.setSelected(true);
    leftBox.add(this.first);
    
    this.second = new JRadioButton("II (-ем)");
    this.second.setBounds(12, 47, 75, 25);
    this.second.addItemListener(this);
    leftBox.add(this.second);
    
    ButtonGroup conjugation = new ButtonGroup();
    conjugation.add(this.first);
    conjugation.add(this.second);
    
    JPanel rightBox = new JPanel();
    rightBox.setLayout(null);
    rightBox.setBounds(117, 62, 102, 88);
    rightBox.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Pos/Neg"));
    
    verbs.add(rightBox);
    
    this.positive = new JRadioButton("Positive");
    this.positive.setBounds(12, 22, 75, 25);
    this.positive.addItemListener(this);
    this.positive.setSelected(true);
    rightBox.add(this.positive);
    
    this.negative = new JRadioButton("Negative");
    this.negative.setBounds(12, 47, 75, 25);
    this.negative.addItemListener(this);
    rightBox.add(this.negative);
    
    ButtonGroup posNeg = new ButtonGroup();
    posNeg.add(this.positive);
    posNeg.add(this.negative);
    
    JPanel persPanel = new JPanel();
    persPanel.setLayout(null);
    persPanel.setBounds(13, 145, 206, 138);
    persPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Person"));
    
    verbs.add(persPanel);
    
    this.np = new JRadioButton("No Person");
    this.np.setBounds(12, 22, 100, 25);
    this.np.addItemListener(this);
    this.np.setEnabled(false);
    persPanel.add(this.np);
    
    this.vfps = new JRadioButton("1Sg");
    this.vfps.setBounds(12, 47, 75, 25);
    this.vfps.addItemListener(this);
    this.vfps.setSelected(true);
    persPanel.add(this.vfps);
    
    this.vfpp = new JRadioButton("1Pl");
    this.vfpp.setBounds(101, 47, 75, 25);
    this.vfpp.addItemListener(this);
    persPanel.add(this.vfpp);
    
    this.vsps = new JRadioButton("2Sg");
    this.vsps.setBounds(12, 72, 75, 25);
    this.vsps.addItemListener(this);
    persPanel.add(this.vsps);
    
    this.vspp = new JRadioButton("2Pl");
    this.vspp.setBounds(101, 72, 75, 25);
    this.vspp.addItemListener(this);
    persPanel.add(this.vspp);
    
    this.vtps = new JRadioButton("3Sg");
    this.vtps.setBounds(12, 97, 75, 25);
    this.vtps.addItemListener(this);
    persPanel.add(this.vtps);
    
    this.vtpp = new JRadioButton("3Pl");
    this.vtpp.setBounds(101, 97, 75, 25);
    this.vtpp.addItemListener(this);
    persPanel.add(this.vtpp);
    
    ButtonGroup vPers = new ButtonGroup();
    vPers.add(this.np);
    vPers.add(this.vfps);
    vPers.add(this.vsps);
    vPers.add(this.vtps);
    vPers.add(this.vfpp);
    vPers.add(this.vspp);
    vPers.add(this.vtpp);
    
    JPanel vDerPanel = new JPanel();
    vDerPanel.setLayout(null);
    vDerPanel.setBounds(13, 278, 206, 163);
    vDerPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Derivation"));
    
    verbs.add(vDerPanel);
    
    this.nVerbD = new JRadioButton("No Verb Derivation");
    this.nVerbD.setBounds(12, 22, 182, 25);
    this.nVerbD.addItemListener(this);
    this.nVerbD.setSelected(true);
    vDerPanel.add(this.nVerbD);
    
    this.vd1 = new JRadioButton("Reflexive");
    this.vd1.setBounds(12, 47, 182, 25);
    this.vd1.addItemListener(this);
    vDerPanel.add(this.vd1);
    
    this.vd2 = new JRadioButton("Diminutive");
    this.vd2.setBounds(12, 72, 182, 25);
    this.vd2.addItemListener(this);
    vDerPanel.add(this.vd2);
    
    this.vd3 = new JRadioButton("Causative, Curative");
    this.vd3.setBounds(12, 97, 182, 25);
    this.vd3.addItemListener(this);
    vDerPanel.add(this.vd3);
    
    this.vd4 = new JRadioButton("Frequentative, Momentary");
    this.vd4.setBounds(12, 122, 182, 25);
    this.vd4.addItemListener(this);
    vDerPanel.add(this.vd4);
    
    ButtonGroup vDer = new ButtonGroup();
    vDer.add(this.nVerbD);
    vDer.add(this.vd1);
    vDer.add(this.vd2);
    vDer.add(this.vd3);
    vDer.add(this.vd4);
    
    JPanel moodPanel = new JPanel();
    moodPanel.setLayout(null);
    moodPanel.setBounds(13, 436, 206, 113);
    moodPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Mood"));
    
    verbs.add(moodPanel);
    
    this.indicative = new JRadioButton("Indicative");
    this.indicative.setBounds(12, 22, 85, 25);
    this.indicative.addItemListener(this);
    this.indicative.setSelected(true);
    moodPanel.add(this.indicative);
    
    this.imperative = new JRadioButton("Imperative");
    this.imperative.setBounds(12, 47, 85, 25);
    this.imperative.addItemListener(this);
    moodPanel.add(this.imperative);
    
    this.weak1 = new JCheckBox("Weak (1)");
    this.weak1.setBounds(101, 22, 75, 25);
    this.weak1.addItemListener(this);
    this.weak1.setEnabled(false);
    moodPanel.add(this.weak1);
    
    this.weak2 = new JCheckBox("Weak (2)");
    this.weak2.setBounds(101, 47, 75, 25);
    this.weak2.addItemListener(this);
    this.weak2.setEnabled(false);
    moodPanel.add(this.weak2);
    
    this.strong = new JCheckBox("Strong");
    this.strong.setBounds(101, 72, 75, 25);
    this.strong.addItemListener(this);
    this.strong.setEnabled(false);
    moodPanel.add(this.strong);
    
    this.desiderative = new JRadioButton("Desider.");
    this.desiderative.setBounds(12, 72, 85, 25);
    this.desiderative.addItemListener(this);
    moodPanel.add(this.desiderative);
    
    ButtonGroup mood = new ButtonGroup();
    mood.add(this.indicative);
    mood.add(this.imperative);
    mood.add(this.desiderative);
    
    JPanel tensePanel = new JPanel();
    tensePanel.setLayout(null);
    tensePanel.setBounds(220, 62, 206, 221);
    tensePanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Tense"));
    
    nouns.add(tensePanel);
    verbs.add(tensePanel);
    
    this.present = new JRadioButton("Present/Future");
    this.present.setBounds(12, 22, 182, 25);
    this.present.addItemListener(this);
    this.present.setSelected(true);
    tensePanel.add(this.present);
    
    this.pret1 = new JRadioButton("Simple Past I");
    this.pret1.setBounds(12, 47, 182, 25);
    this.pret1.addItemListener(this);
    tensePanel.add(this.pret1);
    
    this.pret2 = new JRadioButton("Simple Past II");
    this.pret2.setBounds(12, 72, 182, 25);
    this.pret2.addItemListener(this);
    tensePanel.add(this.pret2);
    
    this.imp1 = new JRadioButton("Compound Past I");
    this.imp1.setBounds(12, 97, 182, 25);
    this.imp1.addItemListener(this);
    tensePanel.add(this.imp1);
    
    this.imp2 = new JRadioButton("Compound Past II");
    this.imp2.setBounds(12, 122, 182, 25);
    this.imp2.addItemListener(this);
    tensePanel.add(this.imp2);
    
    this.perf1 = new JRadioButton("Compound Perfect I");
    this.perf1.setBounds(12, 147, 182, 25);
    this.perf1.addItemListener(this);
    tensePanel.add(this.perf1);
    
    this.perf2 = new JRadioButton("Compound Perfect II");
    this.perf2.setBounds(12, 172, 182, 25);
    this.perf2.addItemListener(this);
    tensePanel.add(this.perf2);
    
    ButtonGroup time = new ButtonGroup();
    time.add(this.present);
    time.add(this.pret1);
    time.add(this.pret2);
    time.add(this.imp1);
    time.add(this.imp2);
    time.add(this.perf1);
    time.add(this.perf2);
    
    JPanel eVPanel = new JPanel();
    eVPanel.setLayout(null);
    eVPanel.setBounds(220, 278, 206, 271);
    eVPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Enclitics, ..."));
    
    verbs.add(eVPanel);
    
    this.compDegreeV = new JCheckBox("Comparative Degree");
    this.compDegreeV.setBounds(12, 22, 182, 25);
    this.compDegreeV.addItemListener(this);
    eVPanel.add(this.compDegreeV);
    
    this.redupV = new JCheckBox("Reduplication");
    this.redupV.setBounds(12, 47, 182, 25);
    this.redupV.addItemListener(this);
    eVPanel.add(this.redupV);
    
    this.andParticleV = new JCheckBox("\"and\" Particle");
    this.andParticleV.setBounds(12, 72, 182, 25);
    this.andParticleV.addItemListener(this);
    eVPanel.add(this.andParticleV);
    
    this.sParticleV = new JCheckBox("Strengthening Particle");
    this.sParticleV.setBounds(12, 97, 182, 25);
    this.sParticleV.addItemListener(this);
    eVPanel.add(this.sParticleV);
    
    this.extra3V = new JCheckBox("3rd Person Singular Enclitic");
    this.extra3V.setBounds(12, 122, 182, 25);
    this.extra3V.addItemListener(this);
    eVPanel.add(this.extra3V);
    
    this.sEnV = new JCheckBox("-с Enclitic");
    this.sEnV.setBounds(12, 147, 182, 25);
    this.sEnV.addItemListener(this);
    eVPanel.add(this.sEnV);
    
    JPanel nonfinPanel = new JPanel();
    nonfinPanel.setLayout(null);
    nonfinPanel.setBounds(427, 62, 206, 487);
    nonfinPanel.setBorder(BorderFactory.createTitledBorder(BorderFactory.createEtchedBorder(), "Non-finite Forms"));
    
    verbs.add(nonfinPanel);
    
    this.finite = new JRadioButton("Finite Verb Form");
    this.finite.setBounds(12, 22, 182, 25);
    this.finite.addItemListener(this);
    this.finite.setSelected(true);
    nonfinPanel.add(this.finite);
    
    this.infinitive = new JRadioButton("Infinitive");
    this.infinitive.setBounds(12, 47, 91, 25);
    this.infinitive.addItemListener(this);
    nonfinPanel.add(this.infinitive);
    
    this.inDat = new JRadioButton("+ Dative");
    this.inDat.setBounds(101, 47, 91, 25);
    this.inDat.addItemListener(this);
    nonfinPanel.add(this.inDat);
    
    this.nes = new JRadioButton("Necessive Infinitve");
    this.nes.setBounds(12, 72, 182, 25);
    this.nes.addItemListener(this);
    nonfinPanel.add(this.nes);
    
    this.nesfut = new JRadioButton("Necessive Future Infinitive");
    this.nesfut.setBounds(12, 97, 182, 25);
    this.nesfut.addItemListener(this);
    nonfinPanel.add(this.nesfut);
    
    this.aPart = new JRadioButton("Active Participle");
    this.aPart.setBounds(12, 122, 182, 25);
    this.aPart.addItemListener(this);
    nonfinPanel.add(this.aPart);
    
    this.pPart = new JRadioButton("Passive Participle");
    this.pPart.setBounds(12, 147, 182, 25);
    this.pPart.addItemListener(this);
    nonfinPanel.add(this.pPart);
    
    this.nPart = new JRadioButton("Negative Participle");
    this.nPart.setBounds(12, 172, 182, 25);
    this.nPart.addItemListener(this);
    nonfinPanel.add(this.nPart);
    
    this.fPart = new JRadioButton("Future Participle");
    this.fPart.setBounds(12, 197, 182, 25);
    this.fPart.addItemListener(this);
    nonfinPanel.add(this.fPart);
    
    this.aiGer = new JRadioButton("Gerund (-н)");
    this.aiGer.setBounds(12, 222, 182, 25);
    this.aiGer.addItemListener(this);
    nonfinPanel.add(this.aiGer);
    
    this.niGer = new JRadioButton("Negative Gerund");
    this.niGer.setBounds(12, 247, 182, 25);
    this.niGer.addItemListener(this);
    nonfinPanel.add(this.niGer);
    
    this.nlGer = new JRadioButton("Long Negative Gerund");
    this.nlGer.setBounds(12, 272, 182, 25);
    this.nlGer.addItemListener(this);
    nonfinPanel.add(this.nlGer);
    
    this.paGer1 = new JRadioButton("Gerund for Prior Actions");
    this.paGer1.setBounds(12, 297, 182, 25);
    this.paGer1.addItemListener(this);
    nonfinPanel.add(this.paGer1);
    
    this.paGer2 = new JRadioButton("Gerund for Future Actions");
    this.paGer2.setBounds(12, 322, 182, 25);
    this.paGer2.addItemListener(this);
    nonfinPanel.add(this.paGer2);
    
    this.saGer = new JRadioButton("G. for Simultaneous Actions");
    this.saGer.setBounds(12, 347, 182, 25);
    this.saGer.addItemListener(this);
    nonfinPanel.add(this.saGer);
    
    this.saGer2 = new JRadioButton("G. for Simultaneous Act. (2)");
    this.saGer2.setBounds(12, 372, 182, 25);
    this.saGer2.addItemListener(this);
    nonfinPanel.add(this.saGer2);
    
    this.mpGer = new JRadioButton("G. for Marginally Prior Act.");
    this.mpGer.setBounds(12, 397, 182, 25);
    this.mpGer.addItemListener(this);
    nonfinPanel.add(this.mpGer);
    
    this.nominal = new JRadioButton("Nominal");
    this.nominal.setBounds(12, 422, 182, 25);
    this.nominal.addItemListener(this);
    nonfinPanel.add(this.nominal);
    
    this.notHap = new JRadioButton("Negative Nominal");
    this.notHap.setBounds(12, 447, 182, 25);
    this.notHap.addItemListener(this);
    nonfinPanel.add(this.notHap);
    
    ButtonGroup infinites = new ButtonGroup();
    infinites.add(this.finite);
    infinites.add(this.infinitive);
    infinites.add(this.inDat);
    infinites.add(this.nes);
    infinites.add(this.nesfut);
    infinites.add(this.aPart);
    infinites.add(this.pPart);
    infinites.add(this.nPart);
    infinites.add(this.fPart);
    infinites.add(this.aiGer);
    infinites.add(this.niGer);
    infinites.add(this.nlGer);
    infinites.add(this.paGer1);
    infinites.add(this.paGer2);
    infinites.add(this.saGer);
    infinites.add(this.saGer2);
    infinites.add(this.mpGer);
    infinites.add(this.notHap);
    infinites.add(this.nominal);
    
    Container contentPane = getContentPane();
    contentPane.add(this.tab);
    
    this.inited = true;
  }
  
  private void deactivate()
  {
    this.adjective1.setVisible(false);
    this.adjective2.setVisible(false);
    this.adjective3.setVisible(false);
    this.nomad1.setVisible(false);
    this.nomad2.setVisible(false);
    this.verb1.setVisible(false);
    this.verb2.setVisible(false);
    this.verb3.setVisible(false);
    this.verb4.setVisible(false);
    this.verb5.setVisible(false);
    
    this.genitive.setVisible(false);
    this.dative.setVisible(false);
    this.accusative.setVisible(false);
    this.comparative.setVisible(false);
    this.comitative.setVisible(false);
    this.illativeLong.setVisible(false);
    this.illativeShort.setVisible(false);
    this.lative.setVisible(false);
    this.orientative.setVisible(false);
    this.adessive.setVisible(false);
    this.extrag.setVisible(false);
    
    this.fps.setVisible(false);
    this.sps.setVisible(false);
    this.tps.setVisible(false);
    this.fpp.setVisible(false);
    this.spp.setVisible(false);
    this.tpp.setVisible(false);
    
    this.plural1.setVisible(false);
    this.plural2.setVisible(false);
    this.plural3.setVisible(false);
    this.plural4.setVisible(false);
    
    this.compDegreeN.setVisible(false);
    this.redupN.setVisible(false);
    this.andParticleN.setVisible(false);
    this.sParticleN.setVisible(false);
    this.extra3N.setVisible(false);
    this.sEnN.setVisible(false);
    
    this.goVerbs.setEnabled(false);
    this.inVerbs.setEnabled(false);
    
    this.first.setVisible(false);
    this.second.setVisible(false);
    this.positive.setVisible(false);
    this.negative.setVisible(false);
    
    this.np.setVisible(false);
    this.vfps.setVisible(false);
    this.vfpp.setVisible(false);
    this.vsps.setVisible(false);
    this.vspp.setVisible(false);
    this.vtps.setVisible(false);
    this.vtpp.setVisible(false);
    
    this.nVerbD.setVisible(false);
    this.vd1.setVisible(false);
    this.vd2.setVisible(false);
    this.vd3.setVisible(false);
    this.vd4.setVisible(false);
    
    this.indicative.setVisible(false);
    this.imperative.setVisible(false);
    this.weak1.setVisible(false);
    this.weak2.setVisible(false);
    this.strong.setVisible(false);
    this.desiderative.setVisible(false);
    
    this.present.setVisible(false);
    this.pret1.setVisible(false);
    this.pret2.setVisible(false);
    this.imp1.setVisible(false);
    this.imp2.setVisible(false);
    this.perf1.setVisible(false);
    this.perf2.setVisible(false);
    
    this.compDegreeV.setVisible(false);
    this.redupV.setVisible(false);
    this.andParticleV.setVisible(false);
    this.sParticleV.setVisible(false);
    this.extra3V.setVisible(false);
    this.sEnV.setVisible(false);
    
    this.finite.setVisible(false);
    this.infinitive.setVisible(false);
    this.inDat.setVisible(false);
    this.nes.setVisible(false);
    this.nesfut.setVisible(false);
    this.aPart.setVisible(false);
    this.pPart.setVisible(false);
    this.nPart.setVisible(false);
    this.fPart.setVisible(false);
    this.aiGer.setVisible(false);
    this.niGer.setVisible(false);
    this.nlGer.setVisible(false);
    this.paGer1.setVisible(false);
    this.paGer2.setVisible(false);
    this.saGer.setVisible(false);
    this.saGer2.setVisible(false);
    this.mpGer.setVisible(false);
    this.nominal.setVisible(false);
    this.notHap.setVisible(false);
  }
  
  private void activate(int level)
  {
    if (level >= 2)
    {
      this.adjective2.setVisible(true);
      
      this.genitive.setVisible(true);
      this.accusative.setVisible(true);
      
      this.tps.setVisible(true);
      this.tpp.setVisible(true);
      
      this.goVerbs.setEnabled(true);
      this.inVerbs.setEnabled(true);
      
      this.first.setVisible(true);
      this.second.setVisible(true);
      
      this.positive.setVisible(true);
      
      this.np.setVisible(true);
      this.vtps.setVisible(true);
      this.vtps.setSelected(true);
      this.vtpp.setVisible(true);
      
      this.nVerbD.setVisible(true);
      
      this.indicative.setVisible(true);
      
      this.present.setVisible(true);
      
      this.finite.setVisible(true);
      this.infinitive.setVisible(true);
    }
    if (level >= 3)
    {
      this.fps.setVisible(true);
      this.sps.setVisible(true);
      
      this.illativeLong.setVisible(true);
      this.illativeShort.setVisible(true);
      
      this.andParticleN.setVisible(true);
      
      this.vfps.setVisible(true);
      this.vsps.setVisible(true);
      
      this.andParticleV.setVisible(true);
    }
    if (level >= 4)
    {
      this.dative.setVisible(true);
      
      this.fpp.setVisible(true);
      this.spp.setVisible(true);
      
      this.plural1.setVisible(true);
      this.plural2.setVisible(true);
      this.plural3.setVisible(true);
      
      this.vfpp.setVisible(true);
      this.vspp.setVisible(true);
    }
    if (level >= 5)
    {
      this.imperative.setVisible(true);
      this.compDegreeN.setVisible(true);
    }
    if (level >= 6)
    {
      this.negative.setVisible(true);
      this.comitative.setVisible(true);
    }
    if (level >= 7)
    {
      this.lative.setVisible(true);
      this.sParticleN.setVisible(true);
      
      this.nes.setVisible(true);
      this.sParticleV.setVisible(true);
    }
    if (level >= 8)
    {
      this.aiGer.setVisible(true);
      this.comparative.setVisible(true);
    }
    if (level >= 9) {
      this.desiderative.setVisible(true);
    }
    if (level >= 10)
    {
      this.adjective1.setVisible(true);
      this.pret1.setVisible(true);
    }
    if (level >= 11) {
      this.niGer.setVisible(true);
    }
    if (level >= 12)
    {
      this.vd1.setVisible(true);
      
      this.aPart.setVisible(true);
      this.pPart.setVisible(true);
      
      this.pret2.setVisible(true);
    }
    if ((level < 13) || 
    
      (level >= 14))
    {
      this.vd4.setVisible(true);
      this.imp1.setVisible(true);
    }
    if (level >= 15)
    {
      this.paGer1.setVisible(true);
      this.plural4.setVisible(false);
    }
    if (level >= 16)
    {
      this.nominal.setVisible(true);
      this.imp2.setVisible(true);
      this.fPart.setVisible(true);
      this.compDegreeV.setVisible(true);
    }
  }
  
  private void offCases()
  {
    this.nominative.setEnabled(false);
    this.genitive.setEnabled(false);
    this.dative.setEnabled(false);
    this.accusative.setEnabled(false);
    this.comparative.setEnabled(false);
    this.comitative.setEnabled(false);
    this.inessive.setEnabled(false);
    this.illativeLong.setEnabled(false);
    this.illativeShort.setEnabled(false);
    this.lative.setEnabled(false);
    this.orientative.setEnabled(false);
    this.adessive.setEnabled(false);
    this.extrag.setEnabled(false);
  }
  
  private void onCases()
  {
    this.nominative.setEnabled(true);
    this.genitive.setEnabled(true);
    this.dative.setEnabled(true);
    this.accusative.setEnabled(true);
    this.comparative.setEnabled(true);
    this.comitative.setEnabled(true);
    this.inessive.setEnabled(true);
    this.illativeLong.setEnabled(true);
    this.illativeShort.setEnabled(true);
    this.lative.setEnabled(true);
    this.orientative.setEnabled(true);
    this.adessive.setEnabled(true);
    this.extrag.setEnabled(true);
  }
  
  private void offPersonal()
  {
    this.noPerson.setEnabled(false);
    this.fps.setEnabled(false);
    this.sps.setEnabled(false);
    this.tps.setEnabled(false);
    this.fpp.setEnabled(false);
    this.spp.setEnabled(false);
    this.tpp.setEnabled(false);
  }
  
  private void onPersonal()
  {
    this.noPerson.setEnabled(true);
    this.fps.setEnabled(true);
    this.sps.setEnabled(true);
    this.tps.setEnabled(true);
    this.fpp.setEnabled(true);
    this.spp.setEnabled(true);
    this.tpp.setEnabled(true);
  }
  
  private void offVerbsinNouns()
  {
    this.verb1.setEnabled(false);
    this.verb2.setEnabled(false);
    this.verb3.setEnabled(false);
    this.verb4.setEnabled(false);
    this.verb5.setEnabled(false);
  }
  
  private void onVerbsinNouns()
  {
    this.verb1.setEnabled(true);
    this.verb2.setEnabled(true);
    this.verb3.setEnabled(true);
    this.verb4.setEnabled(true);
    this.verb5.setEnabled(true);
  }
  
  private void offNumber()
  {
    this.singular.setEnabled(false);
    this.plural1.setEnabled(false);
    this.plural2.setEnabled(false);
    this.plural3.setEnabled(false);
    this.plural4.setEnabled(false);
  }
  
  private void onNumber()
  {
    this.singular.setEnabled(true);
    this.plural1.setEnabled(true);
    this.plural2.setEnabled(true);
    this.plural3.setEnabled(true);
    this.plural4.setEnabled(true);
  }
  
  private void offDerr()
  {
    this.normal.setEnabled(false);
    this.adjective1.setEnabled(false);
    this.adjective2.setEnabled(false);
    this.adjective3.setEnabled(false);
    this.verb1.setEnabled(false);
    this.verb2.setEnabled(false);
    this.verb3.setEnabled(false);
    this.verb4.setEnabled(false);
    this.verb5.setEnabled(false);
    this.nomad1.setEnabled(false);
    this.nomad2.setEnabled(false);
  }
  
  private void onDerr()
  {
    this.normal.setEnabled(true);
    this.adjective1.setEnabled(true);
    this.adjective2.setEnabled(true);
    this.adjective3.setEnabled(true);
    this.verb1.setEnabled(true);
    this.verb2.setEnabled(true);
    this.verb3.setEnabled(true);
    this.verb4.setEnabled(true);
    this.verb5.setEnabled(true);
    this.nomad1.setEnabled(true);
    this.nomad2.setEnabled(true);
  }
  
  private void offStress()
  {
    this.normalStress.setEnabled(false);
    this.early.setEnabled(false);
    this.late.setEnabled(false);
  }
  
  private void onStress()
  {
    this.normalStress.setEnabled(true);
    this.early.setEnabled(true);
    this.late.setEnabled(true);
  }
  
  private void offParN()
  {
    this.compDegreeN.setEnabled(false);
    this.sParticleN.setEnabled(false);
    this.andParticleN.setEnabled(false);
  }
  
  private void onParN()
  {
    this.compDegreeN.setEnabled(true);
    this.sParticleN.setEnabled(true);
    this.andParticleN.setEnabled(true);
  }
  
  private void offLoc()
  {
    this.illativeLong.setEnabled(false);
    this.illativeShort.setEnabled(false);
    this.inessive.setEnabled(false);
    this.lative.setEnabled(false);
    this.orientative.setEnabled(false);
    this.adessive.setEnabled(false);
  }
  
  private void onLoc()
  {
    this.illativeLong.setEnabled(true);
    this.illativeShort.setEnabled(true);
    this.inessive.setEnabled(true);
    this.lative.setEnabled(true);
    this.orientative.setEnabled(true);
    this.adessive.setEnabled(true);
  }
  
  private void offLa()
  {
    this.genitive.setEnabled(false);
    this.dative.setEnabled(false);
    this.comparative.setEnabled(false);
  }
  
  private void onLa()
  {
    this.genitive.setEnabled(true);
    this.dative.setEnabled(true);
    this.comparative.setEnabled(true);
  }
  
  private void offParV()
  {
    this.compDegreeV.setEnabled(false);
    this.sParticleV.setEnabled(false);
    this.andParticleV.setEnabled(false);
  }
  
  private void onParV()
  {
    this.compDegreeV.setEnabled(true);
    this.sParticleV.setEnabled(true);
    this.andParticleV.setEnabled(true);
  }
  
  private void offFinite()
  {
    this.positive.setEnabled(false);
    this.negative.setEnabled(false);
    
    this.present.setEnabled(false);
    this.pret1.setEnabled(false);
    this.pret2.setEnabled(false);
    this.imp1.setEnabled(false);
    this.imp2.setEnabled(false);
    this.perf1.setEnabled(false);
    this.perf2.setEnabled(false);
    this.indicative.setEnabled(false);
    this.imperative.setEnabled(false);
    this.desiderative.setEnabled(false);
  }
  
  private void onPersVerb()
  {
    this.vfps.setEnabled(true);
    this.vsps.setEnabled(true);
    this.vtps.setEnabled(true);
    this.vfpp.setEnabled(true);
    this.vspp.setEnabled(true);
    this.vtpp.setEnabled(true);
    this.np.setEnabled(true);
  }
  
  private void offPersVerb()
  {
    this.vfps.setEnabled(false);
    this.vsps.setEnabled(false);
    this.vtps.setEnabled(false);
    this.vfpp.setEnabled(false);
    this.vspp.setEnabled(false);
    this.vtpp.setEnabled(false);
    this.np.setEnabled(false);
  }
  
  static String underClass6(String out, int sSt, int cPoss, int cDerr, boolean comN, int cNum,
		  					 int cStress, int classOver, boolean eG, boolean e3, int cCase) {
      out = derr(out, cStress, cDerr, classOver);
      if ((cDerr != 1) && (comN)) {
        out = compDegree(out, 0);
      } else if (comN) {
        out = compDegree(out, cStress);
      }
      int pSt = cStress;
      int cSt = cStress;
      int nSt = cStress;
      if ((comN) || (eG) || (cDerr != 1))
      {
        pSt = 0;
        cSt = 0;
        sSt = 0;
        nSt = 0;
      }
      else if ((cPoss != 0) || (e3))
      {
        cSt = 0;
        sSt = 0;
        nSt = 0;
      }
      else if (cNum != 1)
      {
        cSt = 0;
        sSt = 0;
      }
      else if (cCase != 1)
      {
        sSt = 0;
      }

      out = caseEnding(number(possessive(out, pSt, cPoss, e3), nSt, cNum, cPoss), cSt, cCase, cPoss);
      return out;
  }
  
  public void actionPerformed(ActionEvent e)
  {
    Object source = e.getSource();
    if (source == this.goNouns)
    {
      int sSt = this.cStress;
      
      this.classOver = 0;
      
      String out = toC(toLower(this.inNouns.getText()));
      this.inNouns.setText(out);
      if ((this.eG) && (pronoun(out))) {
        out = pronoun(out, 2, 0, this.cPoss);
      } else if (this.eG) {
        out = genitive(out, this.cStress);
      }
      if (pronoun(out))
      {
        out = pronoun(out, this.cCase, this.cPoss, this.cPoss);
      }
      else if ((this.cDerr > 4) && (this.cDerr < 10))
      {
        out = derr(out, this.cStress, this.cDerr, this.classOver);
        if (this.comN) {
          out = compDegree(out, this.cStress);
        }
      }
      else if (this.cCase <= 6)
      {
    	  out = underClass6(out, sSt, this.cPoss, this.cDerr, this.comN, this.cNum,
    			  this.cStress, this.classOver, this.eG, this.e3, this.cCase);
      }
      else
      {
        out = derr(out, this.cStress, this.cDerr, this.classOver);
        if ((this.cDerr != 1) && (this.comN)) {
          out = compDegree(out, 0);
        } else if (this.comN) {
          out = compDegree(out, this.cStress);
        }
        int cSt = this.cStress;
        int pSt = this.cStress;
        int nSt = this.cStress;
        if ((this.comN) || (this.cDerr != 1))
        {
          pSt = 0;
          cSt = 0;
          sSt = 0;
          nSt = 0;
        }
        else if (this.cNum != 1)
        {
          pSt = 0;
          cSt = 0;
          sSt = 0;
        }
        else if (this.cCase != 1)
        {
          pSt = 0;
          sSt = 0;
        }
        else if (this.cPoss != 0)
        {
          sSt = 0;
        }
        out = possessive(caseEnding(number(out, nSt, this.cNum, this.cPoss), cSt, this.cCase, this.cPoss), pSt, this.cPoss, this.e3);
      }
      if (this.redN) {
        out = redup(out, sSt);
      }
      if (this.andN) {
        out = also(out, sSt);
      }
      if (this.sN) {
        out = strong(out, sSt);
      }
      if (this.sEnclitN) {
        out = sEnclit(out, sSt);
      }
      out = replace(out, "$а", "я");
      out = replace(out, "$у", "ю");
      out = replace(out, "$э", "е");
      out = replace(out, "$е", "е");
      out = replace(out, "$и", "и");
      
      out = replace(out, "$", "ь");
      
      this.outNouns.setText(out);
      if (((this.cDerr > 1) || (this.redN) || (this.comN)) && (out.length() > 0) && (!this.andN) && (!this.sN) && ((!this.redN) || (this.cDerr < 5) || (this.cDerr > 9)) && (!this.sEnclitN) && (!this.e3) && (!this.eG) && (this.cNum == 1) && (this.cCase == 1) && (this.cPoss == 0)) {
        this.conjugate.setEnabled(true);
      } else {
        this.conjugate.setEnabled(false);
      }
    }
    else if (source == this.goVerbs)
    {
      String out = toC(toLower(this.inVerbs.getText()));
      this.inVerbs.setText(out);
      int conj = this.cConj;
      if (((out.length() == 3) && (out.charAt(out.length() - 2) == 'а') && (this.cConj == 1)) || (out.length() <= 2) || (out.charAt(out.length() - 1) != 'ш') || ((out.charAt(out.length() - 2) != 'я') && (out.charAt(out.length() - 2) != 'а')))
      {
        out = "";
      }
      else if (this.cVDerr != 0)
      {
        out = derive(out, this.cVDerr, this.cConj);
        conj = derive(out, this.cVDerr);
      }
      if (out.length() > 1) {
        if (this.cInf != 1) {
          out = inf(out, conj, this.cInf, this.cPers);
        } else if (ulash(out, conj)) {
          out = ulash(out, this.isPositive, this.cTime, this.cMood, this.cPers);
        } else {
          out = conjugate(out, conj, this.isPositive, this.cPers, this.cTime, this.cMood);
        }
      }
      this.cStress = 0;
      if (this.cInf == 10) {
        this.cStress = 2;
      }
      if (this.e3V)
      {
        out = tps(out, this.cStress);
        this.cStress = 0;
      }
      if (this.wImp1) {
        out = weakImp1(out);
      }
      if (this.wImp2) {
        out = weakImp2(out);
      }
      if (this.sImp) {
        out = comparative(out, 0, this.cPoss);
      }
      if (this.redV) {
        out = redup(out, this.cStress);
      }
      if (this.comV) {
        out = compDegree(out, this.cStress);
      }
      if (this.andV) {
        out = also(out, this.cStress);
      }
      if (this.sV) {
        out = strong(out, this.cStress);
      }
      if (this.sEnclitV) {
        out = sEnclit(out, this.cStress);
      }
      out = replace(out, "$а", "я");
      out = replace(out, "$э", "е");
      out = replace(out, "$е", "е");
      out = replace(out, "$и", "и");
      
      out = replace(out, "$", "ь");
      out = replace(out, "ье", "е");
      
      this.outVerbs.setText(out);
      if (((this.cInf >= 5) && (this.cInf <= 8)) || (((this.cInf == 14) || (this.cInf == 15) || (this.cInf == 2)) && (!this.comV) && (!this.andV) && (!this.sV) && (!this.e3V) && (!this.sEnclitV) && (this.cPers == 0))) {
        this.decline.setEnabled(true);
      } else {
        this.decline.setEnabled(false);
      }
    }
    else if (source == this.conjugate)
    {
      if (this.classOver == 0)
      {
        this.inNouns.setText(this.outNouns.getText());
        this.outNouns.setText("");
        this.conjugate.setEnabled(false);
      }
      else
      {
        this.inVerbs.setText(this.outNouns.getText());
        this.outVerbs.setText("");
        this.tab.setSelectedIndex(1);
        this.decline.setEnabled(false);
        if (this.classOver == 2) {
          this.second.setSelected(true);
        } else {
          this.first.setSelected(true);
        }
      }
    }
    else if (source == this.decline)
    {
      if (this.cInf == 2)
      {
        this.inVerbs.setText(this.outVerbs.getText());
        this.outVerbs.setText("");
        this.decline.setEnabled(false);
        if (this.cVDerr == 3) {
          this.second.setSelected(true);
        } else {
          this.first.setSelected(true);
        }
      }
      else
      {
        this.inNouns.setText(this.outVerbs.getText());
        this.outNouns.setText("");
        this.tab.setSelectedIndex(0);
        this.conjugate.setEnabled(false);
      }
    }
  }
  
  public void itemStateChanged(ItemEvent e)
  {
    Object source = e.getSource();
    if (e.getStateChange() == 1)
    {
      if (source == this.normal)
      {
        this.cDerr = 1;
      }
      else if (source == this.adjective1)
      {
        this.cDerr = 2;
      }
      else if (source == this.adjective2)
      {
        this.cDerr = 3;
      }
      else if (source == this.adjective3)
      {
        this.cDerr = 4;
      }
      else if (source == this.verb1)
      {
        this.cDerr = 5;
        offCases();
        offPersonal();
        offNumber();
      }
      else if (source == this.verb2)
      {
        this.cDerr = 6;
        offCases();
        offPersonal();
        offNumber();
      }
      else if (source == this.verb3)
      {
        this.cDerr = 7;
        offCases();
        offPersonal();
        offNumber();
      }
      else if (source == this.verb4)
      {
        this.cDerr = 8;
        offCases();
        offPersonal();
        offNumber();
      }
      else if (source == this.verb5)
      {
        this.cDerr = 9;
        offCases();
        offPersonal();
        offNumber();
      }
      else if (source == this.nomad1)
      {
        this.cDerr = 10;
      }
      else if (source == this.nomad2)
      {
        this.cDerr = 11;
      }
      else if (source == this.singular)
      {
        this.cNum = 1;
      }
      else if (source == this.plural1)
      {
        this.cNum = 2;
      }
      else if (source == this.plural2)
      {
        this.cNum = 3;
        offLa();
      }
      else if (source == this.plural3)
      {
        this.cNum = 4;
      }
      else if (source == this.plural4)
      {
        this.cNum = 5;
        offLoc();
      }
      else if (source == this.nominative)
      {
        this.cCase = 1;
      }
      else if (source == this.genitive)
      {
        this.cCase = 2;
      }
      else if (source == this.dative)
      {
        this.cCase = 3;
      }
      else if (source == this.accusative)
      {
        this.cCase = 4;
      }
      else if (source == this.comparative)
      {
        this.cCase = 5;
      }
      else if (source == this.comitative)
      {
        this.cCase = 6;
      }
      else if (source == this.inessive)
      {
        this.cCase = 7;
      }
      else if (source == this.illativeLong)
      {
        this.cCase = 8;
      }
      else if (source == this.illativeShort)
      {
        this.cCase = 9;
        offPersonal();
      }
      else if (source == this.lative)
      {
        this.cCase = 10;
      }
      else if (source == this.orientative)
      {
        this.cCase = 11;
      }
      else if (source == this.adessive)
      {
        this.cCase = 12;
      }
      else if (source == this.noPerson)
      {
        this.cPoss = 0;
      }
      else if (source == this.fps)
      {
        this.cPoss = 1;
      }
      else if (source == this.sps)
      {
        this.cPoss = 2;
      }
      else if (source == this.tps)
      {
        this.cPoss = 3;
      }
      else if (source == this.fpp)
      {
        this.cPoss = 4;
      }
      else if (source == this.spp)
      {
        this.cPoss = 5;
      }
      else if (source == this.tpp)
      {
        this.cPoss = 6;
      }
      else if (source == this.normalStress)
      {
        this.cStress = 0;
      }
      else if (source == this.early)
      {
        this.cStress = 1;
      }
      else if (source == this.late)
      {
        this.cStress = 2;
      }
      else if (source == this.compDegreeN)
      {
        this.comN = true;
      }
      else if (source == this.extra3N)
      {
        this.e3 = true;
      }
      else if (source == this.extrag)
      {
        this.eG = true;
      }
      else if (source == this.andParticleN)
      {
        this.andN = true;
        this.sParticleN.setEnabled(false);
      }
      else if (source == this.redupN)
      {
        this.redN = true;
      }
      else if (source == this.sEnN)
      {
        this.sEnclitN = true;
      }
      else if (source == this.sParticleN)
      {
        this.sN = true;
        this.andParticleN.setEnabled(false);
      }
      else if (source == this.extra3V)
      {
        this.e3V = true;
      }
      else if (source == this.compDegreeV)
      {
        this.comV = true;
      }
      else if (source == this.redupV)
      {
        this.redV = true;
      }
      else if (source == this.extra3V)
      {
        this.e3V = true;
      }
      else if (source == this.andParticleV)
      {
        this.andV = true;
        this.sParticleV.setEnabled(false);
        this.weak1.setEnabled(false);
        this.weak2.setEnabled(false);
        this.strong.setEnabled(false);
      }
      else if (source == this.sEnV)
      {
        this.sEnclitV = true;
      }
      else if (source == this.sParticleV)
      {
        this.sV = true;
        this.andParticleV.setEnabled(false);
        this.weak1.setEnabled(false);
        this.weak2.setEnabled(false);
        this.strong.setEnabled(false);
      }
      else if (source == this.weak2)
      {
        this.wImp2 = true;
        this.weak1.setEnabled(false);
        this.strong.setEnabled(false);
        this.sParticleV.setEnabled(false);
        this.andParticleV.setEnabled(false);
      }
      else if (source == this.weak1)
      {
        this.wImp1 = true;
        this.weak2.setEnabled(false);
        this.strong.setEnabled(false);
        this.sParticleV.setEnabled(false);
        this.andParticleV.setEnabled(false);
      }
      else if (source == this.strong)
      {
        this.sImp = true;
        this.weak1.setEnabled(false);
        this.weak2.setEnabled(false);
        this.sParticleV.setEnabled(false);
        this.andParticleV.setEnabled(false);
      }
      else if (source == this.first)
      {
        this.cConj = 1;
      }
      else if (source == this.second)
      {
        this.cConj = 2;
      }
      else if (source == this.positive)
      {
        this.isPositive = true;
      }
      else if (source == this.negative)
      {
        this.isPositive = false;
      }
      else if (source == this.np)
      {
        this.cPers = 0;
      }
      else if (source == this.vfps)
      {
        this.cPers = 1;
      }
      else if (source == this.vsps)
      {
        this.cPers = 2;
      }
      else if (source == this.vtps)
      {
        this.cPers = 3;
      }
      else if (source == this.vfpp)
      {
        this.cPers = 4;
      }
      else if (source == this.vspp)
      {
        this.cPers = 5;
      }
      else if (source == this.vtpp)
      {
        this.cPers = 6;
      }
      else if (source == this.present)
      {
        this.cTime = 1;
      }
      else if (source == this.pret1)
      {
        this.cTime = 2;
      }
      else if (source == this.pret2)
      {
        this.cTime = 3;
      }
      else if (source == this.imp1)
      {
        this.cTime = 4;
      }
      else if (source == this.imp2)
      {
        this.cTime = 5;
      }
      else if (source == this.perf1)
      {
        this.cTime = 6;
      }
      else if (source == this.perf2)
      {
        this.cTime = 7;
      }
      else if (source == this.indicative)
      {
        this.cMood = 1;
      }
      else if (source == this.imperative)
      {
        this.cMood = 2;
        if (this.cPers == 1)
        {
          this.cPers = 2;
          this.vsps.setSelected(true);
        }
      }
      else if (source == this.desiderative)
      {
        this.cMood = 3;
      }
      else if (source == this.finite)
      {
        this.cInf = 1;
        if ((this.cPers <= 1) && (this.cMood == 2)) {
          this.vsps.setSelected(true);
        } else if (this.cPers == 0) {
          this.vfps.setSelected(true);
        }
      }
      else if (source == this.infinitive)
      {
        this.cInf = 2;
      }
      else if (source == this.nes)
      {
        this.cInf = 3;
      }
      else if (source == this.nesfut)
      {
        this.cInf = 4;
      }
      else if (source == this.aPart)
      {
        this.cInf = 5;
      }
      else if (source == this.pPart)
      {
        this.cInf = 6;
      }
      else if (source == this.nPart)
      {
        this.cInf = 7;
      }
      else if (source == this.fPart)
      {
        this.cInf = 8;
      }
      else if (source == this.aiGer)
      {
        this.cInf = 9;
      }
      else if (source == this.niGer)
      {
        this.cInf = 10;
      }
      else if (source == this.paGer1)
      {
        this.cInf = 11;
      }
      else if (source == this.paGer2)
      {
        this.cInf = 12;
      }
      else if (source == this.saGer)
      {
        this.cInf = 13;
      }
      else if (source == this.nominal)
      {
        this.cInf = 14;
      }
      else if (source == this.notHap)
      {
        this.cInf = 15;
      }
      else if (source == this.inDat)
      {
        this.cInf = 16;
      }
      else if (source == this.saGer2)
      {
        this.cInf = 17;
      }
      else if (source == this.mpGer)
      {
        this.cInf = 18;
      }
      else if (source == this.nlGer)
      {
        this.cInf = 19;
      }
      else if (source == this.nVerbD)
      {
        this.cVDerr = 0;
      }
      else if (source == this.vd1)
      {
        this.cVDerr = 1;
      }
      else if (source == this.vd2)
      {
        this.cVDerr = 2;
      }
      else if (source == this.vd3)
      {
        this.cVDerr = 3;
      }
      else if (source == this.vd4)
      {
        this.cVDerr = 4;
      }
    }
    else if (this.cCase == 9)
    {
      onPersonal();
    }
    else if (source == this.compDegreeN)
    {
      this.comN = false;
    }
    else if (source == this.andParticleN)
    {
      this.andN = false;
      this.sParticleN.setEnabled(true);
    }
    else if (source == this.redupN)
    {
      this.redN = false;
    }
    else if (source == this.sEnN)
    {
      this.sEnclitN = false;
    }
    else if (source == this.sParticleN)
    {
      this.sN = false;
      this.andParticleN.setEnabled(true);
    }
    else if (source == this.imperative)
    {
      if (this.wImp1)
      {
        this.sParticleV.setEnabled(true);
        this.andParticleV.setEnabled(true);
      }
      if (this.wImp2)
      {
        this.sParticleV.setEnabled(true);
        this.andParticleV.setEnabled(true);
      }
    }
    else if (source == this.compDegreeV)
    {
      this.comV = false;
    }
    else if (source == this.redupV)
    {
      this.redV = false;
    }
    else if (source == this.extra3V)
    {
      this.e3V = false;
    }
    else if (source == this.extra3N)
    {
      this.e3 = false;
    }
    else if (source == this.extrag)
    {
      this.eG = false;
    }
    else if (source == this.andParticleV)
    {
      this.andV = false;
      this.sParticleV.setEnabled(true);
    }
    else if (source == this.extra3V)
    {
      this.e3V = false;
    }
    else if (source == this.sParticleV)
    {
      this.sV = false;
      this.andParticleV.setEnabled(true);
    }
    else if (source == this.sEnV)
    {
      this.sEnclitV = false;
    }
    else if (source == this.weak1)
    {
      this.wImp1 = false;
      this.weak2.setEnabled(true);
      this.strong.setEnabled(true);
      this.sParticleV.setEnabled(true);
      this.andParticleV.setEnabled(true);
    }
    else if (source == this.weak2)
    {
      this.wImp2 = false;
      this.weak1.setEnabled(true);
      this.strong.setEnabled(true);
      this.sParticleV.setEnabled(true);
      this.andParticleV.setEnabled(true);
    }
    else if (source == this.strong)
    {
      this.sImp = false;
      this.weak1.setEnabled(true);
      this.weak2.setEnabled(true);
      this.sParticleV.setEnabled(true);
      this.andParticleV.setEnabled(true);
    }
    else if ((source == this.verb1) || (source == this.verb2) || (source == this.verb3) || (source == this.verb4) || (source == this.verb5))
    {
      onCases();
      onPersonal();
      onNumber();
    }
    else if (source == this.plural2)
    {
      onLa();
    }
    else if (source == this.plural4)
    {
      onLoc();
    }
    else if (source == this.finite)
    {
      this.np.setSelected(true);
    }
    if ((this.cCase != 1) || (this.cPoss != 0) || (this.cNum != 1)) {
      offVerbsinNouns();
    } else if (this.inited) {
      onVerbsinNouns();
    }
    if (((this.cDerr > 4) && (this.cDerr < 10)) || (this.cPoss != 0) || (this.cNum == 5)) {
      this.illativeShort.setEnabled(false);
    } else if (this.inited) {
      this.illativeShort.setEnabled(true);
    }
    if ((this.cCase == 2) || (this.cCase == 3) || (this.cCase == 5) || ((this.cDerr > 4) && (this.cDerr < 10))) {
      this.plural2.setEnabled(false);
    } else if (this.inited) {
      this.plural2.setEnabled(true);
    }
    if ((this.cCase >= 7) || (this.comN) || (this.cDerr != 1)) {
      this.plural4.setEnabled(false);
    } else if (this.inited) {
      this.plural4.setEnabled(true);
    }
    if ((this.cCase == 9) || ((this.cDerr > 4) && (this.cDerr < 10))) {
      offPersonal();
    } else if (this.inited) {
      onPersonal();
    }
    if ((this.cTime == 1) && (this.inited)) {
      this.imperative.setEnabled(true);
    } else if (this.inited) {
      this.imperative.setEnabled(false);
    }
    if ((this.cTime != 1) && (this.cTime != 4) && (this.cTime != 5)) {
      this.desiderative.setEnabled(false);
    } else if (this.inited) {
      this.desiderative.setEnabled(true);
    }
    if ((this.cMood == 1) && (this.inited))
    {
      this.present.setEnabled(true);
      this.pret1.setEnabled(true);
      this.pret2.setEnabled(true);
      this.imp1.setEnabled(true);
      this.imp2.setEnabled(true);
      this.perf1.setEnabled(true);
      this.perf2.setEnabled(true);
      this.weak1.setEnabled(false);
      this.weak2.setEnabled(false);
      this.strong.setEnabled(false);
    }
    else if ((this.cMood == 2) && (this.inited))
    {
      this.pret1.setEnabled(false);
      this.pret2.setEnabled(false);
      this.imp1.setEnabled(false);
      this.imp2.setEnabled(false);
      this.perf1.setEnabled(false);
      this.perf2.setEnabled(false);
      if ((!this.sV) && (!this.andV) && (!this.wImp2) && (!this.sImp)) {
        this.weak1.setEnabled(true);
      }
      if ((!this.sV) && (!this.andV) && (!this.wImp1) && (!this.sImp)) {
        this.weak2.setEnabled(true);
      }
      if ((!this.sV) && (!this.andV) && (!this.wImp1) && (!this.wImp2)) {
        this.strong.setEnabled(true);
      }
    }
    else if (this.inited)
    {
      this.pret1.setEnabled(false);
      this.pret2.setEnabled(false);
      this.imp1.setEnabled(true);
      this.imp2.setEnabled(true);
      this.perf1.setEnabled(false);
      this.perf2.setEnabled(false);
      this.weak1.setEnabled(false);
      this.weak2.setEnabled(false);
      this.strong.setEnabled(false);
    }
    if ((this.cInf == 3) || (this.cInf == 4) || (this.cInf == 9) || (this.cInf == 10) || (this.cInf == 18) || (this.cInf == 19)) {
      offPersVerb();
    } else if (this.inited) {
      onPersVerb();
    }
    if (this.cInf != 1)
    {
      offFinite();
    }
    else if (this.inited)
    {
      this.np.setEnabled(false);
      this.positive.setEnabled(true);
      this.negative.setEnabled(true);
      this.indicative.setEnabled(true);
    }
    if ((this.cMood == 2) && (this.cInf == 1)) {
      this.vfps.setEnabled(false);
    }
  }
}
