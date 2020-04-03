package com.coronago.misc.logic;

import com.coronago.misc.model.HomeScreen;

import com.coronago.misc.logic.HomeScreenBLBaseImpl;

public class HomeScreenBLImpl extends HomeScreenBLBaseImpl<HomeScreen> implements IHomeScreenBL<HomeScreen>{

	public HomeScreenBLImpl() {
		super(HomeScreen.class);
	}
	
}