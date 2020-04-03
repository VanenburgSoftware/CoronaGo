package com.coronago.bq.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;

import com.coronago.bq.BigQueryManager;
import com.coronago.bq.exception.BatchSaveSizeExceededException;
import com.coronago.bq.model.BQBaseObject;
import com.coronago.util.TaskCreationUtil;
import com.eva.base.cache.CacheManager;
import com.eva.base.exception.InternalException;
import com.eva.base.model.BaseModel;
import com.google.api.services.bigquery.model.TableSchema;
import com.google.appengine.api.datastore.Key;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryError;
import com.google.cloud.bigquery.Dataset;
import com.google.cloud.bigquery.DatasetInfo;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValue;
import com.google.cloud.bigquery.InsertAllRequest.RowToInsert;
import com.google.cloud.bigquery.InsertAllResponse;
import com.google.cloud.bigquery.JobException;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.Schema;
import com.google.cloud.bigquery.StandardTableDefinition;
import com.google.cloud.bigquery.Table;
import com.google.cloud.bigquery.TableDefinition;
import com.google.cloud.bigquery.TableId;
import com.google.cloud.bigquery.TableInfo;
import com.google.cloud.bigquery.TableResult;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.exception.InvalidArgumentException;

public abstract class BaseBQBDL<BQM extends BQBaseObject, FSM extends BaseModel> {
	public static final String BIGQUERY_RETRY_DELAY = "bigquery_retry_delay";
	public static final String BIGQUERY_DATASET = "bigquery_dataset";
	private static final Logger log = Logger.getLogger(BaseBQBDL.class.getName());
	public static BigQuery BS;
	protected Class<BQM> modelClass;
	public static Key application_key;
	private static AppConfigurationCache applicationConfigurationCache;
	private String dataset_id;
	private static int retry_delay;
	private boolean triggerTaskOnFailure = true;
	static {
		CacheManager cacheManager = CacheManager.getInstance();
		applicationConfigurationCache = cacheManager.getCache(AppConfigurationCache.NAME);
		retry_delay = applicationConfigurationCache.get(BIGQUERY_RETRY_DELAY) == null ? 2000
				: Integer.valueOf((String) applicationConfigurationCache.get(BIGQUERY_RETRY_DELAY));
		try {
			BS = BigQueryManager.authorize();
		} catch (Exception e) {
			log.log(Level.SEVERE, "Bigquery Manager initialization error !!!");
		}
	}
	private String table_id;
	private boolean taskAction = false;

	public BaseBQBDL(Class<BQM> modelClass, String table_id) {
		this(modelClass, table_id, (String) applicationConfigurationCache.get(BIGQUERY_DATASET));
	}

	public BaseBQBDL(Class<BQM> modelClass, String table_id, String dataset_id) {
		this.modelClass = modelClass;
		this.table_id = table_id;
		if (StringUtils.isBlank(dataset_id)) throw new InvalidArgumentException("BQ_DATASET_EMPTY");
		this.dataset_id = dataset_id;
	}

	public String getDataset_id() {
		return dataset_id;
	}

	public String getTable_id() {
		return table_id;
	}

	public void setTable_id(String table_id) {
		this.table_id = table_id;
	}

	public boolean isTaskAction() {
		return taskAction;
	}

	public void setTaskAction(boolean taskAction) {
		this.taskAction = taskAction;
	}

	private Dataset createDataset() {
		Dataset dataset = null;
		DatasetInfo datasetInfo = DatasetInfo.newBuilder(getDataset_id()).build();
		dataset = BS.create(datasetInfo);
		return dataset;
	}

	public Table createTable(BQM modelObj) {
		log.log(Level.INFO, "Creating BQ Table: " + getTable_id());
		Dataset dataset = BS.getDataset(getDataset_id());
		if (dataset == null) dataset = createDataset();
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		if (table == null) {
			TableDefinition tableDefinition = StandardTableDefinition.of(getModelSchema());
			TableInfo tableInfo = TableInfo.newBuilder(tableId, tableDefinition).build();
			table = BS.create(tableInfo);
		} else {
			log.log(Level.INFO, "Table already exists : " + getTable_id());
		}
		return table;
	}

