package com.coronago.bq;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.coronago.bq.model.BQQueryResult;
import com.eva.base.exception.InternalException;
import com.google.api.client.util.Data;
import com.google.api.services.bigquery.model.TableCell;
import com.google.api.services.bigquery.model.TableDataList;
import com.google.api.services.bigquery.model.TableRow;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.Schema;
import com.google.cloud.bigquery.TableResult;

public class BQResultProcessor {
	private static Logger LOGGER = Logger.getLogger(BQResultProcessor.class.getName());
	public static long BUFFER_TIME = TimeUnit.MINUTES.toMillis(1);
	public static long BQ_PAGINATION_RECORD_COUNT = 50L;

	public static BQQueryResult processResult(TableDataList response, List<String> fieldnames) {
		return processResult(response, fieldnames, -1);
	}

	public static BQQueryResult processResult(TableDataList response, List<String> fieldnames, long pagenumber) {
		if (null == response) { return null; }
		try {
			BQQueryResult result = new BQQueryResult(response);
			List<LinkedHashMap<String, Object>> rowData =
					buildDataList(response.getRows(), fieldnames, response.getPageToken(), pagenumber);
			result.setData(rowData);
			return result;
		} /*
			 * catch (BaseWebApplicationException e) { LOGGER.log(Level.SEVERE,
			 * "Exception in Query Result job: " + response, e); throw e; }
			 */catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing Query Result: " + response, e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	private static List<LinkedHashMap<String, Object>> buildDataList(List<TableRow> rows, List<String> fieldnames,
			String pageToken, long pageNumber) {
		List<LinkedHashMap<String, Object>> rowData = new ArrayList<>();
		if (null == rows) { return rowData; }
		int rownumber = 1;
		for (Iterator<TableRow> iterator = rows.iterator(); iterator.hasNext();) {
			TableRow tableRow = iterator.next();
			List<TableCell> cell = tableRow.getF();
			LinkedHashMap<String, Object> values = getRowValues(cell, fieldnames);
			values.put("$$row_number_of_page$$", rownumber++);
			if (null != pageToken) values.put("$$page_token$$", pageToken);
			if (-1 != pageNumber) values.put("$$page_number$$", pageNumber);
			rowData.add(values);
		}
		return rowData;
	}

	public static BQQueryResult processResult(TableResult response, List<String> fieldnames, long pagenumber) {
		if (null == response) { return null; }
		try {
			BQQueryResult result = new BQQueryResult(response);
			List<LinkedHashMap<String, Object>> rowData =
					buildPageDataList(response.getValues(), fieldnames, response.getNextPageToken(), pagenumber);
			result.setData(rowData);
			return result;
		} /*
			 * catch (BaseWebApplicationException e) { LOGGER.log(Level.SEVERE,
			 * "Exception in Query Result job: " + response, e); throw e; }
			 */ catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing Query Result: " + response, e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	private static List<LinkedHashMap<String, Object>> buildPageDataList(Iterable<FieldValueList> iterable,
			List<String> fieldnames, String pageToken, long pageNumber) {
		List<LinkedHashMap<String, Object>> rowData = new ArrayList<>();
		if (null == iterable) { return rowData; }
		int rownumber = 1;
		for (Iterator<FieldValueList> iterator = iterable.iterator(); iterator.hasNext();) {
			FieldValueList tableRow = iterator.next();
			LinkedHashMap<String, Object> values = getTableRowValues(tableRow, fieldnames);
			values.put("$$row_number_of_page$$", rownumber++);
			if (null != pageToken) values.put("$$page_token$$", pageToken);
			if (-1 != pageNumber) values.put("$$page_number$$", pageNumber);
			rowData.add(values);
		}
		return rowData;
	}

	private static LinkedHashMap<String, Object> getTableRowValues(FieldValueList tableRow, List<String> fieldnames) {
		LinkedHashMap<String, Object> values = new LinkedHashMap<>();
		for (int index = 0; index < fieldnames.size(); index++) {
			Object value = tableRow.get(index).getValue();
			if (Data.isNull(value)) {
				value = null;
			}
			values.put(fieldnames.get(index), value);
		}
		LOGGER.log(Level.FINE, values.toString());
		return values;
	}

	public static List<LinkedHashMap<String, Object>> buildDataList(List<TableRow> rows, List<String> fieldnames) {
		return buildDataList(rows, fieldnames, null, -1);
	}

	private static LinkedHashMap<String, Object> getRowValues(List<TableCell> cell, List<String> fieldnames) {
		LinkedHashMap<String, Object> values = new LinkedHashMap<>();
		for (int index = 0; index < fieldnames.size(); index++) {
			Object value = cell.get(index).getV();
			if (Data.isNull(value)) {
				value = null;
			}
			values.put(fieldnames.get(index), value);
		}
		LOGGER.log(Level.FINE, values.toString());
		return values;
	}

	public static BQQueryResult processResult(String jobId, TableResult response, String pageToken,
			Map<BigQueryConfigOptions, Object> options) {
		BQQueryResult result = processResult(response, pageToken, options);
		result.setJobId(jobId);
		return result;
	}

	public static BQQueryResult processResult(TableResult response, String pageToken,
			Map<BigQueryConfigOptions, Object> options) {
		if (null == response) { return null; }
		// validateError(response);
		try {
			BQQueryResult result = new BQQueryResult(response);
			List<String> fieldnames = buildSchemaList(response.getSchema());
			List<LinkedHashMap<String, Object>> rowData =
					buildPageDataList(response.getValues(), fieldnames, response.getNextPageToken(), -1l);
			result.setData(rowData);
			return result;
		} /*
			 * catch (BaseWebApplicationException e) { LOGGER.log(Level.SEVERE,
			 * "Exception in Query Result job: " + response, e); throw e; }
			 */ catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error Processing Query Result: " + response, e);
			throw new InternalException("BQ_RESULT_PROCESSING_ERROR");
		}
	}

	private static List<String> buildSchemaList(Schema schema) {
		// In case of query result is empty, schema is null.
		if (schema == null) return new ArrayList<>();
		List<Field> fields = schema.getFields();
		List<String> fieldnames = new ArrayList<>();
		for (Iterator<Field> iterator = fields.iterator(); iterator.hasNext();) {
			Field fld = iterator.next();
			fld.getType();
			fieldnames.add(fld.getName());
		}
		return fieldnames;
	}
	// private static void validateError(TableResult response) {
	// getAndThrowError(response.getErrors());
	// }
	//
	// private static void getAndThrowError(List<BigQueryError> errors) {
	// if (null == errors || errors.isEmpty()) return;
	// StringBuilder builder = new StringBuilder();
	// for (Iterator<BigQueryError> iterator = errors.iterator(); iterator.hasNext();) {
	// BigQueryError errorProto = iterator.next();
	// builder.append(errorProto.getLocation()).append("::");
	// builder.append(errorProto.getMessage()).append("::");
	// builder.append(errorProto.getReason()).append("::");
	// LOGGER.log(Level.FINE, errorProto.toString());
	// }
	// if (builder.length() > 0) { throw new InternalException(null, ErrorCode.BQ_EXECUTION_ERROR,
	// builder.toString()); }
	// }
}
