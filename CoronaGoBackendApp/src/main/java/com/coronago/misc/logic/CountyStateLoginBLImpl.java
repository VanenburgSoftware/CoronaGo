package com.coronago.misc.logic;

import com.coronago.misc.model.CountyStateLogin;

import com.coronago.misc.logic.CountyStateLoginBLBaseImpl;

public class CountyStateLoginBLImpl extends CountyStateLoginBLBaseImpl<CountyStateLogin> implements ICountyStateLoginBL<CountyStateLogin>{

	public CountyStateLoginBLImpl() {
		super(CountyStateLogin.class);
	}
	
}