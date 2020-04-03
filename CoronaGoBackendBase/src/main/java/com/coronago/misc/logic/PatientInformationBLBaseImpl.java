package com.coronago.misc.logic;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.exception.ValidationError;
import com.coronago.misc.model.PatientInformationBase;

import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;

public class PatientInformationBLBaseImpl<T extends PatientInformationBase> extends BaseBusinessLogic<T>
		implements IPatientInformationBLBase<T> {
	public PatientInformationBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return new PersistenceType[] { PersistenceType.SEARCH };
	}

	@Override
	public final void onBeforeSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onBeforeSaveDB(modelObj);
			break;
		case SEARCH:
			onBeforeSaveSearch(modelObj);
			break;
		default:
			break;
		}
		super.onBeforeSave(type, modelObj);
	}

	public void onBeforeSaveSearch(T modelObj) {
		// TODO Auto-generated method stub

	}

	public void onBeforeSaveDB(T modelObj) {
		modelObj.setPatientHid(UUID.randomUUID().toString());
	}
	
	@Override
	public final void onBeforeUpdate(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onBeforeUpdateDB(modelObj);
			break;
		case SEARCH:
			onBeforeUpdateSearch(modelObj);
			break;
		default:
			break;
		}
		super.onBeforeUpdate(type, modelObj);
	}

	public void onBeforeUpdateSearch(T modelObj) {
		// TODO Auto-generated method stub
		
	}

	public void onBeforeUpdateDB(T modelObj) {
		if(StringUtils.isBlank(modelObj.getPatientHid())) {
			modelObj.setPatientHid(UUID.randomUUID().toString());
		}
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
	public final void onAfterSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterSaveDB(modelObj);
			break;
		case SEARCH:
			onAfterSaveSearch(modelObj);
			break;
		default:
			break;
		}
		super.onAfterSave(type, modelObj);
	}

	public void onAfterSaveSearch(T modelObj) {
		// TODO Auto-generated method stub
		
	}

	public void onAfterSaveDB(T modelObj) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public final void onAfterUpdate(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterUpdateDB(modelObj);
			break;
		case SEARCH:
			onAfterUpdateSearch(modelObj);
			break;
		default:
			break;
		}
		super.onAfterUpdate(type, modelObj);
	}

	public void onAfterUpdateSearch(T modelObj) {
		// TODO Auto-generated method stub
		
	}

	public void onAfterUpdateDB(T modelObj) {
		// TODO Auto-generated method stub
		
	}


}