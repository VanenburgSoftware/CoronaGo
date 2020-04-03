package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.StockInHospitalBase;

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

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

@Produces(MediaType.APPLICATION_JSON)
public abstract class StockInHospitalServiceBaseImpl<BL extends IStockInHospitalBLBase<M>, M extends StockInHospitalBase>
		extends BaseWebService<BL, M> implements IStockInHospitalService<M> {
	
	
	public StockInHospitalServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@POST
	public M createStockInHospital(M modelObj) {
		return super.save( modelObj);
	}


    @Override
	@PUT
	public M updateStockInHospital(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getStockInHospitalBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
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
	public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable)
	{
	 	return logic.getStockInHospitalAll_StockInHospital(dataTable);
	}


	
}
