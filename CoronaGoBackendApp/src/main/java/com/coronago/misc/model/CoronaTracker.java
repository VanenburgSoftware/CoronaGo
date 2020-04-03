package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.CoronaTrackerPerimeter;
@Table(name="CoronaTracker", acl = @ACLProvider(value = CoronaTrackerPerimeter.class))
public class CoronaTracker extends CoronaTrackerBase {
	

}