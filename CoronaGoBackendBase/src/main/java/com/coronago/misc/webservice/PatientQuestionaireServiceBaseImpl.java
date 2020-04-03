package com.coronago.misc.webservice;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.coronago.misc.logic.IPatientQuestionaireBLBase;
import com.coronago.misc.model.PatientQuestionaireBase;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;
import com.eva.jersey.base.webservice.BaseWebService;

@Produces(MediaType.APPLICATION_JSON)
public abstract class PatientQuestionaireServiceBaseImpl<BL extends IPatientQuestionaireBLBase<M>, M extends PatientQuestionaireBase>
		extends BaseWebService<BL, M> implements IPatientQuestionaireService<M> {
	public PatientQuestionaireServiceBaseImpl(BL logic) {
		super(logic);
	}

	@Override
	@POST
	@Path("/mypatientsnotscheduleds/datatable")
	public PaginationResponse getPatientQuestionaireAll_MyPatientsNotScheduled(PaginationRequest dataTable) {
		return logic.getPatientQuestionaireAll_MyPatientsNotScheduled(dataTable);
	}

	@Override
	@POST
	@Path("/form/allpatientsscheduled/needsconsultation/{id}")
	public M allPatientsScheduledFormNeedsConsultation(@PathParam("id") String id) {
		return logic.allPatientsScheduledFormNeedsConsultation(id);
	}

	@Override
	@POST
	public M createPatientQuestionaire(M modelObj) {
		return super.save(modelObj);
	}

	@Override
	@POST
	@Path("/patientquestionaires/datatable/{email}")
	public PaginationResponse getPatientQuestionaireAll_PatientQuestionaire(@PathParam("email")String email,PaginationRequest dataTable) {
		return logic.getPatientQuestionaireAll_PatientQuestionaire(email,dataTable);
	}

	@Override
	@DELETE
	@Path("/{ids}")
	public Response deletePatientQuestionaire(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}

	@Override
	@POST
	@Path("/mypatientsscheduleds/datatable")
	public PaginationResponse getPatientQuestionaireAll_MyPatientsScheduled(PaginationRequest dataTable) {
		return logic.getPatientQuestionaireAll_MyPatientsScheduled(dataTable);
	}

	@Override
	@PUT
	public M updatePatientQuestionaire(M modelObj) {
		return super.update(modelObj);
	}

	@Override
	@POST
	@Path("/form/mypatientsscheduled/needsconsultation/{id}")
	public M myPatientsScheduledFormNeedsConsultation(@PathParam("id") String id) {
		return logic.myPatientsScheduledFormNeedsConsultation(id);
	}

	@Override
	@POST
	@Path("/row/mypatientsscheduled/needsconsultation/{id}")
	public M myPatientsScheduledRowNeedsConsultation(@PathParam("id") String id) {
		return logic.myPatientsScheduledRowNeedsConsultation(id);
	}

	@Override
	@POST
	@Path("/allpatientsscheduleds/datatable")
	public PaginationResponse getPatientQuestionaireAll_AllPatientsScheduled(PaginationRequest dataTable) {
		return logic.getPatientQuestionaireAll_AllPatientsScheduled(dataTable);
	}

	@Override
	@POST
	@Path("/allpatientsnotscheduleds/datatable")
	public PaginationResponse getPatientQuestionaireAll_AllPatientsNotScheduled(PaginationRequest dataTable) {
		return logic.getPatientQuestionaireAll_AllPatientsNotScheduled(dataTable);
	}

	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public M getPatientQuestionaireBySid(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}

	@Override
	@POST
	@Path("/row/allpatientsscheduled/needsconsultation/{id}")
	public M allPatientsScheduledRowNeedsConsultation(@PathParam("id") String id) {
		return logic.allPatientsScheduledRowNeedsConsultation(id);
	}
}
