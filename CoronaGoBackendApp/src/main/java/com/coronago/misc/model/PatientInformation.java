package com.coronago.misc.model;

import com.coronago.misc.logic.PatientInformationPerimeter;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;

@Table(name = "PatientInformation", keys = {
		"patientEmail"}, acl = @ACLProvider(value = PatientInformationPerimeter.class))
public class PatientInformation extends PatientInformationBase {
	private static final long serialVersionUID = -3683194861233803119L;
	private String docEmail;
	private boolean docAssigned;
	private Double riskScore = 0.0;
	private String gender;
	private String reportId;
	private String reportFileName;

	public Double getRiskScore() {
		return riskScore;
	}

	public void setRiskScore(Double riskScore) {
		this.riskScore = riskScore;
	}

	public String getDocEmail() {
		return docEmail;
	}

	public void setDocEmail(String docEmail) {
		this.docEmail = docEmail;
	}

	public boolean isDocAssigned() {
		return docAssigned;
	}

	public void setDocAssigned(boolean docAssigned) {
		this.docAssigned = docAssigned;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getReportId() {
		return reportId;
	}

	public void setReportId(String reportId) {
		this.reportId = reportId;
	}

	public String getReportFileName() {
		return reportFileName;
	}

	public void setReportFileName(String reportFileName) {
		this.reportFileName = reportFileName;
	}
}
