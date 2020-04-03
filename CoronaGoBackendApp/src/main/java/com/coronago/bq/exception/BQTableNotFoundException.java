package com.coronago.bq.exception;

import com.eva.base.exception.BaseEvaException;

public class BQTableNotFoundException extends BaseEvaException {
	/**
		 * 
		 */
	private static final long serialVersionUID = 6374850842264528366L;
	private static final String BQ_NOT_FOUND = "BQ_NOT_FOUND";

	public BQTableNotFoundException(Object... insertions) {
		super(BQ_NOT_FOUND, BQ_NOT_FOUND, insertions);
	}
}
