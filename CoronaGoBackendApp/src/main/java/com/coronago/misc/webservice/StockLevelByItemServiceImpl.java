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

import com.coronago.misc.model.StockLevelByItem;

import com.coronago.misc.logic.IStockLevelByItemBL;

import com.coronago.misc.logic.StockLevelByItemBLImpl;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.coronago.misc.logic.IStockLevelByItemBLBase;

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
@Path("stocklevelbyitems")
public class StockLevelByItemServiceImpl extends StockLevelByItemServiceBaseImpl<IStockLevelByItemBL<StockLevelByItem>, StockLevelByItem> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(StockLevelByItemServiceImpl.class);
	public StockLevelByItemServiceImpl() {
		super(InstanceFactory.getProxy(new StockLevelByItemBLImpl()));
	}
	@Override
	@POST
	public StockLevelByItem createStockLevelByItem(StockLevelByItem modelObj) {
		return super.createStockLevelByItem( modelObj);
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
	public StockLevelByItem updateStockLevelByItem(StockLevelByItem modelObj) {
		return super.updateStockLevelByItem( modelObj);
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
	public StockLevelByItem getStockLevelByItemBySid(@PathParam("sid") Primary sid) {
		return super.getStockLevelByItemBySid(sid);
	}
	
}
