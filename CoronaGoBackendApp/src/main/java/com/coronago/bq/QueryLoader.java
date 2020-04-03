package com.coronago.bq;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.jdom.CDATA;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.filter.ContentFilter;
import org.jdom.input.SAXBuilder;

import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.google.appengine.api.utils.SystemProperty;

public class QueryLoader {
	private static Logger LOGGER = LoggerFactory.getLogger(QueryLoader.class.getName());
	private static List<String> files = new ArrayList<>();
	private static Map<String, String> queries = new HashMap<>();
	private static boolean isloaded = false;
	private static String QUERY_PROJECT_PARAM = "##[a-zA-Z]+[a-zA-Z1-9]##";
	private static Pattern pattern = Pattern.compile(QUERY_PROJECT_PARAM);
	private static Map<String, String> paramMap = new HashMap<>();
	static {
		paramMap.put("PROJECID", SystemProperty.applicationId.get());
		paramMap.put("VERSION", SystemProperty.version.get());
		paramMap.put("APPLICATIONVERSION", SystemProperty.applicationVersion.get());
	}
	private static Map<String, String> finalparamMap = Collections.unmodifiableMap(paramMap);

	public static void refresh() {
		isloaded = false;
	}

	public static boolean isIsloaded() {
		return isloaded;
	}

	public static void registerQueryFile(String file) {
		files.add(file);
		refresh();
	}

	public static void registerQueryFile(List<String> files) {
		files.addAll(files);
	}

	public static String getQuery(String queryname) {
		if (!isloaded) {
			loadAllQueries();
		}
		return queries.get(queryname);
	}

	public static void loadAllQueries() {
		if (null == files || files.isEmpty()) {
			isloaded = true;
			return;
		}
		isloaded = false;
		InputStream stream = null;
		List<String> failedFiles = new ArrayList<>();
		for (String file : files) {
			try {
				stream = QueryLoader.class.getResourceAsStream("/" + file);
				SAXBuilder saxBuilder = new SAXBuilder(false);
				Document document = saxBuilder.build(stream);
				parseQueries(document);
			} catch (Exception e) {
				LOGGER.error("Error loading file: " + file, e);
				failedFiles.add(file);
			} finally {
				IOUtils.closeQuietly(stream);
			}
		}
		LOGGER.info("Loading Queries completed...");
		isloaded = true;
		if (failedFiles.size() > 0) {
			try {
				LOGGER.error("Query files load to failed...");
				/*
				 * NotificationMailUtil.sendMailToDeveloper(SystemProperty.applicationId.get(), "", "", "", "",
				 * "Error Loading the Query files: " + failedFiles.toString());
				 */
			} catch (Exception e) {
				LOGGER.error("Error Sending mail to developers", e);
			}
		}
	}

	private static void parseQueries(Document build) {
		if (null == build) return;
		Element rootElement = build.getRootElement();
		if (null == rootElement) return;
		List<Element> queriesdom = rootElement.getChildren("query");
		for (Iterator<Element> iterator = queriesdom.iterator(); iterator.hasNext();) {
			Element content = iterator.next();
			String queryname = content.getAttributeValue("name");
			List<CDATA> queryCData = content.getContent(new ContentFilter(ContentFilter.CDATA));
			if (queryCData.size() == 0) {
				LOGGER.info("Query CDATA is not available for '" + queryname + "'");
				continue;
			}
			String query = queryCData.get(0).getTextTrim();
			LOGGER.debug("Processing Query '" + queryname + "' : " + query);
			if (queries.containsKey(queryname)) {
				LOGGER.info("Query with same name '" + queryname + "' already exists. " + queries.get(queryname));
				LOGGER.info("Overwriting query '" + queryname + "' with : " + query);
			}
			String processedQuery = processQuery(query);
			LOGGER.info("Caching Query '" + queryname + "' : " + processedQuery);
			queries.put(queryname, processedQuery);
		}
	}

	private static String processQuery(String query) {
		if (StringUtils.isEmpty(query)) { return query; }
		Matcher matcher = pattern.matcher(query);
		StringBuffer queryBuffer = new StringBuffer();
		while (matcher.find()) {
			String matched = matcher.group();
			String paramName = matched.substring(2, matched.length() - 2);
			String paramValue = finalparamMap.get(StringUtils.upperCase(paramName));
			if (StringUtils.isEmpty(paramValue)) {
				LOGGER.info("Unknown Param Key " + paramName + ", hence Skipping the param");
				continue;
			}
			matcher.appendReplacement(queryBuffer, paramValue);
		}
		matcher.appendTail(queryBuffer);
		return queryBuffer.toString();
	}

	public static void main(String[] args) {
		registerQueryFile("query-dashboard.xml");
		loadAllQueries();
	}
}
