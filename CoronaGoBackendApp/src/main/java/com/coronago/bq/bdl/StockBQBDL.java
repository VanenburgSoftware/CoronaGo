package com.coronago.bq.bdl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.coronago.bq.logic.BaseBQBDL;
import com.coronago.bq.model.StockBQ;
import com.coronago.misc.model.StockInHospital;
import com.eva.base.cache.CacheManager;
import com.eva.base.util.JsonUtil;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValue;
import com.google.cloud.bigquery.LegacySQLTypeName;
import com.google.cloud.bigquery.Schema;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.firestore.FirestoreUtil;

public class StockBQBDL extends BaseBQBDL<StockBQ, StockInHospital> {
	private AppConfigurationCache configCache = CacheManager.getInstance().getCache(AppConfigurationCache.NAME);
	public StockBQBDL() {
		super(StockBQ.class, "Stock");
	}

	@Override
	protected StockBQ createModelFromRow(List<FieldValue> fieldValues, List<Field> fieldSchema, StockBQ modelObj) {
		Map<String, Object> fieldValueMap = new HashMap<>();
		for (int i = 0; i < fieldValues.size(); i++) {
			fieldValueMap.put(fieldSchema.get(i).getName(), fieldValues.get(i).getValue());
		}
		modelObj = JsonUtil.MAPPER.convertValue(fieldValueMap, StockBQ.class);
		return modelObj;
	}

	@Override
	protected void convertModelAttributesForInsert(Map<String, Object> row, StockBQ modelObj) {
		row.put("hospitalId", modelObj.getHospitalId());
		row.put("itemId", modelObj.getItemId());
		row.put("stockInHand", modelObj.getStockInHand());
		row.put("stockRequired", modelObj.getStockRequired());
	}

	@Override
	protected String getPrimaryKey(StockBQ modelObj) {
		return modelObj.getHospitalId() + FirestoreUtil.FS_KEY_SEPERATOR + modelObj.getItemId();
	}

	@Override
	protected Schema getModelSchema() {
		List<Field> fields = new ArrayList<Field>();
		fields.add(Field.of("id", LegacySQLTypeName.STRING));
		fields.add(Field.of("primary_key", LegacySQLTypeName.STRING));
		fields.add(Field.of("sync_time", LegacySQLTypeName.INTEGER));
		fields.add(Field.of("record_deleted", LegacySQLTypeName.BOOLEAN));
		
		fields.add(Field.of("hospitalId", LegacySQLTypeName.STRING));
		fields.add(Field.of("itemId", LegacySQLTypeName.STRING));
		fields.add(Field.of("stockInHand", LegacySQLTypeName.INTEGER));
		fields.add(Field.of("stockRequired", LegacySQLTypeName.INTEGER));
		return Schema.of(fields);
	}

	@Override
	protected void onBeforeSave(StockBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onBeforeDelete(StockBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterSave(StockBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterDelete(StockBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void indexObject(StockBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void setModelAttributesForSync(StockBQ bqModel, StockInHospital fsModel) {
		bqModel.setId(fsModel.getSid().toString());
		bqModel.setHospitalId(configCache.getAsString("hospital_id"));
		bqModel.setItemId(fsModel.getItemId());
		bqModel.setStockInHand(fsModel.getStockInHand());
		bqModel.setStockRequired(fsModel.getStockRequired());
	}
}
