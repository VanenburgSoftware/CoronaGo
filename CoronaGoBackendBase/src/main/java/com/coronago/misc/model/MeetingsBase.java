package com.coronago.misc.model;
import com.eva.base.model.BaseModel;
import com.eva.base.model.EvaAttachmentResponse;
import com.eva.base.util.ValidationErrorConstants;
import java.util.Date;
import javax.validation.constraints.Email;


public class MeetingsBase extends BaseModel {
	private static final long serialVersionUID = -3683192871233803119L;
	private String patientHid;
	private String patientName;
	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	private String patientEmail;
	private String meetingId;
	private String doctorId;
	private String doctorName;
	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	private String doctorEmail;
	private Date meetingStartTime;
	private Date meetingEndTime;
	private String meetingStatus;
	private String meetingUrl;
	private EvaAttachmentResponse recordingInfo;
	private Date meetingDate;
	private String doctorNotes;

	public void setPatientHid(String patientHid) {
		this.patientHid = patientHid;
	}

	public String getPatientHid() {
		return patientHid;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientEmail(String patientEmail) {
		this.patientEmail = patientEmail;
	}

	public String getPatientEmail() {
		return patientEmail;
	}

	public void setMeetingId(String meetingId) {
		this.meetingId = meetingId;
	}

	public String getMeetingId() {
		return meetingId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorEmail(String doctorEmail) {
		this.doctorEmail = doctorEmail;
	}

	public String getDoctorEmail() {
		return doctorEmail;
	}

	public void setMeetingStartTime(Date meetingStartTime) {
		this.meetingStartTime = meetingStartTime;
	}

	public Date getMeetingStartTime() {
		return meetingStartTime;
	}

	public void setMeetingEndTime(Date meetingEndTime) {
		this.meetingEndTime = meetingEndTime;
	}

	public Date getMeetingEndTime() {
		return meetingEndTime;
	}

	public void setMeetingStatus(String meetingStatus) {
		this.meetingStatus = meetingStatus;
	}

	public String getMeetingStatus() {
		return meetingStatus;
	}

	public void setMeetingUrl(String meetingUrl) {
		this.meetingUrl = meetingUrl;
	}

	public String getMeetingUrl() {
		return meetingUrl;
	}

	public void setMeetingDate(Date meetingDate) {
		this.meetingDate = meetingDate;
	}

	public Date getMeetingDate() {
		return meetingDate;
	}

	public EvaAttachmentResponse getRecordingInfo() {
		return recordingInfo;
	}

	public void setRecordingInfo(EvaAttachmentResponse recordingInfo) {
		this.recordingInfo = recordingInfo;
	}

	public String getDoctorNotes() {
		return doctorNotes;
	}

	public void setDoctorNotes(String doctorNotes) {
		this.doctorNotes = doctorNotes;
	}


}