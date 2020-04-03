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

import com.coronago.misc.model.LandingPage;

import com.coronago.misc.logic.ILandingPageBL;

import com.coronago.misc.logic.LandingPageBLImpl;

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
@Path("landingpages")
public class LandingPageServiceImpl extends LandingPageServiceBaseImpl<ILandingPageBL<LandingPage>, LandingPage> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(LandingPageServiceImpl.class);
	public LandingPageServiceImpl() {
		super(InstanceFactory.getProxy(new LandingPageBLImpl()));
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
	public LandingPage createLandingPage(LandingPage modelObj) {
		return super.createLandingPage( modelObj);
	}


    @Override
	@PUT
	public LandingPage updateLandingPage(LandingPage modelObj) {
		return super.updateLandingPage( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public LandingPage getLandingPageBySid(@PathParam("sid") Primary sid) {
		return super.getLandingPageBySid(sid);
	}
	
}
