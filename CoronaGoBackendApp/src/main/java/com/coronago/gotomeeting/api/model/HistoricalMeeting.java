/*
 * © 2017 LogMeIn, Inc. All Rights Reserved.
 * All rights reserved.
 * 
 * This software is distributed under the terms and conditions of the
 * LogMeIn SDK License Agreement. Please see file LICENSE for details.
 * 
 * Auto-generated file.
 */


package com.coronago.gotomeeting.api.model;

import java.util.Date;

import com.coronago.gotomeeting.api.common.JsonUtil;

/**
 * Describes a historical meeting within specified dates.
 */
public class HistoricalMeeting {

    /* The time the meeting instance started */
    private Date startTime = null;

    /* The surname of the meeting organizer */
    private String lastName = null;

    /* The duration of the meeting session in minutes */
    private String duration = null;

    /* The number of attendees at the meeting instance */
    private String numAttendees = null;

    /* The key of the company account */
    private String accountKey = null;

    /* The meeting organizer's email address */
    private String email = null;

    /* The ID of the meeting session */
    private String sessionId = null;

    /* The subject of the meeting */
    private String subject = null;

    /* The current language setting of the organizer in the web portal */
    private String locale = null;

    /* The key of the meeting organizer */
    private String organizerKey = null;

    /* The meeting ID */
    private String meetingId = null;

    /* The meeting type */
    private MeetingType meetingType = null;

    /* The meeting organizer's first name */
    private String firstName = null;

    /* The time the meeting instance ended */
    private Date endTime = null;

    /* Audio options for the meeting */
    private String conferenceCallInfo = null;

    /* Information about the meeting recording */
    private MeetingRecording recording = null;

    /**
     * @return The time the meeting instance started
     */
    public Date getStartTime() {
        return startTime;
    }

    /**
     * @param startTime The time the meeting instance started
     */
    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    /**
     * @return The surname of the meeting organizer
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName The surname of the meeting organizer
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return The duration of the meeting session in minutes
     */
    public String getDuration() {
        return duration;
    }

    /**
     * @param duration The duration of the meeting session in minutes
     */
    public void setDuration(String duration) {
        this.duration = duration;
    }

    /**
     * @return The number of attendees at the meeting instance
     */
    public String getNumAttendees() {
        return numAttendees;
    }

    /**
     * @param numAttendees The number of attendees at the meeting instance
     */
    public void setNumAttendees(String numAttendees) {
        this.numAttendees = numAttendees;
    }

    /**
     * @return The key of the company account
     */
    public String getAccountKey() {
        return accountKey;
    }

    /**
     * @param accountKey The key of the company account
     */
    public void setAccountKey(String accountKey) {
        this.accountKey = accountKey;
    }

    /**
     * @return The meeting organizer's email address
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email The meeting organizer's email address
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return The ID of the meeting session
     */
    public String getSessionId() {
        return sessionId;
    }

    /**
     * @param sessionId The ID of the meeting session
     */
    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    /**
     * @return The subject of the meeting
     */
    public String getSubject() {
        return subject;
    }

    /**
     * @param subject The subject of the meeting
     */
    public void setSubject(String subject) {
        this.subject = subject;
    }

    /**
     * @return The current language setting of the organizer in the web portal
     */
    public String getLocale() {
        return locale;
    }

    /**
     * @param locale The current language setting of the organizer in the web portal
     */
    public void setLocale(String locale) {
        this.locale = locale;
    }

    /**
     * @return The key of the meeting organizer
     */
    public String getOrganizerKey() {
        return organizerKey;
    }

    /**
     * @param organizerKey The key of the meeting organizer
     */
    public void setOrganizerKey(String organizerKey) {
        this.organizerKey = organizerKey;
    }

    /**
     * @return The meeting ID
     */
    public String getMeetingId() {
        return meetingId;
    }

    /**
     * @param meetingId The meeting ID
     */
    public void setMeetingId(String meetingId) {
        this.meetingId = meetingId;
    }

    /**
     * @return The meeting type
     */
    public MeetingType getMeetingType() {
        return meetingType;
    }

    /**
     * @param meetingType The meeting type
     */
    public void setMeetingType(MeetingType meetingType) {
        this.meetingType = meetingType;
    }

    /**
     * @return The meeting organizer's first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName The meeting organizer's first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return The time the meeting instance ended
     */
    public Date getEndTime() {
        return endTime;
    }

    /**
     * @param endTime The time the meeting instance ended
     */
    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    /**
     * @return Audio options for the meeting
     */
    public String getConferenceCallInfo() {
        return conferenceCallInfo;
    }

    /**
     * @param conferenceCallInfo Audio options for the meeting
     */
    public void setConferenceCallInfo(String conferenceCallInfo) {
        this.conferenceCallInfo = conferenceCallInfo;
    }

    /**
     * @return Information about the meeting recording
     */
    public MeetingRecording getRecording() {
        return recording;
    }

    /**
     * @param recording Information about the meeting recording
     */
    public void setRecording(MeetingRecording recording) {
        this.recording = recording;
    }
}

