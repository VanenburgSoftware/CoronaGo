package com.coronago.misc.logic;

import java.util.LinkedHashMap;
import java.util.List;

import com.coronago.misc.model.PatientInformationBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public interface IPatientInformationBL<T extends PatientInformationBase> extends IPatientInformationBLBase<T> {
	public T getPatientInformationByEmail(String email);

	public T getPatientInformationByPatientId(String patientHid);

	public T updatePatientRiskscoreAndLevel(String patientHid, double riskScore, String riskLevel, String reportId,
			String reportFileName);

	public void needsConsultation(List<String> patientEmails);

	public PaginationResponse getPatientInformationAll_MyPatientsNotScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientInformationAll_MyPatientsScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientInformationAll_AllPatientsNotAssigned(PaginationRequest dataTable);
	
	public List<LinkedHashMap<String, Object>> getHeatMapData();
}
