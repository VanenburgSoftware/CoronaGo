package com.coronago.misc.model;

import java.io.Serializable;
import java.util.Date;

public class MeetingTimeInfo implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3683194871233803119L;
	private Date stTime;
	private Date endTime;

	public MeetingTimeInfo() {}

	public MeetingTimeInfo(Date stTime, Date endTime) {
		this.stTime = stTime;
		this.endTime = endTime;
	}

	public Date getStTime() {
		return stTime;
	}

	public void setStTime(Date stTime) {
		this.stTime = stTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
}
