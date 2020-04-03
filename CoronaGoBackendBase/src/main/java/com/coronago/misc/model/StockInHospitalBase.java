package com.coronago.misc.model;
import com.eva.base.model.BaseModel;



public class StockInHospitalBase extends BaseModel {

	private String item;
	private Long stockInHand;
	private Long stockRequired;

	public void setItem(String item) {
		this.item = item;
	}

	public String getItem() {
		return item;
	}

	public void setStockInHand(Long stockInHand) {
		this.stockInHand = stockInHand;
	}

	public Long getStockInHand() {
		return stockInHand;
	}

	public void setStockRequired(Long stockRequired) {
		this.stockRequired = stockRequired;
	}

	public Long getStockRequired() {
		return stockRequired;
	}


}