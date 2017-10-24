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
package org.scalemt.router.logic;

import java.util.Date;
import org.scalemt.rmi.transferobjects.Format;
import org.scalemt.rmi.transferobjects.LanguagePair;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Map.Entry;
import org.apache.commons.lang.mutable.MutableInt;
import org.apache.commons.lang.mutable.MutableLong;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Default implementation of {@link IRequestHistory}.
 * Stores historic information in HashMaps. It doesn't keep track of indivual requests,
 * but simply manages the total amount of requests and characters of each format
 * and language pairs requested.
 *
 * @author vitaka
 */
class SimpleRequestHistory implements IRequestHistory {

    /**
     * Commons-logging logger
     */
    static Log logger = LogFactory.getLog(SimpleRequestHistory.class);

    /**
     * Historic information of each language pair
     */
    private Map<LanguagePair, RequestsHistoryTO> requestsMap;

    private Map<Requester,List<UserRequest>> requestsPerUser;
    private Map<Requester,MutableLong> costPerUser;

    private long userAdmissionPeriod=24*60*60*1000;

    public SimpleRequestHistory() {
        requestsMap = new HashMap<LanguagePair, RequestsHistoryTO>();
        requestsPerUser=new HashMap<Requester, List<UserRequest>>();
        costPerUser=new HashMap<Requester, MutableLong>();

         try
        {
            userAdmissionPeriod=Integer.parseInt(Util.readConfigurationProperty("user_limit_period"));
        }
        catch(Exception e){}
    }

    @Override
    public void addRequest(LanguagePair pair, int numCharacters, Format format, Requester requester) {

        List<UserRequest> userHistory=null;
        MutableLong userCost =null;
        synchronized(this)
        {
            if (requestsMap.containsKey(pair)) {
                requestsMap.get(pair).addRequest(format, numCharacters);
            } else {
                RequestsHistoryTO rp = new RequestsHistoryTO();
                rp.addRequest(format, numCharacters);
                requestsMap.put(pair, rp);
            }
            userHistory=requestsPerUser.get(requester);
            userCost=costPerUser.get(requester);
            if(userHistory==null)
            {
                userHistory=new LinkedList<UserRequest>();
                requestsPerUser.put(requester, userHistory);
                userCost=new MutableLong(0);
                costPerUser.put(requester, userCost);
            }
        }

        synchronized(userHistory)
        {
            ListIterator<UserRequest> iterator = userHistory.listIterator();
            Date now = new Date();
            
            while(iterator.hasNext())
            {
                UserRequest request=iterator.next();
                if(now.getTime()-request.getTime().getTime() >userAdmissionPeriod)
                {
                    userCost.subtract(request.getCpuCost());
                    iterator.remove();
                }
                else
                    break;
            }

           int newRequestCost =LoadBalancer.getInstance().getLoadPredictor().getLoadConverter().convertRequest(numCharacters, LoadBalancer.getInstance().getDaemonConfigurationToTranslate(pair, format), format);
           userHistory.add(new UserRequest(new Date(), newRequestCost));
           userCost.add(newRequestCost);
        }
        
    }

    @Override
    public Map<LanguagePair, RequestsHistoryTO> getHistoryAndReset() {
         synchronized(this)
        {

            for (Entry<LanguagePair, RequestsHistoryTO> entry : requestsMap.entrySet()) {
                logger.trace("Prediction for " + entry.getKey() + ": Requests" + entry.getValue().getNumberOfRequests() + " Chars: " + entry.getValue().getNumberOfChars());
            }


            Map<LanguagePair,RequestsHistoryTO> returnMap = new HashMap<LanguagePair, RequestsHistoryTO>(requestsMap);
            requestsMap.clear();


            return returnMap;
        }
    }

    @Override
    public int getCostUser(Requester rq) {
        return costPerUser.get(rq).intValue();
    }
}
