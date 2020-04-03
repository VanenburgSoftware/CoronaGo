package com.coronago.misc.exception;

import com.eva.base.exception.BaseEvaException;

public class TasksExecutorNotDefinedException extends BaseEvaException{

	private static final long serialVersionUID = -463385101571950548L;
	public static String ERROR_CODE = "TASK_EXECUTOR_NOT_DEFINED";
	public TasksExecutorNotDefinedException(String taskType) {
		super(ERROR_CODE,ERROR_CODE,taskType);
	}
}
