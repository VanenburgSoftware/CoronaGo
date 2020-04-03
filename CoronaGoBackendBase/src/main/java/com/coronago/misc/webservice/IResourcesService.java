package com.coronago.misc.webservice;

import com.coronago.misc.model.ResourcesBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface IResourcesService<T extends ResourcesBase> {
	public T createResources(T Obj);



public Response deleteResources(String ids);



public T getResourcesBySid(Primary sid);



public T updateResources(T Obj);


}