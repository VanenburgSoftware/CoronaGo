package com.coronago.misc.webservice;

import com.coronago.misc.model.CoronaTrackerBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface ICoronaTrackerService<T extends CoronaTrackerBase> {
	public T updateCoronaTracker(T Obj);



public Response deleteCoronaTracker(String ids);



public T createCoronaTracker(T Obj);



public T getCoronaTrackerBySid(Primary sid);


}