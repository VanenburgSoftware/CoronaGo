package com.coronago.bq.model;

public class StockBQ extends BQBaseObject {
	private String hospitalId;
	private String itemId;
	private Long stockInHand;
	private Long stockRequired;

	public String getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(String hospitalId) {
		this.hospitalId = hospitalId;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public Long getStockInHand() {
		return stockInHand;
	}

	public void setStockInHand(Long stockInHand) {
		this.stockInHand = stockInHand;
	}

	public Long getStockRequired() {
		return stockRequired;
	}

	public void setStockRequired(Long stockRequired) {
		this.stockRequired = stockRequired;
	}
}
