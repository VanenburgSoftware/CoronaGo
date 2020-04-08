package com.coronago.gotocorelib.api.model;

import com.coronago.gotomeeting.api.common.JsonUtil;

/**
 *
 */
public class TokenResponse {

	/* Oauth access token */
	private String access_token = null;

	/* Expiration time in seconds (typically 356 days) */
	private String expires_in = null;

	/*
	 * The token to use to obtain a new access token, for example, if the current
	 * access token has expired. The refresh token is valid for 13 months.
	 */
	private String refresh_token = null;

	/* GoTo product user organizer key */
	private String organizer_key = null;

	/* GoTo product account key (may be blank) */
	private String account_key = null;

	/* GoTo product type, i.e. personal or corporate (may be missing or blank) */
	private AccountTypeEnum account_type = null;

	/* GoTo product user organizer first name */
	private String firstName = null;

	/* GoTo product user organizer last name */
	private String lastName = null;

	/* GoTo product user organizer email */
	private String email = null;

	/* The version of the access token */
	private String version = null;

	/* The type of token */
	private String token_type = null;

	/**
	 * GoTo product type, i.e. personal or corporate (may be missing or blank)
	 */
	public enum AccountTypeEnum {
		personal, corporate
	}

	/**
	 * @return Oauth access token
	 */
	public String getAccessToken() {
		return access_token;
	}

	/**
	 * @param accessToken
	 *            Oauth access token
	 */
	public void setAccessToken(String accessToken) {
		this.access_token = accessToken;
	}

	/**
	 * @return Expiration time in seconds (typically 356 days)
	 */
	public String getExpiresIn() {
		return expires_in;
	}

	/**
	 * @param expiresIn
	 *            Expiration time in seconds (typically 356 days)
	 */
	public void setExpiresIn(String expiresIn) {
		this.expires_in = expiresIn;
	}

	/**
	 * @return The token to use to obtain a new access token, for example, if the
	 *         current access token has expired. The refresh token is valid for 13
	 *         months.
	 */
	public String getRefreshToken() {
		return refresh_token;
	}

	/**
	 * @param refreshToken
	 *            The token to use to obtain a new access token, for example, if the
	 *            current access token has expired. The refresh token is valid for
	 *            13 months.
	 */
	public void setRefreshToken(String refreshToken) {
		this.refresh_token = refreshToken;
	}

	/**
	 * @return GoTo product user organizer key
	 */
	public String getOrganizerKey() {
		return organizer_key;
	}

	/**
	 * @param organizerKey
	 *            GoTo product user organizer key
	 */
	public void setOrganizerKey(String organizerKey) {
		this.organizer_key = organizerKey;
	}

	/**
	 * @return GoTo product account key (may be blank)
	 */
	public String getAccountKey() {
		return account_key;
	}

	/**
	 * @param accountKey
	 *            GoTo product account key (may be blank)
	 */
	public void setAccountKey(String accountKey) {
		this.account_key = accountKey;
	}

	/**
	 * @return GoTo product type, i.e. personal or corporate (may be missing or
	 *         blank)
	 */
	public AccountTypeEnum getAccountType() {
		return account_type;
	}

	/**
	 * @param accountType
	 *            GoTo product type, i.e. personal or corporate (may be missing or
	 *            blank)
	 */
	public void setAccountType(AccountTypeEnum accountType) {
		this.account_type = accountType;
	}

	/**
	 * @return GoTo product user organizer first name
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName
	 *            GoTo product user organizer first name
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return GoTo product user organizer last name
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName
	 *            GoTo product user organizer last name
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @return GoTo product user organizer email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email
	 *            GoTo product user organizer email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return The version of the access token
	 */
	public String getVersion() {
		return version;
	}

	/**
	 * @param version
	 *            The version of the access token
	 */
	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * @return The type of token
	 */
	public String getTokenType() {
		return token_type;
	}

	/**
	 * @param tokenType
	 *            The type of token
	 */
	public void setTokenType(String tokenType) {
		this.token_type = tokenType;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class TokenResponse {\n");
		String accessTokenString = JsonUtil.Stringify(access_token);
		if (accessTokenString != null && !accessTokenString.isEmpty())
			sb.append(String.format("  access_token: %s\n", accessTokenString));
		String expiresInString = JsonUtil.Stringify(expires_in);
		if (expiresInString != null && !expiresInString.isEmpty())
			sb.append(String.format("  expires_in: %s\n", expiresInString));
		String refreshTokenString = JsonUtil.Stringify(refresh_token);
		if (refreshTokenString != null && !refreshTokenString.isEmpty())
			sb.append(String.format("  refresh_token: %s\n", refreshTokenString));
		String organizerKeyString = JsonUtil.Stringify(organizer_key);
		if (organizerKeyString != null && !organizerKeyString.isEmpty())
			sb.append(String.format("  organizer_key: %s\n", organizerKeyString));
		String accountKeyString = JsonUtil.Stringify(account_key);
		if (accountKeyString != null && !accountKeyString.isEmpty())
			sb.append(String.format("  account_key: %s\n", accountKeyString));
		String accountTypeString = JsonUtil.Stringify(account_type);
		if (accountTypeString != null && !accountTypeString.isEmpty())
			sb.append(String.format("  account_type: %s\n", accountTypeString));
		String firstNameString = JsonUtil.Stringify(firstName);
		if (firstNameString != null && !firstNameString.isEmpty())
			sb.append(String.format("  firstName: %s\n", firstNameString));
		String lastNameString = JsonUtil.Stringify(lastName);
		if (lastNameString != null && !lastNameString.isEmpty())
			sb.append(String.format("  lastName: %s\n", lastNameString));
		String emailString = JsonUtil.Stringify(email);
		if (emailString != null && !emailString.isEmpty())
			sb.append(String.format("  email: %s\n", emailString));
		String versionString = JsonUtil.Stringify(version);
		if (versionString != null && !versionString.isEmpty())
			sb.append(String.format("  version: %s\n", versionString));
		String tokenTypeString = JsonUtil.Stringify(token_type);
		if (tokenTypeString != null && !tokenTypeString.isEmpty())
			sb.append(String.format("  token_type: %s\n", tokenTypeString));
		sb.append("}\n");
		return sb.toString();
	}
}
