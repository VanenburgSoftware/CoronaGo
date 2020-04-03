package com.coronago.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class DateUtil {
	public static final TimeZone GMT_TIME_ZONE = TimeZone.getTimeZone("UTC");
	private static DateFormat ISO_8601_DATE_TIME_MILLIS = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
	private static DateFormat ISO_8601_DATE = new SimpleDateFormat("yyyy-MM-dd");
	private static DateFormat ISO_8601_DATE_TIME = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
	private static DateFormat DATE_TIME = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
	private static DateFormat GAE_SEARCH_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
	static {
		ISO_8601_DATE_TIME.setTimeZone(GMT_TIME_ZONE);
		ISO_8601_DATE_TIME_MILLIS.setTimeZone(GMT_TIME_ZONE);
		ISO_8601_DATE.setTimeZone(GMT_TIME_ZONE);
		DATE_TIME.setTimeZone(GMT_TIME_ZONE);
	}

	public static Date getStartOfCurrentDay() {
		ZonedDateTime zdtNow = ZonedDateTime.now(ZoneOffset.UTC);
		long startOfCurrentDate = zdtNow.with(LocalTime.MIN).toInstant().toEpochMilli();
		return new Date(startOfCurrentDate);
	}

	public static Date getDateForTimeInISO8601Format(Long timeInMS) {
		Calendar calendar = Calendar.getInstance(GMT_TIME_ZONE);
		calendar.setTimeInMillis(timeInMS);
		return calendar.getTime();
	}

	public static Date getDateForTimeInISO8601Format(Long timeInMS, int decreaseMins) {
		Calendar calendar = Calendar.getInstance(GMT_TIME_ZONE);
		calendar.setTimeInMillis(timeInMS);
		calendar.add(Calendar.MINUTE, decreaseMins);
		return calendar.getTime();
	}

	public static String getDateTime(Long timeInMS) {
		Calendar calendar = Calendar.getInstance(GMT_TIME_ZONE);
		calendar.setTimeInMillis(timeInMS);
		return DATE_TIME.format(calendar.getTime());
	}

	public static synchronized Date getDateForTimeStringInISO8601Format(String timeInISO8601) {
		try {
			return ISO_8601_DATE_TIME.parse(timeInISO8601);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String getSearchDate(Long date) {
		Calendar calendar = Calendar.getInstance(GMT_TIME_ZONE);
		calendar.setTimeInMillis(date);
		return GAE_SEARCH_DATE_FORMAT.format(calendar.getTime());
	}
}
