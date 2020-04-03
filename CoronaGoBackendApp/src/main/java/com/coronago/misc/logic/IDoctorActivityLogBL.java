package com.coronago.misc.logic;

import com.coronago.misc.model.DoctorActivityLogBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public interface IDoctorActivityLogBL<T extends DoctorActivityLogBase> extends IDoctorActivityLogBLBase<T> {
	PaginationResponse getDoctorActivityLogAll_DoctorActivityLog(PaginationRequest dataTable, Long createdDt);

	T getDoctorActivityLogForCurrentDay(String doctorEmail);

	T updateNotScheduledPatients(String doctorEmail);

	T updateScheduledPatients(String doctorEmail);

	T updateConsultationCompleted(String doctorEmail);
}
