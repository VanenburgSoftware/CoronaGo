package com.coronago.bq.bdl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.coronago.bq.logic.BaseBQBDL;
import com.coronago.bq.model.HospitalBQ;
import com.coronago.bq.model.PatientBQ;
import com.coronago.misc.model.PatientInformation;
import com.eva.base.util.JsonUtil;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValue;
import com.google.cloud.bigquery.LegacySQLTypeName;
import com.google.cloud.bigquery.Schema;

public class PatientBQBDL extends BaseBQBDL<PatientBQ, PatientInformation> {
	public PatientBQBDL() {
		super(PatientBQ.class, "Patient");
	}

	@Override
	protected PatientBQ createModelFromRow(List<FieldValue> fieldValues, List<Field> fieldSchema, PatientBQ modelObj) {
		Map<String, Object> fieldValueMap = new HashMap<>();
		for (int i = 0; i < fieldValues.size(); i++) {
			fieldValueMap.put(fieldSchema.get(i).getName(), fieldValues.get(i).getValue());
		}
		modelObj = JsonUtil.MAPPER.convertValue(fieldValueMap, PatientBQ.class);
		return modelObj;
	}

	@Override
	protected void convertModelAttributesForInsert(Map<String, Object> row, PatientBQ modelObj) {
		row.put("patientId", modelObj.getPatientId());
		row.put("zipCode", modelObj.getZipCode());
		row.put("riskLevel", modelObj.getRiskLevel());
	}

	@Override
	protected String getPrimaryKey(PatientBQ modelObj) {
		return modelObj.getPatientId();
	}

	@Override
	protected Schema getModelSchema() {
		List<Field> fields = new ArrayList<Field>();
		fields.add(Field.of("id", LegacySQLTypeName.STRING));
		fields.add(Field.of("primary_key", LegacySQLTypeName.STRING));
		fields.add(Field.of("sync_time", LegacySQLTypeName.INTEGER));
		fields.add(Field.of("record_deleted", LegacySQLTypeName.BOOLEAN));
		fields.add(Field.of("patientId", LegacySQLTypeName.STRING));
		fields.add(Field.of("zipCode", LegacySQLTypeName.STRING));
		fields.add(Field.of("riskLevel", LegacySQLTypeName.STRING));
		return Schema.of(fields);
	}

	@Override
	protected void onBeforeSave(PatientBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onBeforeDelete(PatientBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterSave(PatientBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterDelete(PatientBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void indexObject(PatientBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void setModelAttributesForSync(PatientBQ bqModel, PatientInformation fsModel) {
		bqModel.setId(fsModel.getSid().toString());
		bqModel.setPatientId(fsModel.getPatientHid());
		bqModel.setZipCode(fsModel.getZipcode());
		bqModel.setRiskLevel(fsModel.getRiskLevel());
	}
}
