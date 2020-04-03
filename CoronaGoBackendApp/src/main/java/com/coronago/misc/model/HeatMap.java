package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.HeatMapPerimeter;
@Table(name="HeatMap", acl = @ACLProvider(value = HeatMapPerimeter.class))
public class HeatMap extends HeatMapBase {
	

}