package com.coronago.bq.bdl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.coronago.bq.logic.BaseBQBDL;
import com.coronago.bq.model.HospitalBQ;
import com.coronago.misc.model.Hospital;
import com.eva.base.util.JsonUtil;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValue;
import com.google.cloud.bigquery.LegacySQLTypeName;
import com.google.cloud.bigquery.Schema;

public class HospitalBQBDL extends BaseBQBDL<HospitalBQ, Hospital> {
	public HospitalBQBDL() {
		super(HospitalBQ.class, "Hospital");
	}

	@Override
	protected HospitalBQ createModelFromRow(List<FieldValue> fieldValues, List<Field> fieldSchema,
			HospitalBQ modelObj) {
		Map<String, Object> fieldValueMap = new HashMap<>();
		for (int i = 0; i < fieldValues.size(); i++) {
			fieldValueMap.put(fieldSchema.get(i).getName(), fieldValues.get(i).getValue());
		}
		modelObj = JsonUtil.MAPPER.convertValue(fieldValueMap, HospitalBQ.class);
		return modelObj;
	}

	@Override
	protected void convertModelAttributesForInsert(Map<String, Object> row, HospitalBQ modelObj) {
		row.put("hospitalId", modelObj.getHospitalId());
		row.put("hospitalName", modelObj.getHospitalName());
	}

	@Override
	protected String getPrimaryKey(HospitalBQ modelObj) {
		return modelObj.getHospitalId();
	}

	@Override
	protected Schema getModelSchema() {
		List<Field> fields = new ArrayList<Field>();
		fields.add(Field.of("id", LegacySQLTypeName.STRING));
		fields.add(Field.of("primary_key", LegacySQLTypeName.STRING));
		fields.add(Field.of("sync_time", LegacySQLTypeName.INTEGER));
		fields.add(Field.of("record_deleted", LegacySQLTypeName.BOOLEAN));
		fields.add(Field.of("hospitalId", LegacySQLTypeName.STRING));
		fields.add(Field.of("hospitalName", LegacySQLTypeName.STRING));
		return Schema.of(fields);
	}

	@Override
	protected void onBeforeSave(HospitalBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onBeforeDelete(HospitalBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterSave(HospitalBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterDelete(HospitalBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void indexObject(HospitalBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void setModelAttributesForSync(HospitalBQ bqModel, Hospital fsModel) {
		bqModel.setId(fsModel.getSid().toString());
		bqModel.setHospitalId(fsModel.getHospitalId());
		bqModel.setHospitalName(fsModel.getHospitalName());
	}
}
