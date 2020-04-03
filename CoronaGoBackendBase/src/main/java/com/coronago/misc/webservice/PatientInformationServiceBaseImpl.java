package com.coronago.misc.webservice;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.jersey.base.webservice.BaseWebService;
import com.coronago.misc.model.PatientInformationBase;

import com.coronago.misc.logic.IPatientInformationBLBase;

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
public abstract class PatientInformationServiceBaseImpl<BL extends IPatientInformationBLBase<M>, M extends PatientInformationBase>
		extends BaseWebService<BL, M> implements IPatientInformationService<M> {
	
	
	public PatientInformationServiceBaseImpl(BL logic) {
		super(logic);
	}
    @Override
	@PUT
	public M updatePatientInformation(M modelObj) {
		return super.update( modelObj);
	}



	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getPatientInformationBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}


	@Override
	@DELETE
	@Path("/{ids}")
	public Response deletePatientInformation(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public M createPatientInformation(M modelObj) {
		return super.save( modelObj);
	}

	
}
