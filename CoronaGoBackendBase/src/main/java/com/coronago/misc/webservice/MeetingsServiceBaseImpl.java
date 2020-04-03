package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.MeetingsBase;

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

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

@Produces(MediaType.APPLICATION_JSON)
public abstract class MeetingsServiceBaseImpl<BL extends IMeetingsBLBase<M>, M extends MeetingsBase>
		extends BaseWebService<BL, M> implements IMeetingsService<M> {
	
	
	public MeetingsServiceBaseImpl(BL logic) {
		super(logic);
	}
    @Override
	@PUT
	public M updateMeetings(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@POST
	public M createMeetings(M modelObj) {
		return super.save( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getMeetingsBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
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


	@Override
	@POST
	@Path("/meetings/datatable/{email}")
	public PaginationResponse getMeetingsAll_Meetings(@PathParam("email") String email,PaginationRequest dataTable)
	{
	 	return logic.getMeetingsAll_Meetings(email,dataTable);
	}


	
}
