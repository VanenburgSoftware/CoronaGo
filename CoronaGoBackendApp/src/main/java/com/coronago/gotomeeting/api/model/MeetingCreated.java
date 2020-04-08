package com.coronago.gotomeeting.api.model;


import com.coronago.gotomeeting.api.common.JsonUtil;

/**
 * Describes a newly created meeting.
 */
public class MeetingCreated {

    /* The URL the meeting participants will use to join the meeting */
    private String joinURL = null;

    /* The meeting ID */
    private Long meetingid = null;

    /* The maximum number of participants allowed in the meeting */
    private Integer maxParticipants = null;

    /* The meeting ID. Field retained for backwards compatibility reasons */
    private Long uniqueMeetingId = null;

    /* Audio options for the meeting */
    private String conferenceCallInfo = null;

    /**
     * @return The URL the meeting participants will use to join the meeting
     */
    public String getJoinURL() {
        return joinURL;
    }

    /**
     * @param joinURL The URL the meeting participants will use to join the meeting
     */
    public void setJoinURL(String joinURL) {
        this.joinURL = joinURL;
    }

    /**
     * @return The meeting ID
     */
    public Long getMeetingid() {
        return meetingid;
    }

    /**
     * @param meetingid The meeting ID
     */
    public void setMeetingid(Long meetingid) {
        this.meetingid = meetingid;
    }

    /**
     * @return The maximum number of participants allowed in the meeting
     */
    public Integer getMaxParticipants() {
        return maxParticipants;
    }

    /**
     * @param maxParticipants The maximum number of participants allowed in the meeting
     */
    public void setMaxParticipants(Integer maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    /**
     * @return The meeting ID. Field retained for backwards compatibility reasons
     */
    public Long getUniqueMeetingId() {
        return uniqueMeetingId;
    }

    /**
     * @param uniqueMeetingId The meeting ID. Field retained for backwards compatibility reasons
     */
    public void setUniqueMeetingId(Long uniqueMeetingId) {
        this.uniqueMeetingId = uniqueMeetingId;
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
}

