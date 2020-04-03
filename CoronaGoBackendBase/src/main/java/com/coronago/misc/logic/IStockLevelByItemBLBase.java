package com.coronago.misc.logic;

import com.eva.base.logic.ICRUDOperation;
import com.coronago.misc.model.StockLevelByItemBase;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IStockLevelByItemBLBase<T extends StockLevelByItemBase> extends ICRUDOperation<T>{
	public PaginationResponse getStockLevelByItemAll_StockLevelByItem(PaginationRequest dataTable);


}