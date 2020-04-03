package com.coronago.misc.webservice;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import com.coronago.misc.enums.TasksStatus;
import com.coronago.misc.logic.TasksBLImpl;
import com.coronago.misc.model.Tasks;
import com.coronago.tasks.util.TasksConfiguration;
import com.coronago.tasks.util.TasksExecutor;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;

@Produces(MediaType.APPLICATION_JSON)
@Path("/tasks")
public class TasksServices {
	private static final Logger log = LoggerFactory.getLogger(TasksServices.class.getName());
	private TasksBLImpl bdl = new TasksBLImpl();

	@POST
	@Path("/execute/{task_id}")
	public Response executeTaskById(@PathParam("task_id") String task_id, @Context HttpServletRequest request) {
		String taskRetryReason = request.getHeader("X-AppEngine-TaskRetryReason");
		String taskPreviousResponse = request.getHeader("X-AppEngine-TaskPreviousResponse");
		String retryCount = request.getHeader("X-AppEngine-TaskRetryCount");
		if (taskRetryReason != null) log.info("Task is being retried for reason - " + taskRetryReason);
		if (taskPreviousResponse != null)
			log.info("Task is being retried and previous response - " + taskPreviousResponse);
		if (retryCount != null) log.info("Task is being retried for " + retryCount + " times.");
		Tasks taskObj = bdl.getById(task_id);
		if (taskObj == null) {
			log.error("Tasks Object doesn't exists!!!");
			try {
				// FSNotificationMailUtil.sendMailToDeveloperForTaskObjectNotExists(task_id.toString());
			} catch (Exception e) {
				log.info("Email notification for tasks Object doesn't exists failed.");
			}
			return Response.ok().build();
		} else {
			TasksStatus status = taskObj.getStatus();
			if (status == TasksStatus.COMPLETED) {
				log.error("Tasks Completed Already ...");
				return Response.ok().build();
			}
		}
		// if the task is retried because it has failed due to Instance Unavailable exception, then
		// we check if we can allow execution from first
		if (taskRetryReason != null && taskRetryReason.equalsIgnoreCase("Instance Unavailable")) {
			if (taskObj.isAllow_retry_after_instance_down()) {
				// Tasks is allowed to retry, hence continue.
				log.warn(
						"Tasks already executing and retry reason is instance unavailable. Removed from Cache and to enable retry, exception is thrown.");
			} else {
				// Task is not allowed to retry. Make it success after sending mail notification to
				// developer.
				log.error(
						"Tasks retry not allowed after instance down, hence return success after email notification!!!.");
				try {
					// FSNotificationMailUtil.sendMailToDeveloperForTaskRetryNotAllowed(taskObj);
				} catch (Exception e) {
					log.info("Email notification for tasks retry not allowed after instance down is failed.");
				}
				return Response.ok().build();
			}
		}
		boolean isCompleted = false;
		String type = taskObj.getType();
		try {
			log.info("Initial Tasks Object Status: " + taskObj.getStatus() + ", QueueStatus: "
					+ taskObj.getQueue_status());
			TasksExecutor executor = TasksConfiguration.getExecutorClassByType(type);
			if (null == taskObj.getQueue_status()
					|| StringUtils.equals(TasksStatus.TASK_CREATION_FAILED.name(), taskObj.getQueue_status())
					|| StringUtils.equals(TasksStatus.FAILED.name(), taskObj.getQueue_status())
					|| StringUtils.equals(TasksStatus.RETRY.name(), taskObj.getQueue_status())
					|| StringUtils.equals(TasksStatus.CREATION_PENDING.name(), taskObj.getQueue_status())) {
				taskObj.setQueue_status(TasksStatus.CREATED.name());
			}
			bdl.setTaskAction(true);
			bdl.updateExecutionMetaData(taskObj);
			isCompleted = executor.executeStep(taskObj);
		} catch (Exception e) {
			log.error("Exception executing task: " + task_id + ", type: " + type, e);
			throw e;
		} finally {
			log.info("Task " + task_id + ", type: " + type + ", returns completion status as " + isCompleted);
		}
		TasksStatus status = taskObj.getStatus();
		if (isCompleted) {
			taskObj.setCompleted_on(System.currentTimeMillis());
			bdl.updateTaskStatus(taskObj, TasksStatus.COMPLETED);
			log.info("Task " + taskObj.getSid() + " Updated to status Completed");
		} else if (TasksStatus.FAILED.equals(status) || TasksStatus.TASK_CREATION_FAILED.equals(status)
				|| TasksStatus.RETRY.equals(status)) {
			bdl.updateTaskStatus(taskObj, TasksStatus.CREATED);
			log.info("Task " + task_id + " Updated to status Created");
		}
		log.info("Final Tasks Object Status: " + taskObj.getStatus() + ", QueueStatus: " + taskObj.getQueue_status());
		return Response.ok().build();
	}
}
