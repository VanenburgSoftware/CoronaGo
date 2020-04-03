package com.coronago.misc.webservice;

import com.coronago.misc.model.StockLevelByItemBase;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface IStockLevelByItemService<T extends StockLevelByItemBase> {
	public T createStockLevelByItem(T Obj);



public PaginationResponse getStockLevelByItemAll_StockLevelByItem(PaginationRequest dataTable);



public T updateStockLevelByItem(T Obj);



public Response deleteStockLevelByItem(String ids);



public T getStockLevelByItemBySid(Primary sid);


}