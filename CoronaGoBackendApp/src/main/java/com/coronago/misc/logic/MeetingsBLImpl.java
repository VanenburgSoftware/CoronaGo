package com.coronago.misc.logic;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.apache.commons.lang3.StringUtils;

import com.coronago.gotomeeting.GotoMeetingHandler;
import com.coronago.gotomeeting.api.common.ApiException;
import com.coronago.gotomeeting.api.model.HistoricalMeeting;
import com.coronago.gotomeeting.api.model.MeetingCreated;
import com.coronago.gotomeeting.api.model.MeetingReqCreate;
import com.coronago.gotomeeting.api.model.MeetingType;
import com.coronago.mail.NotificationMailUtil;
import com.coronago.misc.model.AppUserPrivileges;
import com.coronago.misc.model.MeetingTimeInfo;
import com.coronago.misc.model.Meetings;
import com.coronago.misc.model.PatientInformation;
import com.coronago.util.DateUtil;
import com.eva.base.appconfiguration.IAppConfigurationCache;
import com.eva.base.attachment.model.FileInfo;
import com.eva.base.attachment.model.FileUploadInfo;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.dal.CompositeFilter;
import com.eva.base.dal.Filter;
import com.eva.base.dal.SimpleFilter;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.NoAuthenticatedUserException;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.model.EvaAttachmentResponse;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.util.ErrorCode;
import com.vs.eva.gaelibrary.attachment.AttachmentBL;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;

public class MeetingsBLImpl extends MeetingsBLBaseImpl<Meetings> implements IMeetingsBL<Meetings> {
	private static final Logger LOGGER = LoggerFactory.getLogger(MeetingsBLImpl.class.getName());

	public MeetingsBLImpl() {
		super(Meetings.class);
	}

	private AppUserPrivilegeCache<AppUserPrivileges> userCache =
			CacheManager.getInstance().getCache(IAppUserPrivilegeCache.NAME);
	private IAppConfigurationCache appConfigCache = CacheManager.getInstance().getCache(IAppConfigurationCache.NAME);

