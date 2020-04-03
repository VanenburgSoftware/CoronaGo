package com.coronago.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.coronago.bq.model.BQBaseObject;
import com.coronago.misc.enums.TasksStatus;
import com.coronago.misc.logic.TasksBLImpl;
import com.coronago.misc.model.Tasks;

public class TaskCreationUtil {
	private static final Logger LOGGER = Logger.getLogger(TaskCreationUtil.class.getName());

	public static void createBQSyncRetryTasks(String recordType, List<? extends BQBaseObject> modelObjs) {
		String record_id = "";
		for (Object modelObj : modelObjs) {
			record_id += ((BQBaseObject) modelObj).getId().toString() + ",";
		}
		createBQSyncRetryTasks(recordType, record_id.substring(0, record_id.length() - 1), true);
	}

	public static void createBQSyncRetryTasks(String recordType, String record_Id) {
		createBQSyncRetryTasks(recordType, record_Id, true);
	}

	public static void createBQSyncRetryTasks(String recordType, String[] record_Ids) {
		String record_id = "";
		for (String id : record_Ids) {
			record_id += id + ",";
		}
		createBQSyncRetryTasks(recordType, record_id.substring(0, record_id.length() - 1), true);
	}

	public static void createBQSyncRetryTasks(String recordType, String record_Id, boolean isCreate) {
		Tasks task = new Tasks();
		task.setQueue_name("bqsynchandler");
		task.setType(recordType.toLowerCase() + "_bq_sync_executor");
		task.setStatus(TasksStatus.CREATED);
		// task.setParent_task_id(parent_task_id);
		task.setService_name("default");
		Map<String, Object> payload = new HashMap<String, Object>();
		payload.put("record_type", recordType);
		payload.put("record_id", record_Id);
		payload.put("isCreate", isCreate);
		task.setPayload(payload);
		TasksBLImpl tasksBLImpl = new TasksBLImpl();
		tasksBLImpl.setTaskAction(true);
		task = tasksBLImpl.save(task);
		LOGGER.log(Level.INFO, "Created BQ Sync retry Task with id - " + task.getSid());
	}
}
