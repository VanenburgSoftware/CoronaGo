package com.coronago.misc.logic;

import com.coronago.misc.model.PatientQuestionaireBase;
import com.eva.base.logic.ICRUDOperation;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public interface IPatientQuestionaireBLBase<T extends PatientQuestionaireBase> extends ICRUDOperation<T> {
	public PaginationResponse getPatientQuestionaireAll_MyPatientsNotScheduled(PaginationRequest dataTable);

	public T allPatientsScheduledFormNeedsConsultation(String id);

	public PaginationResponse getPatientQuestionaireAll_PatientQuestionaire(String email,PaginationRequest dataTable);

	public PaginationResponse getPatientQuestionaireAll_MyPatientsScheduled(PaginationRequest dataTable);

	public T myPatientsScheduledFormNeedsConsultation(String id);

	public T myPatientsScheduledRowNeedsConsultation(String id);

	public PaginationResponse getPatientQuestionaireAll_AllPatientsScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientQuestionaireAll_AllPatientsNotScheduled(PaginationRequest dataTable);

	public T allPatientsScheduledRowNeedsConsultation(String id);
}
