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

import com.coronago.misc.model.HeatMap;

import com.coronago.misc.logic.IHeatMapBL;

import com.coronago.misc.logic.HeatMapBLImpl;

import com.coronago.misc.logic.IHeatMapBLBase;

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
@Path("heatmaps")
public class HeatMapServiceImpl extends HeatMapServiceBaseImpl<IHeatMapBL<HeatMap>, HeatMap> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(HeatMapServiceImpl.class);
	public HeatMapServiceImpl() {
		super(InstanceFactory.getProxy(new HeatMapBLImpl()));
	}
    @Override
	@PUT
	public HeatMap updateHeatMap(HeatMap modelObj) {
		return super.updateHeatMap( modelObj);
	}



	@Override
	@POST
	public HeatMap createHeatMap(HeatMap modelObj) {
		return super.createHeatMap( modelObj);
	}


	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteHeatMap(@PathParam("ids") String ids) {
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
	public HeatMap getHeatMapBySid(@PathParam("sid") Primary sid) {
		return super.getHeatMapBySid(sid);
	}
	
}
