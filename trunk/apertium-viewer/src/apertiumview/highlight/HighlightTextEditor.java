/*
 * Copyright 2015 Jacob Nordfalk
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 */
package apertiumview.highlight;

import java.awt.Dimension;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextPane;
import javax.swing.text.StyledEditorKit;

import javax.swing.text.Element;
import javax.swing.text.*;

/**
 * This code is public domain
 * @author Jacob Nordfalk
 */
public class HighlightTextEditor extends JTextPane {

      /*
    public Dimension getPreferredSize() {
      //System.err.println("getPreferredSize()" + this.toString()+getText());
      return super.getPreferredSize();
        if (isPreferredSizeSet()) {
            return super.getPreferredSize();
        }
        Dimension size = null;
        try {
            // For some reason this sometimes fails.
            if (ui != null) size = ui.getPreferredSize(this);
            return (size != null) ? size : super.getPreferredSize();
        } catch (Exception e2) {
            //e2.printStackTrace();
            System.err.println("Ignoring in getPreferredSize(): " + e2);
            return new Dimension(800, 200);
        }
    }
*/
    
    
    public boolean getScrollableTracksViewportWidth() { return true; }
    /*
    public HighlightTextEditor() {
        
        // Set editor kit
        this.setEditorKitForContentType(CONTENTTYPE, ;
        this.setContentType(CONTENTTYPE);        
    }*/
    protected EditorKit createDefaultEditorKit() {
        return new HighlightEditorKitViewFactory();
    }

    
    public static final String CONTENTTYPE = "text/apertium-stream-format";
    
    public class HighlightEditorKitViewFactory extends StyledEditorKit  implements ViewFactory {

    @Override
    public ViewFactory getViewFactory() {
        return this;
    }

    @Override
    public String getContentType() {
        return CONTENTTYPE;
    }
    
    /**
     * @see javax.swing.text.ViewFactory#create(javax.swing.text.Element)
     */
    public View create(Element element) {
        //String kind = element.getName();
        //System.out.println("kind = " + kind);
        view = new HighlightView(element);
        return view;
    }
    }
    HighlightView view;


    public static void main(String[] args) {
        JTextComponent e = new HighlightTextEditor();
        e.setText("^Ofte/Ofte<adv>$ ^la/la<det><def><sp>$ ^datumo/datumo<n><sg><nom>$ ^estas/esti<vbser><pres>$ ^lamentinde/lamentinde<adv>$ ^nekompleta/nekompleta<adj><sg><nom>$ ^kaj/kaj<cnjcoo>$ ^ili/prpers<prn><subj><p3><mf><pl>$ ^estas/esti<vbser><pres>$ ^ne/ne<adv>$ ^subtenita/subteni<vblex><pp><sg><nom>$ ^en/en<pr>$ ^ajna/ajna<det><ind><sp>$ ^maniero/maniero<n><sg><nom>$");
        JScrollPane sp = new JScrollPane(e);
        sp.setHorizontalScrollBarPolicy(sp.HORIZONTAL_SCROLLBAR_NEVER);
        sp.setVerticalScrollBarPolicy(sp.VERTICAL_SCROLLBAR_AS_NEEDED);
        JFrame jf = new JFrame();
        jf.add(sp);
        jf.pack();
        
        jf.show();
    }
}

