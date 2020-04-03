package com.coronago.misc.webservice;

import com.coronago.misc.model.CountyStateLoginBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface ICountyStateLoginService<T extends CountyStateLoginBase> {
	public Response deleteCountyStateLogin(String ids);



public T getCountyStateLoginBySid(Primary sid);



public T createCountyStateLogin(T Obj);



public T updateCountyStateLogin(T Obj);


}