package com.coronago.misc.webservice;

import com.coronago.misc.model.AppUserPrivilegesBase;

import com.eva.base.model.Primary;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import javax.ws.rs.core.Response;

public interface IAppUserPrivilegesService<T extends AppUserPrivilegesBase> {
	public T updateAppUserPrivileges(T Obj);



public T getAppUserPrivilegesBySid(Primary sid);



public PaginationResponse getAppUserPrivilegesAll_AppUserPrivileges(PaginationRequest dataTable);



public Response deleteAppUserPrivileges(String ids);



public T createAppUserPrivileges(T Obj);


}