package com.coronago.misc.model;

import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.StockInHospitalPerimeter;

@Table(name = "StockInHospital", acl = @ACLProvider(value = StockInHospitalPerimeter.class))
public class StockInHospital extends StockInHospitalBase {
	private static final long serialVersionUID = 1L;
	private String itemId;

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
}
