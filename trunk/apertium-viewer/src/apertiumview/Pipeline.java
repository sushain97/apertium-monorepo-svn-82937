/*
 * Copyright 2015 Jacob Nordfalk <jacob.nordfalk@gmail.com>, Mikel Artetxe <artetxem@gmail.com>
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 */
package apertiumview;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import javax.swing.SwingUtilities;

import org.apertium.pipeline.Dispatcher;
import org.apertium.pipeline.Program;
import static org.apertium.pipeline.Program.ProgEnum.INTERCHUNK;
import static org.apertium.pipeline.Program.ProgEnum.TRANSFER;

public class Pipeline {
    private static Pipeline instance = new Pipeline();

    public boolean externalProcessing;
    public boolean markUnknownWords;
    public boolean traceTransferInterchunk = true;
    public File execPath=null;
    public String[] envp=null;
    public boolean ignoreErrorMessages;

    private Pipeline() {
        processor.start();
    }

    public static Pipeline getPipeline() {
        return instance;
    }

    Thread processor = new Thread() {
        public void run() {
            while (true) try {
                if (task!=null) task.run();
                synchronized(this) {
                    if (nextTask!=null) {
                        task = nextTask;
                        nextTask = null;
                    } else {
                        this.wait();
                    }
                }
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }
    };

    PipelineTask task = null;
    PipelineTask nextTask = null;

    void queueAsyncProcessing(TextWidget sourceWidget, int priority, String input, TextWidget recieverWidget) {
        //System.out.println("q"+priority+" "+sourceWidget.getText());
        if (nextTask != null && nextTask.priority<priority) return;  // too low priority, ignore new task

        if (externalProcessing && task != null && task.startTime<System.currentTimeMillis()-5000) {
          String err = "task probably runned amok, destroying: "+nextTask.program;
          System.out.println(err);
          task.proces.destroy(); // task probably runned amok
          task.recieverWidget.setText(err);
          task.recieverWidget.setStatus(TextWidget.STATUS_ERROR);
        }


        PipelineTask t = new PipelineTask();
        t.priority = priority;
        t.program = recieverWidget.getProgram();
        t.input = sourceWidget.getProgram() != null ? input : input + ' ';
        //new Exception(input).printStackTrace();
        //System.out.println("q"+priority+" "+t.execstr+" "+t.input);
        if (t.input.length() > 0) {
            t.recieverWidget = recieverWidget;
            synchronized (processor) {
                nextTask = t;
                processor.notify();
            }

        } else {
            recieverWidget.setText(t.input);
            recieverWidget.setStatus(TextWidget.STATUS_EQUAL);
        }
    }

  void shutdown() {
    try {
      if (task!=null && task.proces!=null) task.proces.destroy();
      if (nextTask!=null && nextTask.proces!=null) nextTask.proces.destroy();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }


    private class PipelineTask implements Runnable {
        private Program program;
        private String input;
        private TextWidget recieverWidget;
        public int priority = Integer.MAX_VALUE;

        //Variables for external processing
        private Process proces;
        public long startTime = System.currentTimeMillis();

        public void run() {
          try {
            String output_= "";
            String err_ = "";
            int retval_;
            if (!externalProcessing && program.getProgram() != Program.ProgEnum.UNKNOWN) {
								StringWriter sw = new StringWriter();

								// redirect System.err
								ByteArrayOutputStream tmperr = new ByteArrayOutputStream();
								PrintStream System_err = System.err;
                try {
										System.setErr(new PrintStream(tmperr, true));

                    Dispatcher.dispatch(program, new StringReader(input), sw, false, markUnknownWords, traceTransferInterchunk);
										retval_ = 0;
                } catch (Exception e) {
										e.printStackTrace();
                    retval_ = -1;
                } finally {
										// restore System.err
										System.setErr(System_err);
								}
								err_ = tmperr.toString().trim();
								output_ = sw.toString();
								if (output_.isEmpty()) output_ = err_;
            }
            else {
                List<String> args = new ArrayList<String>(program.getParameterList());
                args = Program.replaceParameter(args, "$1", markUnknownWords ? "-g" : "-n");
                args = Program.replaceParameter(args, "$2", null); // Don't display ambiguity
                args = Program.replaceParameter(args, "$3", null); // What is this $3 ??!??
                args.add(0, program.getFullPath());

								// add -t for transfer and interchunk
								if (traceTransferInterchunk &&
										(program.getProgram() == TRANSFER || program.getProgram() == INTERCHUNK)) {
                  args.add(1, "-t");
								}
                //proces = Runtime.getRuntime().exec(cmd, envp, execPath);
                proces = Runtime.getRuntime().exec(args.toArray(new String[args.size()]), envp, execPath);

                // For mac users UTF-8 is needed.
                BufferedReader std = new BufferedReader(new InputStreamReader(proces.getInputStream(),"UTF-8"));
                BufferedReader err = new BufferedReader(new InputStreamReader(proces.getErrorStream(),"UTF-8"));
                OutputStreamWriter osw = new OutputStreamWriter(proces.getOutputStream(),"UTF-8");
                osw.write(input,0,input.length());
                osw.write('\n');
                osw.close();
                StringBuilder outputsb = new StringBuilder(input.length()*2);
                StringBuilder errsb = new StringBuilder();
                String lin;
                while ( (lin=std.readLine())!=null) outputsb.append(lin).append('\n');
                while ( (lin=err.readLine())!=null) if (lin.length()>0) errsb.append(lin).append('\n');
                while ( (lin=std.readLine())!=null) outputsb.append(lin).append('\n');

                retval_ = proces.waitFor();
                err.close();
                std.close();
                task = null;
                err_ = errsb.toString().trim();
                if (retval_ != 0) outputsb.append("Return value: "+retval_+"\n"+err_+"\n");
                output_ = outputsb.substring(0, outputsb.length()-1);//.trim();
            }

            final String output = output_;
            final String err = err_;
            final int retval = retval_;

            Runnable runnable = new Runnable() {
                public void run() {
                    recieverWidget.setText(output);
                    recieverWidget.setError(ignoreErrorMessages?"":err);
                    if (retval!=0) recieverWidget.setStatus(TextWidget.STATUS_ERROR);
                    else if (output.equals(input)) recieverWidget.setStatus(TextWidget.STATUS_EQUAL);
                    else recieverWidget.setStatus(TextWidget.STATUS_OK);
                }
            };
            SwingUtilities.invokeLater(runnable);
          } catch (InterruptedException ex) {
          } catch (Throwable ex) {
						System.err.println("Error for "+program+" on input '"+input+"'");
						ex.printStackTrace();
						recieverWidget.setText(ex.toString());
          } finally {
						task = null;
          }
        }
    }
 }


