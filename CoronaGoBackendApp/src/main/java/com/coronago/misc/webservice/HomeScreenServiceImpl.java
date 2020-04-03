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

import com.coronago.misc.model.HomeScreen;

import com.coronago.misc.logic.IHomeScreenBL;

import com.coronago.misc.logic.HomeScreenBLImpl;

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
@Path("homescreens")
public class HomeScreenServiceImpl extends HomeScreenServiceBaseImpl<IHomeScreenBL<HomeScreen>, HomeScreen> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(HomeScreenServiceImpl.class);
	public HomeScreenServiceImpl() {
		super(InstanceFactory.getProxy(new HomeScreenBLImpl()));
	}
	@Override
	@POST
	public HomeScreen createHomeScreen(HomeScreen modelObj) {
		return super.createHomeScreen( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public HomeScreen getHomeScreenBySid(@PathParam("sid") Primary sid) {
		return super.getHomeScreenBySid(sid);
	}


    @Override
	@PUT
	public HomeScreen updateHomeScreen(HomeScreen modelObj) {
		return super.updateHomeScreen( modelObj);
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
