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

import com.coronago.misc.model.StockInHospital;

import com.coronago.misc.logic.IStockInHospitalBL;

import com.coronago.misc.logic.StockInHospitalBLImpl;

import java.util.LinkedHashMap;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.coronago.misc.logic.IStockInHospitalBLBase;

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
@Path("stockinhospitals")
public class StockInHospitalServiceImpl
		extends StockInHospitalServiceBaseImpl<IStockInHospitalBL<StockInHospital>, StockInHospital> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(StockInHospitalServiceImpl.class);

	public StockInHospitalServiceImpl() {
		super(InstanceFactory.getProxy(new StockInHospitalBLImpl()));
	}

	@Override
	@POST
	public StockInHospital createStockInHospital(StockInHospital modelObj) {
		return super.createStockInHospital(modelObj);
	}

	@Override
	@PUT
	public StockInHospital updateStockInHospital(StockInHospital modelObj) {
		return super.updateStockInHospital(modelObj);
	}

	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public StockInHospital getStockInHospitalBySid(@PathParam("sid") Primary sid) {
		return super.getStockInHospitalBySid(sid);
	}

	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteStockInHospital(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}

	@Override
	@POST
	@Path("/stockinhospitals/datatable")
	public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable) {
		return logic.getStockInHospitalAll_StockInHospital(dataTable);
	}

	@GET
	@Path("/stockinfobyhospital/{hospitalid}")
	public List<LinkedHashMap<String, Object>> getStockInfoByHospital(@PathParam("hospitalid") String hospitalId) {
		return logic.getStockInfoByHospital(hospitalId);
	}

	@POST
	@Path("/stockinfobyitem/{itemid}")
	public PaginationResponse getStockInfoByItem(PaginationRequest request,@PathParam("itemid") String itemId) {
		return logic.getStockInfoByItem(request,itemId);
	}
}
