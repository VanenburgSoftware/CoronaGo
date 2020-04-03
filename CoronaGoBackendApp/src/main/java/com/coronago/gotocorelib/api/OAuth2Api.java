/*
 * © 2017 LogMeIn, Inc. All Rights Reserved.
 * All rights reserved.
 *
 * This software is distributed under the terms and conditions of the
 * LogMeIn SDK License Agreement. Please see file LICENSE for details.
 *
 * Auto-generated file.
 */

package com.coronago.gotocorelib.api;

import static java.util.Collections.EMPTY_MAP;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;

import com.coronago.gotocorelib.api.model.TokenResponse;
import com.coronago.gotomeeting.api.common.ApiException;
import com.coronago.gotomeeting.api.common.ApiInvoker;

public class OAuth2Api {

	private String basePath = "https://api.getgo.com/oauth/v2";
	private ApiInvoker apiInvoker = ApiInvoker.getInstance();

	/**
	 * Initializes a new instance of the OAuth2Api class using the default endpoint
	 * base url for the services being accessed.
	 * 
	 * @param consumerKey
	 *            The app's consumer key (client ID).
	 * @param consumerSecret
	 *            The app's consumer secret (client secret).
	 */
	public OAuth2Api(String consumerKey, String consumerSecret) {
		apiInvoker.addDefaultHeader("Authorization",
				"Basic " + Base64.encodeBase64String((consumerKey + ":" + consumerSecret).getBytes()));
	}

	/**
	 * Initializes a new instance of the OAuth2Api class using an endpoint base url
	 * other than the default. Use this constructor only if you should need to
	 * override the default endpoint base url
	 * 
	 * @param basePath
	 *            The endpoint base url for the services being accessed.
	 * @param consumerKey
	 *            The app's consumer key (client ID).
	 * @param consumerSecret
	 *            The app's consumer secret (client secret).
	 */
	public OAuth2Api(String basePath, String consumerKey, String consumerSecret) {
		this(consumerKey, consumerSecret);
		this.basePath = basePath;
	}

	public ApiInvoker getInvoker() {
		return apiInvoker;
	}

	public String getBasePath() {
		return basePath;
	}

	/**
	 * Returns the authorization URL where the browser will be directed given the
	 * consumer key of the app and a redirect Url.
	 *
	 * @param clientId
	 *            The consumer (API) key of the application.
	 * @return The authorization URL where the browser will be directed.
	 */
	public String getOAuth2AuthorisationUrl(String clientId) {
		String authUrl = String.format("/authorize?client_id=%s&response_type=code", clientId);
		return basePath + authUrl;
	}

	/**
	 * Gets the Response Key from the OAuth flow contained in the user redirection
	 * back to the application. This must be exchanged for an Access Token.
	 *
	 * @param navigatedUrl
	 *            The user redirection.
	 * @return The response key.
	 * @throws ApiException
	 *             If an error occurred while obtaining a responce key.
	 */
	public String getResponseKey(URL navigatedUrl) throws ApiException {

		String query = navigatedUrl.getQuery();
		if (StringUtils.isBlank(query)) {
			return null;
		}

		String[] pairs = query.split("[ .&,?,/]+");
		Map<String, String> parameters = new HashMap<String, String>();

		for (String pair : pairs) {
			String[] nameValue = pair.split("=", 2);
			parameters.put(nameValue[0], nameValue[1]);
		}

		if (parameters.containsKey("code")) {
			return parameters.get("code");
		}

		if (parameters.containsKey("error_description")) {
			throw new ApiException(parameters.get("error_description"));
		}
		return null;
	}

	/**
	 * Exchanges the response key for an access token.
	 *
	 * @param responseKey
	 *            The response key.
	 * @return Information containing the access token and other details about the
	 *         user's product account.
	 * @throws ApiException
	 *             If an error occurred during exchanging the response key for an
	 *             access token.
	 */
	public TokenResponse getAccessTokenResponse(String responseKey) throws ApiException {

		if (responseKey == null) {
			throw new ApiException("Required parameter responseKey is null.");
		}

		Map<String, String> formParams = new HashMap<String, String>();
		formParams.put("grant_type", "authorization_code");
		formParams.put("code", responseKey);

		return executeTokenRequest(formParams);
	}

	/**
	 * Generates an access token from user credentials.
	 *
	 * @param username
	 *            The GoTo product user email.
	 * @param password
	 *            The GoTo product user password.
	 * @return Information containing the access token and other details about the
	 *         user's product account.
	 * @throws ApiException
	 *             If an error occurred during the access token generation.
	 */
	public TokenResponse directLogin(String username, String password) throws ApiException {

		if (username == null) {
			throw new ApiException("Required parameter username is null.");
		}

		if (password == null) {
			throw new ApiException("Required parameter password is null.");
		}

		Map<String, String> formParams = new HashMap<String, String>();
		formParams.put("grant_type", "password");
		formParams.put("username", username);
		formParams.put("password", password);

		return executeTokenRequest(formParams);
	}

	/**
	 * Exchanges the refresh token for an access token.
	 *
	 * @param refreshToken
	 *            The refresh token from the access token response.
	 * @return Information containing the access token and other details about the
	 *         user's product account.
	 * @throws ApiException
	 *             If an error occurred during exchanging the refresh token for an
	 *             access token.
	 */
	public TokenResponse getAccessTokenUsingRefreshToken(String refreshToken) throws ApiException {
		if (refreshToken == null) {
			throw new ApiException("Required parameter refreshToken is null.");
		}

		Map<String, String> formParams = new HashMap<String, String>();
		formParams.put("grant_type", "refresh_token");
		formParams.put("refresh_token", refreshToken);

		return executeTokenRequest(formParams);
	}

	private TokenResponse executeTokenRequest(Map<String, String> formParams)
			throws com.coronago.gotomeeting.api.common.ApiException {
		Map<String, String> headerParams = new HashMap<String, String>();
		headerParams.put("Accept", "application/json");

		String response = apiInvoker.invokeAPI(basePath, "/token", "POST", EMPTY_MAP, null, headerParams, formParams,
				"application/x-www-form-urlencoded");
		if (response != null) {
			return (TokenResponse) ApiInvoker.deserialize(response, "", TokenResponse.class);
		}
		return null;
	}
}
