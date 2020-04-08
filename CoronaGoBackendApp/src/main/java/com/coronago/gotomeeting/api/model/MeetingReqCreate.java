package com.coronago.gotomeeting.api.model;

import com.coronago.gotomeeting.api.common.JsonUtil;
import com.coronago.gotomeeting.api.model.MeetingType;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Describes the information required to create a meeting.
 */
public class MeetingReqCreate {

    /* The subject of the meeting. 100 characters maximum. The characters '&gt;' and '&lt;' have to be replaced with the corresponding html character code (&amp;gt; for &#39;&gt;&#39; and &amp;lt; for &#39;&lt;&#39;) */
    private String subject = null;

    /* The starting time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z */
    private Date starttime = null;

    /* The ending time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T23:00:00Z */
    private Date endtime = null;

    /* Indicates whether a password is required to join the meeting. Required parameter */
    private Boolean passwordrequired = null;

    /* A required string. Can be one of the following options: <br>PSTN (PSTN only), <br>Free (PSTN and VoIP), <br>Hybrid, (PSTN and VoIP), <br>Private (you provide numbers and access code), or <br>VoIP (VoIP only). <br>You may also enter plain text for numbers and access codes with a limit of 255 characters */
    private String conferencecallinfo = null;

    /* DEPRECATED. Must be provided and set to empty string '' */
    @Deprecated
    private String timezonekey = null;

    /* The meeting type */
    private MeetingType meetingtype = null;

    /* Co-organizer keys. Co-organizers can start the meeting on the organizers behalf. Retrieve a list of valid organizers from the \"Get all organizers\" call. */
    private List<String> coorganizerKeys = new ArrayList<String>();

    /**
     * @return The subject of the meeting. 100 characters maximum. The characters '&gt;' and '&lt;' have to be replaced with the corresponding html character code (&amp;gt; for &#39;&gt;&#39; and &amp;lt; for &#39;&lt;&#39;)
     */
    public String getSubject() {
        return subject;
    }

    /**
     * @param subject The subject of the meeting. 100 characters maximum. The characters '&gt;' and '&lt;' have to be replaced with the corresponding html character code (&amp;gt; for &#39;&gt;&#39; and &amp;lt; for &#39;&lt;&#39;)
     */
    public void setSubject(String subject) {
        this.subject = subject;
    }

    /**
     * @return The starting time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z
     */
    public Date getStarttime() {
        return starttime;
    }

    /**
     * @param starttime The starting time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T22:00:00Z
     */
    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }

    /**
     * @return The ending time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T23:00:00Z
     */
    public Date getEndtime() {
        return endtime;
    }

    /**
     * @param endtime The ending time of the meeting. Required ISO8601 UTC string, e.g. 2015-07-01T23:00:00Z
     */
    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    /**
     * @return Indicates whether a password is required to join the meeting. Required parameter
     */
    public Boolean getPasswordrequired() {
        return passwordrequired;
    }

    /**
     * @param passwordrequired Indicates whether a password is required to join the meeting. Required parameter
     */
    public void setPasswordrequired(Boolean passwordrequired) {
        this.passwordrequired = passwordrequired;
    }

    /**
     * @return A required string. Can be one of the following options: <br>PSTN (PSTN only), <br>Free (PSTN and VoIP), <br>Hybrid, (PSTN and VoIP), <br>Private (you provide numbers and access code), or <br>VoIP (VoIP only). <br>You may also enter plain text for numbers and access codes with a limit of 255 characters
     */
    public String getConferencecallinfo() {
        return conferencecallinfo;
    }

    /**
     * @param conferencecallinfo A required string. Can be one of the following options: <br>PSTN (PSTN only), <br>Free (PSTN and VoIP), <br>Hybrid, (PSTN and VoIP), <br>Private (you provide numbers and access code), or <br>VoIP (VoIP only). <br>You may also enter plain text for numbers and access codes with a limit of 255 characters
     */
    public void setConferencecallinfo(String conferencecallinfo) {
        this.conferencecallinfo = conferencecallinfo;
    }

    /**
     * @return DEPRECATED. Must be provided and set to empty string ''
     */
    @Deprecated
    public String getTimezonekey() {
        return timezonekey;
    }

    /**
     * @param timezonekey DEPRECATED. Must be provided and set to empty string ''
     */
    @Deprecated
    public void setTimezonekey(String timezonekey) {
        this.timezonekey = timezonekey;
    }

    /**
     * @return The meeting type
     */
    public MeetingType getMeetingtype() {
        return meetingtype;
    }

    /**
     * @param meetingtype The meeting type
     */
    public void setMeetingtype(MeetingType meetingtype) {
        this.meetingtype = meetingtype;
    }

    /**
     * @return Co-organizer keys. Co-organizers can start the meeting on the organizers behalf. Retrieve a list of valid organizers from the \"Get all organizers\" call.
     */
    public List<String> getCoorganizerKeys() {
        return coorganizerKeys;
    }

    /**
     * @param coorganizerKeys Co-organizer keys. Co-organizers can start the meeting on the organizers behalf. Retrieve a list of valid organizers from the \"Get all organizers\" call.
     */
    public void setCoorganizerKeys(List<String> coorganizerKeys) {
        this.coorganizerKeys = coorganizerKeys;
    }
}

