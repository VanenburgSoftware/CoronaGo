package com.coronago.misc.webservice;

import com.coronago.misc.model.PatientInformationBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;

import javax.ws.rs.core.Response;

public interface IPatientInformationService<T extends PatientInformationBase> {
	public T updatePatientInformation(T Obj);

	public T getPatientInformationBySid(Primary sid);

	public Response deletePatientInformation(String ids);

	public T createPatientInformation(T Obj);

	public PaginationResponse getPatientInformationAll_MyPatientsNotScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientInformationAll_MyPatientsScheduled(PaginationRequest dataTable);

	public PaginationResponse getPatientInformationAll_AllPatientsNotAssigned(PaginationRequest dataTable);

}