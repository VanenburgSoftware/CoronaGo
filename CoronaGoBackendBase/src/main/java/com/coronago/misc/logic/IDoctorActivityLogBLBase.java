package com.coronago.misc.logic;

import com.eva.base.logic.ICRUDOperation;
import com.coronago.misc.model.DoctorActivityLogBase;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IDoctorActivityLogBLBase<T extends DoctorActivityLogBase> extends ICRUDOperation<T>{
	public PaginationResponse getDoctorActivityLogAll_DoctorActivityLog(PaginationRequest dataTable);


}