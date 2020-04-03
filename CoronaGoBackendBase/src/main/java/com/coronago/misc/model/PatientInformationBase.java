package com.coronago.misc.model;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.eva.base.model.BaseModel;
import com.eva.base.util.ValidationErrorConstants;
import com.eva.base.validation.annotations.AllowedValues;

public class PatientInformationBase extends BaseModel {
	private static final long serialVersionUID = 2594518665447328185L;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String patientName;
	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String patientEmail;
	private String patientHid;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	private Date dateOfBirth;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	private Long age;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	@AllowedValues(values = {"A", "B", "O", "AB"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String bloodGroup;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String address;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String city;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	private Long zipcode;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String insuranceProvider;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	private Long subscriberNumber;
	private Long groupNumber;
	private Date insuranceCoverage;
	@AllowedValues(values = {"Type 1", "Type 2", "Type 3"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String insuranceType;
	@AllowedValues(values = {"Risk score to be calculated", "Risk self accessed", "Consultation required",
			"Consultation not required", "Consultation scheduled", "Consultation completed (Test prescribed)",
			"Consultation completed (Weekly monitoring)"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String status;
	@AllowedValues(values = {"Low", "Medium", "High"}, message = ValidationErrorConstants.INVALID_VALUES)
	private String riskLevel;
	private boolean diabetes;
	private boolean highBloodPressure;
	private boolean asthma;
	private boolean heartDisease;
	private boolean immunocompromised;
	private boolean pregnant;
	private boolean travelledRecently;
	private boolean memberInHouseholdTravelledRecently;
	private boolean areYouAHealthcareWorker;
	private boolean memberInHouseholdAHealthcareWorker;
	private boolean airportStaff;
	private boolean memberInHouseholdAAirportStaff;
	private boolean doYouWorkInCrowdedAreasLikeMallEtc;
	private boolean doesMemberInHouseholdWorkInCrowdedArea;

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

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Long getAge() {
		return age;
	}

	public void setAge(Long age) {
		this.age = age;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getZipcode() {
		return zipcode;
	}

	public void setZipcode(Long zipcode) {
		this.zipcode = zipcode;
	}

	public String getInsuranceProvider() {
		return insuranceProvider;
	}

	public void setInsuranceProvider(String insuranceProvider) {
		this.insuranceProvider = insuranceProvider;
	}

	public Long getSubscriberNumber() {
		return subscriberNumber;
	}

	public void setSubscriberNumber(Long subscriberNumber) {
		this.subscriberNumber = subscriberNumber;
	}

	public Long getGroupNumber() {
		return groupNumber;
	}

	public void setGroupNumber(Long groupNumber) {
		this.groupNumber = groupNumber;
	}

	public Date getInsuranceCoverage() {
		return insuranceCoverage;
	}

	public void setInsuranceCoverage(Date insuranceCoverage) {
		this.insuranceCoverage = insuranceCoverage;
	}

	public String getInsuranceType() {
		return insuranceType;
	}

	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRiskLevel() {
		return riskLevel;
	}

	public void setRiskLevel(String riskLevel) {
		this.riskLevel = riskLevel;
	}

	public boolean isDiabetes() {
		return diabetes;
	}

	public void setDiabetes(boolean diabetes) {
		this.diabetes = diabetes;
	}

	public boolean isHighBloodPressure() {
		return highBloodPressure;
	}

	public void setHighBloodPressure(boolean highBloodPressure) {
		this.highBloodPressure = highBloodPressure;
	}

	public boolean isAsthma() {
		return asthma;
	}

	public void setAsthma(boolean asthma) {
		this.asthma = asthma;
	}

	public boolean isHeartDisease() {
		return heartDisease;
	}

	public void setHeartDisease(boolean heartDisease) {
		this.heartDisease = heartDisease;
	}

	public boolean isImmunocompromised() {
		return immunocompromised;
	}

	public void setImmunocompromised(boolean immunocompromised) {
		this.immunocompromised = immunocompromised;
	}

	public boolean isPregnant() {
		return pregnant;
	}

	public void setPregnant(boolean pregnant) {
		this.pregnant = pregnant;
	}

	public boolean isTravelledRecently() {
		return travelledRecently;
	}

	public void setTravelledRecently(boolean travelledRecently) {
		this.travelledRecently = travelledRecently;
	}

	public boolean isMemberInHouseholdTravelledRecently() {
		return memberInHouseholdTravelledRecently;
	}

	public void setMemberInHouseholdTravelledRecently(boolean memberInHouseholdTravelledRecently) {
		this.memberInHouseholdTravelledRecently = memberInHouseholdTravelledRecently;
	}

	public boolean isAreYouAHealthcareWorker() {
		return areYouAHealthcareWorker;
	}

	public void setAreYouAHealthcareWorker(boolean areYouAHealthcareWorker) {
		this.areYouAHealthcareWorker = areYouAHealthcareWorker;
	}

	public boolean isMemberInHouseholdAHealthcareWorker() {
		return memberInHouseholdAHealthcareWorker;
	}

	public void setMemberInHouseholdAHealthcareWorker(boolean memberInHouseholdAHealthcareWorker) {
		this.memberInHouseholdAHealthcareWorker = memberInHouseholdAHealthcareWorker;
	}

	public boolean isAirportStaff() {
		return airportStaff;
	}

	public void setAirportStaff(boolean airportStaff) {
		this.airportStaff = airportStaff;
	}

	public boolean isMemberInHouseholdAAirportStaff() {
		return memberInHouseholdAAirportStaff;
	}

	public void setMemberInHouseholdAAirportStaff(boolean memberInHouseholdAAirportStaff) {
		this.memberInHouseholdAAirportStaff = memberInHouseholdAAirportStaff;
	}

	public boolean isDoYouWorkInCrowdedAreasLikeMallEtc() {
		return doYouWorkInCrowdedAreasLikeMallEtc;
	}

	public void setDoYouWorkInCrowdedAreasLikeMallEtc(boolean doYouWorkInCrowdedAreasLikeMallEtc) {
		this.doYouWorkInCrowdedAreasLikeMallEtc = doYouWorkInCrowdedAreasLikeMallEtc;
	}

	public boolean isDoesMemberInHouseholdWorkInCrowdedArea() {
		return doesMemberInHouseholdWorkInCrowdedArea;
	}

	public void setDoesMemberInHouseholdWorkInCrowdedArea(boolean doesMemberInHouseholdWorkInCrowdedArea) {
		this.doesMemberInHouseholdWorkInCrowdedArea = doesMemberInHouseholdWorkInCrowdedArea;
	}
}
