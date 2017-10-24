/*
 * Copyright 2015 Jacob Nordfalk
 * 
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 */
package apertiumview.sourceeditor;

import apertiumview.AbstactDocumentListener;
import apertiumview.ApertiumView;
import static apertiumview.ApertiumView.prefs;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.event.ItemEvent;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import static java.lang.Integer.parseInt;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JViewport;
import javax.swing.SwingUtilities;
import javax.swing.event.DocumentEvent;
import javax.swing.text.BadLocationException;
import javax.swing.text.Document;
import javax.swing.text.EditorKit;
import javax.swing.text.Element;
import jsyntaxpane.DefaultSyntaxKit;
import jsyntaxpane.SyntaxDocument;
import jsyntaxpane.actions.CaretMonitor;
import org.apertium.pipeline.Program;
import static org.apertium.pipeline.Program.ProgEnum.*;
import org.apertium.utils.IOUtils;

public class SourceEditor extends javax.swing.JFrame {
	private String loadedPath;
	private HashMap<String,String> loadedFileProperties;
	private Program.ProgEnum loadedFileProgram;
	private ApertiumView owner;
	private int hashCodeForDocumentOnDisk;

	public SourceEditor(ApertiumView owner, String path, String properties) throws IOException {
		this.owner = owner;
		initComponents();
		jCmbLangs.setModel(new DefaultComboBoxModel(DefaultSyntaxKit.getContentTypes()));
		jCmbLangs.setSelectedItem("text/xml");
		new CaretMonitor(jEditorPane, lblCaretPos);

		String[] d = prefs.get(getBoundsKey(path),"").split(",");
		if (d.length==5) setBounds(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]));
		else setLocationByPlatform(true);
		setVisible(true);
		loadedFileProperties = parseProperties(properties);
		System.out.println(loadedFileProgram+ " "+properties);
		loadFile(path);

		if (!positionUpdate(loadedFileProperties) && d.length==5) try {
			jEditorPane.setCaretPosition(parseInt(d[4]));
		} catch (Exception e) {} // ignore problems
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				centerLineInScrollPane();
			}
		});
	}

	private String getBoundsKey(String path) {
		if (path.length()>20) path=path.substring(path.length()-20);
		return "bounds-"+path;
	}


  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    jToolBar1 = new javax.swing.JToolBar();
    jButtonValidate = new javax.swing.JButton();
    jButtonSave = new javax.swing.JButton();
    jPanel1 = new javax.swing.JPanel();
    lblCaretPos = new javax.swing.JLabel();
    jScrollPane1 = new javax.swing.JScrollPane();
    jEditorPane = new javax.swing.JEditorPane();
    jCmbLangs = new javax.swing.JComboBox();

    setDefaultCloseOperation(javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE);
    java.util.ResourceBundle bundle = java.util.ResourceBundle.getBundle("apertiumview/sourceeditor/Bundle"); // NOI18N
    setTitle(bundle.getString("SourceEditor.title")); // NOI18N
    addWindowListener(new java.awt.event.WindowAdapter() {
      public void windowClosing(java.awt.event.WindowEvent evt) {
        formWindowClosing(evt);
      }
    });

    jToolBar1.setRollover(true);
    jToolBar1.setFocusable(false);

    jButtonValidate.setText(bundle.getString("SourceEditor.jButtonValidate.text")); // NOI18N
    jButtonValidate.setFocusable(false);
    jButtonValidate.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);
    jButtonValidate.setVerticalTextPosition(javax.swing.SwingConstants.BOTTOM);
    jButtonValidate.addActionListener(new java.awt.event.ActionListener() {
      public void actionPerformed(java.awt.event.ActionEvent evt) {
        jButtonValidateActionPerformed(evt);
      }
    });
    jToolBar1.add(jButtonValidate);

    jButtonSave.setText(bundle.getString("SourceEditor.jButtonSave.text")); // NOI18N
    jButtonSave.setFocusable(false);
    jButtonSave.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);
    jButtonSave.setVerticalTextPosition(javax.swing.SwingConstants.BOTTOM);
    jButtonSave.addActionListener(new java.awt.event.ActionListener() {
      public void actionPerformed(java.awt.event.ActionEvent evt) {
        jButtonSaveActionPerformed(evt);
      }
    });
    jToolBar1.add(jButtonSave);

    getContentPane().add(jToolBar1, java.awt.BorderLayout.NORTH);

    lblCaretPos.setHorizontalAlignment(javax.swing.SwingConstants.TRAILING);
    lblCaretPos.setText(bundle.getString("SourceEditor.lblCaretPos.text")); // NOI18N
    lblCaretPos.setToolTipText(bundle.getString("SourceEditor.lblCaretPos.toolTipText")); // NOI18N

    jEditorPane.setContentType("text/java"); // NOI18N
    jScrollPane1.setViewportView(jEditorPane);

    jCmbLangs.setMaximumRowCount(20);
    jCmbLangs.setFocusable(false);
    jCmbLangs.addItemListener(new java.awt.event.ItemListener() {
      public void itemStateChanged(java.awt.event.ItemEvent evt) {
        jCmbLangsItemStateChanged(evt);
      }
    });

    javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
    jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(
      jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addGap(0, 629, Short.MAX_VALUE)
      .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
        .addGroup(jPanel1Layout.createSequentialGroup()
          .addGap(0, 0, 0)
          .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 629, Short.MAX_VALUE)
            .addGroup(jPanel1Layout.createSequentialGroup()
              .addComponent(jCmbLangs, javax.swing.GroupLayout.PREFERRED_SIZE, 135, javax.swing.GroupLayout.PREFERRED_SIZE)
              .addGap(0, 0, 0)
              .addComponent(lblCaretPos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
          .addGap(0, 0, 0)))
    );
    jPanel1Layout.setVerticalGroup(
      jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
      .addGap(0, 324, Short.MAX_VALUE)
      .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
        .addGroup(jPanel1Layout.createSequentialGroup()
          .addGap(0, 0, 0)
          .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 300, Short.MAX_VALUE)
          .addGap(0, 0, 0)
          .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
            .addComponent(lblCaretPos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jCmbLangs, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
          .addGap(0, 0, 0)))
    );

    getContentPane().add(jPanel1, java.awt.BorderLayout.CENTER);

    pack();
  }// </editor-fold>//GEN-END:initComponents

    private void jCmbLangsItemStateChanged(java.awt.event.ItemEvent evt) {//GEN-FIRST:event_jCmbLangsItemStateChanged
		if (evt.getStateChange() == ItemEvent.SELECTED) {
			String lang = jCmbLangs.getSelectedItem().toString();

			// save the state of the current JEditorPane, as it's Document is about
			// to be replaced.
			String oldText = jEditorPane.getText();

			// install a new DefaultSyntaxKit on the JEditorPane for the requested language.
			jEditorPane.setContentType(lang);
			// Recreate the Toolbar
			jToolBar1.removeAll();
			EditorKit kit = jEditorPane.getEditorKit();
			if (kit instanceof DefaultSyntaxKit) {
				DefaultSyntaxKit defaultSyntaxKit = (DefaultSyntaxKit) kit;
				defaultSyntaxKit.addToolBarActions(jEditorPane, jToolBar1);
			}
	    jToolBar1.add(jButtonValidate);
	    jToolBar1.add(jButtonSave);
			jToolBar1.validate();
			try {
				// setText should not be called (read the JavaDocs).  Better use the read
				// method and create a new document.
				Document doc = kit.createDefaultDocument();
				doc.insertString(0, oldText, null);				
				jEditorPane.setDocument(doc);
				//jEdtTest.read(new StringReader(oldText), lang);
			} catch (Exception ex) {
				Logger.getLogger(SourceEditor.class.getName()).log(Level.SEVERE, null, ex);
			}
		}
		jEditorPane.requestFocusInWindow();
    }//GEN-LAST:event_jCmbLangsItemStateChanged

  private void jButtonSaveActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonSaveActionPerformed
		if (!validateFile() &&
			JOptionPane.showConfirmDialog(this, "The file doesent validate. Are you sure you want to save it?", "Save file?", JOptionPane.YES_NO_OPTION) != JOptionPane.YES_OPTION)
			return;
		
		try {
			String text = jEditorPane.getText();
			Path filePath = Paths.get(loadedPath);
			Files.write(filePath, text.getBytes("UTF-8"));
			jButtonSave.setEnabled(false);

			Document doc = jEditorPane.getDocument();
			hashCodeForDocumentOnDisk = doc.getText(0, doc.getLength()).hashCode();

			LinkedHashSet<Path> compileDirs = new LinkedHashSet<>();
			compileDirs.add(filePath.getParent()); // Directory of the source file
			compileDirs.add(Paths.get(loadedFileProperties.get("dir"))); // Directory of the binary file

			for (Path dir : compileDirs) {
				Process p = new ProcessBuilder("make", "-j", "3").directory(dir.toFile()).redirectErrorStream(true).start();
				BufferedReader std = new BufferedReader(new InputStreamReader(p.getInputStream(),"UTF-8"));
				final StringBuilder outputsb = new StringBuilder();
				String lin;
				while ( (lin=std.readLine())!=null) {
					System.out.println(lin);
					outputsb.append(lin).append('\n');
				}
				if (p.waitFor()!=0) {
					JOptionPane.showMessageDialog(this, outputsb.toString(), "Compiler error", JOptionPane.WARNING_MESSAGE);
					return;
				}
			}
			lblCaretPos.setText("The pair was compiled sucessfully");
			owner.compiledSourceEditor(loadedPath);

		} catch (Exception ex) {
			owner.warnUser("Error saving "+loadedPath+"\n"+ex);
			Logger.getLogger(SourceEditor.class.getName()).log(Level.SEVERE, null, ex);
		}
  }//GEN-LAST:event_jButtonSaveActionPerformed


	private boolean validateFile() {
		try {
			String cmd = null;
			switch (loadedFileProgram) {
				case LT_PROC: cmd = "apertium-validate-dictionary"; break;
				case TRANSFER:
					if (loadedPath.contains("dix")) cmd = "apertium-validate-dictionary"; // guess
					else cmd = "apertium-validate-transfer";
					break;
				case INTERCHUNK: cmd = "apertium-validate-interchunk"; break;
				case POSTCHUNK: cmd = "apertium-validate-postchunk"; break;
			}
			if (cmd==null) {
				lblCaretPos.setText("Don't know how to validate this file");
				return true;
			}
			String[] fn = new File(loadedPath).getName().split("\\.", 2);
			File tmpFileContent = File.createTempFile(fn[0], fn[1]);
			tmpFileContent.deleteOnExit();
			String text = jEditorPane.getText();
			Files.write(Paths.get(tmpFileContent.getPath()), text.getBytes("UTF-8"));

			Process p = new ProcessBuilder(cmd, tmpFileContent.getPath()).redirectErrorStream(true).start();
			String lin = new BufferedReader(new InputStreamReader(p.getInputStream(), "UTF-8")).readLine();
			p.destroy();
			if (lin == null) {
				lblCaretPos.setText("File looks OK, you can save it");
				return true;
			}
			System.out.println(lin);
			String[] err = lin.split(":", 3);
			if (err.length < 3) {
				lblCaretPos.setText("File looks OK, you can save it");
				return true;
			}
			// tmpfile.dix:1: parser error : Start tag expected, '<' not found
			int lineNo = Integer.parseInt(err[1]);
			String msg = err[2];

			// workaround for xmllint bug - see https://bugzilla.gnome.org/show_bug.cgi?id=325533
			if (lineNo != 65535) gotoLineNo(lineNo);

			lblCaretPos.setText(msg);
		} catch (Exception e) {
			e.printStackTrace();
			lblCaretPos.setText(e.toString());
		}
		return false;
	}

	public void gotoLineNo(int lineNo) {
		Element root = jEditorPane.getDocument().getDefaultRootElement();
		lineNo = Math.min(lineNo, root.getElementCount());
		int startOfLineOffset = root.getElement( lineNo - 1 ).getStartOffset();
		jEditorPane.setCaretPosition( startOfLineOffset );
		centerLineInScrollPane();
	}


	public boolean positionUpdate(HashMap<String, String> loadedFileProperties) {
		String findTag = loadedFileProperties.get("findTag");
		if (findTag!=null) try {
			int findTagNo = Integer.parseInt(loadedFileProperties.get("findTagNo"));
			Document doc = jEditorPane.getDocument();
			int lineNo = PositionalXMLReader.findLinenumberOfTag(new StringReader(doc.getText(0, doc.getLength())), findTag, findTagNo);
			gotoLineNo(lineNo);
			return true;
		} catch (Exception e) { e.printStackTrace(); }
		return false;
	}

  private void jButtonValidateActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonValidateActionPerformed
    validateFile();
  }//GEN-LAST:event_jButtonValidateActionPerformed

	public boolean okToClose() {
		if (!jButtonSave.isEnabled()) return true;
		int ret = JOptionPane.showConfirmDialog(getContentPane(), "You have unsaved changes in\n"+loadedPath+"\nClose anyway?", "Discard changes?", JOptionPane.OK_CANCEL_OPTION);
		return (ret == JOptionPane.OK_OPTION);
	}


	public void close() {
		setState(JFrame.NORMAL);
		Rectangle r = getBounds();
		prefs.put(getBoundsKey(loadedPath), r.x+","+r.y+","+r.width+","+r.height+","+jEditorPane.getCaretPosition());
		owner.closeSourceEditor(loadedPath);
		setVisible(false);
		dispose();
	}

  private void formWindowClosing(java.awt.event.WindowEvent evt) {//GEN-FIRST:event_formWindowClosing
    // TODO add your handling code here:
		if (!okToClose()) return;
		close();
  }//GEN-LAST:event_formWindowClosing


  // Variables declaration - do not modify//GEN-BEGIN:variables
  private javax.swing.JButton jButtonSave;
  private javax.swing.JButton jButtonValidate;
  private javax.swing.JComboBox jCmbLangs;
  private javax.swing.JEditorPane jEditorPane;
  private javax.swing.JPanel jPanel1;
  private javax.swing.JScrollPane jScrollPane1;
  private javax.swing.JToolBar jToolBar1;
  private javax.swing.JLabel lblCaretPos;
  // End of variables declaration//GEN-END:variables

	private EnumSet<Program.ProgEnum> xmlFiles = EnumSet.of(LT_PROC, TAGGER, PRETRANSFER, TRANSFER, INTERCHUNK, POSTCHUNK);
	public void loadFile(String path) throws IOException {
		setTitle(new File(path).getName());
		loadedPath = path;
		loadedFileProgram = Program.ProgEnum.valueOf(loadedFileProperties.get("program"));
		if (xmlFiles.contains(loadedFileProgram)) {
			jEditorPane.setContentType("text/xml");
		} else {
			jEditorPane.setContentType("text/plain");
		}
		jCmbLangs.setSelectedItem(jEditorPane.getContentType());
		final Document doc = jEditorPane.getEditorKit().createDefaultDocument();
		String loadedFileContentsAsString = IOUtils.readFile(path);// new String(Files.readAllBytes(Paths.get(path)), "UTF-8");
		try {
			doc.insertString(0,loadedFileContentsAsString,null);
			hashCodeForDocumentOnDisk = loadedFileContentsAsString.hashCode();
			if (hashCodeForDocumentOnDisk != doc.getText(0, doc.getLength()).hashCode()) throw new InternalError("misassumption");
		} catch (BadLocationException ex) {
			throw new IOException(ex);
		}
		if (doc instanceof SyntaxDocument) {
			SyntaxDocument sdoc = (SyntaxDocument) doc;
			sdoc.clearUndos();
		} else { System.out.println("doc isnt instanceof SyntaxDocument, cant clear undo history"); }

		jButtonValidate.setEnabled(false);
		jButtonSave.setEnabled(false);
		doc.addDocumentListener(new AbstactDocumentListener() {
			@Override
			public void changed(DocumentEvent e) {
				boolean saveEnabled = true;
				try {
					saveEnabled = hashCodeForDocumentOnDisk!=doc.getText(0, doc.getLength()).hashCode();
				} catch (BadLocationException ex) {
					Logger.getLogger(SourceEditor.class.getName()).log(Level.SEVERE, null, ex);
				}
				jButtonValidate.setEnabled(saveEnabled);
				jButtonSave.setEnabled(saveEnabled);
			}
		});
		jEditorPane.setDocument(doc);
	}

	public static HashMap<String, String> parseProperties(String properties) {
		HashMap<String, String> loadedFileProperties = new HashMap<>();
		for (String pair : properties.split("&")) {
			String[] vv = pair.split("=");
			loadedFileProperties.put(vv[0], vv[1]);
		}
		return loadedFileProperties;
	}

	private static SourceEditor jFrame;
	/**
	 * @param args the command line arguments
	 */
	public static void main(String args[]) throws Exception {

		java.awt.EventQueue.invokeAndWait(new Runnable() {
			@Override
			public void run() {
				try {
					DefaultSyntaxKit.initKit();
					jFrame = new SourceEditor(null, "/home/j/esperanto/apertium/trunk/apertium-eo-en/apertium-eo-en.eo-en.dix", "x=y");
					jFrame.setVisible(true);
//					jFrame.read();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	private void centerLineInScrollPane() {
		try {
			Rectangle r = jEditorPane.modelToView(jEditorPane.getCaretPosition());
			JViewport viewport = jScrollPane1.getViewport();
			int extentHeight = viewport.getExtentSize().height;
			int viewHeight = viewport.getViewSize().height;

			int y = Math.max(0, r.y - (extentHeight / 2));
			y = Math.min(y, viewHeight - extentHeight);

			viewport.setViewPosition(new Point(0, y));
		} catch (BadLocationException ex) {ex.printStackTrace();}
	}
}
