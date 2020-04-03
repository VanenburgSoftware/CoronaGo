/*
 * © 2017 LogMeIn, Inc. All Rights Reserved.
 * All rights reserved.
 * 
 * This software is distributed under the terms and conditions of the
 * LogMeIn SDK License Agreement. Please see file LICENSE for details.
 * 
 * Auto-generated file.
 */


package com.coronago.gotomeeting.api;

import java.util.Date;

import com.coronago.gotomeeting.api.common.ApiException;
import com.coronago.gotomeeting.api.common.ApiInvoker;
import com.coronago.gotomeeting.api.common.JsonUtil;
import com.coronago.gotomeeting.api.model.HistoricalMeeting;
import com.coronago.gotomeeting.api.model.MeetingCreated;
import com.coronago.gotomeeting.api.model.MeetingReqCreate;

import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.FormDataMultiPart;

import java.util.*;

public class MeetingsApi {

    private String basePath = "https://api.getgo.com/G2M/rest";
    private ApiInvoker apiInvoker = ApiInvoker.getInstance();

    /**
     * Initializes a new instance of the MeetingsApi class using the
     * default endpoint base url for the services being accessed.
     */
    public MeetingsApi() {
    }

    /**
     * Initializes a new instance of the MeetingsApi class using an endpoint base
     * url other than the default. Use this constructor only if you should need
     * to override the default endpoint base url.
     * @param basePath The endpoint base url for the services being accessed.
     */
    public MeetingsApi(String basePath) {
        this.basePath = basePath;
    }

    public ApiInvoker getInvoker() {
        return apiInvoker;
    }
  
    public String getBasePath() {
        return basePath;
    }

    /**
     * Create meeting
     * Create a new meeting based on the parameters specified.
     * @param authorization Access token
     * @param body The meeting details
     * @return List&lt;MeetingCreated&gt;
     * @throws ApiException If the response status code is not Successful 2xx, or an error has occurred during parameter serialization or response deserialization
     */
    public List<MeetingCreated> createMeeting(String authorization, MeetingReqCreate body) throws ApiException {

        Object postBody = body;

        if(authorization == null) {
            throw new ApiException("Required parameter authorization is null.");
        }

        if(body == null) {
            throw new ApiException("Required parameter body is null.");
        }

        // create path and map variables
        String path = "/meetings"
                .replaceAll("\\{format\\}", "json");

        // query params
        Map<String, String> queryParams = new HashMap<String, String>();
        Map<String, String> headerParams = new HashMap<String, String>();
        Map<String, String> formParams = new HashMap<String, String>();

        headerParams.put("Authorization", authorization);

        String[] contentTypes = {
            "application/json"
        };
        String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

        if(contentType.startsWith("multipart/form-data")) {
            boolean hasFields = false;
            FormDataMultiPart mp = new FormDataMultiPart();

            if(hasFields)
                postBody = mp;
        }
        else {
        }

        String response = apiInvoker.invokeAPI(basePath, path, "POST", queryParams, postBody, headerParams, formParams, contentType);
        if(response != null){
            return (List<MeetingCreated>) ApiInvoker.deserialize(response, "List", MeetingCreated.class);
        }
        return null;
    }

    /**
     * Delete meeting
     * Deletes the meeting identified by the meetingId.
     * @param authorization Access token
     * @param meetingId The meeting ID
     * @throws ApiException If the response status code is not Successful 2xx, or an error has occurred during parameter serialization or response deserialization
     */
    public void deleteMeeting(String authorization, Long meetingId) throws ApiException {

        Object postBody = null;

        if(authorization == null) {
            throw new ApiException("Required parameter authorization is null.");
        }

        if(meetingId == null) {
            throw new ApiException("Required parameter meetingId is null.");
        }

        // create path and map variables
        String path = "/meetings/{meetingId}"
                .replaceAll("\\{format\\}", "json")
                .replaceAll("\\{" + "meetingId" + "\\}", apiInvoker.escapeString(meetingId.toString()));

        // query params
        Map<String, String> queryParams = new HashMap<String, String>();
        Map<String, String> headerParams = new HashMap<String, String>();
        Map<String, String> formParams = new HashMap<String, String>();

        headerParams.put("Authorization", authorization);

        String[] contentTypes = {
            "application/json"
        };
        String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

        if(contentType.startsWith("multipart/form-data")) {
            boolean hasFields = false;
            FormDataMultiPart mp = new FormDataMultiPart();

            if(hasFields)
                postBody = mp;
        }
        else {
        }

        apiInvoker.invokeAPI(basePath, path, "DELETE", queryParams, postBody, headerParams, formParams, contentType);
    }

    /**
     * Get historical meetings
     * Get historical meetings for the currently authenticated organizer that started within the specified date/time range. Remark: Meetings which are still ongoing at the time of the request are NOT contained in the result array.
     * @param authorization Access token
     * @param startDate Required start of date range, in ISO8601 UTC format, e.g. 2015-07-01T22:00:00Z
     * @param endDate Required end of date range, in ISO8601 UTC format, e.g. 2015-07-01T23:00:00Z
     * @return List&lt;HistoricalMeeting&gt;
     * @throws ApiException If the response status code is not Successful 2xx, or an error has occurred during parameter serialization or response deserialization
     */
    public List<HistoricalMeeting> getHistoricalMeetings(String authorization, Date startDate, Date endDate) throws ApiException {

        Object postBody = null;

        if(authorization == null) {
            throw new ApiException("Required parameter authorization is null.");
        }

        if(startDate == null) {
            throw new ApiException("Required parameter startDate is null.");
        }

        if(endDate == null) {
            throw new ApiException("Required parameter endDate is null.");
        }

        // create path and map variables
        String path = "/historicalMeetings"
                .replaceAll("\\{format\\}", "json");

        // query params
        Map<String, String> queryParams = new HashMap<String, String>();
        Map<String, String> headerParams = new HashMap<String, String>();
        Map<String, String> formParams = new HashMap<String, String>();

        String startDateString = JsonUtil.Stringify(startDate);
        if(!"null".equals(startDateString)){
            queryParams.put("startDate", startDateString);
        }

        String endDateString = JsonUtil.Stringify(endDate);
        if(!"null".equals(endDateString)){
            queryParams.put("endDate", endDateString);
        }

        headerParams.put("Authorization", authorization);

        String[] contentTypes = {
            "application/json"
        };
        String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

        if(contentType.startsWith("multipart/form-data")) {
            boolean hasFields = false;
            FormDataMultiPart mp = new FormDataMultiPart();

            if(hasFields)
                postBody = mp;
        }
        else {
        }

        String response = apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType);
        if(response != null){
            return (List<HistoricalMeeting>) ApiInvoker.deserialize(response, "List", HistoricalMeeting.class);
        }
        return null;
    }
}
