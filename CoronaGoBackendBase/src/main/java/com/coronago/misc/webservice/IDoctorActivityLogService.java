package com.coronago.misc.webservice;

import com.coronago.misc.model.DoctorActivityLogBase;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import javax.ws.rs.core.Response;

import com.eva.base.model.Primary;

public interface IDoctorActivityLogService<T extends DoctorActivityLogBase> {
	public T createDoctorActivityLog(T Obj);

	public PaginationResponse getDoctorActivityLogAll_DoctorActivityLog(PaginationRequest dataTable, Long createdDt);

	public T updateDoctorActivityLog(T Obj);

	public Response deleteDoctorActivityLog(String ids);

	public T getDoctorActivityLogBySid(Primary sid);

}