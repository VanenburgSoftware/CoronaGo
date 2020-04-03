package com.coronago.misc.webservice;

import java.util.List;

import javax.ws.rs.core.Response;

import com.coronago.misc.model.MeetingTimeInfo;
import com.coronago.misc.model.MeetingsBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;

public interface IMeetingsService<T extends MeetingsBase> {
	public T updateMeetings(T Obj);

	public T createMeetings(T Obj);

	public T getMeetingsBySid(Primary sid);

	public Response deleteMeetings(String ids);

	public PaginationResponse getMeetingsAll_Meetings(String email,PaginationRequest dataTable);

	public T getScheduledMeetingForPatient(String email);

	public List<MeetingTimeInfo> getScheduledMeetingsForDoctor(Long date);

}