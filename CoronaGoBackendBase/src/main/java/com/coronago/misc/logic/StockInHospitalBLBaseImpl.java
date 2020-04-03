package com.coronago.misc.logic;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.exception.ValidationError;
import com.coronago.misc.model.StockInHospitalBase;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public class StockInHospitalBLBaseImpl<T extends StockInHospitalBase> extends BaseBusinessLogic<T>
		implements IStockInHospitalBLBase<T> {
	public StockInHospitalBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return new PersistenceType[] {PersistenceType.SEARCH};
	}

	@Override
	public final void onBeforeSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onBeforeSaveDB(modelObj);
			break;
		default:
			break;
		}
		super.onBeforeSave(type, modelObj);
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

	public void onBeforeSaveDB(T modelObj) {
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
	public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable) {
		return super.getAllByPage(PersistenceType.SEARCH,dataTable);
	}

}