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

import com.coronago.misc.model.Resources;

import com.coronago.misc.logic.IResourcesBL;

import com.coronago.misc.logic.ResourcesBLImpl;

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
@Path("resources")
public class ResourcesServiceImpl extends ResourcesServiceBaseImpl<IResourcesBL<Resources>, Resources> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ResourcesServiceImpl.class);
	public ResourcesServiceImpl() {
		super(InstanceFactory.getProxy(new ResourcesBLImpl()));
	}
	@Override
	@POST
	public Resources createResources(Resources modelObj) {
		return super.createResources( modelObj);
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
	public Resources getResourcesBySid(@PathParam("sid") Primary sid) {
		return super.getResourcesBySid(sid);
	}


    @Override
	@PUT
	public Resources updateResources(Resources modelObj) {
		return super.updateResources( modelObj);
	}

	
}
