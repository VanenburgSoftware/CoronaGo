package com.coronago.misc.logic;

import org.apache.commons.lang3.StringUtils;

import com.coronago.misc.enums.TasksStatus;
import com.coronago.misc.model.Tasks;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.util.JsonUtil;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskAlreadyExistsException;
import com.google.appengine.api.taskqueue.TaskOptions;

public class TasksBLImpl extends TasksBLBaseImpl<Tasks> implements ITasksBL<Tasks> {
	private static final Logger LOGGER = LoggerFactory.getLogger(TasksBLImpl.class.getName());
	private boolean taskAction;

	public TasksBLImpl() {
		super(Tasks.class);
	}

	@Override
	public void updateTaskStatus(Tasks taskObj, TasksStatus status) {
		LOGGER.info("Updating task status from " + taskObj.getStatus() + " to " + status);
		taskObj.setStatus(status);
		this.update(taskObj);
	}

	@Override
	public void updateExecutionMetaData(Tasks taskObj) {
		if (taskObj.getLast_run_on() == null) {
			taskObj.setRetry_count(0);
		} else {
			taskObj.setRetry_count(taskObj.getRetry_count() + 1);
		}
		taskObj.setLast_run_on(System.currentTimeMillis());
		this.update(taskObj);
	}

	public boolean isTaskAction() {
		return taskAction;
	}

	public void setTaskAction(boolean taskAction) {
		this.taskAction = taskAction;
	}

	public void onAfterSaveDB(Tasks modelObj) {
		LOGGER.info("Created Task: " + modelObj.getSid());
		createInTaskQueue(modelObj, 0);
	}

	public boolean createInTaskQueue(Tasks modelObj, int retryCount) {
		return createInTaskQueue(modelObj, retryCount, null);
	}

	public boolean createInTaskQueue(Tasks modelObj, int retryCount, String task_name) {
		try {
			Queue queue = QueueFactory.getQueue(modelObj.getQueue_name());
			TaskOptions taskOptions = null;
			if (modelObj.getScheduled_task()) {
				taskOptions = TaskOptions.Builder.withUrl("/rest/tasks/execute/" + modelObj.getSid())
						.countdownMillis(modelObj.getDelay_time());
				modelObj.setScheduled_time(System.currentTimeMillis() + modelObj.getDelay_time());
			} else {
				taskOptions = TaskOptions.Builder.withUrl("/rest/tasks/execute/" + modelObj.getSid());
			}
			if (StringUtils.isNotBlank(task_name)) {
				taskOptions.taskName(task_name);
			} else {
				taskOptions.taskName("tasks-" + modelObj.getSid());
			}
			queue.add(taskOptions);
			LOGGER.info("Successfully submitted task to queue");
			return true;
		} catch (TaskAlreadyExistsException ex) {
			LOGGER.info("Task already created in queue !!", ex);
			return true;
		} catch (Exception e) {
			if (retryCount < 5) {
				sleepThread(retryCount);
				return createInTaskQueue(modelObj, retryCount + 1);
			} else {
				updateTaskQueueStatus(modelObj, TasksStatus.TASK_CREATION_FAILED);
				try {
					LOGGER.error("Task creation failed, even after 5 retries and exception as follows: \n" + e, e);
					// FSNotificationMailUtil.sendMailToDeveloperForTaskFailure(modelObj, e.toString());
				} catch (Exception mailNotificationException) {
					try {
						LOGGER.error("Sending mail to developer failed with following exception: \n"
								+ mailNotificationException
								+ "\n failed task creation details as follows, \n Task Type: " + modelObj.getType()
								+ "\n Queue Name: " + modelObj.getQueue_name() + "\n Task Payload: "
								+ JsonUtil.MAPPER.writeValueAsString(modelObj.getPayload()) + "\n Parent Task Id: "
								+ modelObj.getParent_task_id(), mailNotificationException);
					} catch (Exception jsonSerializeException) {
						LOGGER.error("Sending mail to developer failed with following exception: \n"
								+ jsonSerializeException + "\n failed task creation details as follows, \n Task Type: "
								+ modelObj.getType() + "\n Queue Name: " + modelObj.getQueue_name()
								+ "\n Parent Task Id: " + modelObj.getParent_task_id(), jsonSerializeException);
					}
				}
				return false;
			}
		}
	}

	private void sleepThread(int retryCount) {
		try {
			Thread.sleep(retryCount * retryCount * 1000);
		} catch (InterruptedException ie) {
			LOGGER.error("Thread sleep has following exception: \n" + ie, ie);
		}
	}

	public void updateTaskQueueStatus(Tasks taskObj, TasksStatus status) {
		LOGGER.info("Updating task Queue status from " + taskObj.getQueue_status() + " to " + status);
		updateTaskQueueStatus(taskObj, status, 0);
	}

	private void updateTaskQueueStatus(Tasks taskObj, TasksStatus status, int retryCount) {
		try {
			taskObj.setQueue_status(status.toString());
			this.update(taskObj);
			LOGGER.info("Successfully Updated task Queue status to " + status);
		} catch (Exception e) {
			LOGGER.warn("Exception updating Task Queue Status to " + status + " for task: " + taskObj.getSid(), e);
			if (retryCount > 5) {
				LOGGER.error("Failed to update Task Queue Status to " + status + " for task: " + taskObj.getSid());
				throw e;
			}
			sleepThread(retryCount);
			updateTaskQueueStatus(taskObj, status, ++retryCount);
		}
	}
}