	@Override
	public PaginationResponse getMeetingsAll_Meetings(String email, PaginationRequest dataTable) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		filters.add(new SimpleFilter("patientEmail", email));
		filters.add(new SimpleFilter("meetingStatus", "completed"));
		dataTable.setFilters(filters);
		return getAllByPage(PersistenceType.SEARCH, dataTable);
	}

	@Override
	public final void onAfterSave(PersistenceType type, Meetings modelObj) {
		switch (type) {
			case DB:
				onAfterSaveDB(modelObj);
				break;
			default:
				break;
		}
		super.onAfterSave(type, modelObj);
	}

	public void onAfterSaveDB(Meetings modelObj) {
		AppUserPrivileges currentUser = userCache.getCurrentUser();
		if (currentUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		String userName = currentUser.getGotoMeetingUserName();
		String password = currentUser.getGotoMeetingPassword();
		if (StringUtils.isBlank(userName) || StringUtils.isBlank(password)) {
			// TODO - throw exception
			userName = appConfigCache.getAsString("default_gotomeeting_user_name");
			password = appConfigCache.getAsString("default_gotomeeting_password");
		}
		GotoMeetingHandler gotoMeetingHandler = new GotoMeetingHandler(userName, password);
		MeetingReqCreate cRequest = new MeetingReqCreate();
		cRequest.setMeetingtype(MeetingType.scheduled);
		cRequest.setSubject("Meeting scheduled for " + modelObj.getPatientName());
		cRequest.setStarttime(DateUtil.getDateForTimeInISO8601Format(modelObj.getMeetingStartTime().getTime()));
		cRequest.setEndtime(DateUtil.getDateForTimeInISO8601Format(modelObj.getMeetingEndTime().getTime()));
		cRequest.setPasswordrequired(false);
		cRequest.setConferencecallinfo("VoIP");
		try {
			List<MeetingCreated> createdMeetingsList = gotoMeetingHandler.createMeeting(cRequest);
			MeetingCreated createdMeeting = createdMeetingsList.get(0);
			modelObj.setMeetingUrl(createdMeeting.getJoinURL());
			modelObj.setMeetingId(String.valueOf(createdMeeting.getUniqueMeetingId()));
			modelObj.setMeetingStatus("scheduled");
			update(modelObj);
			updatePatientInfo(modelObj);
			NotificationMailUtil.sendMeetingNotificationMail(modelObj);
		} catch (ApiException e) {
			LOGGER.error("Exception while scheduling meeting :" + modelObj.getPatientEmail(), e);
		} catch (Exception e) {
			LOGGER.error("Exception while scheduling meeting :" + modelObj.getPatientEmail(), e);
		}
	}

	private void updatePatientInfo(Meetings modelObj) {
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		PatientInformation patientInfo = patientBL.getPatientInformationByEmail(modelObj.getPatientEmail());
		patientInfo.setStatus("Consultation scheduled");
		patientBL.update(patientInfo);
		DoctorActivityLogBLImpl docActivityLogBLImpl = new DoctorActivityLogBLImpl();
		docActivityLogBLImpl.updateScheduledPatients(modelObj.getDoctorEmail());
	}

	@Override
	public Meetings getScheduledMeetingForPatient(String email) {
		Filter emailFilter = new SimpleFilter("patientEmail", email);
		Filter statusFilter = new SimpleFilter("meetingStatus", "scheduled");
		Filter filter = CompositeFilter.and().add(emailFilter, statusFilter);
		List<Filter> filters = new ArrayList<Filter>(1);
		filters.add(filter);
		List<Meetings> resultList = getAll(filters);
		if (resultList == null || resultList.size() == 0) { return null; }
		return resultList.get(0);
	}

	private Meetings completeScheduledMeeting(Meetings scheduledMeeting) {
		AppUserPrivileges docUser = userCache.get(scheduledMeeting.getDoctorEmail());
		if (docUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		String userName = docUser.getGotoMeetingUserName();
		String password = docUser.getGotoMeetingPassword();
		if (StringUtils.isBlank(docUser.getGotoMeetingUserName())
				|| StringUtils.isBlank(docUser.getGotoMeetingPassword())) {
			// TODO - throw exception
			userName = appConfigCache.getAsString("default_gotomeeting_user_name");
			password = appConfigCache.getAsString("default_gotomeeting_password");
		}
		GotoMeetingHandler gotoMeetingHandler = new GotoMeetingHandler(userName, password);
		try {
			List<HistoricalMeeting> meetingHistory = gotoMeetingHandler.getMeetingHistory(
					DateUtil.getDateForTimeInISO8601Format(scheduledMeeting.getMeetingStartTime().getTime(), -10),
					scheduledMeeting.getMeetingEndTime());
			if (meetingHistory == null || meetingHistory.size() == 0) {
				// TODO - LOG ERROR
				LOGGER.error("Meeting History is empty :" + scheduledMeeting.getMeetingStartTime() + " - "
						+ scheduledMeeting.getMeetingEndTime());
			}
			meetingHistory.forEach(meeting -> {
				if (meeting.getMeetingId().equals(scheduledMeeting.getMeetingId())) {
					try {
						downloadRecording(scheduledMeeting, meeting);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			});
		} catch (ApiException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		scheduledMeeting.setMeetingStatus("completed");
		return update(scheduledMeeting);
	}

	@Override
	public List<MeetingTimeInfo> getScheduledMeetingsForDoctor(Long date) {
		AppUserPrivileges currentUser = userCache.getCurrentUser();
		if (currentUser == null) { throw new NoAuthenticatedUserException(ErrorCode.USER_NOT_FOUND); }
		Filter emailFilter = new SimpleFilter("doctorEmail", currentUser.getEmail());
		Filter statusFilter = new SimpleFilter("meetingStatus", "scheduled");
		Filter meetingDateFilter = new SimpleFilter("meetingDate", new Date(date));
		Filter filter = CompositeFilter.and().add(emailFilter, statusFilter, meetingDateFilter);
		List<Filter> filters = new ArrayList<Filter>(1);
		filters.add(filter);
		List<Meetings> resultList = getAll(filters);
		if (resultList == null || resultList.size() == 0) { return Collections.emptyList(); }
		List<MeetingTimeInfo> meetingTimeList = new ArrayList<>();
		resultList.forEach(result -> {
			meetingTimeList.add(new MeetingTimeInfo(result.getMeetingStartTime(), result.getMeetingEndTime()));
		});
		return meetingTimeList;
	}

	private void downloadRecording(Meetings scheduledMeeting, HistoricalMeeting meetingInfo) throws IOException {
		AttachmentBL attachmentBL = new AttachmentBL();
		String fileURL = meetingInfo.getRecording().getDownloadUrl();
		URL url = new URL(fileURL);
		HttpsURLConnection httpConn = (HttpsURLConnection) url.openConnection();
		int responseCode = httpConn.getResponseCode();
		if (responseCode == HttpURLConnection.HTTP_OK) {
			String fileName = scheduledMeeting.getSid() + ".mp4";
			// opens input stream from the HTTP connection
			InputStream inputStream = httpConn.getInputStream();
			FileUploadInfo uploadInfo = new FileUploadInfo();
			uploadInfo.setModelKey(scheduledMeeting.getSid());
			uploadInfo.setModelName("Meetings");
			uploadInfo.setFieldName("recordingInfo");
			uploadInfo.setFileDesc(scheduledMeeting.getMeetingId());
			List<FileInfo> fileInfoList = new ArrayList<>();
			fileInfoList.add(new FileInfo(inputStream, fileName));
			uploadInfo.setFileInfo(fileInfoList);
			List<EvaAttachmentResponse> response = attachmentBL.upload(uploadInfo);
			scheduledMeeting.setRecordingInfo(response.get(0));
			inputStream.close();
			LOGGER.info("File downloaded for meeting id:" + scheduledMeeting.getSid());
		} else {
			LOGGER.info("No file to download. Server replied HTTP code:" + responseCode + " for meeting id:"
					+ scheduledMeeting.getSid());
		}
		httpConn.disconnect();
	}

	@Override
	public Meetings completeConsultation(Meetings modelObj) {
		completeScheduledMeeting(modelObj);
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		PatientInformation patientInfo = patientBL.getPatientInformationByEmail(modelObj.getPatientEmail());
		if (patientInfo == null) {
			// TODO throw exception
		}
		patientInfo.setStatus("Consultation completed (Test prescribed)");
		patientBL.update(patientInfo);
		DoctorActivityLogBLImpl docActivityLogBLImpl = new DoctorActivityLogBLImpl();
		docActivityLogBLImpl.updateConsultationCompleted(modelObj.getDoctorEmail());
		return modelObj;
	}

	@Override
	public Meetings completeConsultationWithMonitoring(Meetings modelObj) {
		completeScheduledMeeting(modelObj);
		PatientInformationBLImpl patientBL = new PatientInformationBLImpl();
		PatientInformation patientInfo = patientBL.getPatientInformationByEmail(modelObj.getPatientEmail());
		if (patientInfo == null) {
			// TODO throw exception
		}
		patientInfo.setStatus("Consultation completed (Weekly monitoring)");
		patientBL.update(patientInfo);
		DoctorActivityLogBLImpl docActivityLogBLImpl = new DoctorActivityLogBLImpl();
		docActivityLogBLImpl.updateConsultationCompleted(modelObj.getDoctorEmail());
		return modelObj;
	}
}
