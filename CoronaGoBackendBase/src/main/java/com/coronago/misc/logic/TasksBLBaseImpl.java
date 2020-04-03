package com.coronago.misc.logic;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.coronago.misc.enums.TasksStatus;
import com.coronago.misc.model.TasksBase;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.ValidationError;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.logic.BaseBusinessLogic;

public class TasksBLBaseImpl<T extends TasksBase> extends BaseBusinessLogic<T> implements ITasksBLBase<T> {
	private static final Logger LOGGER = LoggerFactory.getLogger(TasksBLBaseImpl.class.getName());

	public TasksBLBaseImpl(Class<T> modelClass) {
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

	public void onAfterSaveDB(T modelObj) {
	}

	public void onBeforeSaveDB(T modelObj) {
		modelObj.setQueue_status(TasksStatus.CREATION_PENDING.toString());
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

}