package com.coronago.misc.model;

import com.eva.base.model.BaseModel;

public class HospitalBase extends BaseModel {

	private String hospitalId;
	private String hospitalName;

	public String getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(String hospitalId) {
		this.hospitalId = hospitalId;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
}
