package com.coronago.misc.logic;

import java.util.List;

import com.coronago.misc.model.PatientQuestionaireBase;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.ValidationError;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public class PatientQuestionaireBLBaseImpl<T extends PatientQuestionaireBase> extends BaseBusinessLogic<T>
		implements IPatientQuestionaireBLBase<T> {
	public PatientQuestionaireBLBaseImpl(Class<T> modelClass) {
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

	public void onBeforeSaveDB(T modelObj) {}

	@Override
	public void onAfterSave(PersistenceType type, T modelObj) {
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

	public void onAfterSaveSearch(T modelObj) {}

	public void onAfterSaveDB(T modelObj) {}

	@Override
	public void onAfterUpdate(PersistenceType type, T modelObj) {
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

	public void onAfterUpdateSearch(T modelObj) {}

	public void onAfterUpdateDB(T modelObj) {}

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
	public PaginationResponse getPatientQuestionaireAll_MyPatientsNotScheduled(PaginationRequest dataTable) {
		return super.getAllByPage(dataTable);
	}

	@Override
	public T allPatientsScheduledFormNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_PatientQuestionaire(String email,PaginationRequest dataTable) {
		return super.getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_MyPatientsScheduled(PaginationRequest dataTable) {
		return super.getAllByPage(dataTable);
	}

	@Override
	public T myPatientsScheduledFormNeedsConsultation(String id) {
		return null;
	}

	@Override
	public T myPatientsScheduledRowNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_AllPatientsScheduled(PaginationRequest dataTable) {
		return super.getAllByPage(dataTable);
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_AllPatientsNotScheduled(PaginationRequest dataTable) {
		return super.getAllByPage(dataTable);
	}

	@Override
	public T allPatientsScheduledRowNeedsConsultation(String id) {
		return null;
	}
}
