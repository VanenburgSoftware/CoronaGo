package com.coronago.misc.webservice;

import com.coronago.misc.model.StockInHospitalBase;

import com.eva.base.model.Primary;

import javax.ws.rs.core.Response;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IStockInHospitalService<T extends StockInHospitalBase> {
	public T createStockInHospital(T Obj);



public T updateStockInHospital(T Obj);



public T getStockInHospitalBySid(Primary sid);



public Response deleteStockInHospital(String ids);



public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable);


}