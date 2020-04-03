package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.LoginBase;

import com.coronago.misc.logic.ILoginBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

@Produces(MediaType.APPLICATION_JSON)
public abstract class LoginServiceBaseImpl<BL extends ILoginBLBase<M>, M extends LoginBase>
		extends BaseWebService<BL, M> implements ILoginService<M> {
	
	
	public LoginServiceBaseImpl(BL logic) {
		super(logic);
	}
    @Override
	@PUT
	public M updateLogin(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteLogin(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public M createLogin(M modelObj) {
		return super.save( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getLoginBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}

	
}
