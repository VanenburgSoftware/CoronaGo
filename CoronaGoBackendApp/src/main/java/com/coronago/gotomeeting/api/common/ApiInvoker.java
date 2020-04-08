package com.coronago.gotomeeting.api.common;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.client.ClientResponse;
import org.glassfish.jersey.media.multipart.MultiPartFeature;

import com.fasterxml.jackson.databind.JavaType;

public class ApiInvoker {
	private static ApiInvoker INSTANCE = new ApiInvoker();
	private Map<String, Client> hostMap = new HashMap<String, Client>();
	private Map<String, String> defaultHeaderMap = new HashMap<String, String>() {
		{
			put("CALLING_CLIENT", "GoToMeeting Java SDK version 0.12.0");
		}
	};

	public static ApiInvoker getInstance() {
		return INSTANCE;
	}

	public void addDefaultHeader(String key, String value) {
		defaultHeaderMap.put(key, value);
	}

	public String escapeString(String str) {
		try {
			return URLEncoder.encode(str, "utf8").replaceAll("\\+", "%20");
		} catch (UnsupportedEncodingException e) {
			return str;
		}
	}

	public static Object deserialize(String json, String containerType, Class cls) throws ApiException {
		try {
			json = correctDateFormat(json);

			if ("List".equals(containerType)) {
				JavaType typeInfo = JsonUtil.getJsonMapper().getTypeFactory().constructCollectionType(List.class, cls);
				List response = (List<?>) JsonUtil.getJsonMapper().readValue(json, typeInfo);
				return response;
			} else if ("Map".equals(containerType)) {
				JavaType typeInfo = JsonUtil.getJsonMapper().getTypeFactory().constructMapType(Map.class, String.class,
						cls);
				Map response = (Map<?, ?>) JsonUtil.getJsonMapper().readValue(json, typeInfo);
				return response;
			} else if (String.class.equals(cls)) {
				if (json != null && json.startsWith("\"") && json.endsWith("\""))
					// careful: startIndex inclusive, endIndex exclusive! we trim one from each side
					return json.substring(1, json.length() - 1);
				else
					return json;
			} else {
				return JsonUtil.getJsonMapper().readValue(json, cls);
			}
		} catch (IOException e) {
			throw new ApiException(e);
		}
	}

	public static String serialize(Object obj) throws ApiException {
		try {
			if (obj == null)
				return null;
			else
				return JsonUtil.getJsonMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new ApiException(e);
		}
	}

	public String invokeAPI(String host, String path, String method, Map<String, String> queryParams, Object body,
			Map<String, String> headerParams, Map<String, String> formParams, String contentType) throws ApiException {
		Client client = getClient(host);

		StringBuilder b = new StringBuilder();

		for (String key : queryParams.keySet()) {
			String value = queryParams.get(key);
			if (value != null) {
				if (b.toString().length() == 0)
					b.append("?");
				else
					b.append("&");
				b.append(escapeString(key)).append("=").append(escapeString(value));
			}
		}

		Invocation.Builder builder = client.target(host + path + b.toString()).request("application/json");

		for (String key : headerParams.keySet()) {
			builder.header(key, headerParams.get(key));
		}

		for (String key : defaultHeaderMap.keySet()) {
			if (!headerParams.containsKey(key)) {
				builder.header(key, defaultHeaderMap.get(key));
			}
		}

		Response response = null;
		
		MultivaluedMap<String, String> formData = new MultivaluedHashMap<String, String>();
		formParams.forEach((k,v) -> {
				formData.add(k,v);
		});

		if (method.equals("GET")) {
			response = builder.get();
		} else if (method.equals("HEAD")) {
			response = builder.head();
		} else if (method.equals("POST")) {
			if (contentType.equals("application/x-www-form-urlencoded"))
                response = builder.post(Entity.form(formData));
			else if (body == null) {
				response = builder.post(null);
			} else {
				response = builder.post(Entity.entity(serialize(body), contentType));
			}
		} else {
			throw new ApiException("Unexpected method " + method);
		}
		return response.readEntity(String.class);
	}

