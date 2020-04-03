package com.coronago.misc.webservice;

import com.coronago.misc.model.LoginBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface ILoginService<T extends LoginBase> {
	public T updateLogin(T Obj);



public Response deleteLogin(String ids);



public T createLogin(T Obj);



public T getLoginBySid(Primary sid);


}