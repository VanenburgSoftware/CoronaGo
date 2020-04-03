package com.coronago.misc.logic;

import java.util.List;

import com.coronago.misc.model.MeetingTimeInfo;
import com.coronago.misc.model.MeetingsBase;

public interface IMeetingsBL<T extends MeetingsBase> extends IMeetingsBLBase<T> {
	
	public T getScheduledMeetingForPatient(String email);

	public List<MeetingTimeInfo> getScheduledMeetingsForDoctor(Long date);
	
	public T completeConsultation(T modelObj);

	public T completeConsultationWithMonitoring(T modelObj);
}
