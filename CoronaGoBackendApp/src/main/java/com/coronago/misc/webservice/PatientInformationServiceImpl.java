package com.coronago.misc.webservice;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.coronago.misc.logic.IPatientInformationBL;
import com.coronago.misc.logic.PatientInformationBLImpl;
import com.coronago.misc.logic.TasksBLImpl;
import com.coronago.misc.model.PatientInformation;
import com.coronago.misc.model.Tasks;
import com.eva.base.factory.InstanceFactory;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.model.Primary;
import com.eva.base.util.Constants;
import com.google.appengine.api.taskqueue.Queue;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.JobException;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;

@Produces(MediaType.APPLICATION_JSON)
@Path("patientinformations")
public class PatientInformationServiceImpl
		extends PatientInformationServiceBaseImpl<IPatientInformationBL<PatientInformation>, PatientInformation> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(PatientInformationServiceImpl.class);

	public PatientInformationServiceImpl() {
		super(InstanceFactory.getProxy(new PatientInformationBLImpl()));
	}

	@Override
	@PUT
	public PatientInformation updatePatientInformation(PatientInformation modelObj) {
		return super.updatePatientInformation(modelObj);
	}

	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public PatientInformation getPatientInformationBySid(@PathParam("sid") Primary sid) {
		return super.getPatientInformationBySid(sid);
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
	public PatientInformation createPatientInformation(PatientInformation modelObj) {
		return super.createPatientInformation(modelObj);
	}

	@GET
	@Path("/email/{email}")
	public PatientInformation getPatientInformationByEmail(@PathParam("email") String email) {
		return logic.getPatientInformationByEmail(email);
	}

	@Override
	@POST
	@Path("/mypatientsscheduleds/datatable")
	public PaginationResponse getPatientInformationAll_MyPatientsScheduled(PaginationRequest dataTable) {
		return logic.getPatientInformationAll_MyPatientsScheduled(dataTable);
	}

	@Override
	@POST
	@Path("/mypatientsnotscheduleds/datatable")
	public PaginationResponse getPatientInformationAll_MyPatientsNotScheduled(PaginationRequest dataTable) {
		return logic.getPatientInformationAll_MyPatientsNotScheduled(dataTable);
	}

	@Override
	@POST
	@Path("/allpatientsnotassigned/datatable")
	public PaginationResponse getPatientInformationAll_AllPatientsNotAssigned(PaginationRequest dataTable) {
		return logic.getPatientInformationAll_AllPatientsNotAssigned(dataTable);
	}

	@PUT
	@Path("/needsconsultation")
	public Response needsConsultation(String patientEmails) {
		if (StringUtils.isBlank(patientEmails)) {
			// TODO throw exception
		}
		logic.needsConsultation(Arrays.asList(patientEmails.split(",")));
		return Response.ok().build();
	}

	@GET
	@Path("/testtask")
	public Response testTask() {
		TasksBLImpl tasksBLImpl = new TasksBLImpl();
		Tasks task = new Tasks();
		task.setQueue_name(Queue.DEFAULT_QUEUE);
		task.setType("test_task");
		tasksBLImpl.save(task);
		return Response.ok(task.getSid()).build();
	}
	
	@GET
	@Path("/heatmap")
	public List<LinkedHashMap<String, Object>> getHeatMapData() {
		return logic.getHeatMapData();
	}
	/*
	 * @GET
	 * 
	 * @Path("/testbq/{email}") public Response testBQ(@PathParam("email") String email) { TestBQBDL
	 * testBQBL = new TestBQBDL(); PatientInformation patient =
	 * logic.getPatientInformationByEmail(email); testBQBL.saveFSObject(patient); return
	 * Response.ok().build(); }
	 * 
	 * @GET
	 * 
	 * @Path("/testbqquery") public Response testBQQuery() { try { BigQuery bigquery =
	 * BigQueryManager.authorize(); BQQueryResult result = null; CacheManager cacheManager =
	 * CacheManager.getInstance(); AppConfigurationCache configCache =
	 * cacheManager.getCache(AppConfigurationCache.NAME); QueryCache queryCache =
	 * cacheManager.getCache(QueryCache.NAME); String query = queryCache.get("test_bq"); Map<String,
	 * Object> queryParameters = new HashMap<String, Object>(); queryParameters.put("DATASET",
	 * configCache.get("bigquery_dataset")); query = BQQueryParamReplacer.replaceQueryParams(query,
	 * queryParameters); try { result = BigQueryManager.executeBigQuery(bigquery, query); if (result !=
	 * null && result.getTotal().intValue() > 0) { List<LinkedHashMap<String, Object>> results =
	 * result.getData(); for (LinkedHashMap<String, Object> resultTmp : results) {
	 * LOGGER.info("Result :" + resultTmp); } } } catch (JobException e) { // TODO Auto-generated catch
	 * block e.printStackTrace(); } catch (InterruptedException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } } catch (IOException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } catch (URISyntaxException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } catch (GeneralSecurityException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); } return Response.ok().build(); }
	 */
}
