package com.coronago.bq;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;

import com.coronago.bq.exception.BQInvalidQueryException;
import com.coronago.bq.exception.BQTableNotFoundException;
import com.eva.base.exception.InternalException;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonError.ErrorInfo;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.services.bigquery.model.ErrorProto;
import com.google.api.services.bigquery.model.JobStatus;
import com.google.cloud.bigquery.BigQueryError;

public class BQErrorProcessor {
	private static Logger LOGGER = Logger.getLogger(BQErrorProcessor.class.getName());

	public static void processAndThrowError(GoogleJsonResponseException exception) {
		if (null == exception) { return; }
		try {
			GoogleJsonError details = exception.getDetails();
			String message = details.getMessage();
			List<ErrorInfo> errors = details.getErrors();
			if (null == errors || errors.isEmpty()) {
				validateMessage(Objects.toString(details.getCode(), ""), message, exception);
				throw exception;
			}
			for (Iterator<ErrorInfo> iterator = errors.iterator(); iterator.hasNext();) {
				ErrorInfo errorInfo = iterator.next();
				String errorReason = errorInfo.getReason();
				message = errorInfo.getMessage();
				validateMessage(errorReason, message, exception);
			}
			throw exception;
		} /*
			 * catch (BaseWebApplicationException e) { throw e; }
			 */ catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing Query Result", e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	public static void processAndThrowError(JobStatus jobstatus) {
		try {
			if (null == jobstatus) { return; }
			ErrorProto errorResult = jobstatus.getErrorResult();
			List<ErrorProto> errors = jobstatus.getErrors();
			if (null == errorResult && null == errors) { return; }
			if (null == errors || errors.isEmpty()) {
				LOGGER.log(Level.SEVERE, "Error Result : " + errorResult.toPrettyString());
				validateMessage(Objects.toString(errorResult.getReason(), ""), errorResult.getMessage(), null);
			} else {
				for (Iterator<ErrorProto> iterator = errors.iterator(); iterator.hasNext();) {
					ErrorProto errorInfo = iterator.next();
					LOGGER.log(Level.SEVERE, "Errors Info : " + errorInfo.toPrettyString());
					String errorReason = errorInfo.getReason();
					validateMessage(errorReason, errorInfo.getMessage(), null);
				}
			}
		} /*
			 * catch (BaseWebApplicationException e) { throw e; }
			 */ catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing JobStatus", e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	public static void processAndThrowError(com.google.cloud.bigquery.JobStatus jobstatus) {
		try {
			if (null == jobstatus) { return; }
			BigQueryError errorResult = jobstatus.getError();
			List<BigQueryError> errors = jobstatus.getExecutionErrors();
			if (null == errorResult && null == errors) { return; }
			if (null == errors || errors.isEmpty()) {
				LOGGER.log(Level.SEVERE, "Error Result : " + errorResult.toString());
				validateMessage(Objects.toString(errorResult.getReason(), ""), errorResult.getMessage(), null);
			} else {
				for (Iterator<BigQueryError> iterator = errors.iterator(); iterator.hasNext();) {
					BigQueryError errorInfo = iterator.next();
					LOGGER.log(Level.SEVERE, "Errors Info : " + errorInfo.toString());
					String errorReason = errorInfo.getReason();
					validateMessage(errorReason, errorInfo.getMessage(), null);
				}
			}
		} /*
			 * catch (BaseWebApplicationException e) { throw e; }
			 */catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing JobStatus", e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	private static void validateMessage(String errorReason, String message, GoogleJsonResponseException exception) {
		if (null == errorReason) return;
		BQErrorCode reason = BQErrorCode.get(errorReason);
		if (null == reason) { throw new InternalException(errorReason, exception); }
		switch (reason) {
			case ACCESS_DENIED:
			case BACKEND_ERROR:
			case BILLING_NOT_ENABLED:
			case BLOCKED:
			case DUPLICATE:
			case INTERNAL_ERROR:
			case INVALID:
			case NOT_IMPLEMENTED:
			case QUOTA_EXCEEDED:
			case RATE_LIMIT_EXCEEDED:
			case RESOURCE_INUSE:
			case RESOURCES_EXCEEDED:
			case RESPONSE_TOO_LARGE:
			case STOPPED:
			case TABLE_UNAVAILABLE:
				throw new InternalException(reason.name(), exception);
			case INVALID_QUERY:
				throw new BQInvalidQueryException(message);
			case NOT_FOUND:
				List<String> vars = getVariablesFromErrorMessage(message, "Not found: (.*?) (.*?)");
				throw new BQTableNotFoundException(getVariableValue(vars, 0), getVariableValue(vars, 1));
		}
	}

	private static List<String> getVariablesFromErrorMessage(String message, String msgpattern) {
		Pattern pattern = Pattern.compile(msgpattern, Pattern.CASE_INSENSITIVE);
		Matcher m = pattern.matcher(message);
		List<String> vars = new ArrayList<String>();
		if (!m.matches()) return vars;
		int count = m.groupCount();
		for (int i = 1; i <= count; i++) {
			vars.add(m.group(i));
		}
		return vars;
	}

	private static String getVariableValue(List<String> vars, int index) {
		if (null == vars || vars.isEmpty() || vars.size() <= index) return StringUtils.EMPTY;
		return StringUtils.defaultString(vars.get(index), StringUtils.EMPTY);
	}
}
