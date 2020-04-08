package com.coronago.gotomeeting.api.model;

import java.util.Date;

import com.coronago.gotomeeting.api.common.JsonUtil;

/**
 * Information about the meeting recording.
 */
public class MeetingRecording {

    /* Name of the recording */
    private String recordingName = null;

    /* Url where the mp4 file of the recording can be downloaded */
    private String downloadUrl = null;

    /* Time until when the recording is available for download */
    private Date downloadUrlValidUntil = null;

    /* Size of the recording file in bytes */
    private Long fileSize = null;

    /* Url that can be used to share the recording only or including transcripts if present */
    private String shareUrl = null;

    /**
     * @return Name of the recording
     */
    public String getRecordingName() {
        return recordingName;
    }

    /**
     * @param recordingName Name of the recording
     */
    public void setRecordingName(String recordingName) {
        this.recordingName = recordingName;
    }

    /**
     * @return Url where the mp4 file of the recording can be downloaded
     */
    public String getDownloadUrl() {
        return downloadUrl;
    }

    /**
     * @param downloadUrl Url where the mp4 file of the recording can be downloaded
     */
    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }

    /**
     * @return Time until when the recording is available for download
     */
    public Date getDownloadUrlValidUntil() {
        return downloadUrlValidUntil;
    }

    /**
     * @param downloadUrlValidUntil Time until when the recording is available for download
     */
    public void setDownloadUrlValidUntil(Date downloadUrlValidUntil) {
        this.downloadUrlValidUntil = downloadUrlValidUntil;
    }

    /**
     * @return Size of the recording file in bytes
     */
    public Long getFileSize() {
        return fileSize;
    }

    /**
     * @param fileSize Size of the recording file in bytes
     */
    public void setFileSize(Long fileSize) {
        this.fileSize = fileSize;
    }

    /**
     * @return Url that can be used to share the recording only or including transcripts if present
     */
    public String getShareUrl() {
        return shareUrl;
    }

    /**
     * @param shareUrl Url that can be used to share the recording only or including transcripts if present
     */
    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }
}

