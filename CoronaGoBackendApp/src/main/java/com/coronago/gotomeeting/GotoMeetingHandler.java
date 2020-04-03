package com.coronago.gotomeeting;

import java.util.Date;
import java.util.List;

import com.coronago.gotocorelib.api.OAuth2Api;
import com.coronago.gotocorelib.api.model.TokenResponse;
import com.coronago.gotomeeting.api.MeetingsApi;
import com.coronago.gotomeeting.api.common.ApiException;
import com.coronago.gotomeeting.api.model.HistoricalMeeting;
import com.coronago.gotomeeting.api.model.MeetingCreated;
import com.coronago.gotomeeting.api.model.MeetingReqCreate;
import com.eva.base.appconfiguration.IAppConfigurationCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;

public class GotoMeetingHandler {
	private static final Logger LOGGER = LoggerFactory.getLogger(GotoMeetingHandler.class.getName());
	private static String consumerKey;
	private static String consumerSecret;
	private String userName;
	private String password;
	private String accessToken;
	private String refreshToken;
	
	static {
		IAppConfigurationCache appConfigCache = CacheManager.getInstance().getCache(IAppConfigurationCache.NAME);
		GotoMeetingHandler.consumerKey = appConfigCache.getAsString("consumer_key");
		GotoMeetingHandler.consumerSecret = appConfigCache.getAsString("consumer_secret");
	}

	public GotoMeetingHandler(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}

	private String getAccessToken() throws ApiException {
		OAuth2Api authApi = new OAuth2Api(consumerKey, consumerSecret);
		TokenResponse response = null;
		try {
			response = authApi.directLogin(userName, password);
		} catch (ApiException e) {
			LOGGER.error("Exception while getting access token for user :"+userName ,e);
			throw e;
		}
		accessToken = response.getAccessToken();
		refreshToken = response.getRefreshToken();
		return accessToken;
	}

	private String refreshAccessToken() throws ApiException {
		OAuth2Api authApi = new OAuth2Api(consumerKey, consumerSecret);
		TokenResponse response = authApi.getAccessTokenUsingRefreshToken(refreshToken);
		accessToken = response.getAccessToken();
		refreshToken = response.getRefreshToken();
		return accessToken;
	}

	public List<MeetingCreated> createMeeting(MeetingReqCreate createRequest)
			throws com.coronago.gotomeeting.api.common.ApiException {
		MeetingsApi meetingsApi = new MeetingsApi();
		List<MeetingCreated> meetingsCreatedList = meetingsApi.createMeeting(getAccessToken(), createRequest);
		return meetingsCreatedList;
	}

	public List<HistoricalMeeting> getMeetingHistory(Date startDate, Date endDate)
			throws com.coronago.gotomeeting.api.common.ApiException {
		MeetingsApi meetingsApi = new MeetingsApi();
		List<HistoricalMeeting> meetingHistoryDetailsList =
				meetingsApi.getHistoricalMeetings(getAccessToken(), startDate, endDate);
		return meetingHistoryDetailsList;
	}
}
