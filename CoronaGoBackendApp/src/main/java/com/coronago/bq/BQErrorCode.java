package com.coronago.bq;

import java.util.HashMap;
import java.util.Map;

public enum BQErrorCode {
	ACCESS_DENIED("accessDenied", "BQ_ACCESS_DENIED"),
	BACKEND_ERROR("backendError", "BQ_BACKEND_ERROR"),
	BILLING_NOT_ENABLED("billingNotEnabled", "BQ_BILLING_NOT_ENABLED"),
	BLOCKED("blocked", "BQ_BLOCKED"),
	DUPLICATE("duplicate", "BQ_DUPLICATE"),
	INTERNAL_ERROR("internalError", "BQ_INTERNAL_ERROR"),
	INVALID("invalid", "BQ_INVALID"),
	INVALID_QUERY("invalidQuery", "BQ_INVALID_QUERY"),
	NOT_FOUND("notFound", "BQ_NOT_FOUND"),
	NOT_IMPLEMENTED("notImplemented", "BQ_NOT_IMPLEMENTED"),
	QUOTA_EXCEEDED("quotaExceeded", "BQ_QUOTA_EXCEEDED"),
	RATE_LIMIT_EXCEEDED("rateLimitExceeded", "BQ_RATE_LIMIT_EXCEEDED"),
	RESOURCE_INUSE("resourceInUse", "BQ_RESOURCE_INUSE"),
	RESOURCES_EXCEEDED("resourcesExceeded", "BQ_RESOURCES_EXCEEDED"),
	RESPONSE_TOO_LARGE("responseTooLarge", "BQ_RESPONSE_TOO_LARGE"),
	STOPPED("stopped", "BQ_STOPPED"),
	TABLE_UNAVAILABLE("tableUnavailable", "TABLE_UNAVAILABLE");
	private String errorCode;
	private String errorDescription;
	private static Map<String, BQErrorCode> values = new HashMap<>();
	static {
		for (BQErrorCode bqErrorCode : BQErrorCode.values()) {
			values.put(bqErrorCode.errorCode(), bqErrorCode);
		}
	}

	BQErrorCode(String errorCode, String errorDescription) {
		this.errorCode = errorCode;
		this.errorDescription = errorDescription;
	}

	public String errorCode() {
		return this.errorCode;
	}

	public String errorDescription() {
		return this.errorDescription;
	}

	public static BQErrorCode get(String errorCode) {
		return values.get(errorCode);
	}
}
