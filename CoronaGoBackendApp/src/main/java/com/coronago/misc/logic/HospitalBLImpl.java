package com.coronago.misc.logic;

import com.coronago.bq.bdl.HospitalBQBDL;
import com.coronago.misc.model.Hospital;

public class HospitalBLImpl extends HospitalBLBaseImpl<Hospital> implements IHospitalBL<Hospital> {
	public HospitalBLImpl() {
		super(Hospital.class);
	}

	public void onAfterUpdateDB(Hospital modelObj) {
		HospitalBQBDL hospitalBQBDL = new HospitalBQBDL();
		hospitalBQBDL.saveFSObject(modelObj);
		super.onAfterUpdateDB(modelObj);
	}

	public void onAfterSaveDB(Hospital modelObj) {
		HospitalBQBDL itemBQBDL = new HospitalBQBDL();
		itemBQBDL.saveFSObject(modelObj);
		super.onAfterSaveDB(modelObj);
	}
}
