package com.coronago.misc.webservice;

import com.coronago.misc.model.StockLevelByHospitalBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface IStockLevelByHospitalService<T extends StockLevelByHospitalBase> {
	public Response deleteStockLevelByHospital(String ids);



public T getStockLevelByHospitalBySid(Primary sid);



public T createStockLevelByHospital(T Obj);



public T updateStockLevelByHospital(T Obj);


}