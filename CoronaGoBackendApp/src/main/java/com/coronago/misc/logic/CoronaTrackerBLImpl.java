package com.coronago.misc.logic;

import com.coronago.misc.model.CoronaTracker;

import com.coronago.misc.logic.CoronaTrackerBLBaseImpl;

public class CoronaTrackerBLImpl extends CoronaTrackerBLBaseImpl<CoronaTracker> implements ICoronaTrackerBL<CoronaTracker>{

	public CoronaTrackerBLImpl() {
		super(CoronaTracker.class);
	}
	
}