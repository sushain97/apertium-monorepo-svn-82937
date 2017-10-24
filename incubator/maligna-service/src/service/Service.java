package service;

import java.io.IOException;

import org.apache.xmlrpc.XmlRpcException;
import org.apache.xmlrpc.server.PropertyHandlerMapping;
import org.apache.xmlrpc.server.XmlRpcServer;
import org.apache.xmlrpc.server.XmlRpcServerConfigImpl;
import org.apache.xmlrpc.webserver.WebServer;

public class Service {

	private static final int SERVICE_PORT = 8081;
	private static final String SERVICE_HANDLERS_PROPERTIES = "serviceHandlers.properties";

	public static void main(String[] args) throws IOException, XmlRpcException {
		PropertyHandlerMapping phm = new PropertyHandlerMapping();
		phm.load(Thread.currentThread().getContextClassLoader(),
				SERVICE_HANDLERS_PROPERTIES);

		WebServer webServer = new WebServer(SERVICE_PORT);
		XmlRpcServer xmlRpcServer = webServer.getXmlRpcServer();

		xmlRpcServer.setHandlerMapping(phm);
		XmlRpcServerConfigImpl serverConfig = (XmlRpcServerConfigImpl) xmlRpcServer
				.getConfig();

		serverConfig.setEnabledForExtensions(true);
		serverConfig.setContentLengthOptional(false);

		webServer.start();
	}
}
