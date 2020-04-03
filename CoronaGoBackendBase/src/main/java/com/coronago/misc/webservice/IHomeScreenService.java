package com.coronago.misc.webservice;

import com.coronago.misc.model.HomeScreenBase;

import com.eva.base.model.Primary;

import javax.ws.rs.core.Response;

public interface IHomeScreenService<T extends HomeScreenBase> {
	public T createHomeScreen(T Obj);



public T getHomeScreenBySid(Primary sid);



public T updateHomeScreen(T Obj);



public Response deleteHomeScreen(String ids);


}