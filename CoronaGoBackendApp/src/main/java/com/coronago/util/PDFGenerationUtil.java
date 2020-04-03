package com.coronago.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.coronago.misc.model.PatientQuestionaire;
import com.eva.base.attachment.model.FileInfo;
import com.eva.base.attachment.model.FileUploadInfo;
import com.eva.base.model.EvaAttachmentResponse;
import com.lowagie.text.Document;
import com.lowagie.text.PageSize;
import com.lowagie.text.html.simpleparser.HTMLWorker;
import com.lowagie.text.pdf.PdfWriter;
import com.vs.eva.gaelibrary.attachment.AttachmentBL;

import freemarker.template.Template;

public class PDFGenerationUtil {
	private Logger LOGGER = Logger.getLogger(PDFGenerationUtil.class.getName());

	public void generateSOSReportPDF(PatientQuestionaire pq, Map<String, Object> parameterMap) {
		String htmlContent = getHtmlContent("sos_report.ftl", parameterMap);
		ByteArrayOutputStream stream = new ByteArrayOutputStream();
		writePDFContentToStream(htmlContent, stream);
		EvaAttachmentResponse attachment = uploadToGCS(stream, pq);
		pq.setReportId((String) attachment.getId());
		pq.setReportFileName(attachment.getFileName());
	}

	private void writePDFContentToStream(String htmlContent, OutputStream stream) {
		try {
			Document doc = new Document(PageSize.A4);
			PdfWriter writer = PdfWriter.getInstance(doc, stream);
			doc.open();
			HTMLWorker hw = new HTMLWorker(doc);
			hw.parse(new StringReader(htmlContent));
			doc.close();
		} catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Converting PDF", e);
			// TODO Throw Exception
		}
	}

	private String getHtmlContent(String templateName, Map<String, Object> map1) {
		String htmlContent = "";
		try {
			Template template = TemplateLoader.getTemplate(templateName);
			Writer out = new StringWriter();
			template.process(map1, out);
			htmlContent = out.toString();
			out.close();
		} catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Generating html", e);
			// throw new InternalException(e,
			// ApplicationMessages.SYSTEM_ERROR_OCCURRED_RETRY_LATER);
			// TODO Throw Exception
		}
		return htmlContent;
	}

	private EvaAttachmentResponse uploadToGCS(ByteArrayOutputStream stream, PatientQuestionaire pq) {
		AttachmentBL aBl = new AttachmentBL();
		FileUploadInfo fileUploadInfo = new FileUploadInfo();
		fileUploadInfo.setModelName("PatientQuestionaire");
		fileUploadInfo.setModelKey(pq.getSid());
		fileUploadInfo.setFieldName("report");
		fileUploadInfo.setFileDesc("SOS Report");
		List<FileInfo> fileInfo = new ArrayList<>();
		InputStream iStream = new ByteArrayInputStream(stream.toByteArray());
		fileInfo.add(new FileInfo(iStream,
				"SOS-Report-" + pq.getPatientHid() + DateUtil.getDateTime(System.currentTimeMillis())));
		fileUploadInfo.setFileInfo(fileInfo);
		List<EvaAttachmentResponse> attachments = aBl.upload(fileUploadInfo);
		if (attachments.isEmpty()) {
			// TODO Throw Exception
		}
		return attachments.get(0);
	}
}
