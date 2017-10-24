/*
 *  ScaleMT. Highly scalable framework for machine translation web services
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
package org.scalemt.rmi.exceptions;


/**
 * Exception thrown when a daemon deads while performing a translation.
 * @author vmsanchez
 */
public class DaemonDeadException extends TranslationEngineException {

	public DaemonDeadException() {
		super();
	
	}

	public DaemonDeadException(String message, Throwable cause) {
		super(message, cause);
	
	}

	public DaemonDeadException(String message) {
		super(message);
	
	}

	public DaemonDeadException(Throwable cause) {
		super(cause);
	
	}
}
