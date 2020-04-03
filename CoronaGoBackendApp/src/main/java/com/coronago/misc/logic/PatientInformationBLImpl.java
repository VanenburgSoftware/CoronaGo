package com.coronago.misc.logic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.coronago.bq.BQQueryParamReplacer;
import com.coronago.bq.BigQueryConfigOptions;
import com.coronago.bq.BigQueryManager;
import com.coronago.bq.QueryCache;
import com.coronago.bq.bdl.HospitalBQBDL;
import com.coronago.bq.bdl.PatientBQBDL;
import com.coronago.bq.model.BQQueryResult;
import com.coronago.misc.model.AppUserPrivileges;
import com.coronago.misc.model.Hospital;
import com.coronago.misc.model.PatientInformation;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.dal.Filter;
import com.eva.base.dal.SimpleFilter;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.NoAuthenticatedUserException;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.util.ErrorCode;
import com.google.cloud.bigquery.BigQuery;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;

public class PatientInformationBLImpl extends PatientInformationBLBaseImpl<PatientInformation>
		implements IPatientInformationBL<PatientInformation> {
	private static final Logger LOGGER = LoggerFactory.getLogger(PatientInformationBLImpl.class.getName());
	private AppUserPrivilegeCache<AppUserPrivileges> userCache =
			CacheManager.getInstance().getCache(IAppUserPrivilegeCache.NAME);

	public PatientInformationBLImpl() {
		super(PatientInformation.class);
	}

	@Override
	public PatientInformation getPatientInformationByEmail(String email) {
		return getByField("patientEmail", email);
	}

	@Override
	public PatientInformation updatePatientRiskscoreAndLevel(String email, double riskScore, String riskLevel,
			String reportId, String reportFileName) {
		PatientInformation pInfo = getPatientInformationByEmail(email);
		pInfo.setRiskScore(riskScore);
		pInfo.setRiskLevel(riskLevel);
		if (StringUtils.isBlank(pInfo.getStatus()) || pInfo.getStatus().equals("Risk score to be calculated")
				|| pInfo.getStatus().equals("Consultation completed (Weekly monitoring)")) {
			pInfo.setStatus("Risk self accessed");
		}
		if (StringUtils.isNoneEmpty(reportId)) pInfo.setReportId(reportId);
		if (StringUtils.isNoneEmpty(reportFileName)) pInfo.setReportFileName(reportFileName);
		if (pInfo.getStatus().equals("Risk score to be calculated")) {
			pInfo.setStatus("Risk self accessed");
		}
		return this.update(pInfo);
	}

	@Override
	public PatientInformation getPatientInformationByPatientId(String patientHid) {
		return getByField("patientHid", patientHid);
	}

	@Override
	public PaginationResponse getPatientInformationAll_MyPatientsNotScheduled(PaginationRequest dataTable) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		AppUserPrivileges currentUser = userCache.getCurrentUser();
		if (currentUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		filters.add(new SimpleFilter("docEmail", currentUser.getEmail()));
		filters.add(new SimpleFilter("status", "Consultation scheduled", Filter.Operator.NOT_EQUAL));
		dataTable.setFilters(filters);
		return getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public PaginationResponse getPatientInformationAll_MyPatientsScheduled(PaginationRequest dataTable) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		AppUserPrivileges currentUser = userCache.getCurrentUser();
		if (currentUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		filters.add(new SimpleFilter("docEmail", currentUser.getEmail()));
		filters.add(new SimpleFilter("status", "Consultation scheduled"));
		dataTable.setFilters(filters);
		return getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public PaginationResponse getPatientInformationAll_AllPatientsNotAssigned(PaginationRequest dataTable) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		filters.add(new SimpleFilter("docAssigned", false));
		filters.add(new SimpleFilter("status", "Risk self accessed"));
		dataTable.setFilters(filters);
		return getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public void needsConsultation(List<String> patientEmails) {
		AppUserPrivileges currentUser = userCache.getCurrentUser();
		if (currentUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		DoctorActivityLogBLImpl docActivityBLImpl = new DoctorActivityLogBLImpl();
		patientEmails.forEach(email -> {
			PatientInformation patientInfo = getPatientInformationByEmail(email);
			if (patientInfo != null) {
				patientInfo.setStatus("Consultation required");
				patientInfo.setDocEmail(currentUser.getEmail());
				patientInfo.setDocAssigned(true);
				update(patientInfo);
				docActivityBLImpl.updateNotScheduledPatients(patientInfo.getDocEmail());
			} else {
				LOGGER.error("Patient info not found for the user :" + email);
			}
		});
	}

	public void onAfterUpdateDB(PatientInformation modelObj) {
		PatientBQBDL hospitalBQBDL = new PatientBQBDL();
		hospitalBQBDL.saveFSObject(modelObj);
		super.onAfterUpdateDB(modelObj);
	}

	public void onAfterSaveDB(PatientInformation modelObj) {
		PatientBQBDL patientBQBDL = new PatientBQBDL();
		patientBQBDL.saveFSObject(modelObj);
		super.onAfterSaveDB(modelObj);
	}

	@Override
	public List<LinkedHashMap<String, Object>> getHeatMapData() {
		try {
			BigQuery bigquery = BigQueryManager.authorize();
			BQQueryResult result = null;
			CacheManager cacheManager = CacheManager.getInstance();
			AppConfigurationCache configCache = cacheManager.getCache(AppConfigurationCache.NAME);
			QueryCache queryCache = cacheManager.getCache(QueryCache.NAME);
			String query = queryCache.get("heat_map");
			Map<String, Object> queryParameters = new HashMap<String, Object>();
			queryParameters.put("DATASET", configCache.get("bigquery_dataset"));
			query = BQQueryParamReplacer.replaceQueryParams(query, queryParameters);
			Map<BigQueryConfigOptions, Object> options = new HashMap<>();
			options.put(BigQueryConfigOptions.USE_LEGACY_SQL, false);
			result = BigQueryManager.executeBigQuery(bigquery, query,null,null,null,options);
			if (result == null || result.getData() == null) { return Collections.emptyList(); }
			return result.getData();
		} catch (Exception e) {
			LOGGER.error("Exception in getStockInfoByItem", e);
		}
		return Collections.emptyList();
	}
}
