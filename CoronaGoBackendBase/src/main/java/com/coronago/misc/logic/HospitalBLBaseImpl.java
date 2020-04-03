package com.coronago.misc.logic;

import java.util.List;

import com.coronago.misc.model.HospitalBase;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.ValidationError;
import com.eva.base.logic.BaseBusinessLogic;

public class HospitalBLBaseImpl<T extends HospitalBase> extends BaseBusinessLogic<T> implements IHospitalBLBase<T> {

	public HospitalBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public List<String> onBeforeGeneratedValidation() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void onAfterGeneratedValidation(List<ValidationError> validationErrors) {
		// TODO Auto-generated method stub

	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public final void onAfterSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterSaveDB(modelObj);
			break;

		default:
			break;
		}
		super.onAfterSave(type, modelObj);
	}

	@Override
	public final void onAfterUpdate(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterUpdateDB(modelObj);
			break;

		default:
			break;
		}
		super.onAfterUpdate(type, modelObj);
	}

	public void onAfterUpdateDB(T modelObj) {

	}

	public void onAfterSaveDB(T modelObj) {
		// TODO Auto-generated method stub

	}
}
