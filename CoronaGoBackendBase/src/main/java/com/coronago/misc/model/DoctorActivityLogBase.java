package com.coronago.misc.model;
import com.eva.base.model.BaseModel;
import java.util.Date;


public class DoctorActivityLogBase extends BaseModel {

	private Date activityDate;
	private String doctorName;
	private Long scheduledPatients;
	private Long notScheduledPatients;
	private Long consultationCompleteTest;

	public void setActivityDate(Date activityDate) {
		this.activityDate = activityDate;
	}

	public Date getActivityDate() {
		return activityDate;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setScheduledPatients(Long scheduledPatients) {
		this.scheduledPatients = scheduledPatients;
	}

	public Long getScheduledPatients() {
		return scheduledPatients;
	}

	public void setNotScheduledPatients(Long notScheduledPatients) {
		this.notScheduledPatients = notScheduledPatients;
	}

	public Long getNotScheduledPatients() {
		return notScheduledPatients;
	}

	public void setConsultationCompleteTest(Long consultationCompleteTest) {
		this.consultationCompleteTest = consultationCompleteTest;
	}

	public Long getConsultationCompleteTest() {
		return consultationCompleteTest;
	}


}