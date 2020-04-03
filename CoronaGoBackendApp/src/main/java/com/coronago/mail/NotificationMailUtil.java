package com.coronago.mail;

import java.io.StringWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import com.coronago.misc.model.Meetings;
import com.coronago.util.DateUtil;
import com.coronago.util.TemplateLoader;
import com.eva.base.appconfiguration.IAppConfigurationCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;

import freemarker.template.Configuration;
import freemarker.template.Template;

public class NotificationMailUtil {
	private static Logger LOGGER = LoggerFactory.getLogger(NotificationMailUtil.class.getName());
	protected static Configuration cfg = null;
	protected static String techMailId;
	static {
		IAppConfigurationCache appConfigCache = CacheManager.getInstance().getCache(IAppConfigurationCache.NAME);
		techMailId = appConfigCache.getAsString("tech_mail_id");
	}

	protected static Template getTemplate(String template_name) throws Exception {
		return TemplateLoader.getTemplate(template_name);
	}

	public static void sendMeetingNotificationMail(Meetings meeting) throws Exception {
		String subject = "Meeting scheduled with Doctor - " + meeting.getDoctorName();
		Map<String, String> toRecipient = new HashMap<String, String>();
		Map<String, String> ccRecipient = new HashMap<String, String>();
		Map<String, String> bccRecipient = new HashMap<String, String>();
		Template template = getTemplate("meeting.ftl");
		toRecipient.put(meeting.getPatientEmail(), meeting.getPatientName());
		ccRecipient.put(meeting.getDoctorEmail(), meeting.getDoctorName());
		Writer out = new StringWriter();
		Map<String, String> rootMap = new HashMap<String, String>();
		rootMap.put("patient_name", meeting.getPatientName());
		rootMap.put("doctor_name", meeting.getDoctorName());
		rootMap.put("start_time", DateUtil.getDateTime(meeting.getMeetingStartTime().getTime()));
		rootMap.put("end_time", DateUtil.getDateTime(meeting.getMeetingEndTime().getTime()));
		rootMap.put("meeting_url", meeting.getMeetingUrl());
		template.process(rootMap, out);
		String body = out.toString();
		MailUtil.sendMail(subject, body, toRecipient, ccRecipient, bccRecipient, techMailId,
				"[CoViFi]");
		LOGGER.info("Notificaiton Mail sent to patient :" + meeting.getPatientEmail());
	}
}
