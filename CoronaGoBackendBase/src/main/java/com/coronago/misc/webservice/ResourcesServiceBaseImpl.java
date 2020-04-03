package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.ResourcesBase;

import com.coronago.misc.logic.IResourcesBLBase;

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
public abstract class ResourcesServiceBaseImpl<BL extends IResourcesBLBase<M>, M extends ResourcesBase>
		extends BaseWebService<BL, M> implements IResourcesService<M> {
	
	
	public ResourcesServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@POST
	public M createResources(M modelObj) {
		return super.save( modelObj);
	}


	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteResources(@PathParam("ids") String ids) {
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
	public M getResourcesBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}


    @Override
	@PUT
	public M updateResources(M modelObj) {
		return super.update( modelObj);
	}


	
}
