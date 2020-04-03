package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.StockLevelByHospitalPerimeter;
@Table(name="StockLevelByHospital", acl = @ACLProvider(value = StockLevelByHospitalPerimeter.class))
public class StockLevelByHospital extends StockLevelByHospitalBase {
	

}