package com.coronago.bq.exception;

import com.eva.base.exception.BaseEvaException;

public class BatchSaveSizeExceededException extends BaseEvaException{
private static final String BATCH_SAVE_SIZE_EXCEEDED = "BATCH_SAVE_SIZE_EXCEEDED";
	public BatchSaveSizeExceededException(String errorCode) {
		super(BATCH_SAVE_SIZE_EXCEEDED, errorCode);
	}
	
}
