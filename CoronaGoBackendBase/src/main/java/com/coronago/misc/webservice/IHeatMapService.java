package com.coronago.misc.webservice;

import com.coronago.misc.model.HeatMapBase;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface IHeatMapService<T extends HeatMapBase> {
	public T updateHeatMap(T Obj);



public T createHeatMap(T Obj);



public Response deleteHeatMap(String ids);



public T getHeatMapBySid(Primary sid);


}