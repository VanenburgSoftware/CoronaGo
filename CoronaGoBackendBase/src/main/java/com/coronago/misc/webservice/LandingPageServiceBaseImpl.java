package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.LandingPageBase;

import com.coronago.misc.logic.ILandingPageBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

@Produces(MediaType.APPLICATION_JSON)
public abstract class LandingPageServiceBaseImpl<BL extends ILandingPageBLBase<M>, M extends LandingPageBase>
		extends BaseWebService<BL, M> implements ILandingPageService<M> {
	
	
	public LandingPageServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteLandingPage(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public M createLandingPage(M modelObj) {
		return super.save( modelObj);
	}


    @Override
	@PUT
	public M updateLandingPage(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getLandingPageBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}

	
}
