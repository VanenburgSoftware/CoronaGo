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

import com.coronago.misc.model.StockLevelByHospital;

import com.coronago.misc.logic.IStockLevelByHospitalBL;

import com.coronago.misc.logic.StockLevelByHospitalBLImpl;

import com.coronago.misc.logic.IStockLevelByHospitalBLBase;

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
@Path("stocklevelbyhospitals")
public class StockLevelByHospitalServiceImpl extends StockLevelByHospitalServiceBaseImpl<IStockLevelByHospitalBL<StockLevelByHospital>, StockLevelByHospital> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(StockLevelByHospitalServiceImpl.class);
	public StockLevelByHospitalServiceImpl() {
		super(InstanceFactory.getProxy(new StockLevelByHospitalBLImpl()));
	}
	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteStockLevelByHospital(@PathParam("ids") String ids) {
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
	public StockLevelByHospital getStockLevelByHospitalBySid(@PathParam("sid") Primary sid) {
		return super.getStockLevelByHospitalBySid(sid);
	}


	@Override
	@POST
	public StockLevelByHospital createStockLevelByHospital(StockLevelByHospital modelObj) {
		return super.createStockLevelByHospital( modelObj);
	}


    @Override
	@PUT
	public StockLevelByHospital updateStockLevelByHospital(StockLevelByHospital modelObj) {
		return super.updateStockLevelByHospital( modelObj);
	}

	
}
