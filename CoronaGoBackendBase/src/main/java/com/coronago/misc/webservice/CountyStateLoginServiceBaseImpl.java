package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.CountyStateLoginBase;

import com.coronago.misc.logic.ICountyStateLoginBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

@Produces(MediaType.APPLICATION_JSON)
public abstract class CountyStateLoginServiceBaseImpl<BL extends ICountyStateLoginBLBase<M>, M extends CountyStateLoginBase>
		extends BaseWebService<BL, M> implements ICountyStateLoginService<M> {
	
	
	public CountyStateLoginServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteCountyStateLogin(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getCountyStateLoginBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}


	@Override
	@POST
	public M createCountyStateLogin(M modelObj) {
		return super.save( modelObj);
	}


    @Override
	@PUT
	public M updateCountyStateLogin(M modelObj) {
		return super.update( modelObj);
	}


	
}
