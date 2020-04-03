package com.coronago.misc.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;
import com.coronago.misc.model.MeetingTimeInfo;
import com.coronago.misc.model.Meetings;
import com.coronago.misc.model.PatientInformation;
import com.coronago.misc.logic.IMeetingsBL;

import com.coronago.misc.logic.MeetingsBLImpl;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.coronago.misc.logic.IMeetingsBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.core.Response;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

@Produces(MediaType.APPLICATION_JSON)
@Path("meetings")
public class MeetingsServiceImpl extends MeetingsServiceBaseImpl<IMeetingsBL<Meetings>, Meetings> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(MeetingsServiceImpl.class);
	public MeetingsServiceImpl() {
		super(InstanceFactory.getProxy(new MeetingsBLImpl()));
	}
    @Override
	@PUT
	public Meetings updateMeetings(Meetings modelObj) {
		return super.updateMeetings( modelObj);
	}



	@Override
	@POST
	public Meetings createMeetings(Meetings modelObj) {
		return super.createMeetings( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public Meetings getMeetingsBySid(@PathParam("sid") Primary sid) {
		return super.getMeetingsBySid(sid);
	}


	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteMeetings(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}

	@GET
	@Path("/scheduled/{email}")
	public Meetings getScheduledMeetingForPatient(@PathParam("email") String email) {
		return logic.getScheduledMeetingForPatient(email);
	}

	@Override
	@POST
	@Path("/meetings/datatable/{email}")
	public PaginationResponse getMeetingsAll_Meetings(@PathParam("email") String email,PaginationRequest dataTable)
	{
	 	return logic.getMeetingsAll_Meetings(email,dataTable);
	}
	
	@Override
	@GET
	@Path("/alreadyscheduled/{date}")
	public List<MeetingTimeInfo> getScheduledMeetingsForDoctor(@PathParam("date") Long date) {
		return logic.getScheduledMeetingsForDoctor(date);
	}
	
	@PUT
	@Path("/completeconsultation")
	public Meetings completeConsultation(Meetings meetings) {
		return logic.completeConsultation(meetings);
	}

	@PUT
	@Path("/completeconsultationwithmonitoring")
	public Meetings completeConsultationWithMonitoring(Meetings meetings) {
		return logic.completeConsultationWithMonitoring(meetings);
	}
}
