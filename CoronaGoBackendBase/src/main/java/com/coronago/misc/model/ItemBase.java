package com.coronago.misc.model;

import com.eva.base.model.BaseModel;

public class ItemBase extends BaseModel {

	private String itemId;
	private String itemName;

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

}
