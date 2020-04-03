package com.coronago.misc.model;

import com.coronago.misc.logic.PatientQuestionairePerimeter;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;

@Table(name = "PatientQuestionaire", acl = @ACLProvider(value = PatientQuestionairePerimeter.class))
public class PatientQuestionaire extends PatientQuestionaireBase {
	private static final long serialVersionUID = -3683194871231803119L;
	private Double riskScore = 0.0;
	private String reportId;
	private String reportFileName;

	public Double getRiskScore() {
		return riskScore;
	}

	public void setRiskScore(Double riskScore) {
		this.riskScore = riskScore;
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
