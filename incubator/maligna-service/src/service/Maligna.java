package service;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Set;

import net.sourceforge.align.Version;
import net.sourceforge.align.ui.console.command.Command;
import net.sourceforge.align.ui.console.command.CommandFactory;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class Maligna {
	
	private static final Log log = LogFactory.getLog(Maligna.class);
	
	public String getVersion() {
		String ret = "mALIGNa";
		if (Version.getInstance().getVersion() != null) {
			ret += " " + Version.getInstance().getVersion();
		}
		if (Version.getInstance().getDate() != null) {
			ret += ", " + Version.getInstance().getDate();
		}
		ret += ".";
		return ret;
	}
	
	public Set<String> getAvailableCommands() {
		return (CommandFactory.getInstance().getCommandNameSet());
	}
	
	public String executeCommand(String[] args) {
		if (args.length == 0)
			throw new IllegalArgumentException("List of arguments has to be non-empty");
		
		String commandName = args[0];
		Command command = CommandFactory.getInstance().getCommand(commandName);
		
		if (command == null)
			throw new IllegalArgumentException("Wrong command");
		
		String[] commandArgs = Arrays.copyOfRange(args, 1, args.length);
		
		OutputStream os = new ByteArrayOutputStream();
		
		PrintStream out = System.out;
		PrintStream err = System.err;
		
		PrintStream ps = new PrintStream(os);
		
		System.setOut(ps);
		System.setErr(ps);
		
		command.run(commandArgs);
		
		System.setOut(out);
		System.setErr(err);
		
		return os.toString();
	}
}
