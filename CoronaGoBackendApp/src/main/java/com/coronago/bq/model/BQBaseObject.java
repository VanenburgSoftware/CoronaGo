package com.coronago.bq.model;

public abstract class BQBaseObject {
	private Long sync_time;
	private boolean record_deleted = false;
	private String id;
	private String unique_key_value;

	public Long getSync_time() {
		return sync_time;
	}

	public void setSync_time(Long sync_time) {
		this.sync_time = sync_time;
	}

	public boolean isRecord_deleted() {
		return record_deleted;
	}

	public void setRecord_deleted(boolean record_deleted) {
		this.record_deleted = record_deleted;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUnique_key_value() {
		return unique_key_value;
	}

	public void setUnique_key_value(String unique_key_value) {
		this.unique_key_value = unique_key_value;
	}
}
