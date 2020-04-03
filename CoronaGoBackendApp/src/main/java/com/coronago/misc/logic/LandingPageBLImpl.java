package com.coronago.misc.logic;

import com.coronago.misc.model.LandingPage;

import com.coronago.misc.logic.LandingPageBLBaseImpl;

public class LandingPageBLImpl extends LandingPageBLBaseImpl<LandingPage> implements ILandingPageBL<LandingPage>{

	public LandingPageBLImpl() {
		super(LandingPage.class);
	}
	
}