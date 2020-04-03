package com.coronago.bq;

import java.io.IOException;
import java.net.URISyntaxException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;

import com.coronago.bq.exception.BQJobFailedException;
import com.coronago.bq.model.BQQueryResult;
import com.coronago.tasks.util.AsynchronousExecutor;
import com.coronago.tasks.util.AsynchronousExecutor.TaskExecution;
import com.coronago.util.BaseUtilFunctions;
import com.eva.base.exception.InternalException;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.google.api.client.auth.oauth2.TokenResponseException;
import com.google.appengine.api.utils.SystemProperty;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQuery.QueryResultsOption;
import com.google.cloud.bigquery.BigQuery.TableDataListOption;
import com.google.cloud.bigquery.BigQueryException;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.CsvOptions;
import com.google.cloud.bigquery.ExtractJobConfiguration;
import com.google.cloud.bigquery.FormatOptions;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobException;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.JobInfo.CreateDisposition;
import com.google.cloud.bigquery.JobInfo.WriteDisposition;
import com.google.cloud.bigquery.JobStatus;
import com.google.cloud.bigquery.JobStatus.State;
import com.google.cloud.bigquery.LoadJobConfiguration;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.QueryParameterValue;
import com.google.cloud.bigquery.Schema;
import com.google.cloud.bigquery.StandardSQLTypeName;
import com.google.cloud.bigquery.StandardTableDefinition;
import com.google.cloud.bigquery.Table;
import com.google.cloud.bigquery.TableDefinition;
import com.google.cloud.bigquery.TableId;
import com.google.cloud.bigquery.TableInfo;
import com.google.cloud.bigquery.TableResult;
import com.google.cloud.bigquery.TimePartitioning;
import com.google.cloud.bigquery.TimePartitioning.Type;
import com.google.cloud.bigquery.testing.RemoteBigQueryHelper;

public class BigQueryManager {
	public static final Logger LOGGER = LoggerFactory.getLogger(BigQueryManager.class.getName());
	public static final String LOCALHOST_ENVIRONMENT = "localhost";
	public static String SERVICE_ACCOUNT_EMAIL = "";
	public static String SERVICE_ACCOUNT_AUTH_FILE = "";
	public static String TECHNICAL_ACCOUNT_EMAIL = "";
	public static final String SLASH = "/";
	public static final String GCS_PREFIX = "gs://";
	public static final String CSV_EXTENSION = ".csv";
	public static final String JSON_EXTENSION = ".json";
	public static final String JSON_FORMAT = "NEWLINE_DELIMITED_JSON";
	public static final String CSV_FORMAT = "csv";
	public static final String DEFAULT_FORMAT = CSV_EXTENSION;
	public static final String CREATE_IF_NEEDED = "CREATE_IF_NEEDED";
	public static final String CREATE_NEVER = "CREATE_NEVER";
	public static final String WRITE_TRUNCATE = "WRITE_TRUNCATE";
	public static final String WRITE_APPEND = "WRITE_APPEND";
	public static final String COMPRESSION_FORMAT = "GZIP";

	public static void setSERVICE_ACCOUNT_AUTH_FILE(String sERVICE_ACCOUNT_AUTH_FILE) {
		SERVICE_ACCOUNT_AUTH_FILE = sERVICE_ACCOUNT_AUTH_FILE;
	}

	public static void setSERVICE_ACCOUNT_EMAIL(String sERVICE_ACCOUNT_EMAIL) {
		SERVICE_ACCOUNT_EMAIL = sERVICE_ACCOUNT_EMAIL;
	}

	public static void setTECHNICAL_ACCOUNT_EMAIL(String tECHNICAL_ACCOUNT_EMAIL) {
		TECHNICAL_ACCOUNT_EMAIL = tECHNICAL_ACCOUNT_EMAIL;
	}

	/**
	 * Authorizing BigQuery Service
	 * 
	 * @throws IOException
	 * @throws URISyntaxException
	 * @throws GeneralSecurityException
	 */
	public static BigQuery authorize() throws IOException, URISyntaxException, GeneralSecurityException {
		LOGGER.info("Authorizing BQ service..");
		return BigQueryOptions.getDefaultInstance().getService();
	}

