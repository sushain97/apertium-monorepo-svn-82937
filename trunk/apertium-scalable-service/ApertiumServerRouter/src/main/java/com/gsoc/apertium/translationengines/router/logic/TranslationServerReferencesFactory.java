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
package com.gsoc.apertium.translationengines.router.logic;

/**
 * Singleton factory that creates instances of the default implementation of {@link ITranslationServerReferences}.
 * @author vitaka
 */
public class TranslationServerReferencesFactory {
    /**
     * Singleton instance of the factory
     */
    private static TranslationServerReferencesFactory instance=null;

    /**
     * Gets the singleton instance of the factory
     * @return SIngleton instance of the factory
     */
    public static TranslationServerReferencesFactory getInstance()
    {
        if(instance==null)
            instance=new TranslationServerReferencesFactory();
        return instance;
    }

    /**
     * Privatte constructor
     */
    private TranslationServerReferencesFactory()
    {

    }

    /**
     * Gets a new instance of the default implementation of {@link  ITranslationServerReferences}.
     * @return {@link TranslationServerReferencesRMI} instance
     */
    public ITranslationServerReferences getTranslationServerReferences()
    {
        return new TranslationServerReferencesRMI();
    }

}
