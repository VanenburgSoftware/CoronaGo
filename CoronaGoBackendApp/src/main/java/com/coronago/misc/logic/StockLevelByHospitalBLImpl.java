package com.coronago.misc.logic;

import com.coronago.misc.model.StockLevelByHospital;

import com.coronago.misc.logic.StockLevelByHospitalBLBaseImpl;

public class StockLevelByHospitalBLImpl extends StockLevelByHospitalBLBaseImpl<StockLevelByHospital> implements IStockLevelByHospitalBL<StockLevelByHospital>{

	public StockLevelByHospitalBLImpl() {
		super(StockLevelByHospital.class);
	}
	
}