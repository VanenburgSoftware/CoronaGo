package com.coronago.bq;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;

public class BQQueryParamReplacer {
	private static Logger LOGGER = Logger.getLogger(BQQueryParamReplacer.class.getName());
	private static String QUERY_PARAM =
			"([\\. \\r\\n\\s]{0,1}:\\?[a-zA-Z_]+[a-zA-Z0-9_]+[\\. \\r\\n\\s]{1})|([\\. \\r\\n\\s]{0,1}:\\?\\?[a-zA-Z_]+[a-zA-Z0-9_]+[\\. \\r\\n\\s]{1})|([\\{]{1}[0-9]+[\\}]{1})|([\\. \\r\\n\\s]{1}:\\?\\?[a-zA-Z_]+[a-zA-Z0-9_]+$)";
	private static Pattern pattern = Pattern.compile(QUERY_PARAM);

	@SuppressWarnings("unchecked")
	public static String replaceQueryParams(String query, Map<String, Object> queryParams) {
		if (StringUtils.isEmpty(query) || null == queryParams || queryParams.isEmpty()) { return query; }
		Matcher matcher = pattern.matcher(query);
		StringBuffer queryBuffer = new StringBuffer();
		boolean isQuery;
		boolean isIndex;
		while (matcher.find()) {
			String group = matcher.group();
			String matched = StringUtils.trim(group);
			isQuery = StringUtils.startsWith(matched, ":??");
			isIndex = StringUtils.startsWith(matched, "{");
			int length = matched.length();
			if (matched.endsWith(".")) {
				length = length - 1;
			}
			String paramName = matched.trim();
			if (!isIndex) {
				paramName = paramName.substring((isQuery ? 3 : 2), length);
			}
			Object paramValue = queryParams.get(paramName);
			String value = "";
			if (isQuery) {
				String vgroup = StringUtils.replaceOnce(group, ":??", "");
				value += StringUtils.replace(vgroup, paramName, Objects.toString(paramValue, ""));
			} else if (paramValue instanceof Number) {
				value = Objects.toString(paramValue, "");
			} else if (paramValue instanceof Collection) {
				Collection<Object> clc = (Collection<Object>) paramValue;
				String prefix = "";
				if (clc.size() > 0) {
					Object next = clc.iterator().next();
					if (next instanceof Number) {
						prefix = "";
					} else {
						prefix = "'";
					}
				}
				StringBuilder cvalue = new StringBuilder();
				Iterator<Object> iterator = clc.iterator();
				while (iterator.hasNext()) {
					cvalue.append(prefix);
					cvalue.append(Objects.toString(iterator.next(), ""));
					cvalue.append(prefix);
					if (iterator.hasNext()) {
						cvalue.append(", ");
					}
				}
				value = Objects.toString(cvalue, "");
			} else {
				value = "'" + Objects.toString(paramValue, "") + "'";
			}
			LOGGER.log(Level.FINE, "Param: " + paramName + " => value: " + value);
			matcher.appendReplacement(queryBuffer, Matcher.quoteReplacement(value));
		}
		matcher.appendTail(queryBuffer);
		String finalQuery = queryBuffer.toString();
		LOGGER.log(Level.FINE, "Final Modified Query => " + finalQuery);
		return finalQuery;
	}

	public static void main(String[] args) {
		Map<String, Object> queryParams = new HashMap<>();
		List<String> abc = new ArrayList<>();
		abc.add("welcome1");
		abc.add("welcome2");
		List<Long> def = new ArrayList<>();
		def.add(20L);
		def.add(30L);
		queryParams.put("abc", "par_$_am");
		queryParams.put("{0}", "0");
		queryParams.put("{1}", abc);
		queryParams.put("{2}", def);
		String finalQuery = BQQueryParamReplacer
				.replaceQueryParams("abc:??abc.abcsecond :??abc.dataset ssss {0},{1},{2} :??abc", queryParams);
		System.out.println("FinalQuery: " + finalQuery);
	}
}
