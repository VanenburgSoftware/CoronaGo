package com.coronago.misc.logic;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.exception.ValidationError;
import com.coronago.misc.model.StockLevelByItemBase;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;


public class StockLevelByItemBLBaseImpl<T extends StockLevelByItemBase> extends BaseBusinessLogic<T>
		implements IStockLevelByItemBLBase<T> {
	public StockLevelByItemBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return null;
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

	public void onBeforeSaveDB(T modelObj) {}
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
public PaginationResponse getStockLevelByItemAll_StockLevelByItem(PaginationRequest dataTable)
{
 	return super.getAllByPage(dataTable);
}


}