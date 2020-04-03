package com.coronago.util;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.lang3.StringUtils;

import com.eva.base.util.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.google.appengine.api.datastore.Text;
import com.google.appengine.api.modules.ModulesServiceFactory;
import com.google.appengine.api.search.Document;
import com.google.appengine.api.search.Field;
import com.google.appengine.api.search.Field.FieldType;
import com.google.appengine.api.search.ScoredDocument;
import com.google.appengine.api.utils.SystemProperty;
import com.google.apphosting.api.ApiProxy;

public class BaseUtilFunctions {
	private static final Logger LOG = Logger.getLogger(BaseUtilFunctions.class.getName());
	private static final SimpleDateFormat EMP_SYNC_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
	private static DecimalFormat df = new DecimalFormat();
	private static final SimpleDateFormat SOURCE_FORMAT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

	public static synchronized String getEmployeeSyncDateFormat(Date dObj) {
		return EMP_SYNC_DATE_FORMAT.format(dObj);
	}

	public static Text getTextForString(String value) {
		if (value == null || value.trim().isEmpty()) { return null; }
		return new Text(value);
	}

	public static String getStringForText(Text value) {
		try {
			if (value == null || value.getValue().trim().isEmpty()) { return null; }
			return value.getValue();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String getStringForText(Object value) {
		if (value == null) {
			return null;
		} else {
			if (value instanceof Text) {
				return ((Text) value).getValue();
			} else {
				// log.severe("Unexpected datatype: is a " +
				// value.getClass().toString());
				return (String) value;
			}
		}
	}

	public static String serializeStringList(List<String> stringList) {
		String resultant_str = "";
		if (stringList == null) return resultant_str;
		for (String str : stringList) {
			resultant_str += str + ",";
		}
		return resultant_str.substring(0, resultant_str.length() - 1);
	}

	public static List<String> deSerializeIteratorAsStringList(Iterator<Field> iterator) {
		List<String> list = new ArrayList<String>();
		while (iterator.hasNext()) {
			Field writersField = iterator.next();
			list.add(writersField.getText());
		}
		return list;
	}

	public static String serializeLongList(List<Long> longList) {
		String resultant_str = "";
		for (Long str : longList) {
			resultant_str += str + ",";
		}
		return resultant_str.substring(0, resultant_str.length() - 1);
	}

	public static void iterateTextFieldsAndAddToList(ScoredDocument scoredDoc, String fieldName, List<String> list) {
		Iterator<Field> iterator = scoredDoc.getFields(fieldName).iterator();
		while (iterator.hasNext()) {
			Field field = iterator.next();
			if (field.getText() != null) list.add(field.getText());
		}
	}

	public static void iterateListAndAddFieldsToBuilder(Document.Builder builder, String fieldName, List<String> list) {
		if (list != null && !list.isEmpty()) {
			for (String value : list) {
				builder.addField(Field.newBuilder().setName(fieldName).setText(value));
			}
		}
	}

	public static void iterateLongListAndAddFieldsToBuilder(Document.Builder builder, String fieldName,
			List<Long> list) {
		if (list != null && !list.isEmpty()) {
			for (Long value : list) {
				builder.addField(Field.newBuilder().setName(fieldName).setText(value.toString()));
			}
		}
	}

	public static List<Long> iterateLongFieldsAndAddToList(Iterator<Field> iterator) {
		List<Long> list = new ArrayList<Long>();
		while (iterator.hasNext()) {
			Field writersField = iterator.next();
			list.add(Long.parseLong(writersField.getText().toString()));
		}
		return list;
	}

	public static void iterateLongFieldsAndAddToList(ScoredDocument scoredDoc, String fieldName, List<Long> list) {
		Iterator<Field> iterator = scoredDoc.getFields(fieldName).iterator();
		while (iterator.hasNext()) {
			Field writersField = iterator.next();
			list.add(Long.parseLong(writersField.getText().toString()));
		}
	}

	public static boolean isFieldEmpty(String field) {
		return (field == null || field.trim().isEmpty() || field.trim().equals("null"));
	}

	public static boolean isFieldNotEmpty(String field) {
		return (field != null && !field.trim().isEmpty() && !field.trim().equals("null"));
	}

	public static boolean longEquals(Long value1, Long value2) {
		if (value1 == null && value2 == null) return true;
		if ((value1 == null && value2 != null) || (value2 == null && value1 != null)) { return false; }
		if (value1 != null && value2 != null && !value1.equals(value2)) { return false; }
		return true;
	}

	public static boolean stringEquals(String s1, String s2) {
		if (StringUtils.indexOfDifference(s1, s2) == -1) { return true; }
		return false;
	}

	public static int toInt(Object value) {
		if (value == null) { return 0; }
		if (value instanceof Integer) {
			return ((Integer) value).intValue();
		} else if (value instanceof Number) {
			return ((Number) value).intValue();
		} else if (value instanceof String) {
			String strValue = StringUtils.defaultIfBlank(Objects.toString(value), "0");
			if (strValue.indexOf(".") > -1) return (int) Double.parseDouble(strValue);
			return StringUtils.isEmpty(strValue) ? 0 : Integer.parseInt(strValue);
		} else if (value instanceof Text) {
			String strValue = ((Text) value).getValue();
			return StringUtils.isEmpty(strValue) ? 0 : Integer.parseInt(strValue);
		} else {
			return (Integer) value;
		}
	}

	public static long toLong(Object value) {
		if (value == null) { return 0L; }
		if (value instanceof Long) {
			return ((Long) value).longValue();
		} else if (value instanceof Number) {
			return ((Number) value).longValue();
		} else if (value instanceof String) {
			String strValue = StringUtils.defaultIfBlank((String) value, "0");
			if (strValue.indexOf(".") > -1) return (long) Double.parseDouble(strValue);
			return StringUtils.isEmpty(strValue) ? 0L : Long.parseLong(strValue);
		} else if (value instanceof Text) {
			String strValue = ((Text) value).getValue();
			return StringUtils.isEmpty(strValue) ? 0L : Long.parseLong(strValue);
		} else {
			return (Long) value;
		}
	}

	public static double toDouble(Object value) {
		if (value == null) { return 0L; }
		if (value instanceof Double) {
			return ((Double) value).doubleValue();
		} else if (value instanceof Number) {
			return ((Number) value).doubleValue();
		} else if (value instanceof String) {
			String strValue = StringUtils.defaultIfBlank(Objects.toString(value), "0.00");
			return StringUtils.isEmpty(strValue) ? 0L : Double.parseDouble(strValue);
		} else if (value instanceof Text) {
			String strValue = Objects.toString(((Text) value).getValue(), "0.00");
			return StringUtils.isEmpty(strValue) ? 0L : Double.parseDouble(strValue);
		} else {
			return (Double) value;
		}
	}

	public static void main(String[] args) {
		String email = "doha-.bakkass.ext@valeo.com";
		System.out.println(getName(email));
	}

	public static String getName(String emailId) {
		String[] firstStr = emailId.split("@");
		String[] secondStr = firstStr[0].split("\\.");
		int hyphenIndex = secondStr[0].indexOf("-");
		char[] fchar = secondStr[0].toCharArray();
		fchar[0] = Character.toUpperCase(fchar[0]);
		if (hyphenIndex < (secondStr[0].length() - 1))
			if (hyphenIndex != -1) fchar[hyphenIndex + 1] = Character.toUpperCase(fchar[hyphenIndex + 1]);
		String firstName = String.valueOf(fchar);
		if (secondStr.length >= 2) {
			String lastName = secondStr[1].toUpperCase();
			return (firstName + ' ' + lastName);
		}
		return firstName;
	}

	public static <T> T fromJson(String json, Class<T> clazz) {
		if (StringUtils.isEmpty(json)) { return null; }
		try {
			return JsonUtil.MAPPER.readValue(json, clazz);
		} catch (Exception e) {
			LOG.log(Level.SEVERE, "Exception when converting from json to model: " + json, e);
			return null;
		}
	}

	public static <T> T fromJson(String json, TypeReference<T> clazz) {
		if (StringUtils.isEmpty(json)) { return null; }
		try {
			return JsonUtil.MAPPER.readValue(json, clazz);
		} catch (Exception e) {
			LOG.log(Level.SEVERE, "Exception when converting from json to model: " + json, e);
			return null;
		}
	}

	public static String toJson(Object object) {
		try {
			return JsonUtil.MAPPER.writeValueAsString(object);
		} catch (Exception e) {
			LOG.log(Level.SEVERE, "Exception when converting from model to json", e);
			return null;
		}
	}

	public static String escapeString(Object value) {
		String strValue = Objects.toString(value, "").trim();
		strValue = strValue.replaceAll("\\\\", "\\\\\\\\");
		return strValue.replaceAll("\"", "\\\\\"");
	}

	public static String quoteSearchString(String value) {
		if (StringUtils.isEmpty(value)) { return "\"\""; }
		value = "\"" + escapeString(value) + "\"";
		return value;
	}

	public static <T> T getOnlyFieldValue(ScoredDocument scoredDoc, String fieldName, Class<T> fieldType) {
		if (null == scoredDoc || StringUtils.isEmpty(fieldName)) return null;
		if (scoredDoc.getFieldCount(fieldName) == 0) return null;
		Field field = scoredDoc.getOnlyField(fieldName);
		Object obj = null;
		FieldType type = field.getType();
		if (FieldType.TEXT == type) {
			obj = field.getText();
		} else if (FieldType.NUMBER == type) {
			obj = field.getNumber();
		} else if (FieldType.DATE == type) {
			obj = field.getDate();
		} else if (FieldType.ATOM == type) {
			obj = field.getAtom();
		} else if (FieldType.GEO_POINT == type) {
			obj = field.getGeoPoint();
		}
		if (null == obj) return null;
		return fieldType.cast(obj);
	}

	public static boolean csvContains(String csv, String element) {
		if ((null == csv && null == element) || (csv != null && csv.trim().isEmpty() && element != null
				&& element.trim().isEmpty())) { return true; }
		if (StringUtils.isEmpty(csv)) { return false; }
		String[] elements = csv.split(",");
		List<String> collection = Arrays.asList(elements);
		return collection.contains(element);
	}

	public static boolean contains(String element1, String element2) {
		if ((null == element1 && null == element2) || (element1 != null && element1.trim().isEmpty() && element2 != null
				&& element2.trim().isEmpty())) { return true; }
		if (StringUtils.isEmpty(element1)) { return false; }
		return element1.contains(element2);
	}

	public static boolean contains(Collection<String> collection, String element) {
		if (null == collection || collection.isEmpty()) { return false; }
		return collection.contains(element);
	}

	public static boolean contains(Collection<String> collection1, Collection<String> collection2) {
		if (null == collection1 || collection1.isEmpty()) { return false; }
		if (null == collection2 || collection2.isEmpty()) { return false; }
		Iterator<String> iterator = collection1.iterator();
		boolean contains = false;
		while (iterator.hasNext()) {
			if (contains(collection2, iterator.next())) { return true; }
		}
		return contains;
	}

	public static boolean contains(String[] collection, String element) {
		if (null == collection) { return false; }
		return contains(Arrays.asList(collection), element);
	}

	public static List<String> asList(String[] collection) {
		if (null == collection) { return null; }
		return Arrays.asList(collection);
	}

	public static <T> T toClassObject(Object fieldObject, Class<T> clazz) {
		if (null == fieldObject) { return null; }
		try {
			return JsonUtil.MAPPER.convertValue(fieldObject, clazz);
		} catch (Throwable e) {
			LOG.log(Level.SEVERE, "Exception when converting from json to model: " + fieldObject, e);
			return null;
		}
	}

	public static <T> T toClassObject(Object fieldObject, TypeReference<T> clazz) {
		if (null == fieldObject) { return null; }
		try {
			return JsonUtil.MAPPER.convertValue(fieldObject, clazz);
		} catch (Throwable e) {
			LOG.log(Level.SEVERE, "Exception when converting from json to model: " + fieldObject, e);
			return null;
		}
	}

	/**
	 * retrieves the current user who triggered the activity If the activity is triggered through Task,
	 * then there is no current user available, then by default return "SYSTEM"
	 *
	 * @return the user who triggered the activity
	 */
	public static boolean isAllowedTimeExceeded() {
		// returns true, before 60 seconds
		return isAllowedTimeExceeded((60 * 1000));
	}

	public static DecimalFormat getDecimalFormat(int round_off_limit) {
		df.setMaximumFractionDigits(round_off_limit);
		return df;
	}

	public static boolean isAllowedTimeExceeded(long buffertime) {
		if (SystemProperty.Environment.Value.Development == SystemProperty.environment.value()) return false;
		long remainingMillis = ApiProxy.getCurrentEnvironment().getRemainingMillis();
		LOG.log(Level.INFO, "Remaining Execution Minutes: " + (remainingMillis / (60 * 1000)));
		if ((Math.abs(remainingMillis)) <= buffertime) { return true; }
		return false;
	}

	public static String getProjectDefaultUrl() {
		ApiProxy.Environment env = ApiProxy.getCurrentEnvironment();
		Map<String, Object> attributes = env.getAttributes();
		String hostAndPort = (String) attributes.get("com.google.appengine.runtime.default_version_hostname");
		String request = (String) attributes.get("com.google.appengine.http_servlet_request");
		String scheme = "https";
		if (StringUtils.isNotEmpty(request)) {
			request = StringUtils.trim(request);
			String val = request.substring(StringUtils.trim(request).lastIndexOf(" ") + 1);
			if (StringUtils.startsWithIgnoreCase(val, "HTTP")) {
				scheme = "http";
			}
		}
		String url = scheme + "://" + hostAndPort + "/";
		LOG.log(Level.INFO, "Default Url : " + url);
		return url;
	}

	public static Text getTextFromJson(Object listObj) {
		if (listObj != null) { return getTextForString(toJson(listObj)); }
		return null;
	}

	public static <T> T getJsonFromText(Object listObj, TypeReference<T> clazz) {
		T orgInfoList = null;
		if (listObj != null) {
			String listString = getStringForText(listObj);
			orgInfoList = fromJson(listString, clazz);
		}
		return orgInfoList;
	}

	public static String getProjectId() {
		String applicationId = SystemProperty.applicationId.get();
		LOG.log(Level.INFO, "ApplicationId : " + applicationId);
		return applicationId;
	}

	public static List<String> getEmailUriIndexString(List<String> list_uris) {
		// Comma separated email_uris when passing multiple email uris
		List<String> list_index_uris = new ArrayList<String>();
		for (String uri : list_uris) {
			String index_uri = uri.replaceAll("[!#$%'*+-/=?^_`{|}~\"().]", "_");
			list_index_uris.add(index_uri);
		}
		return list_index_uris;
	}

	public static <K, V> boolean isEmpty(Map<K, V> collection) {
		return null == collection || collection.isEmpty();
	}

	public static <T> boolean isEmpty(Collection<T> collection) {
		return collection == null || collection.isEmpty();
	}

	public static String getNameFromEmail(String email) {
		if (StringUtils.isEmpty(email)) { return ""; }
		Map<String, String> nameMapFromEmail = getNameMapFromEmail(email);
		return StringUtils.join(nameMapFromEmail.values(), " ");
	}

	public static Map<String, String> getNameMapFromEmail(String email) {
		Map<String, String> name = new HashMap<>();
		name.put("firstname", "");
		name.put("lastname", "");
		if (StringUtils.isEmpty(email)) { return name; }
		String[] split = email.split("@");
		String splitName = split[0];
		String[] names = splitName.split("\\.");
		name.put("firstname", getFormattedFirstName(names[0]));
		if (names.length > 1 && StringUtils.isNotEmpty(names[1])) {
			name.put("lastname", StringUtils.upperCase(names[1]));
		}
		return name;
	}

	private static String getFormattedFirstName(String firstName) {
		if (StringUtils.isEmpty(firstName)) { return ""; }
		String[] splittedName = firstName.split("-");
		String formattedName = "";
		for (String element : splittedName) {
			if (element == "") {
				continue;
			}
			formattedName += "-" + StringUtils.upperCase(element.substring(0, 1)) + element.substring(1);
		}
		return formattedName.length() > 0 ? formattedName.substring(1) : formattedName;
	}

	public static synchronized Long stringToLongDate(String dateString) {
		Date date = new Date();
		try {
			date = SOURCE_FORMAT.parse(dateString);
			Calendar c1 = Calendar.getInstance();
			c1.setTime(date);
			return c1.getTimeInMillis();
		} catch (ParseException e) {
			LOG.log(Level.SEVERE, "Exception when converting date from String to Long: " + e);
			return null;
		}
	}

	public static synchronized String longToStringDate(Long dateLong) {
		String dateFormatted = SOURCE_FORMAT.format(dateLong);
		return dateFormatted;
	}

	public static boolean isBackInstance() {
		return ModulesServiceFactory.getModulesService().getCurrentModule().toLowerCase().contains("back");
	}
}
