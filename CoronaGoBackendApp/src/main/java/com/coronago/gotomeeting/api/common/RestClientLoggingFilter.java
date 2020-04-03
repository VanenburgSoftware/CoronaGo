package com.coronago.gotomeeting.api.common;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.client.ClientRequestContext;
import javax.ws.rs.client.ClientRequestFilter;
import javax.ws.rs.client.ClientResponseContext;
import javax.ws.rs.client.ClientResponseFilter;

public class RestClientLoggingFilter implements ClientRequestFilter, ClientResponseFilter {
	static final Logger LOGGER = Logger.getLogger(RestClientLoggingFilter.class.getSimpleName());

	public void filter(ClientRequestContext requestContext, ClientResponseContext responseContext) throws IOException {
		LOGGER.log(Level.FINE, responseContext.toString());
	}

	public void filter(ClientRequestContext requestContext) throws IOException {
		LOGGER.log(Level.FINE, requestContext.toString());
	}
}
