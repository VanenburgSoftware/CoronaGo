package com.coronago.misc.logic;

import com.eva.base.logic.ICRUDOperation;
import com.coronago.misc.model.StockInHospitalBase;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IStockInHospitalBLBase<T extends StockInHospitalBase> extends ICRUDOperation<T>{
	public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable);


}