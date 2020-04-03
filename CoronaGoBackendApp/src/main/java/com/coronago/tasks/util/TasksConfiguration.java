package com.coronago.tasks.util;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.coronago.misc.exception.TasksExecutorConstructionException;
import com.coronago.misc.exception.TasksExecutorNotDefinedException;
import com.eva.base.util.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;

public class TasksConfiguration {
	public static final Map<String, String> TASKS_EXECUTOR_MAP = new HashMap<String, String>();
	private static final Logger log = Logger.getLogger(TasksConfiguration.class.getName());

	public static TasksExecutor getExecutorClassByType(String taskType) {
		String executorClass = TASKS_EXECUTOR_MAP.get(taskType);
		if (executorClass == null) throw new TasksExecutorNotDefinedException(taskType);
		TasksExecutor executor = null;
		try {
			executor = (TasksExecutor) Class.forName(executorClass).newInstance();
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error while creating Instance for " + executorClass, e);
			throw new TasksExecutorConstructionException(executorClass, taskType);
		}
		return executor;
	}

	public static void initializeTasksConfigurations(String configFile) throws Exception {
		InputStream inStream = TasksConfiguration.class.getResourceAsStream("/" + configFile);
		Map<String, String> tasksExecutors = JsonUtil.fromStream(inStream, new TypeReference<Map<String, String>>() {});
		TASKS_EXECUTOR_MAP.putAll(tasksExecutors);
		inStream.close();
	}

	public static void clearTasksConfigurations() throws Exception {
		TASKS_EXECUTOR_MAP.clear();
	}
}
