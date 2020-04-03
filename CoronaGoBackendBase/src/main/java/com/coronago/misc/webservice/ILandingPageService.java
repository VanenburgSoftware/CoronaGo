package com.coronago.misc.webservice;

import com.coronago.misc.model.LandingPageBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface ILandingPageService<T extends LandingPageBase> {
	public Response deleteLandingPage(String ids);



public T createLandingPage(T Obj);



public T updateLandingPage(T Obj);



public T getLandingPageBySid(Primary sid);


}