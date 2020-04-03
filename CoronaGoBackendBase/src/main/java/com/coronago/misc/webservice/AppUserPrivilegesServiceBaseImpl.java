package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.AppUserPrivilegesBase;
import com.coronago.misc.logic.IAppUserPrivilegesBLBase;
import javax.ws.rs.Path;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.core.Response;
import javax.ws.rs.GET;
import com.eva.base.model.Primary;
import javax.ws.rs.PathParam;
import java.util.List;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import org.apache.commons.lang3.StringUtils;
import javax.ws.rs.DELETE;

@Produces(MediaType.APPLICATION_JSON)
public class AppUserPrivilegesServiceBaseImpl<BL extends IAppUserPrivilegesBLBase<M>, M extends AppUserPrivilegesBase>
		extends BaseWebService<BL,M> implements IAppUserPrivilegesService<M> {
	
	public AppUserPrivilegesServiceBaseImpl(BL logic) {
		super(logic);
	}
	
	    @Override
	@PUT
	public M updateAppUserPrivileges(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getAppUserPrivilegesBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
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
	public M createAppUserPrivileges(M modelObj) {
		return super.save( modelObj);
	}

}
