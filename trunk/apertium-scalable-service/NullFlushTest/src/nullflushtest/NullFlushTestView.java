/*
 * NullFlushTestView.java
 */

package nullflushtest;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.jdesktop.application.Action;
import org.jdesktop.application.ResourceMap;
import org.jdesktop.application.SingleFrameApplication;
import org.jdesktop.application.FrameView;
import org.jdesktop.application.TaskMonitor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.Timer;
import javax.swing.Icon;
import javax.swing.JDialog;
import javax.swing.JFrame;

/**
 * The application's main frame.
 */
public class NullFlushTestView extends FrameView {

    public NullFlushTestView(SingleFrameApplication app) {
        super(app);
        System.out.println("Hola");
        initComponents();

        // status bar initialization - message timeout, idle icon and busy animation, etc
        ResourceMap resourceMap = getResourceMap();
        int messageTimeout = resourceMap.getInteger("StatusBar.messageTimeout");
        messageTimer = new Timer(messageTimeout, new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                statusMessageLabel.setText("");
            }
        });
        messageTimer.setRepeats(false);
        int busyAnimationRate = resourceMap.getInteger("StatusBar.busyAnimationRate");
        for (int i = 0; i < busyIcons.length; i++) {
            busyIcons[i] = resourceMap.getIcon("StatusBar.busyIcons[" + i + "]");
        }
        busyIconTimer = new Timer(busyAnimationRate, new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                busyIconIndex = (busyIconIndex + 1) % busyIcons.length;
                statusAnimationLabel.setIcon(busyIcons[busyIconIndex]);
            }
        });
        idleIcon = resourceMap.getIcon("StatusBar.idleIcon");
        statusAnimationLabel.setIcon(idleIcon);
        progressBar.setVisible(false);

        // connecting action tasks to status bar via TaskMonitor
        TaskMonitor taskMonitor = new TaskMonitor(getApplication().getContext());
        taskMonitor.addPropertyChangeListener(new java.beans.PropertyChangeListener() {
            public void propertyChange(java.beans.PropertyChangeEvent evt) {
                String propertyName = evt.getPropertyName();
                if ("started".equals(propertyName)) {
                    if (!busyIconTimer.isRunning()) {
                        statusAnimationLabel.setIcon(busyIcons[0]);
                        busyIconIndex = 0;
                        busyIconTimer.start();
                    }
                    progressBar.setVisible(true);
                    progressBar.setIndeterminate(true);
                } else if ("done".equals(propertyName)) {
                    busyIconTimer.stop();
                    statusAnimationLabel.setIcon(idleIcon);
                    progressBar.setVisible(false);
                    progressBar.setValue(0);
                } else if ("message".equals(propertyName)) {
                    String text = (String)(evt.getNewValue());
                    statusMessageLabel.setText((text == null) ? "" : text);
                    messageTimer.restart();
                } else if ("progress".equals(propertyName)) {
                    int value = (Integer)(evt.getNewValue());
                    progressBar.setVisible(true);
                    progressBar.setIndeterminate(false);
                    progressBar.setValue(value);
                }
            }
        });


        jButtonStopCommand.setEnabled(false);
        jButtonSendText.setEnabled(false);
    }

    @Action
    public void showAboutBox() {
        if (aboutBox == null) {
            JFrame mainFrame = NullFlushTestApp.getApplication().getMainFrame();
            aboutBox = new NullFlushTestAboutBox(mainFrame);
            aboutBox.setLocationRelativeTo(mainFrame);
        }
        NullFlushTestApp.getApplication().show(aboutBox);
    }

    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        mainPanel = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextAreaInput = new javax.swing.JTextArea();
        jButtonSendText = new javax.swing.JButton();
        jSeparator1 = new javax.swing.JSeparator();
        jLabel2 = new javax.swing.JLabel();
        jScrollPane2 = new javax.swing.JScrollPane();
        jTextFieldCommand = new javax.swing.JTextArea();
        jButtonStartCommand = new javax.swing.JButton();
        jButtonStopCommand = new javax.swing.JButton();
        menuBar = new javax.swing.JMenuBar();
        javax.swing.JMenu fileMenu = new javax.swing.JMenu();
        javax.swing.JMenuItem exitMenuItem = new javax.swing.JMenuItem();
        javax.swing.JMenu helpMenu = new javax.swing.JMenu();
        javax.swing.JMenuItem aboutMenuItem = new javax.swing.JMenuItem();
        statusPanel = new javax.swing.JPanel();
        javax.swing.JSeparator statusPanelSeparator = new javax.swing.JSeparator();
        statusMessageLabel = new javax.swing.JLabel();
        statusAnimationLabel = new javax.swing.JLabel();
        progressBar = new javax.swing.JProgressBar();

        mainPanel.setName("mainPanel"); // NOI18N

        org.jdesktop.application.ResourceMap resourceMap = org.jdesktop.application.Application.getInstance(nullflushtest.NullFlushTestApp.class).getContext().getResourceMap(NullFlushTestView.class);
        jLabel1.setText(resourceMap.getString("jLabel1.text")); // NOI18N
        jLabel1.setName("jLabel1"); // NOI18N
        mainPanel.add(jLabel1);

        jScrollPane1.setName("jScrollPane1"); // NOI18N

        jTextAreaInput.setColumns(30);
        jTextAreaInput.setRows(5);
        jTextAreaInput.setName("jTextAreaInput"); // NOI18N
        jScrollPane1.setViewportView(jTextAreaInput);

        mainPanel.add(jScrollPane1);

        jButtonSendText.setText(resourceMap.getString("jButtonSendText.text")); // NOI18N
        jButtonSendText.setName("jButtonSendText"); // NOI18N
        jButtonSendText.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonSendTextActionPerformed(evt);
            }
        });
        mainPanel.add(jButtonSendText);

        jSeparator1.setName("jSeparator1"); // NOI18N
        jSeparator1.setPreferredSize(new java.awt.Dimension(400, 10));
        mainPanel.add(jSeparator1);

        jLabel2.setText(resourceMap.getString("jLabel2.text")); // NOI18N
        jLabel2.setName("jLabel2"); // NOI18N
        mainPanel.add(jLabel2);

        jScrollPane2.setName("jScrollPane2"); // NOI18N

        jTextFieldCommand.setColumns(30);
        jTextFieldCommand.setRows(5);
        jTextFieldCommand.setName("jTextFieldCommand"); // NOI18N
        jScrollPane2.setViewportView(jTextFieldCommand);

        mainPanel.add(jScrollPane2);

        jButtonStartCommand.setText(resourceMap.getString("jButtonStartCommand.text")); // NOI18N
        jButtonStartCommand.setName("jButtonStartCommand"); // NOI18N
        jButtonStartCommand.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonStartCommandActionPerformed(evt);
            }
        });
        mainPanel.add(jButtonStartCommand);

        jButtonStopCommand.setText(resourceMap.getString("jButtonStopCommand.text")); // NOI18N
        jButtonStopCommand.setName("jButtonStopCommand"); // NOI18N
        jButtonStopCommand.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonStopCommandActionPerformed(evt);
            }
        });
        mainPanel.add(jButtonStopCommand);

        menuBar.setName("menuBar"); // NOI18N

        fileMenu.setText(resourceMap.getString("fileMenu.text")); // NOI18N
        fileMenu.setName("fileMenu"); // NOI18N

        javax.swing.ActionMap actionMap = org.jdesktop.application.Application.getInstance(nullflushtest.NullFlushTestApp.class).getContext().getActionMap(NullFlushTestView.class, this);
        exitMenuItem.setAction(actionMap.get("quit")); // NOI18N
        exitMenuItem.setName("exitMenuItem"); // NOI18N
        fileMenu.add(exitMenuItem);

        menuBar.add(fileMenu);

        helpMenu.setText(resourceMap.getString("helpMenu.text")); // NOI18N
        helpMenu.setName("helpMenu"); // NOI18N

        aboutMenuItem.setAction(actionMap.get("showAboutBox")); // NOI18N
        aboutMenuItem.setName("aboutMenuItem"); // NOI18N
        helpMenu.add(aboutMenuItem);

        menuBar.add(helpMenu);

        statusPanel.setName("statusPanel"); // NOI18N

        statusPanelSeparator.setName("statusPanelSeparator"); // NOI18N

        statusMessageLabel.setName("statusMessageLabel"); // NOI18N

        statusAnimationLabel.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        statusAnimationLabel.setName("statusAnimationLabel"); // NOI18N

        progressBar.setName("progressBar"); // NOI18N

        javax.swing.GroupLayout statusPanelLayout = new javax.swing.GroupLayout(statusPanel);
        statusPanel.setLayout(statusPanelLayout);
        statusPanelLayout.setHorizontalGroup(
            statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(statusPanelSeparator, javax.swing.GroupLayout.DEFAULT_SIZE, 412, Short.MAX_VALUE)
            .addGroup(statusPanelLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(statusMessageLabel)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 228, Short.MAX_VALUE)
                .addComponent(progressBar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(statusAnimationLabel)
                .addContainerGap())
        );
        statusPanelLayout.setVerticalGroup(
            statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(statusPanelLayout.createSequentialGroup()
                .addComponent(statusPanelSeparator, javax.swing.GroupLayout.PREFERRED_SIZE, 2, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(statusPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(statusMessageLabel)
                    .addComponent(statusAnimationLabel)
                    .addComponent(progressBar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(3, 3, 3))
        );

        setComponent(mainPanel);
        setMenuBar(menuBar);
        setStatusBar(statusPanel);
    }// </editor-fold>//GEN-END:initComponents

    private void jButtonStartCommandActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonStartCommandActionPerformed
        try
        {
            NullFlushTestApp.getApplication().startCommand(jTextFieldCommand.getText());
            jButtonSendText.setEnabled(true);
            jButtonStopCommand.setEnabled(true);
            jButtonStartCommand.setEnabled(false);
            jTextFieldCommand.setEditable(false);
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }//GEN-LAST:event_jButtonStartCommandActionPerformed

    private void jButtonStopCommandActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonStopCommandActionPerformed
        try
        {
        NullFlushTestApp.getApplication().stopCommand();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        jButtonSendText.setEnabled(false);
        jButtonStopCommand.setEnabled(false);
        jButtonStartCommand.setEnabled(true);
        jTextFieldCommand.setEditable(true);
        
    }//GEN-LAST:event_jButtonStopCommandActionPerformed

    private void jButtonSendTextActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonSendTextActionPerformed
        try {
            NullFlushTestApp.getApplication().sendText(jTextAreaInput.getText());
        } catch (Exception ex) {
           ex.printStackTrace();
        }
    }//GEN-LAST:event_jButtonSendTextActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButtonSendText;
    private javax.swing.JButton jButtonStartCommand;
    private javax.swing.JButton jButtonStopCommand;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JSeparator jSeparator1;
    private javax.swing.JTextArea jTextAreaInput;
    private javax.swing.JTextArea jTextFieldCommand;
    private javax.swing.JPanel mainPanel;
    private javax.swing.JMenuBar menuBar;
    private javax.swing.JProgressBar progressBar;
    private javax.swing.JLabel statusAnimationLabel;
    private javax.swing.JLabel statusMessageLabel;
    private javax.swing.JPanel statusPanel;
    // End of variables declaration//GEN-END:variables

    private final Timer messageTimer;
    private final Timer busyIconTimer;
    private final Icon idleIcon;
    private final Icon[] busyIcons = new Icon[15];
    private int busyIconIndex = 0;

    private JDialog aboutBox;
}