	private static QueryJobConfiguration generateQueryJobConfiguration(String query,
			Map<BigQueryConfigOptions, Object> options, TableId destinationTable) {
		QueryJobConfiguration.Builder qBuilder = QueryJobConfiguration.newBuilder(query);
		qBuilder.setUseQueryCache(false);
		if (destinationTable != null) qBuilder.setDestinationTable(destinationTable);
		if (options.get(BigQueryConfigOptions.CREATE_DISPOSITION) != null)
			qBuilder.setCreateDisposition((CreateDisposition) options.get(BigQueryConfigOptions.CREATE_DISPOSITION));
		if (options.get(BigQueryConfigOptions.USE_LEGACY_SQL) != null)
			qBuilder.setUseLegacySql((Boolean) options.get(BigQueryConfigOptions.USE_LEGACY_SQL));
		if (options.get(BigQueryConfigOptions.FLATTEN_RESULTS) != null)
			qBuilder.setFlattenResults((Boolean) options.get(BigQueryConfigOptions.FLATTEN_RESULTS));
		if (options.get(BigQueryConfigOptions.REPLACE_DATA) != null) {
			if ((Boolean) options.get(BigQueryConfigOptions.REPLACE_DATA)) {
				LOGGER.info("Rows will be replaced ");
				qBuilder.setWriteDisposition(WriteDisposition.WRITE_TRUNCATE);
			} else {
				LOGGER.info("Rows will be appended ");
				qBuilder.setWriteDisposition(WriteDisposition.WRITE_APPEND);
			}
		}
		if (options.get(BigQueryConfigOptions.ALLOW_LARGE_RESULTS) != null)
			qBuilder.setAllowLargeResults((Boolean) options.get(BigQueryConfigOptions.ALLOW_LARGE_RESULTS));
		return qBuilder.build();
	}

	/**
	 * Inserts a BigQuery Job for a particular Query
	 * 
	 * @throws IOException
	 * @throws GeneralSecurityException
	 * @throws URISyntaxException
	 */
	public static JobId createJobForQuery(BigQuery bigquery, String projectID, String query)
			throws IOException, URISyntaxException, GeneralSecurityException {
		Map<BigQueryConfigOptions, Object> options = new HashMap<BigQueryConfigOptions, Object>();
		options.put(BigQueryConfigOptions.USE_LEGACY_SQL, true);
		return createJobForQueryWithOptions(bigquery, projectID, query, options);
	}

	public static JobId createJobForQueryWithOptions(BigQuery bigquery, String projectID, String query,
			Map<BigQueryConfigOptions, Object> options)
			throws IOException, URISyntaxException, GeneralSecurityException {
		return createJobForQueryWithOptions(bigquery, projectID, query, options, true);
	}

