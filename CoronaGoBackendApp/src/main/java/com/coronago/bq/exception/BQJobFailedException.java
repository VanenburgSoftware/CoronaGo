package com.coronago.bq.exception;

import com.eva.base.exception.BaseEvaException;

public class BQJobFailedException extends BaseEvaException {
	private static final long serialVersionUID = 6374850842254528366L;
	private static final String ERROR_CODE = "BQ_JOB_FAILED";

	public BQJobFailedException(String developerMessage, Object... insertions) {
		super(ERROR_CODE, ERROR_CODE, insertions);
	}
}