	private Client getClient(String host) {
		if (!hostMap.containsKey(host)) {
			Client client = ClientBuilder.newClient().register(RestClientLoggingFilter.class)
					.register(MultiPartFeature.class);
			hostMap.put(host, client);
		}
		return hostMap.get(host);
	}

	private String urlEncodeFormParams(Map<String, String> formParams) {
		StringBuilder sb = new StringBuilder();

		for (String key : formParams.keySet()) {
			String value = formParams.get(key);
			if (value != null && !value.trim().equals("")) {
				if (sb.length() > 0)
					sb.append("&");

				try {
					sb.append(URLEncoder.encode(key, "utf8")).append("=").append(URLEncoder.encode(value, "utf8"));
				} catch (Exception e) {
					// move on to next
				}
			}
		}

		return sb.toString();
	}

	private static String correctDateFormat(String json) throws ApiException {
		if (json != null && !json.isEmpty()) {
			// 12.12.2012T12:12:12.+0000 --> 12.12.2012T12:12:12Z
			if (json.matches(".*T\\d{2}:\\d{2}:\\d{2}\\.\\+0{4}.*")) {
				json = json.replaceAll("\\.\\+0{4}", "Z");
			}

			// 12.12.2012T12:12:12 --> 12.12.2012T12:12:12Z
			Pattern pattern = Pattern.compile("(T\\d{2}:\\d{2}:\\d{2})\"");
			Matcher matcher = pattern.matcher(json);
			if (matcher.find()) {
				String machtResult = matcher.group(1);
				json = matcher.replaceAll(machtResult + "Z\"");
			}

			// Sat Nov 12 12:12:12 2012 --> 12.12.2012T12:12:12Z
			Pattern pattern2 = Pattern.compile("((.{2,3})\\s(.{2,3})\\s(\\d{2})\\s(\\d{2}:\\d{2}:\\d{2})\\s(\\d{4}))");
			Matcher matcher2 = pattern2.matcher(json);
			SimpleDateFormat df = new SimpleDateFormat("MMMM d hh:mm:ss yyyy");
			SimpleDateFormat df2 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
			while (matcher2.find()) {
				try {
					String replacement = df2.format(df.parse(matcher2.group(3) + " " + matcher2.group(4) + " "
							+ matcher2.group(5) + " " + matcher2.group(6)));
					json = matcher2.replaceFirst(replacement);
					matcher2.reset(json);
				} catch (ParseException e) {
					throw new ApiException(e);
				}
			}

			// 12/31/2014 12:12:12 --> 2014-12-31T12:12:12Z
			Pattern pattern3 = Pattern.compile("((\\d{2})\\\\?/(\\d{2})\\\\?/(\\d{4})\\s(\\d{2}:\\d{2}:\\d{2}))");
			Matcher matcher3 = pattern3.matcher(json);
			while (matcher3.find()) {
				try {
					String replacement = df2.format(df2.parse(matcher3.group(4) + "-" + matcher3.group(2) + "-"
							+ matcher3.group(3) + "T" + matcher3.group(5) + "Z"));
					json = matcher3.replaceFirst(replacement);
					matcher3.reset(json);
				} catch (ParseException e) {
					throw new ApiException(e);
				}
			}

			// 12.12.2012T12:12:12.000Z --> 12.12.2012T12:12:12Z
			Pattern pattern4 = Pattern.compile("(T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z)\"");
			Matcher matcher4 = pattern4.matcher(json);
			while (matcher4.find()) {
				String matchedResult = matcher4.group(1);
				json = matcher4.replaceFirst(matchedResult.substring(0, matchedResult.indexOf('.')) + "Z\"");
				matcher4.reset(json);
			}
		}
		return json;
	}
}
