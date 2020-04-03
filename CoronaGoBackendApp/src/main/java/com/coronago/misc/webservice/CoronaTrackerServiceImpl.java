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

import com.coronago.misc.model.CoronaTracker;

import com.coronago.misc.logic.ICoronaTrackerBL;

import com.coronago.misc.logic.CoronaTrackerBLImpl;

import com.coronago.misc.logic.ICoronaTrackerBLBase;

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
@Path("coronatrackers")
public class CoronaTrackerServiceImpl extends CoronaTrackerServiceBaseImpl<ICoronaTrackerBL<CoronaTracker>, CoronaTracker> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(CoronaTrackerServiceImpl.class);
	public CoronaTrackerServiceImpl() {
		super(InstanceFactory.getProxy(new CoronaTrackerBLImpl()));
	}
    @Override
	@PUT
	public CoronaTracker updateCoronaTracker(CoronaTracker modelObj) {
		return super.updateCoronaTracker( modelObj);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteCoronaTracker(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public CoronaTracker createCoronaTracker(CoronaTracker modelObj) {
		return super.createCoronaTracker( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public CoronaTracker getCoronaTrackerBySid(@PathParam("sid") Primary sid) {
		return super.getCoronaTrackerBySid(sid);
	}
	
}
