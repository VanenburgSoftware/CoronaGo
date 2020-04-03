package com.coronago.misc.logic;

import com.coronago.misc.model.HeatMap;

import com.coronago.misc.logic.HeatMapBLBaseImpl;

public class HeatMapBLImpl extends HeatMapBLBaseImpl<HeatMap> implements IHeatMapBL<HeatMap>{

	public HeatMapBLImpl() {
		super(HeatMap.class);
	}
	
}