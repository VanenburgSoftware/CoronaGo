package com.coronago.misc.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.eva.base.model.BaseModel;
import com.eva.base.util.ValidationErrorConstants;
import com.eva.base.validation.annotations.AllowedValues;

public class PatientQuestionaireBase extends BaseModel {
	private static final long serialVersionUID = -5351729474901766761L;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String patientName;
	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String patientEmail;
	private String patientHid;
	private boolean fever;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String feverDuration;
	private boolean cough;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String coughDuration;
	private boolean soreThroat;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String soreThroatDuration;
	private boolean runnyNose;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String runnyNoseDuration;
	private boolean difficultyInBreathing;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String dibDuration;
	private boolean muscleAches;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String muscleAchesDuration;
	private boolean diarrhea;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String diarrheaDuration;
	@AllowedValues(values = {"Low", "Medium", "High"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String riskLevel;
	private boolean coughWithMucus;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String coughtWithMucusDuration;
	private boolean fatigue;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String fatigueDuration;
	private boolean headAche;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String headAcheDuration;
	private boolean chills;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String chillsDuration;
	private boolean nausea;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String nauseaDuration;
	private boolean nasalCongestion;
	@AllowedValues(values = {"0-3 days", "3-7 days", ">7 days"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String nasalCongestionDuration;

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientEmail() {
		return patientEmail;
	}

	public void setPatientEmail(String patientEmail) {
		this.patientEmail = patientEmail;
	}

	public String getPatientHid() {
		return patientHid;
	}

	public void setPatientHid(String patientHid) {
		this.patientHid = patientHid;
	}

	public boolean isFever() {
		return fever;
	}

	public void setFever(boolean fever) {
		this.fever = fever;
	}

	public String getFeverDuration() {
		return feverDuration;
	}

	public void setFeverDuration(String feverDuration) {
		this.feverDuration = feverDuration;
	}

	public boolean isCough() {
		return cough;
	}

	public void setCough(boolean cough) {
		this.cough = cough;
	}

	public String getCoughDuration() {
		return coughDuration;
	}

	public void setCoughDuration(String coughDuration) {
		this.coughDuration = coughDuration;
	}

	public boolean isSoreThroat() {
		return soreThroat;
	}

	public void setSoreThroat(boolean soreThroat) {
		this.soreThroat = soreThroat;
	}

	public String getSoreThroatDuration() {
		return soreThroatDuration;
	}

	public void setSoreThroatDuration(String soreThroatDuration) {
		this.soreThroatDuration = soreThroatDuration;
	}

	public boolean isRunnyNose() {
		return runnyNose;
	}

	public void setRunnyNose(boolean runnyNose) {
		this.runnyNose = runnyNose;
	}

	public String getRunnyNoseDuration() {
		return runnyNoseDuration;
	}

	public void setRunnyNoseDuration(String runnyNoseDuration) {
		this.runnyNoseDuration = runnyNoseDuration;
	}

	public boolean isDifficultyInBreathing() {
		return difficultyInBreathing;
	}

	public void setDifficultyInBreathing(boolean difficultyInBreathing) {
		this.difficultyInBreathing = difficultyInBreathing;
	}

	public String getDibDuration() {
		return dibDuration;
	}

	public void setDibDuration(String dibDuration) {
		this.dibDuration = dibDuration;
	}

	public boolean isMuscleAches() {
		return muscleAches;
	}

	public void setMuscleAches(boolean muscleAches) {
		this.muscleAches = muscleAches;
	}

	public String getMuscleAchesDuration() {
		return muscleAchesDuration;
	}

	public void setMuscleAchesDuration(String muscleAchesDuration) {
		this.muscleAchesDuration = muscleAchesDuration;
	}

	public boolean isDiarrhea() {
		return diarrhea;
	}

	public void setDiarrhea(boolean diarrhea) {
		this.diarrhea = diarrhea;
	}

	public String getDiarrheaDuration() {
		return diarrheaDuration;
	}

	public void setDiarrheaDuration(String diarrheaDuration) {
		this.diarrheaDuration = diarrheaDuration;
	}

	public String getRiskLevel() {
		return riskLevel;
	}

	public void setRiskLevel(String riskLevel) {
		this.riskLevel = riskLevel;
	}

	public boolean isCoughWithMucus() {
		return coughWithMucus;
	}

	public void setCoughWithMucus(boolean coughWithMucus) {
		this.coughWithMucus = coughWithMucus;
	}

	public String getCoughtWithMucusDuration() {
		return coughtWithMucusDuration;
	}

	public void setCoughtWithMucusDuration(String coughtWithMucusDuration) {
		this.coughtWithMucusDuration = coughtWithMucusDuration;
	}

	public boolean isFatigue() {
		return fatigue;
	}

	public void setFatigue(boolean fatigue) {
		this.fatigue = fatigue;
	}

	public String getFatigueDuration() {
		return fatigueDuration;
	}

	public void setFatigueDuration(String fatigueDuration) {
		this.fatigueDuration = fatigueDuration;
	}

	public boolean isHeadAche() {
		return headAche;
	}

	public void setHeadAche(boolean headAche) {
		this.headAche = headAche;
	}

	public String getHeadAcheDuration() {
		return headAcheDuration;
	}

	public void setHeadAcheDuration(String headAcheDuration) {
		this.headAcheDuration = headAcheDuration;
	}

	public boolean isChills() {
		return chills;
	}

	public void setChills(boolean chills) {
		this.chills = chills;
	}

	public String getChillsDuration() {
		return chillsDuration;
	}

	public void setChillsDuration(String chillsDuration) {
		this.chillsDuration = chillsDuration;
	}

	public boolean isNausea() {
		return nausea;
	}

	public void setNausea(boolean nausea) {
		this.nausea = nausea;
	}

	public String getNauseaDuration() {
		return nauseaDuration;
	}

	public void setNauseaDuration(String nauseaDuration) {
		this.nauseaDuration = nauseaDuration;
	}

	public boolean isNasalCongestion() {
		return nasalCongestion;
	}

	public void setNasalCongestion(boolean nasalCongestion) {
		this.nasalCongestion = nasalCongestion;
	}

	public String getNasalCongestionDuration() {
		return nasalCongestionDuration;
	}

	public void setNasalCongestionDuration(String nasalCongestionDuration) {
		this.nasalCongestionDuration = nasalCongestionDuration;
	}
}
