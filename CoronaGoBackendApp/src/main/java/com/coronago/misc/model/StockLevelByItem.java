package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.StockLevelByItemPerimeter;
@Table(name="StockLevelByItem", acl = @ACLProvider(value = StockLevelByItemPerimeter.class))
public class StockLevelByItem extends StockLevelByItemBase {
	

}