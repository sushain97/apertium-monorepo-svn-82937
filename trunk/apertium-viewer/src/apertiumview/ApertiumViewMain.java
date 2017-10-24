/*
 * Copyright 2015 Jacob Nordfalk
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 */
package apertiumview;

import java.awt.Dimension;
import java.awt.Point;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.SwingUtilities;

/**
 * The main class of the application.
 */
public class ApertiumViewMain {
	private ApertiumView mainFrame;

    
    /**
     * At startup create and show the main frame of the application.
     */
    void startup() {
				mainFrame=new ApertiumView(this);
        mainFrame.setVisible(true);

        java.awt.Window root= mainFrame;
        //System.out.println("geom = " + geom);
        try {
            root.pack();
		        String geom = mainFrame.prefs.get("geometry",null);
						if (geom!= null) {
							String[] g = geom.split(",");
							root.setLocation( Integer.parseInt(g[0]), Integer.parseInt(g[1]));
							root.setSize(Integer.parseInt(g[2]), Integer.parseInt(g[3]));
							root.validate();
						} else {
							root.setSize(900, 600);
						}
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (mainFrame.prefs.get("dividerLocation", null)==null) {
            //mainFrame.fitToText();
        }
        // Seems like closing window doesent exit the app - so force exit
        root.addWindowListener(new WindowAdapter() {
        @Override
          public void windowClosing(WindowEvent e) {mainFrame.shutdown();}
        });
        
    }

     protected void shutdown() {
         java.awt.Window root= mainFrame;
        Point location = root.getLocation();

        Dimension size = root.getSize();
        mainFrame.prefs.put("geometry", ""+location.x+","+location.y+","+size.width+","+size.height);
        System.err.println("shutdown size = " + size);
				System.exit(0);

     }
    
    /**
     * Main method launching the application.
		 * @param args arguments (ignored)
     */
    public static void main(String[] args) {
			SwingUtilities.invokeLater(new Runnable() {
				@Override
				public void run() {
					new ApertiumViewMain().startup();
				}
			});
    }
}
