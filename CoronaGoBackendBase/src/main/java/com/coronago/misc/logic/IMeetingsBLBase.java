package com.coronago.misc.logic;

import com.eva.base.logic.ICRUDOperation;
import com.coronago.misc.model.MeetingsBase;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IMeetingsBLBase<T extends MeetingsBase> extends ICRUDOperation<T>{
	public PaginationResponse getMeetingsAll_Meetings(String email,PaginationRequest dataTable);


}