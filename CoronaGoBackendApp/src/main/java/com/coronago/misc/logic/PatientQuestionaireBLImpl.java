package com.coronago.misc.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.coronago.misc.model.PatientInformation;
import com.coronago.misc.model.PatientQuestionaire;
import com.coronago.util.DateUtil;
import com.coronago.util.PDFGenerationUtil;
import com.coronago.util.ReportSymptoms;
import com.coronago.util.RiskLevel;
import com.eva.base.dal.CompositeFilter;
import com.eva.base.dal.Filter;
import com.eva.base.dal.SimpleFilter;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;

public class PatientQuestionaireBLImpl extends PatientQuestionaireBLBaseImpl<PatientQuestionaire>
		implements IPatientQuestionaireBL<PatientQuestionaire> {
	public PatientQuestionaireBLImpl() {
		super(PatientQuestionaire.class);
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_MyPatientsNotScheduled(PaginationRequest dataTable) {
		return super.getPatientQuestionaireAll_MyPatientsNotScheduled(dataTable);
	}

	@Override
	public PatientQuestionaire allPatientsScheduledFormNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_PatientQuestionaire(String email, PaginationRequest dataTable) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		filters.add(new SimpleFilter("patientEmail", email));
		dataTable.setFilters(filters);
		return getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_MyPatientsScheduled(PaginationRequest dataTable) {
		return super.getPatientQuestionaireAll_MyPatientsScheduled(dataTable);
	}

	@Override
	public PatientQuestionaire myPatientsScheduledFormNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PatientQuestionaire myPatientsScheduledRowNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_AllPatientsScheduled(PaginationRequest dataTable) {
		return super.getPatientQuestionaireAll_AllPatientsScheduled(dataTable);
	}

	@Override
	public PaginationResponse getPatientQuestionaireAll_AllPatientsNotScheduled(PaginationRequest dataTable) {
		return super.getPatientQuestionaireAll_AllPatientsNotScheduled(dataTable);
	}

	@Override
	public PatientQuestionaire allPatientsScheduledRowNeedsConsultation(String id) {
		return null;
	}

	@Override
	public PatientQuestionaire getCurrentDayPatientQuestionaire(String email) {
		Filter currentDateFilter =
				new SimpleFilter("createdDate", DateUtil.getStartOfCurrentDay(), Filter.Operator.GREATER_THAN_OR_EQUAL);
		Filter emailFilter = new SimpleFilter("patientEmail", email);
		Filter filter = CompositeFilter.and().add(currentDateFilter, emailFilter);
		List<Filter> filters = new ArrayList<Filter>(1);
		filters.add(filter);
		List<PatientQuestionaire> resultList = getAll(filters);
		if (resultList == null || resultList.size() == 0) { return null; }
		return resultList.get(0);
	}

	public PatientQuestionaire submitPatientQuestionaire(PatientQuestionaire modelObj) {
		Object[] riskScoreAndLevel = getRiskScoreAndLevel(modelObj);
		modelObj.setRiskScore((Double) riskScoreAndLevel[0]);
		modelObj.setRiskLevel(((RiskLevel) riskScoreAndLevel[1]).name());
		save(modelObj);
		if (riskScoreAndLevel[1] == RiskLevel.High || riskScoreAndLevel[1] == RiskLevel.Medium)
			generateSosReport(modelObj);
		update(modelObj);
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		patientBL.updatePatientRiskscoreAndLevel(modelObj.getPatientEmail(), modelObj.getRiskScore(),
				modelObj.getRiskLevel(), modelObj.getReportId(), modelObj.getReportFileName());
		return modelObj;
	}

	public Object[] getRiskScoreAndLevel(PatientQuestionaire pq) {
		Object[] results = new Object[2];
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		PatientInformation patient = patientBL.getPatientInformationByEmail(pq.getPatientEmail());
		double riskScore = 0;
		RiskLevel rLevel = RiskLevel.Low;
		if (pq.isFever()) riskScore += 8.8;
		riskScore += getDurationBasedRiskScore(pq.getFeverDuration());
		if (pq.isCough()) riskScore += 6.8;
		riskScore += getDurationBasedRiskScore(pq.getCoughDuration());
		if (pq.isCoughWithMucus()) riskScore += 3.3;
		riskScore += getDurationBasedRiskScore(pq.getCoughtWithMucusDuration());
		if (pq.isFatigue()) riskScore += 3.8;
		riskScore += getDurationBasedRiskScore(pq.getFatigueDuration());
		if (pq.isSoreThroat()) riskScore += 1.4;
		riskScore += getDurationBasedRiskScore(pq.getSoreThroatDuration());
		if (pq.isDifficultyInBreathing()) riskScore += 1.9;
		riskScore += getDurationBasedRiskScore(pq.getDibDuration());
		if (pq.isMuscleAches()) riskScore += 1.5;
		riskScore += getDurationBasedRiskScore(pq.getMuscleAchesDuration());
		if (pq.isHeadAche()) riskScore += 1.4;
		riskScore += getDurationBasedRiskScore(pq.getHeadAcheDuration());
		if (pq.isChills()) riskScore += 1.1;
		riskScore += getDurationBasedRiskScore(pq.getChillsDuration());
		if (pq.isNausea()) riskScore += 0.5;
		riskScore += getDurationBasedRiskScore(pq.getNauseaDuration());
		if (pq.isNasalCongestion()) riskScore += 0.5;
		riskScore += getDurationBasedRiskScore(pq.getNasalCongestionDuration());
		if (pq.isDiarrhea()) riskScore += 0.4;
		riskScore += getDurationBasedRiskScore(pq.getDiarrheaDuration());
		if (riskScore > 0 && riskScore <= 0.9) rLevel = RiskLevel.Low;
		if (riskScore >= 0.91 && riskScore <= 5) rLevel = RiskLevel.Medium;
		if (riskScore > 5) rLevel = RiskLevel.High;
		rLevel = upgradeRiskLevelBy(getLevelUpCriteriaBasedOnPreExistingCondition(patient), rLevel);
		rLevel = upgradeRiskLevelBy(getLevelUpCriteriaBasedOnPatientInformation(patient), rLevel);
		results[0] = riskScore;
		results[1] = rLevel;
		return results;
	}

	public int getDurationBasedRiskScore(String duration) {
		if (duration == null || duration.equalsIgnoreCase("0-3 days")) {
			return 0;
		} else if (duration.equalsIgnoreCase("3-7 days")) {
			return 1;
		} else if (duration.equalsIgnoreCase(">7 days")) { return 2; }
		return 0;
	}

	private RiskLevel upgradeRiskLevelBy(int numOfLevels, RiskLevel currentLevel) {
		switch (currentLevel) {
			case Low:
				if (numOfLevels == 1) return RiskLevel.Medium;
				if (numOfLevels >= 1) return RiskLevel.High;
				break;
			case Medium:
				if (numOfLevels >= 1) return RiskLevel.High;
				break;
			case High:
				if (numOfLevels >= 0) return RiskLevel.High;
				break;
		}
		return currentLevel;
	}

	private int getLevelUpCriteriaBasedOnPreExistingCondition(PatientInformation pi) {
		int preExistingConditionalScore = 0;
		if (pi.isDiabetes()) preExistingConditionalScore += 1;
		if (pi.isHighBloodPressure()) preExistingConditionalScore += 1;
		if (pi.isAsthma()) preExistingConditionalScore += 1;
		if (pi.isHeartDisease()) preExistingConditionalScore += 1;
		if (pi.isImmunocompromised()) preExistingConditionalScore += 1;
		if (preExistingConditionalScore == 1) return 1;
		if (preExistingConditionalScore >= 2) return 2;
		return 0;
	}

	private int getLevelUpCriteriaBasedOnPatientInformation(PatientInformation pi) {
		int patientInfoScore = 0;
		if (pi.isTravelledRecently()) patientInfoScore += 1;
		if (pi.isMemberInHouseholdTravelledRecently()) patientInfoScore += 1;
		if (pi.isAreYouAHealthcareWorker()) patientInfoScore += 1;
		if (pi.isMemberInHouseholdAHealthcareWorker()) patientInfoScore += 1;
		if (pi.isAirportStaff()) patientInfoScore += 1;
		if (pi.isMemberInHouseholdAAirportStaff()) patientInfoScore += 1;
		if (pi.isDoYouWorkInCrowdedAreasLikeMallEtc()) patientInfoScore += 1;
		if (pi.isDoesMemberInHouseholdWorkInCrowdedArea()) patientInfoScore += 1;
		if (pi.getBloodGroup().startsWith("A")) patientInfoScore += 1;
		if (patientInfoScore >= 3) return 1;
		if (patientInfoScore >= 6) return 2;
		return 0;
	}

	@Override
	public void generateSosReport(PatientQuestionaire pq) {
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		PatientInformation pInfo = patientBL.getPatientInformationByEmail(pq.getPatientEmail());
		if (StringUtils.isAllBlank(pInfo.getRiskLevel())) {
			// TODO Create Exception
			return;
		}
		Map<String, Object> parameterMap = new HashMap<>();
		parameterMap.put("riskLevel", getRiskBasedReportString(pInfo.getRiskLevel()));
		parameterMap.put("patientName", pInfo.getPatientName());
		parameterMap.put("patientAge", pInfo.getAge());
		parameterMap.put("sex", pInfo.getGender());
		parameterMap.put("address", pInfo.getAddress());
		parameterMap.put("SYMPTOMS_LIST", getPatientSymptomsList(pq));
		parameterMap.put("OTHER_INFO_LIST", getPatientInformationList(pInfo));
		PDFGenerationUtil generationUtil = new PDFGenerationUtil();
		generationUtil.generateSOSReportPDF(pq, parameterMap);
	}

	private String getRiskBasedReportString(String rLevelStr) {
		RiskLevel rLevel = RiskLevel.valueOf(rLevelStr);
		switch (rLevel) {
			case High:
				return "High Risk Individual";
			case Medium:
				return "Medium Risk Individual";
			case Low:
				return "Low Risk Individual";
		}
		return null;
	}

	private List<ReportSymptoms> getPatientSymptomsList(PatientQuestionaire pq) {
		List<ReportSymptoms> symptoms_list = new ArrayList<>();
		if (pq.isFever()) symptoms_list.add(new ReportSymptoms("Fever", pq.getFeverDuration()));
		if (pq.isCough()) symptoms_list.add(new ReportSymptoms("Cough", pq.getCoughDuration()));
		if (pq.isCoughWithMucus())
			symptoms_list.add(new ReportSymptoms("Cough With Mucus", pq.getCoughtWithMucusDuration()));
		if (pq.isFatigue()) symptoms_list.add(new ReportSymptoms("Fatigue", pq.getFatigueDuration()));
		if (pq.isSoreThroat()) symptoms_list.add(new ReportSymptoms("Sore Throat", pq.getSoreThroatDuration()));
		if (pq.isDifficultyInBreathing())
			symptoms_list.add(new ReportSymptoms("Difficulty In Breathing", pq.getDibDuration()));
		if (pq.isMuscleAches()) symptoms_list.add(new ReportSymptoms("Muscle Aches", pq.getMuscleAchesDuration()));
		if (pq.isHeadAche()) symptoms_list.add(new ReportSymptoms("Head Ache", pq.getHeadAcheDuration()));
		if (pq.isChills()) symptoms_list.add(new ReportSymptoms("Chills", pq.getChillsDuration()));
		if (pq.isNausea()) symptoms_list.add(new ReportSymptoms("Nausea", pq.getNauseaDuration()));
		if (pq.isNasalCongestion())
			symptoms_list.add(new ReportSymptoms("Nasal Congestion", pq.getNasalCongestionDuration()));
		if (pq.isDiarrhea()) symptoms_list.add(new ReportSymptoms("Diarrhea", pq.getDiarrheaDuration()));
		return symptoms_list;
	}

	private List<String> getPatientInformationList(PatientInformation pi) {
		List<String> information_list = new ArrayList<>();
		if (pi.isDiabetes()) information_list.add("Diabetic");
		if (pi.isHighBloodPressure()) information_list.add("High Blood Pressure");
		if (pi.isAsthma()) information_list.add("Asthma");
		if (pi.isHeartDisease()) information_list.add("Heart Disease");
		if (pi.isImmunocompromised()) information_list.add("Cancer");
		if (pi.isTravelledRecently()) information_list.add("Travelled Recently");
		if (pi.isMemberInHouseholdTravelledRecently()) information_list.add("Member in Household Travelled");
		if (pi.isAreYouAHealthcareWorker()) information_list.add("Healthcare Worker");
		if (pi.isMemberInHouseholdAHealthcareWorker())
			information_list.add("Member in Household Works For Health Care");
		if (pi.isAirportStaff()) information_list.add("Airport Staff");
		if (pi.isMemberInHouseholdAAirportStaff()) information_list.add("Member in Household Works as Airport Staff");
		if (pi.isDoYouWorkInCrowdedAreasLikeMallEtc()) information_list.add("Works in Crowded Area like Mall etc");
		if (pi.isDoesMemberInHouseholdWorkInCrowdedArea())
			information_list.add("Member in Household Works in Crowded Area like Mall etc");
		return information_list;
	}
}
