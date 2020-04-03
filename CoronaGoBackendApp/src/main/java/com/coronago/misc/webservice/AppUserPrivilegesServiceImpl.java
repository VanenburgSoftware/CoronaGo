package com.coronago.misc.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;

import com.coronago.misc.model.AppUserPrivileges;

import com.coronago.misc.logic.IAppUserPrivilegesBL;

import com.coronago.misc.logic.AppUserPrivilegesBLImpl;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.coronago.misc.logic.IAppUserPrivilegesBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.core.Response;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

@Produces(MediaType.APPLICATION_JSON)
@Path("appuserprivileges")
public class AppUserPrivilegesServiceImpl extends AppUserPrivilegesServiceBaseImpl<IAppUserPrivilegesBL<AppUserPrivileges>, AppUserPrivileges> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(AppUserPrivilegesServiceImpl.class);

	public AppUserPrivilegesServiceImpl() {
		super(InstanceFactory.getProxy(new AppUserPrivilegesBLImpl()));
	}
	
	@GET
	@Path("authenticate")
	public AppUserPrivileges getCurrentUser() {
		return logic.getCurrentUserWithMenu();
	}
	
		@POST
	@Path("appuserprivileges")
	public PaginationResponse getAppUserPrivilegesByPage(PaginationRequest request) {
		List<AppUserPrivileges> all = logic.getAllByPage(request.getFilters(), request.getSort(), request.getPage(),
				request.getPageSize());
		PaginationResponse response = new PaginationResponse(request);
		response.setResults(all);
		return response;
	}	
	
	    @Override
	@PUT
	public AppUserPrivileges updateAppUserPrivileges(AppUserPrivileges modelObj) {
		return super.updateAppUserPrivileges( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public AppUserPrivileges getAppUserPrivilegesBySid(@PathParam("sid") Primary sid) {
		return super.getAppUserPrivilegesBySid(sid);
	}


	@Override
	@POST
	@Path("/appuserprivileges/datatable")
	public PaginationResponse getAppUserPrivilegesAll_AppUserPrivileges(PaginationRequest dataTable)
	{
	 	return logic.getAppUserPrivilegesAll_AppUserPrivileges(dataTable);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteAppUserPrivileges(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public AppUserPrivileges createAppUserPrivileges(AppUserPrivileges modelObj) {
		return super.createAppUserPrivileges( modelObj);
	}

}