	public static JobId createJobForQueryWithOptions(BigQuery bigquery, String projectID, String query,
			Map<BigQueryConfigOptions, Object> options, boolean waitforCompletion)
			throws IOException, URISyntaxException, GeneralSecurityException {
		LOGGER.info("Inserting BigQuery Job for the query: " + query);
		Job queryJob = null;
		JobId jobId = JobId.of(projectID, UUID.randomUUID().toString());
		TableId tableReference = null;
		if (options.get(BigQueryConfigOptions.DESTINATION_TABLE) != null) {
			LOGGER.info("Destinantion table is set: " + options.get(BigQueryConfigOptions.DESTINATION_TABLE));
			String destinationDataset = (String) options.get(BigQueryConfigOptions.DATASET);
			LOGGER.info("Destinantion table dataset is: " + destinationDataset);
			if (StringUtils.isEmpty(destinationDataset)) {
				LOGGER.warn("Destinantion data set is not set for destination table");
			} else {
				tableReference =
						TableId.of(destinationDataset, (String) options.get(BigQueryConfigOptions.DESTINATION_TABLE));
			}
		}
		JobInfo jobInfo = JobInfo.newBuilder(generateQueryJobConfiguration(query, options, tableReference))
				.setJobId(jobId).build();
		try {
			queryJob = bigquery.create(jobInfo);
		} catch (BigQueryException bqe) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			queryJob = bigquery.create(jobInfo);
		}
		if (waitforCompletion) {
			queryJob = waitForJobCompletion(bigquery, jobId);
		}
		LOGGER.info("Query Job ID: " + queryJob.getJobId().getJob());
		return jobId;
	}

	/**
	 * Extract data from job using jobID
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws GeneralSecurityException
	 * @throws URISyntaxException
	 */
	public static JobInfo createJobForQueryExtract(BigQuery bigquery, String projectID, String query, String bucketName,
			String fileName) throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		Map<BigQueryConfigOptions, Object> options = new HashMap<BigQueryConfigOptions, Object>();
		options.put(BigQueryConfigOptions.USE_LEGACY_SQL, true);
		return createJobForQueryExtractWithOptions(bigquery, projectID, query, bucketName, fileName, options);
	}

	public static JobInfo createJobForQueryExtract(BigQuery bigquery, String projectID, String query, String bucketName,
			String fileName, String format, Boolean compression)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		Map<BigQueryConfigOptions, Object> options = new HashMap<BigQueryConfigOptions, Object>();
		if (JSON_EXTENSION.equals(format)) {
			options.put(BigQueryConfigOptions.USE_LEGACY_SQL, false);
		} else {
			options.put(BigQueryConfigOptions.USE_LEGACY_SQL, true);
		}
		return createJobForQueryExtractWithOptions(bigquery, projectID, query, bucketName, fileName, options, format,
				compression);
	}

	public static JobInfo createJobForQueryExtractWithOptions(BigQuery bigquery, String projectID, String query,
			String bucketName, String fileName, Map<BigQueryConfigOptions, Object> options)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return createJobForQueryExtractWithOptions(bigquery, projectID, query, bucketName, fileName, options,
				DEFAULT_FORMAT, false);
	}

	public static JobInfo createJobForQueryExtractWithOptions(BigQuery bigquery, String projectID, String query,
			String bucketName, String fileName, Map<BigQueryConfigOptions, Object> options, String format,
			Boolean compression)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		JobId jobReference = BigQueryManager.createJobForQueryWithOptions(bigquery, projectID, query, options);
		return createExtractAndWaitForCompletion(bigquery, projectID, bucketName, fileName, options,
				jobReference.getProject(), jobReference.getJob(), format, compression);
	}

	public static JobInfo createExtractAndWaitForCompletion(BigQuery bigquery, String projectID, String bucketName,
			String fileName, Map<BigQueryConfigOptions, Object> options, String projectId, String jobId, String format,
			Boolean compression)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		Job job = createExtractJobUsingJobId(bigquery, bucketName, fileName, options, projectId, jobId, format,
				compression);
		LOGGER.info("Extract Job ID: " + job.getJobId().getJob());
		long startTime = System.currentTimeMillis();
		while (job.getStatus().getState() != State.DONE) {
			// Pause execution for ten seconds before polling job status again
			Thread.sleep(10000);
			long elapsedTime = System.currentTimeMillis() - startTime;
			LOGGER.info(String.format("Job status (%dms) %s: %s\n", elapsedTime, job.getJobId().getJob(),
					job.getStatus().getState()));
			// Poll the server for job completion state.
			job = bigquery.getJob(JobId.of(projectId, job.getJobId().getJob()));
		}
		if (job.getStatus().getError() != null) {
			// The job ended with an error.
			LOGGER.info(String.format("Job %s ended with error %s", job.getJobId().getJob(),
					job.getStatus().getError().getMessage()));
			throw new BQJobFailedException(job.getJobId().getJob(), job.getStatus().getError().getMessage());
		}
		return job;
	}

	public static JobInfo createExtractAndWaitForCompletion(BigQuery bigquery, String projectID, String bucketName,
			String fileName, Map<BigQueryConfigOptions, Object> options, String projectId, String jobId)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return createExtractAndWaitForCompletion(bigquery, projectID, bucketName, fileName, options, projectId, jobId,
				DEFAULT_FORMAT, false);
	}

	public static Job createExtractJobUsingJobId(BigQuery bigquery, String bucketName, String fileName,
			Map<BigQueryConfigOptions, Object> options, String projectId, String jobId, String format,
			Boolean compression)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		TableId tableReference = getTableReferenceByJobReference(bigquery, projectId, jobId);
		LOGGER.info("projectId: " + tableReference.getProject());
		LOGGER.info("tableId: " + tableReference.getTable());
		ExtractJobConfiguration.Builder builder = null;
		switch (format) {
			case JSON_EXTENSION:
				LOGGER.info("Creating extract job.. (JSON)");
				builder = ExtractJobConfiguration
						.newBuilder(tableReference, GCS_PREFIX + bucketName + SLASH + fileName + JSON_EXTENSION)
						.setFormat(JSON_FORMAT);
				LOGGER.info("fileLocation: " + GCS_PREFIX + bucketName + SLASH + fileName + JSON_EXTENSION);
				break;
			case CSV_EXTENSION:
				LOGGER.info("Creating extract job.. (CSV)");
				builder = ExtractJobConfiguration.newBuilder(tableReference,
						GCS_PREFIX + bucketName + SLASH + fileName + CSV_EXTENSION);
				LOGGER.info("fileLocation: " + GCS_PREFIX + bucketName + SLASH + fileName + CSV_EXTENSION);
				break;
			default:
		}
		if (options.get(BigQueryConfigOptions.PRINT_HEADER) != null) {
			builder.setPrintHeader((Boolean) options.get(BigQueryConfigOptions.PRINT_HEADER));
		}
		if (options.get(BigQueryConfigOptions.EXPORT_DELIMITER) != null) {
			builder.setFieldDelimiter((String) options.get(BigQueryConfigOptions.EXPORT_DELIMITER));
		}
		if (compression) {
			builder.setCompression(COMPRESSION_FORMAT);
		}
		JobId jobIdObj = JobId.of(projectId, UUID.randomUUID().toString());
		JobInfo jobInfo = JobInfo.newBuilder(builder.build()).setJobId(jobIdObj).build();
		Job job = null;
		try {
			job = bigquery.create(jobInfo);
		} catch (BigQueryException bqe) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			job = bigquery.create(jobInfo);
		}
		return job;
	}

	public static Job createExtractJobUsingJobId(BigQuery bigquery, String bucketName, String fileName,
			Map<BigQueryConfigOptions, Object> options, String projectId, String jobId)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return createExtractJobUsingJobId(bigquery, bucketName, fileName, options, projectId, jobId, DEFAULT_FORMAT,
				false);
	}

	/**
	 * Used to fire a query to the BigQuery table and save the resultSet into a new table or append to
	 * an existing table
	 * 
	 * @param bigquery object used to fire the requests
	 * @param projectID appengine project id
	 * @param query to be fired
	 * @param datasetId dataset
	 * @param tableId table
	 * @param ifReplace if data to be replaced
	 * @param flattenResults NA Map&lt;{@link BigQueryConfigOptions}, Object&gt; which contains :
	 *        REPLACE_DATA - used to distinguish whether to replace values in the existing table or
	 *        append. FLATTEN_RESULTS : used to distinguish whether to flatten the results to convert
	 *        all objects to NULLABLE. USE_LEGACY_SQL : used to distinguish whether to use Legacy SQL or
	 *        Standard SQL for the queries to be executed
	 * @return JobReference Object
	 * @throws IOException
	 * @throws URISyntaxException
	 * @throws GeneralSecurityException
	 */
	public static JobId createJobForQueryAndInsertTable(BigQuery bigquery, String projectID, String query,
			String datasetId, String tableId, boolean ifReplace, boolean flattenResults)
			throws IOException, URISyntaxException, GeneralSecurityException {
		Map<BigQueryConfigOptions, Object> options = new HashMap<BigQueryConfigOptions, Object>();
		options.put(BigQueryConfigOptions.FLATTEN_RESULTS, flattenResults);
		options.put(BigQueryConfigOptions.REPLACE_DATA, ifReplace);
		return createJobForQueryAndInsertTable(bigquery, projectID, query, datasetId, tableId, options);
	}

	public static JobId createJobForQueryAndInsertTable(BigQuery bigquery, String projectID, String query,
			String datasetId, String tableId, Map<BigQueryConfigOptions, Object> options)
			throws IOException, URISyntaxException, GeneralSecurityException {
		LOGGER.info("Inserting BigQuery Job for the query: " + query);
		// Table Reference object to point to a table
		TableId tableReference = TableId.of(projectID, datasetId, tableId);
		LOGGER.info("Table Reference created " + tableReference.getTable());
		LOGGER.info("options: " + options);
		if (options.get(BigQueryConfigOptions.TIME_PARTITIONING) != null
				&& (boolean) options.get(BigQueryConfigOptions.TIME_PARTITIONING)) {
			Table existingTable = null;
			existingTable = bigquery.getTable(TableId.of(projectID, datasetId, tableId));
			LOGGER.info("existingTable: " + existingTable);
			if (existingTable == null
					|| (existingTable != null && StringUtils.isBlank(existingTable.getTableId().getTable()))) {
				int partitionNameIndex = StringUtils.indexOf(tableId, "$");
				if (partitionNameIndex != -1) {
					tableReference =
							TableId.of(projectID, datasetId, StringUtils.substring(tableId, 0, partitionNameIndex));
				}
				TimePartitioning timePartitioning = TimePartitioning.of(Type.DAY);
				if (options.get(BigQueryConfigOptions.EXPIRATION_IN_MS) != null) {
					timePartitioning =
							TimePartitioning.of(Type.DAY, (Long) options.get(BigQueryConfigOptions.EXPIRATION_IN_MS));
				}
				TableDefinition tableDefinition =
						StandardTableDefinition.newBuilder().setTimePartitioning(timePartitioning).build();
				TableInfo tableInfo = TableInfo.of(tableReference, tableDefinition);
				bigquery.create(tableInfo);
				try {
					Thread.sleep(5000);
				} catch (InterruptedException e) {
					LOGGER.info("Thread sleep exception: " + ExceptionUtils.getStackTrace(e));
				}
			}
		}
		// Job object used to configure the query
		Job queryJob = null;
		options.put(BigQueryConfigOptions.ALLOW_LARGE_RESULTS, true);
		options.put(BigQueryConfigOptions.CREATE_DISPOSITION, CreateDisposition.CREATE_IF_NEEDED);
		JobId jobId = JobId.of(projectID, UUID.randomUUID().toString());
		JobInfo jobInfo = JobInfo.newBuilder(generateQueryJobConfiguration(query, options, tableReference))
				.setJobId(jobId).build();
		LOGGER.info("Query Configuration : " + jobInfo.getConfiguration().toString());
		try {
			queryJob = bigquery.create(jobInfo);
		} catch (BigQueryException bqe) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			queryJob = bigquery.create(jobInfo);
		}
		queryJob = waitForJobCompletion(bigquery, jobId);
		LOGGER.info("Query Job ID: " + queryJob.getJobId().getJob());
		return jobId;
	}

	public static Job waitForJobCompletion(BigQuery bigquery, JobId jobReference) throws IOException {
		long startTime = System.currentTimeMillis();
		long sleeptime = 5;
		while (true) {
			Job job = bigquery.getJob(jobReference);
			long elapsedTime = System.currentTimeMillis() - startTime;
			LOGGER.info("Load Job Status: " + job.getStatus().getState());
			LOGGER.info("Load Elapsed Time: " + elapsedTime + " milliseconds");
			if (job.getStatus().getState() == State.DONE) {
				JobStatus status = job.getStatus();
				BQErrorProcessor.processAndThrowError(status);
				return job;
			}
			try {
				// Check for job status every 10 second
				TimeUnit.SECONDS.sleep(sleeptime);
				if (sleeptime < 60) {
					sleeptime *= 2;
				}
			} catch (InterruptedException e) {
				LOGGER.warn("Error sleep thread ", e);
			}
			if (BaseUtilFunctions.isBackInstance()) {
				if (BaseUtilFunctions
						.isAllowedTimeExceeded()) { throw new InternalException("DEADLINE_EXCEEDED_ERROR"); }
			} else {
				// check the allowed time is greater than 5 seconds
				if (BaseUtilFunctions
						.isAllowedTimeExceeded((5 * 1000))) { throw new InternalException("DEADLINE_EXCEEDED_ERROR"); }
			}
		}
	}

	/**
	 * Method used to get the job details
	 * 
	 * @param bigquery
	 * @param projectID
	 * @param jobReference of the job being executed
	 * @return Job which contains the details of the job executed
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws URISyntaxException
	 * @throws GeneralSecurityException
	 */
	public static Job getJobDetails(BigQuery bigquery, String projectID, JobId jobReference)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return getJobDetails(bigquery, projectID, jobReference.getJob());
	}

	public static Job getJobDetails(BigQuery bigquery, String projectID, String jobId)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		JobId jobIdObj = JobId.of(projectID, jobId);
		return bigquery.getJob(jobIdObj);
	}

	public static Job createLoadJob(BigQuery bigquery, String projectID, String datasetID, String tableID,
			String fileURI) throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return createLoadJob(bigquery, projectID, datasetID, tableID, fileURI, CSV_FORMAT);
	}

	/**
	 * Load data int BQ using new load job GCS URI will be gs://&lt;bucket_name&gt;/&lt;file_name&gt;
	 * and a new table will be created for the tableID using table reference
	 * 
	 * @param bigquery bigquery object that is used to query
	 * @param projectID App engine project id
	 * @param datasetID dataset in which the data is to be loaded
	 * @param tableID table id
	 * @param fileURI fileuri from GCS
	 * @param sourceFormat source format
	 * @return Job
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws URISyntaxException
	 * @throws GeneralSecurityException
	 */
	public static Job createLoadJob(BigQuery bigquery, String projectID, String datasetID, String tableID,
			String fileURI, String sourceFormat)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		return createLoadJobWithSchema(bigquery, projectID, datasetID, tableID, fileURI, sourceFormat, null);
	}

	public static Job createLoadJobWithSchema(BigQuery bigquery, String projectID, String datasetID, String tableID,
			String fileURI, String sourceFormat, Schema tableSchema)
			throws IOException, URISyntaxException, GeneralSecurityException, InterruptedException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		Job job = null;
		TableId destinationTable = TableId.of(projectID, datasetID, tableID);
		List<String> sourceUris = new ArrayList<String>();
		sourceUris.add(fileURI);
		LoadJobConfiguration.Builder builder = LoadJobConfiguration.newBuilder(destinationTable, sourceUris);
		switch (sourceFormat) {
			case JSON_FORMAT:
				builder.setFormatOptions(FormatOptions.of(sourceFormat));
				break;
			case CSV_FORMAT:
				// Ignore Header Row in CSV File using setSkipLeadingRows.
				CsvOptions.Builder csvbuilder = CsvOptions.newBuilder().setSkipLeadingRows(1);
				builder.setFormatOptions(csvbuilder.build());
				break;
		}
		// Creating new table using table reference
		// if table schema present,use it
		if (null != tableSchema) {
			builder.setSchema(tableSchema);
			builder.setAutodetect(false);
		} else {
			builder.setAutodetect(true);
		}
		LoadJobConfiguration configuration = builder.build();
		JobId jobId = JobId.of(projectID, UUID.randomUUID().toString());
		JobInfo jobInfo = JobInfo.newBuilder(configuration).setJobId(jobId).build();
		try {
			job = bigquery.create(jobInfo);
		} catch (BigQueryException bqe) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			job = bigquery.create(jobInfo);
		}
		job = waitForJobCompletion(bigquery, jobId);
		LOGGER.info("Load Job ID: " + job.getJobId().getJob());
		return job;
	}

	/**
	 * Polls the status of a BigQuery job, returns TableReference to results if "DONE"
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws GeneralSecurityException
	 * @throws URISyntaxException
	 */
	public static TableId getTableReferenceByJobReference(BigQuery bigquery, String projectID, String jobID)
			throws IOException, InterruptedException, URISyntaxException, GeneralSecurityException {
		// Variables used to check total query time
		long startTime = System.currentTimeMillis();
		long elapsedTime;
		JobId jobIdObj = JobId.of(projectID, jobID);
		Job job = null;
		try {
			job = bigquery.getJob(jobIdObj);
		} catch (BigQueryException tre) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			job = bigquery.getJob(jobIdObj);
		}
		job = waitForJobCompletion(bigquery, jobIdObj);
		elapsedTime = System.currentTimeMillis() - startTime;
		LOGGER.info("Query ID: " + job.getJobId().getJob());
		LOGGER.info("Query Job Status: " + job.getStatus().getState());
		LOGGER.info("Query Elapsed Time: " + elapsedTime + " milliseconds");
		return ((QueryJobConfiguration) job.getConfiguration()).getDestinationTable();
	}

	/**
	 * Page through the result set. Job with SQL LIMIT usage won't support pagination. previousPageToken
	 * will be null for first page call, for rest of the pages the previous page token need to be set as
	 * input. singlePage is used to return only the particular page from the previousPageToken or all
	 * the pages from previousPageToken.
	 * 
	 * @throws IOException
	 * @throws GeneralSecurityException
	 * @throws URISyntaxException
	 */
	public static List<LinkedHashMap<String, Object>> getRowsByPage(BigQuery bigquery, TableId tableReference,
			long numberOfRowsPerPage, String previousPageToken, boolean singlePage, String[] selectedFields)
			throws IOException, URISyntaxException, GeneralSecurityException {
		List<LinkedHashMap<String, Object>> dataMap = new ArrayList<LinkedHashMap<String, Object>>();
		if (numberOfRowsPerPage == 0) numberOfRowsPerPage = 10;
		LOGGER.info("Number Of Rows per Page: " + numberOfRowsPerPage);
		LOGGER.info("Previous Page Token: " + previousPageToken);
		boolean moreResults = false;
		do {
			int pageNumber = 1;
			TableResult queryResult = null;
			try {
				queryResult = bigquery.listTableData(tableReference, TableDataListOption.pageSize(numberOfRowsPerPage),
						TableDataListOption.pageToken(previousPageToken));
			} catch (BigQueryException bqe) {
				LOGGER.info("Refreshing BigQuery token..");
				bigquery = authorize();
				queryResult = bigquery.listTableData(tableReference, TableDataListOption.pageSize(numberOfRowsPerPage),
						TableDataListOption.pageToken(previousPageToken));
			}
			String pageToken = queryResult.getNextPageToken();
			LOGGER.info("Current Page Token: " + pageToken);
			if (queryResult.getTotalRows() > 0) {
				BQQueryResult result =
						BQResultProcessor.processResult(queryResult, Arrays.asList(selectedFields), pageNumber);
				dataMap = result.getData();
				if (singlePage)
					moreResults = false;
				else {
					if (queryResult.getNextPageToken() != null) {
						previousPageToken = queryResult.getNextPageToken();
						moreResults = true;
					} else {
						moreResults = false;
					}
				}
			} else {
				moreResults = false;
				LOGGER.info("No records found.");
			}
		} while (moreResults);
		LOGGER.info("Row Data: " + dataMap);
		return dataMap;
	}

	/**
	 * Get the total number of records matching the query
	 * 
	 * @throws IOException
	 * @throws GeneralSecurityException
	 * @throws URISyntaxException
	 */
	public static int getNumberOfRowsByQuery(BigQuery bigquery, TableId tableReference)
			throws IOException, URISyntaxException, GeneralSecurityException {
		Long totalNumberOfRows = 0L;
		TableResult queryResult = null;
		try {
			queryResult = bigquery.listTableData(tableReference);
		} catch (BigQueryException bqe) {
			bigquery = authorize();
			queryResult = bigquery.listTableData(tableReference);
		}
		if (queryResult != null) totalNumberOfRows = queryResult.getTotalRows();
		LOGGER.info("Total Number of Rows: " + totalNumberOfRows);
		return Integer.valueOf(totalNumberOfRows.toString());
	}

	/**
	 * Method used to get entire query result
	 * 
	 * @param bigquery
	 * @param tableReference Reference of table where the query results are stored
	 * @param selectedFields Fields to be selected from the query result
	 * @return
	 * @throws IOException
	 * @throws URISyntaxException
	 * @throws GeneralSecurityException
	 */
	public static List<LinkedHashMap<String, Object>> getRows(BigQuery bigquery, TableId tableReference,
			String[] selectedFields) throws IOException, URISyntaxException, GeneralSecurityException {
		List<LinkedHashMap<String, Object>> dataMap = new ArrayList<LinkedHashMap<String, Object>>();
		LOGGER.info("tableReference: " + tableReference);
		TableResult queryResult = null;
		try {
			LOGGER.info("Into try");
			queryResult = bigquery.listTableData(tableReference);
			LOGGER.info("queryResult:" + queryResult);
		} catch (BigQueryException tre) {
			bigquery = authorize();
			queryResult = bigquery.listTableData(tableReference);
		}
		LOGGER.info("rows:" + queryResult.getTotalRows());
		if (queryResult.getTotalRows() > 0) {
			BQQueryResult result = BQResultProcessor.processResult(queryResult, Arrays.asList(selectedFields), -1);
			dataMap = result.getData();
		} else
			LOGGER.info("No records found.");
		LOGGER.info("Row Data: " + dataMap);
		return dataMap;
	}

	public static BQQueryResult executeBigQuery(BigQuery bigquery, String query)
			throws IOException, URISyntaxException, GeneralSecurityException, JobException, InterruptedException {
		return executeBigQuery(bigquery, query, null);
	}

	public static BQQueryResult executeBigQuery(BigQuery bigquery, String query, Map<String, Object> queryParameters)
			throws IOException, URISyntaxException, GeneralSecurityException, JobException, InterruptedException {
		return executeBigQuery(bigquery, query, queryParameters, null, null);
	}

	public static BQQueryResult executeBigQuery(BigQuery bigquery, String query, Map<String, Object> queryParameters,
			String jobId, String pageToken)
			throws IOException, URISyntaxException, GeneralSecurityException, JobException, InterruptedException {
		Map<BigQueryConfigOptions, Object> options = new HashMap<>();
		options.put(BigQueryConfigOptions.USE_LEGACY_SQL, true);
		return executeBigQuery(bigquery, query, queryParameters, jobId, pageToken, options);
	}

	public static BQQueryResult executeBigQuery(BigQuery bigquery, String query, Map<String, Object> queryParameters,
			String jobId, String pageToken, Map<BigQueryConfigOptions, Object> options)
			throws IOException, URISyntaxException, GeneralSecurityException, JobException, InterruptedException {
		if (bigquery == null) bigquery = BigQueryManager.authorize();
		LOGGER.info("Executing Query: " + query);
		Map<String, Object> requestParams = new HashMap<>();
		try {
			if (BooleanUtils.toBoolean(Objects.toString(options.get(BigQueryConfigOptions.PAGINATION), "false"))) {
				long maxResult = BaseUtilFunctions
						.toLong(Objects.toString(options.get(BigQueryConfigOptions.PAGINATION_RECORD_COUNT),
								Objects.toString(BQResultProcessor.BQ_PAGINATION_RECORD_COUNT)));
				requestParams.put("maxResults", maxResult);
			}
			if (StringUtils.isNotEmpty(pageToken)) {
				requestParams.put("pageToken", pageToken);
			}
			return executeAndGetResult(bigquery, query, queryParameters, jobId, pageToken, requestParams, options);
		} catch (TokenResponseException tre) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			return executeAndGetResult(bigquery, query, queryParameters, jobId, pageToken, requestParams, options);
		}
	}

	private static BQQueryResult executeAndGetResult(BigQuery bigquery, String query,
			Map<String, Object> queryParameters, String jobId, String pageToken, Map<String, Object> requestParams,
			Map<BigQueryConfigOptions, Object> options)
			throws IOException, JobException, InterruptedException, URISyntaxException, GeneralSecurityException {
		boolean legacySql =
				BooleanUtils.toBoolean(Objects.toString(options.get(BigQueryConfigOptions.USE_LEGACY_SQL), "false"));
		if (StringUtils.isNotEmpty(jobId)) {
			TableResult queryResults = null;
			Job jobObj = bigquery.getJob(JobId.of(SystemProperty.applicationId.get(), jobId));
			if (StringUtils.isNotEmpty(pageToken)) {
				long maxResult = BaseUtilFunctions
						.toLong(Objects.toString(options.get(BigQueryConfigOptions.PAGINATION_RECORD_COUNT),
								Objects.toString(BQResultProcessor.BQ_PAGINATION_RECORD_COUNT)));
				queryResults = jobObj.getQueryResults(QueryResultsOption.pageToken(pageToken),
						QueryResultsOption.pageSize(maxResult));
			} else {
				queryResults = jobObj.getQueryResults();
			}
			return BQResultProcessor.processResult(jobId, queryResults, pageToken, options);
		} else if (legacySql) {
			return executeQuery(bigquery, query, queryParameters, requestParams);
		} else {
			requestParams.put("parameterMode", "NAMED");
			query = BQQueryParamReplacer.replaceQueryParams(query, queryParameters);
			Map<String, QueryParameterValue> parameters = getQueryParameters(queryParameters);
			return executeStandardQueryWithParams(bigquery, query, parameters, requestParams);
		}
	}

	private static Map<String, QueryParameterValue> getQueryParameters(Map<String, Object> queryParameters) {
		if (null == queryParameters || queryParameters.isEmpty()) return null;
		Set<Entry<String, Object>> entrySet = queryParameters.entrySet();
		Map<String, QueryParameterValue> parameters = new HashMap<String, QueryParameterValue>();
		for (Iterator<Entry<String, Object>> iterator = entrySet.iterator(); iterator.hasNext();) {
			Entry<String, Object> entry = iterator.next();
			Object value = entry.getValue();
			QueryParameterValue pvalue = null;
			if (value instanceof String) {
				pvalue = QueryParameterValue.of(value, StandardSQLTypeName.STRING);
			} else if (value instanceof Long || value instanceof Integer) {
				pvalue = QueryParameterValue.of(value, StandardSQLTypeName.INT64);
			} else if (value instanceof Double || value instanceof Float) {
				pvalue = QueryParameterValue.of(value, StandardSQLTypeName.FLOAT64);
			} else if (value instanceof Boolean) {
				pvalue = QueryParameterValue.of(value, StandardSQLTypeName.BOOL);
			} else if (value instanceof Date) {
				pvalue = QueryParameterValue.of(value, StandardSQLTypeName.DATE);
			}
			parameters.put(entry.getKey(), pvalue);
		}
		return parameters;
	}

	public static BQQueryResult executeStandardQueryWithParams(BigQuery bigquery, String query,
			Map<String, QueryParameterValue> parameters, Map<String, Object> requestParameters)
			throws IOException, JobException, InterruptedException, URISyntaxException, GeneralSecurityException {
		Job queryJob = createQueryExecutionJob(bigquery, query);
		TableResult response = null;
		if (requestParameters == null || requestParameters.isEmpty()) {
			response = queryJob.getQueryResults();
		} else {
			long maxResult =
					(long) (requestParameters.get("maxResults") == null ? 0l : requestParameters.get("maxResults"));
			if (requestParameters.get("pageToken") == null) {
				response = queryJob.getQueryResults(QueryResultsOption.pageSize(maxResult));
			} else {
				response = queryJob.getQueryResults(
						QueryResultsOption.pageToken((String) requestParameters.get("pageToken")),
						QueryResultsOption.pageSize(maxResult));
			}
		}
		return BQResultProcessor.processResult(queryJob.getJobId().getJob(), response, null, null);
	}

	public static BQQueryResult executeQuery(BigQuery bigquery, String query, Map<String, Object> queryParameters,
			Map<String, Object> requestParameters)
			throws IOException, JobException, InterruptedException, URISyntaxException, GeneralSecurityException {
		Job queryJob = createQueryExecutionJob(bigquery, query, queryParameters, true);
		TableResult response = null;
		if (requestParameters == null || requestParameters.isEmpty()) {
			response = queryJob.getQueryResults();
		} else {
			long maxResult =
					(long) (requestParameters.get("maxResults") == null ? 0l : requestParameters.get("maxResults"));
			if (requestParameters.get("pageToken") == null) {
				response = queryJob.getQueryResults(QueryResultsOption.pageSize(maxResult));
			} else {
				response = queryJob.getQueryResults(
						QueryResultsOption.pageToken((String) requestParameters.get("pageToken")),
						QueryResultsOption.pageSize(maxResult));
			}
		}
		return BQResultProcessor.processResult(queryJob.getJobId().getJob(), response, null, null);
	}

	private static Job createQueryExecutionJob(BigQuery bigquery, String query)
			throws IOException, URISyntaxException, GeneralSecurityException {
		return createQueryExecutionJob(bigquery, query, new HashMap<String, Object>(), false);
	}

	private static Job createQueryExecutionJob(BigQuery bigquery, String query, Map<String, Object> queryParameters,
			boolean isLegacySql) throws IOException, URISyntaxException, GeneralSecurityException {
		QueryJobConfiguration.Builder request =
				QueryJobConfiguration.newBuilder(BQQueryParamReplacer.replaceQueryParams(query, queryParameters))
						.setUseLegacySql(isLegacySql).setUseQueryCache(false);
		Job queryJob = null;
		JobId jobId = JobId.of(SystemProperty.applicationId.get(), UUID.randomUUID().toString());
		JobInfo jobInfo = JobInfo.newBuilder(request.build()).setJobId(jobId).build();
		try {
			queryJob = bigquery.create(jobInfo);
		} catch (BigQueryException bqe) {
			LOGGER.info("Refreshing BigQuery token..");
			bigquery = authorize();
			queryJob = bigquery.create(jobInfo);
		}
		return queryJob;
	}

	public static Future<BQQueryResult> executeAsync(final BigQuery bigquery, final String query,
			final Map<String, Object> queryParameters, final String jobId, final String pageToken,
			final Map<BigQueryConfigOptions, Object> options) throws Exception {
		Future<BQQueryResult> future = AsynchronousExecutor.execute(new TaskExecution<BQQueryResult>() {
			@Override
			public BQQueryResult execute() throws Exception {
				LOGGER.info("Execution Started");
				BQQueryResult result = executeBigQuery(bigquery, query, queryParameters, jobId, pageToken, options);
				LOGGER.info("Executed Successfully");
				return result;
			}
		});
		LOGGER.info("Successfully Submitted query for execution: " + query);
		return future;
	}

	public static Future<BQQueryResult> executeAsync(BigQuery bigquery, String query) throws Exception {
		return executeAsync(bigquery, query, null);
	}

	public static Future<BQQueryResult> executeAsync(BigQuery bigquery, String query,
			Map<String, Object> queryParameters) throws Exception {
		Map<BigQueryConfigOptions, Object> options = new HashMap<>();
		options.put(BigQueryConfigOptions.USE_LEGACY_SQL, true);
		return executeAsync(bigquery, query, queryParameters, options);
	}

	public static Future<BQQueryResult> executeAsync(BigQuery bigquery, String query,
			Map<String, Object> queryParameters, Map<BigQueryConfigOptions, Object> options) throws Exception {
		return executeAsync(bigquery, query, queryParameters, null, null, options);
	}
}
