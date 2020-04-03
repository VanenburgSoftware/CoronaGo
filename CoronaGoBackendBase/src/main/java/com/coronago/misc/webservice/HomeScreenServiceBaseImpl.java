package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.HomeScreenBase;

import com.coronago.misc.logic.IHomeScreenBLBase;

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
public abstract class HomeScreenServiceBaseImpl<BL extends IHomeScreenBLBase<M>, M extends HomeScreenBase>
		extends BaseWebService<BL, M> implements IHomeScreenService<M> {
	
	
	public HomeScreenServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@POST
	public M createHomeScreen(M modelObj) {
		return super.save( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getHomeScreenBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}


    @Override
	@PUT
	public M updateHomeScreen(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteHomeScreen(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}

	
}
