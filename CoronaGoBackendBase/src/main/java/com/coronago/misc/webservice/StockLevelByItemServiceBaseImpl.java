package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.StockLevelByItemBase;

import com.coronago.misc.logic.IStockLevelByItemBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

@Produces(MediaType.APPLICATION_JSON)
public abstract class StockLevelByItemServiceBaseImpl<BL extends IStockLevelByItemBLBase<M>, M extends StockLevelByItemBase>
		extends BaseWebService<BL, M> implements IStockLevelByItemService<M> {
	
	
	public StockLevelByItemServiceBaseImpl(BL logic) {
		super(logic);
	}
	@Override
	@POST
	public M createStockLevelByItem(M modelObj) {
		return super.save( modelObj);
	}


	@Override
	@POST
	@Path("/stocklevelbyitems/datatable")
	public PaginationResponse getStockLevelByItemAll_StockLevelByItem(PaginationRequest dataTable)
	{
	 	return logic.getStockLevelByItemAll_StockLevelByItem(dataTable);
	}



    @Override
	@PUT
	public M updateStockLevelByItem(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteStockLevelByItem(@PathParam("ids") String ids) {
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
	public M getStockLevelByItemBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}

	
}