	public boolean isTableExists(BQM modelObj) {
		log.log(Level.FINE, "Checking existence of BQ Table: " + getTable_id());
		Dataset dataset = BS.getDataset(getDataset_id());
		if (dataset == null) dataset = createDataset();
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		return table == null ? false : true;
	}

	public List<BQM> saveFSObjectsInBatch(List<FSM> modelObjs) {
		List<BQM> bq_model_objs = new ArrayList<BQM>();
		for (FSM model_obj : modelObjs) {
			bq_model_objs.add(prepareBQModelSync(model_obj, false));
		}
		return saveBatch(bq_model_objs);
	}

	public List<Map<String, Object>> saveBatchMap(List<Map<String, Object>> modelObjs) {
		log.log(Level.FINE, "modelObjs: " + modelObjs);
		try {
			if (modelObjs == null || modelObjs.size() == 0) return null;
			if (modelObjs.size() > 1000) { throw new BatchSaveSizeExceededException("BATCH_SAVE_SIZE_EXCEEDED_1000"); }
			onBeforeSaveBatchMap(modelObjs);
			persistBatchMap(modelObjs, 0);
			onAfterSaveBatchMap(modelObjs);
		} catch (Exception e) {
			log.log(Level.SEVERE, "Exception while Saving model in batch: {0} \n {1}", new Object[] {
					(modelClass != null) ? modelClass.getName() : StringUtils.EMPTY, ExceptionUtils.getStackTrace(e)});
			throw e;
		}
		return modelObjs;
	}

	public List<BQM> saveBatch(List<BQM> modelObjs) {
		log.log(Level.FINE, "modelObjs: " + modelObjs);
		try {
			if (modelObjs == null || modelObjs.size() == 0) return null;
			if (modelObjs.size() > 1000) { throw new BatchSaveSizeExceededException("BATCH_SAVE_SIZE_EXCEEDED_1000"); }
			onBeforeSaveBatch(modelObjs);
			persistBatch(modelObjs, 0);
			onAfterSaveBatch(modelObjs);
		} catch (Exception e) {
			log.log(Level.SEVERE, "Exception while Saving model in batch: {0} \n {1}", new Object[] {
					(modelClass != null) ? modelClass.getName() : StringUtils.EMPTY, ExceptionUtils.getStackTrace(e)});
			if (isTaskAction()) {
				throw e;
			} else {
				if (triggerTaskOnFailure) {
					TaskCreationUtil.createBQSyncRetryTasks(getTable_id(), modelObjs);
				} else {
					throw e;
				}
			}
		}
		return modelObjs;
	}

	public BQM saveFSObject(FSM fs_modelObj) {
		return save(prepareBQModelSync(fs_modelObj, false));
	}

	public BQM save(BQM modelObj) {
		log.log(Level.INFO, "Saving BQ Table Data: " + getTable_id());
		try {
			onBeforeSave(modelObj);
			persist(modelObj, 0);
			onAfterSave(modelObj);
		} catch (Exception e) {
			log.log(Level.SEVERE, "Exception while Saving model : {0} \n {1}", new Object[] {
					(modelClass != null) ? modelClass.getName() : StringUtils.EMPTY, ExceptionUtils.getStackTrace(e)});
			log.log(Level.SEVERE, "UniqueKeyValue:" + modelObj.getUnique_key_value());
			if (isTaskAction()) {
				throw e;
			} else {
				if (triggerTaskOnFailure) {
					TaskCreationUtil.createBQSyncRetryTasks(getTable_id(), modelObj.getId().toString());
				} else {
					throw e;
				}
			}
		}
		return modelObj;
	}

