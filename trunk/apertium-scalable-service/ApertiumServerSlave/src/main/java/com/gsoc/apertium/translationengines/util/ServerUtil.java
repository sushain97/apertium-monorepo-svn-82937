/*
 *  ApertiumServer. Highly scalable web service implementation for Apertium.
 *  Copyright (C) 2009  Víctor Manuel Sánchez Cartagena
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package com.gsoc.apertium.translationengines.util;

import com.gsoc.apertium.translationengines.main.ApertiumTranslationEnginePool;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


/**
 * Some utility methods that don't fit in another classes.
 *
 * @author vitaka
 */
public class ServerUtil {

    /**
     * Commons-logging logger
     */
	static Log logger = LogFactory.getLog(ServerUtil.class);

	

	/**
	 * Reads property from <code>configuration.properties</code>
	 * 
	 * @param property Property name
	 * @return Value of the property, or <code>null</code> if the property is not found
	 */
	public static String readProperty(String property)
	{
		String value=null;
		try
		{
		InputStream is = ServerUtil.class.getResourceAsStream("/configuration.properties");
		Properties props = new Properties();
		props.load(is);
		value=props.getProperty(property).trim();
		}
		catch (Exception e) {
		}
		return value;
	}

    /**
     * Reads a property value from a file present in classpath.
     * @param property Name of the property to read
     * @param file File classpath-relative path. The file is looked up using {@link Class#getResourceAsStream(java.lang.String) } method-
     * @return Property value, or <code>null</code> if the file or the property cannot be found
     */
    public static String readPropertyFromFile(String property,String file)
    {
        try
        {
        Properties properties = new Properties();
        properties.load(ServerUtil.class.getResourceAsStream(file));
        return properties.getProperty(property);
        }
        catch(Exception e)
        {
            return null;
        }
    }

    /**
     * Returns a String with all the content that can be read from a <code>Reader</code> object
     * @param reader Source of the text to be read
     * @return Read text
     * @throws java.lang.Exception
     */
	private static String readReader(Reader reader) throws Exception
	{
		
		StringBuilder builder = new StringBuilder();
		BufferedReader br = new BufferedReader(reader);
		String line;
		while((line=br.readLine())!=null)
			builder.append(line);
		br.close();
		String text = builder.toString();
		return text;
		
	}

    /**
     * Reads the content of a text file represented by its path in the local filesystem.
     * @param path Path of the file in the local filesystem
     * @return Contents of the file, or <code>null</code>  if the file doesn't exist of there is a reading error.
     */
	public static String readFileFromFileSystem(String path)
	{
		try
		{
		return readReader(new FileReader(path));
		}
		catch (Exception e) {
			logger.error("Cannot read file: "+path, e);
			return null;
		}
	}

    /**
     * Reads the content of a text file represented by its path in the classpath.
     * @param path Path of the file in the classpath
     * @return Contents of the file, or <code>null</code>  if the file doesn't exist of there is a reading error.
     */
	public static String readFileFromClasspath(String path)
	{
		try
		{
		return readReader(new InputStreamReader(ApertiumTranslationEnginePool.class.getResourceAsStream(path)));
		}
		catch (Exception e) {
			logger.error("Cannot read file: "+path, e);
			return null;
		}
	}
	
}
