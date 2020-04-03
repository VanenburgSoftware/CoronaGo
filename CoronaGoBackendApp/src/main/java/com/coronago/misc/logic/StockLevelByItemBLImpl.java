package com.coronago.misc.logic;

import com.coronago.misc.model.StockLevelByItem;

import com.coronago.misc.logic.StockLevelByItemBLBaseImpl;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public class StockLevelByItemBLImpl extends StockLevelByItemBLBaseImpl<StockLevelByItem> implements IStockLevelByItemBL<StockLevelByItem>{

	public StockLevelByItemBLImpl() {
		super(StockLevelByItem.class);
	}
	@Override
public PaginationResponse getStockLevelByItemAll_StockLevelByItem(PaginationRequest dataTable)
{
 	return super.getStockLevelByItemAll_StockLevelByItem(dataTable);
}


}