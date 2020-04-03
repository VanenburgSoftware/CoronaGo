package com.coronago.misc.webservice;

import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.coronago.misc.model.PatientQuestionaireBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;

public interface IPatientQuestionaireService<T extends PatientQuestionaireBase> {
	public PaginationResponse getPatientQuestionaireAll_MyPatientsNotScheduled(PaginationRequest dataTable);

	public T allPatientsScheduledFormNeedsConsultation(String id);

	public T createPatientQuestionaire(T Obj);

	public PaginationResponse getPatientQuestionaireAll_PatientQuestionaire(String email,PaginationRequest dataTable);

	public Response deletePatientQuestionaire(String ids);

	public PaginationResponse getPatientQuestionaireAll_MyPatientsScheduled(PaginationRequest dataTable);

	public T updatePatientQuestionaire(T Obj);

	public T myPatientsScheduledFormNeedsConsultation(String id);

	public T myPatientsScheduledRowNeedsConsultation(String id);

	public PaginationResponse getPatientQuestionaireAll_AllPatientsScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientQuestionaireAll_AllPatientsNotScheduled(PaginationRequest dataTable);

	public T getPatientQuestionaireBySid(Primary sid);

	public T allPatientsScheduledRowNeedsConsultation(String id);

	public T getCurrentDayPatientQuestionaire(@PathParam("email") String email);

	public T submitPatientQuestionaire(T modelObj);
}
