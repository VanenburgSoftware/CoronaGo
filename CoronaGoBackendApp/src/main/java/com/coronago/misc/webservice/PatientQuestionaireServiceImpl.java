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

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.coronago.misc.logic.IPatientQuestionaireBL;
import com.coronago.misc.logic.PatientQuestionaireBLImpl;
import com.coronago.misc.model.PatientQuestionaire;
import com.eva.base.factory.InstanceFactory;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;

@Produces(MediaType.APPLICATION_JSON)
@Path("patientquestionaires")
public class PatientQuestionaireServiceImpl
		extends PatientQuestionaireServiceBaseImpl<IPatientQuestionaireBL<PatientQuestionaire>, PatientQuestionaire> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(PatientQuestionaireServiceImpl.class);

	public PatientQuestionaireServiceImpl() {
		super(InstanceFactory.getProxy(new PatientQuestionaireBLImpl()));
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
	public PatientQuestionaire allPatientsScheduledFormNeedsConsultation(@PathParam("id") String id) {
		return logic.allPatientsScheduledFormNeedsConsultation(id);
	}

	@Override
	@POST
	public PatientQuestionaire createPatientQuestionaire(PatientQuestionaire modelObj) {
		return super.createPatientQuestionaire(modelObj);
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
	public PatientQuestionaire updatePatientQuestionaire(PatientQuestionaire modelObj) {
		return super.updatePatientQuestionaire(modelObj);
	}

	@Override
	@POST
	@Path("/form/mypatientsscheduled/needsconsultation/{id}")
	public PatientQuestionaire myPatientsScheduledFormNeedsConsultation(@PathParam("id") String id) {
		return logic.myPatientsScheduledFormNeedsConsultation(id);
	}

	@Override
	@POST
	@Path("/row/mypatientsscheduled/needsconsultation/{id}")
	public PatientQuestionaire myPatientsScheduledRowNeedsConsultation(@PathParam("id") String id) {
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
	public PatientQuestionaire getPatientQuestionaireBySid(@PathParam("sid") Primary sid) {
		return super.getPatientQuestionaireBySid(sid);
	}

	@Override
	@POST
	@Path("/row/allpatientsscheduled/needsconsultation/{id}")
	public PatientQuestionaire allPatientsScheduledRowNeedsConsultation(@PathParam("id") String id) {
		return logic.allPatientsScheduledRowNeedsConsultation(id);
	}

	@GET
	@Path("/currentday/{email}")
	public PatientQuestionaire getCurrentDayPatientQuestionaire(@PathParam("email") String email) {
		return logic.getCurrentDayPatientQuestionaire(email);
	}

	@POST
	@Path("/submit")
	public PatientQuestionaire submitPatientQuestionaire(PatientQuestionaire modelObj) {
		return logic.submitPatientQuestionaire(modelObj);
	}
}
