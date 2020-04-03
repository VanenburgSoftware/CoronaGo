package com.coronago.mail;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.logging.Logger;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.MimetypesFileTypeMap;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;

import org.apache.commons.lang3.exception.ExceptionUtils;

import com.coronago.misc.exception.ErrorCodes;
import com.eva.base.exception.InternalException;

public class MailUtil {
	private static final Logger LOGGER = Logger.getLogger(MailUtil.class.getName());

	public static void sendMail(String subject, String messageBody, Map<String, String> toRecipient,
			Map<String, String> ccRecipient, Map<String, String> bccRecipient, String fromEmail, String fromName) {
		sendMail(subject, messageBody, toRecipient, ccRecipient, bccRecipient, fromEmail, fromName, null, null,
				new HashMap<String, InlineAttachments>());
	}

	public static void sendMail(String subject, String messageBody, Map<String, String> toRecipient,
			Map<String, String> ccRecipient, Map<String, String> bccRecipient, String fromEmail, String fromName,
			InputStream attachFinStream, String attachFileName) {
		sendMail(subject, messageBody, toRecipient, ccRecipient, bccRecipient, fromEmail, fromName, null, null,
				new HashMap<String, InlineAttachments>());
	}

	public static void sendMail(String subject, String messageBody, Map<String, String> toRecipient,
			Map<String, String> ccRecipient, Map<String, String> bccRecipient, String fromEmail, String fromName,
			InputStream attachFinStream, String attachFileName, Map<String, InlineAttachments> inlineAttachments) {
			sendMailUsingUtil(subject, messageBody, toRecipient, ccRecipient, bccRecipient, fromEmail, fromName,
					attachFinStream, attachFileName, inlineAttachments);
	}


	private static void sendMailUsingUtil(String subject, String messageBody, Map<String, String> toRecipient,
			Map<String, String> ccRecipient, Map<String, String> bccRecipient, String fromEmail, String fromName,
			InputStream attachFinStream, String attachFileName, Map<String, InlineAttachments> inlineAttachments) {
		final Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.auth", true);
		props.put("mail.smtp.socketFactory.port", 465);
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback", false);
		props.put("mail.smtp.port", 465);
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.login.username", "conatact2nikhil@gmail.com");
		props.put("mail.login.password", "vgcoimbatore");
		props.put("mail.smtp.username", "conatact2nikhil@gmail.com");
		props.put("mail.smtp.password", "vgcoimbatore");
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(props.getProperty("mail.smtp.username"),
						props.getProperty("mail.smtp.password"));
			}
		});
		try {
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress(fromEmail, fromName));
			Set<Map.Entry<String, String>> toEntrySet = toRecipient.entrySet();
			for (Map.Entry<String, String> entry : toEntrySet) {
				msg.addRecipient(Message.RecipientType.TO, new InternetAddress(entry.getKey(), entry.getValue()));
			}
			Set<Map.Entry<String, String>> ccEntrySet = ccRecipient.entrySet();
			for (Map.Entry<String, String> entry : ccEntrySet) {
				msg.addRecipient(Message.RecipientType.CC, new InternetAddress(entry.getKey(), entry.getValue()));
			}
			Set<Map.Entry<String, String>> bccEntrySet = bccRecipient.entrySet();
			for (Map.Entry<String, String> entry : bccEntrySet) {
				msg.addRecipient(Message.RecipientType.BCC, new InternetAddress(entry.getKey(), entry.getValue()));
			}
			msg.setSubject(subject);
			BodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent(messageBody, "text/html");
			messageBodyPart.addHeader("charset", "UTF-8");
			messageBodyPart.addHeader("Content-Transfer-Encoding", "quoted-printable");
			final MimeMultipart htmlMultipart = new MimeMultipart("related");
			htmlMultipart.addBodyPart(messageBodyPart);
			if (attachFinStream != null || attachFileName != null) {
				htmlMultipart.addBodyPart(getAttachmentPart(attachFinStream, attachFileName));
			}
			if (inlineAttachments != null && inlineAttachments.size() > 0) {
				for (Map.Entry<String, InlineAttachments> inlineAttachment : inlineAttachments.entrySet()) {
					htmlMultipart.addBodyPart(getInlineAttachmentPart(inlineAttachment.getKey(),
							inlineAttachment.getValue().getInlineFinStream(),
							inlineAttachment.getValue().getInlineFileName()));
				}
			}
			msg.setContent(htmlMultipart);
			Transport.send(msg);
		} catch (Exception e) {
			LOGGER.severe("Exception while sending mail :\r\n " + ExceptionUtils.getStackTrace(e));
			throw new InternalException(ErrorCodes.MAIL_SENDING_ERROR);
		}
	}

	private static MimeBodyPart getAttachmentPart(InputStream attachFinStream, String attachFileName) throws Exception {
		MimeBodyPart attachmentPart = new MimeBodyPart();
		String fileContentType = new MimetypesFileTypeMap().getContentType(attachFileName);
		DataSource source = new ByteArrayDataSource(attachFinStream, fileContentType);
		attachmentPart.setDataHandler(new DataHandler(source));
		attachmentPart.setFileName(attachFileName);
		return attachmentPart;
	}

	private static MimeBodyPart getInlineAttachmentPart(String content_id, InputStream inlineFinStream,
			String inlineFileName) throws Exception {
		MimeBodyPart imagePart = new MimeBodyPart();
		String fileContentType = new MimetypesFileTypeMap().getContentType(inlineFileName);
		DataSource source = new ByteArrayDataSource(inlineFinStream, fileContentType);
		imagePart.setDataHandler(new DataHandler(source));
		imagePart.setFileName(inlineFileName);
		imagePart.setContentID("<" + content_id + ">");
		imagePart.setDisposition(MimeBodyPart.INLINE);
		return imagePart;
	}
}
