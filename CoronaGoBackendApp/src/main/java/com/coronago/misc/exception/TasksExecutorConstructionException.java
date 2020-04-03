package com.coronago.misc.exception;

import com.eva.base.exception.BaseEvaException;

public class TasksExecutorConstructionException extends BaseEvaException{
	private static final long serialVersionUID = -463389401571950548L;
	public static String ERROR_CODE = "TASK_EXECUTOR_CONSTRUCTION";

	public TasksExecutorConstructionException(String executorClass, String taskType) {
		super(ERROR_CODE, ERROR_CODE, executorClass,taskType);
	}
}
