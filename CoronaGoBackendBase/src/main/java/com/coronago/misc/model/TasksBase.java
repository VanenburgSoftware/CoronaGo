package com.coronago.misc.model;

import java.util.HashMap;
import java.util.Map;

import com.coronago.misc.enums.TasksStatus;
import com.eva.base.model.BaseModel;

public abstract class TasksBase extends BaseModel {
	private static final long serialVersionUID = 7814291892970509536L;
	private String type;
	private Map<String, Object> payload = new HashMap<String, Object>();
	private Map<String, Object> headers = new HashMap<String, Object>();
	private String queue_name;
	private String service_name;
	private Long parent_task_id;
	private TasksStatus status;
	private Long completed_on;
	private Long last_run_on;
	private int retry_count;
	private String queue_status;
	private Boolean scheduled_task = false;
	private Long scheduled_time;
	private Long delay_time;
	private boolean allow_retry_after_instance_down = true;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Map<String, Object> getPayload() {
		return payload;
	}

	public void setPayload(Map<String, Object> payload) {
		this.payload = payload;
	}

	public Map<String, Object> getHeaders() {
		return headers;
	}

	public void setHeaders(Map<String, Object> headers) {
		this.headers = headers;
	}

	public String getQueue_name() {
		return queue_name;
	}

	public void setQueue_name(String queue_name) {
		this.queue_name = queue_name;
	}

	public Long getParent_task_id() {
		return parent_task_id;
	}

	public void setParent_task_id(Long parent_task_id) {
		this.parent_task_id = parent_task_id;
	}

	public TasksStatus getStatus() {
		return status;
	}

	public void setStatus(TasksStatus status) {
		this.status = status;
	}

	public Long getCompleted_on() {
		return completed_on;
	}

	public void setCompleted_on(Long completed_on) {
		this.completed_on = completed_on;
	}

	public Long getLast_run_on() {
		return last_run_on;
	}

	public void setLast_run_on(Long last_run_on) {
		this.last_run_on = last_run_on;
	}

	public int getRetry_count() {
		return retry_count;
	}

	public void setRetry_count(int retry_count) {
		this.retry_count = retry_count;
	}

	public String getQueue_status() {
		return queue_status;
	}

	public void setQueue_status(String queue_status) {
		this.queue_status = queue_status;
	}

	public Boolean getScheduled_task() {
		return scheduled_task;
	}

	public void setScheduled_task(Boolean scheduled_task) {
		this.scheduled_task = scheduled_task;
	}

	public Long getScheduled_time() {
		return scheduled_time;
	}

	public void setScheduled_time(Long scheduled_time) {
		this.scheduled_time = scheduled_time;
	}

	public Long getDelay_time() {
		return delay_time;
	}

	public void setDelay_time(Long delay_time) {
		this.delay_time = delay_time;
	}

	public String getService_name() {
		return service_name;
	}

	public void setService_name(String service_name) {
		this.service_name = service_name;
	}

	public boolean isAllow_retry_after_instance_down() {
		return allow_retry_after_instance_down;
	}

	public void setAllow_retry_after_instance_down(boolean allow_retry_after_instance_down) {
		this.allow_retry_after_instance_down = allow_retry_after_instance_down;
	}
}
