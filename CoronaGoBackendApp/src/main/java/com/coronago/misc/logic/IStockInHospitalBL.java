package com.coronago.misc.logic;

import java.util.LinkedHashMap;
import java.util.List;

import com.coronago.misc.model.StockInHospitalBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public interface IStockInHospitalBL<T extends StockInHospitalBase> extends IStockInHospitalBLBase<T> {
	public List<LinkedHashMap<String, Object>> getStockInfoByHospital(String hospitalId);

	public PaginationResponse getStockInfoByItem(PaginationRequest request,String itemId);
}
