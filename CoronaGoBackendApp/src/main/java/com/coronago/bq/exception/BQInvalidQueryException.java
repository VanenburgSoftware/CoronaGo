package com.coronago.bq.exception;

import com.eva.base.exception.BaseEvaException;

public class BQInvalidQueryException extends BaseEvaException {
	
	private static final long serialVersionUID = 6374850842254528366L;
	private static final String ERROR_CODE = "BQ_INVALID_QUERY";

	public BQInvalidQueryException(Object... insertions) {
		super(ERROR_CODE, ERROR_CODE, insertions);
	}
}