	private List<BQM> persistBatch(List<BQM> modelObjs, int retryCount) {
		log.log(Level.FINE, "Saving BQ Table Data as Batch: " + getTable_id() + " in dataset: " + getDataset_id());
		if (getDataset_id() == null || getTable_id() == null)
			throw new InvalidArgumentException("INVALID_DATASET_OR_TABLE_ID", getDataset_id(), getTable_id());
		BQM valid_modelObj = null;
		for (BQM modelObj : modelObjs) {
			if (modelObj != null) {
				valid_modelObj = modelObj;
				break;
			}
		}
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		if (table == null) {
			log.log(Level.INFO, "BQ Table does not exists in BigQuery");
			table = createTable(valid_modelObj);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException ignore) {
				log.log(Level.INFO, "Thread Sleep is interrupted!!!");
			}
		}
		try {
			List<RowToInsert> rows = new ArrayList<>();
			for (BQM modelObj : modelObjs) {
				if (modelObjs == null) continue;
				String primaryKey = getPrimaryKey(modelObj);
				log.log(Level.FINE, "Primary Key is " + primaryKey);
				Map<String, Object> rowDetails = getRowToInsert(modelObj);
				if (StringUtils.isNotEmpty(primaryKey)) {
					rowDetails.put("primary_key", primaryKey);
				}
				rows.add(RowToInsert.of(rowDetails));
			}
			InsertAllResponse insertAllResponse = table.insert(rows);
			Map<Long, List<BigQueryError>> errorMap = insertAllResponse.getInsertErrors();
			if (errorMap != null && errorMap.size() > 0) {
				for (Map.Entry<Long, List<BigQueryError>> errorList : errorMap.entrySet()) {
					for (BigQueryError error : errorList.getValue()) {
						log.log(Level.SEVERE, "row: " + errorList.getKey() + " / " + "error: " + error);
					}
				}
				throw new InternalException("BQ_EXCEPTION", errorMap);
			}
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error persisting Batch Data in BQ in the retry count: " + retryCount, e);
			if (retryCount < 5) {
				persistBatch(modelObjs, retryCount + 1);
			} else {
				throw e;
			}
		}
		return modelObjs;
	}

	private List<Map<String, Object>> persistBatchMap(List<Map<String, Object>> modelObjs, int retryCount) {
		log.log(Level.FINE, "Saving BQ Table Data as Batch: " + getTable_id() + " in dataset: " + getDataset_id());
		if (getDataset_id() == null || getTable_id() == null)
			throw new InvalidArgumentException("INVALID_DATASET_OR_TABLE_ID", getDataset_id(), getTable_id());
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		if (table == null) {
			log.log(Level.INFO, "BQ Table does not exists in BigQuery");
			table = createTable(getModelInstance());
			try {
				Thread.sleep(1000);
			} catch (InterruptedException ignore) {
				log.log(Level.INFO, "Thread Sleep is interrupted!!!");
			}
		}
		try {
			List<RowToInsert> rows = new ArrayList<>();
			for (Map<String, Object> modelObj : modelObjs) {
				if (modelObjs == null) continue;
				// primary_key should be set in the map.
				String primaryKey = (String) modelObj.get("primary_key");
				log.log(Level.FINE, "Primary Key is " + primaryKey);
				rows.add(RowToInsert.of(modelObj));
			}
			InsertAllResponse insertAllResponse = table.insert(rows);
			Map<Long, List<BigQueryError>> errorMap = insertAllResponse.getInsertErrors();
			if (errorMap != null && errorMap.size() > 0) {
				for (Map.Entry<Long, List<BigQueryError>> errorList : errorMap.entrySet()) {
					for (BigQueryError error : errorList.getValue()) {
						log.log(Level.SEVERE, "row: " + errorList.getKey() + " / " + "error: " + error);
					}
				}
				throw new InternalException("BQ_EXCEPTION", errorMap);
			}
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error persisting Batch Data in BQ in the retry count: " + retryCount, e);
			if (retryCount < 5) {
				persistBatchMap(modelObjs, retryCount + 1);
			} else {
				throw e;
			}
		}
		return modelObjs;
	}

	private BQM persist(BQM modelObj, int retryCount) {
		if (getDataset_id() == null || getTable_id() == null)
			throw new InvalidArgumentException("INVALID_DATASET_OR_TABLE_ID", getDataset_id(), getTable_id());
		if (modelObj == null) return modelObj;
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		if (table == null) {
			log.log(Level.INFO, "BQ Table does not exists in BigQuery");
			table = createTable(modelObj);
		}
		try {
			List<RowToInsert> row = new ArrayList<>();
			String primaryKey = getPrimaryKey(modelObj);
			log.log(Level.FINE, "Primary Key is " + primaryKey);
			Map<String, Object> rowDetails = getRowToInsert(modelObj);
			if (StringUtils.isNotEmpty(primaryKey)) {
				log.log(Level.INFO, "Primary key value is available");
				rowDetails.put("primary_key", primaryKey);
			}
			row.add(RowToInsert.of(rowDetails));
			log.log(Level.FINE, "Row : " + row);
			InsertAllResponse insertAllResponse = table.insert(row);
			log.log(Level.FINE, "Insertion result" + insertAllResponse);
			Map<Long, List<BigQueryError>> errorMap = insertAllResponse.getInsertErrors();
			if (errorMap != null && errorMap.size() > 0) {
				for (Map.Entry<Long, List<BigQueryError>> errorList : errorMap.entrySet()) {
					for (BigQueryError error : errorList.getValue()) {
						log.log(Level.SEVERE, "row: " + errorList.getKey() + " / " + "error: " + error);
					}
				}
				throw new InternalException("BQ_EXCEPTION", errorMap);
			}
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error persisting Data in BQ in the retry count: " + retryCount, e);
			if (retryCount < 5) {
				persist(modelObj, retryCount + 1);
			} else {
				throw e;
			}
		}
		return modelObj;
	}

	public void removeTable(BQM modelObj) {
		onBeforeDelete(modelObj);
		removeTable(modelObj, 0);
		onAfterDelete(modelObj);
	}

	private void removeTable(BQM modelObj, int retryCount) {
		if (getDataset_id() == null || getTable_id() == null)
			throw new InvalidArgumentException("INVALID_DATASET_OR_TABLE_ID", getDataset_id(), getTable_id());
		TableId tableId = TableId.of(getDataset_id(), getTable_id());
		Table table = BS.getTable(tableId);
		if (table == null) {
			log.log(Level.INFO, "BQ Table does not exists in BigQuery, so skip deletion");
			return;
		}
		try {
			table.delete();
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error removing table in BQ in the retry count: " + retryCount, e);
			if (retryCount < 5) {
				removeTable(modelObj, retryCount + 1);
			} else {
				throw e;
			}
		}
	}

	public void delete(String[] id_list) {
		try {
			List<BQM> list = new ArrayList<>();
			for (String id : id_list) {
				BQM bqObj = getRowById(Long.parseLong(id));
				bqObj.setRecord_deleted(true);
				list.add(bqObj);
			}
			if (!list.isEmpty()) saveBatch(list);
		} catch (Exception e) {
			log.log(Level.SEVERE, "Exception while deleting model : {0} \n {1}", new Object[] {
					(modelClass != null) ? modelClass.getName() : StringUtils.EMPTY, ExceptionUtils.getStackTrace(e)});
			if (isTaskAction())
				throw e;
			else
				TaskCreationUtil.createBQSyncRetryTasks(getTable_id(), id_list);
		}
	}

	public BQM getRowById(Long id) {
		BQM obj = null;
		String query = "SELECT * FROM " + getDataset_id() + "." + getTable_id() + " WHERE id=" + id;
		TableResult result = getRowsByQuery(query);
		if (result != null) {
			obj = createModelFromRow(result.iterateAll().iterator().next(), result.getSchema().getFields(),
					getModelInstance());
		}
		return obj;
	}

	public TableResult getRowsByQuery(String query) {
		QueryJobConfiguration.Builder qBuilder = QueryJobConfiguration.newBuilder(query);
		QueryJobConfiguration qConfig = qBuilder.setUseLegacySql(false).build();
		TableResult result;
		try {
			result = BS.query(qConfig);
			if (result == null)
				return getRowsByQuery(query, 0);
			else
				return result;
		} catch (JobException | InterruptedException e) {
			log.log(Level.SEVERE, "Error while executing query - " + query, e);
			return getRowsByQuery(query, 0);
		}
	}

	public TableResult getRowsByQuery(String query, int retryCount) {
		if (retryCount < 5) {
			try {
				Thread.sleep(retryCount * retry_delay);
			} catch (InterruptedException e) {
				log.log(Level.WARNING, "Thread sleep failed ", e);
			}
			QueryJobConfiguration.Builder qBuilder = QueryJobConfiguration.newBuilder(query);
			QueryJobConfiguration qConfig = qBuilder.setUseLegacySql(false).build();
			TableResult result;
			try {
				result = BS.query(qConfig);
				if (result == null)
					return getRowsByQuery(query, retryCount++);
				else
					return result;
			} catch (JobException | InterruptedException e) {
				log.log(Level.SEVERE, "Error while executing query - " + query, e);
				return getRowsByQuery(query, retryCount++);
			}
		} else
			return null;
	}

	protected BQM getModelInstance() {
		try {
			return modelClass.newInstance();
		} catch (InstantiationException | IllegalAccessException e) {
			log.log(Level.SEVERE, "Error Creating Instance for the class " + modelClass, e);
			throw new InternalException("CLASS_CONSTRUCTION_ERROR");
		}
	}

	public BQM getLatestRowByUniqueKeyValue(String unique_key_value) {
		BQM obj = null;
		String query = "SELECT * FROM " + getDataset_id() + "." + getTable_id() + " WHERE unique_key_value = \""
				+ unique_key_value + "\" order by sync_time desc limit 1  ";
		TableResult result = getRowsByQuery(query);
		if (result != null) {
			obj = createModelFromRow(result.iterateAll().iterator().next(), result.getSchema().getFields(),
					getModelInstance());
		}
		return obj;
	}

	public TableSchema getTableSchema() {
		return null;
	}

	protected abstract BQM createModelFromRow(List<FieldValue> fieldValues, List<Field> fieldSchema, BQM modelObj);

	public Map<String, Object> getRowToInsert(BQM modelObj) {
		Map<String, Object> row = new HashMap<>();
		modelObj.setSync_time(System.currentTimeMillis());
		if (modelObj.getSync_time() != null) row.put("sync_time", modelObj.getSync_time());
		if (modelObj.getUnique_key_value() != null) row.put("unique_key_value", modelObj.getUnique_key_value());
		if (modelObj.getId() != null) row.put("id", modelObj.getId());
		row.put("record_deleted", modelObj.isRecord_deleted());
		convertModelAttributesForInsert(row, modelObj);
		return row;
	}

	protected abstract void convertModelAttributesForInsert(Map<String, Object> row, BQM modelObj);

	protected abstract String getPrimaryKey(BQM modelObj);

	protected abstract Schema getModelSchema();

	protected void onAfterSaveBatch(List<BQM> modelObjs) {}

	protected void onAfterSaveBatchMap(List<Map<String, Object>> modelObjs) {}

	protected void onBeforeSaveBatch(List<BQM> modelObjs) {}

	protected void onBeforeSaveBatchMap(List<Map<String, Object>> modelObjs) {}

	protected abstract void onBeforeSave(BQM modelObj);

	protected abstract void onBeforeDelete(BQM modelObj);

	protected abstract void onAfterSave(BQM modelObj);

	protected abstract void onAfterDelete(BQM modelObj);

	protected abstract void indexObject(BQM modelObj);

	protected abstract void setModelAttributesForSync(BQM model_obj, FSM fs_model_obj);

	/**
	 * Assumed Caller will fill Unique Key Value in the FS Model Object.
	 * 
	 * @param fs_model_obj Datastore Model Object
	 * @param record_deleted Flag to say whether its deletion or create - update action.
	 * @return Converted BQ Model Object
	 */
	public BQM prepareBQModelSync(FSM fs_model_obj, boolean record_deleted) {
		BQM model_obj = getModelInstance();
		try {
			model_obj.setId(fs_model_obj.getSid().toString());
			model_obj.setRecord_deleted(record_deleted);
			setModelAttributesForSync(model_obj, fs_model_obj);
		} catch (Exception e) {
			log.log(Level.SEVERE, "Error while filling the attributes for synchronization for the class " + modelClass,
					e);
			throw new InternalException("BQ_SYNC_OBJECT_PREPARATION_ERROR", modelClass.getSimpleName());
		}
		return model_obj;
	}
}
