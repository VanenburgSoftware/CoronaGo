package com.coronago.bq.bdl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.coronago.bq.logic.BaseBQBDL;
import com.coronago.bq.model.ItemBQ;
import com.coronago.misc.model.Item;
import com.eva.base.util.JsonUtil;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.FieldValue;
import com.google.cloud.bigquery.LegacySQLTypeName;
import com.google.cloud.bigquery.Schema;

public class ItemBQBDL extends BaseBQBDL<ItemBQ, Item> {
	public ItemBQBDL() {
		super(ItemBQ.class, "Item");
	}

	@Override
	protected ItemBQ createModelFromRow(List<FieldValue> fieldValues, List<Field> fieldSchema, ItemBQ modelObj) {
		Map<String, Object> fieldValueMap = new HashMap<>();
		for (int i = 0; i < fieldValues.size(); i++) {
			fieldValueMap.put(fieldSchema.get(i).getName(), fieldValues.get(i).getValue());
		}
		modelObj = JsonUtil.MAPPER.convertValue(fieldValueMap, ItemBQ.class);
		return modelObj;
	}

	@Override
	protected void convertModelAttributesForInsert(Map<String, Object> row, ItemBQ modelObj) {
		row.put("itemName", modelObj.getItemName());
		row.put("itemId", modelObj.getItemId());
	}

	@Override
	protected String getPrimaryKey(ItemBQ modelObj) {
		return modelObj.getItemId();
	}

	@Override
	protected Schema getModelSchema() {
		List<Field> fields = new ArrayList<Field>();
		fields.add(Field.of("id", LegacySQLTypeName.STRING));
		fields.add(Field.of("primary_key", LegacySQLTypeName.STRING));
		fields.add(Field.of("sync_time", LegacySQLTypeName.INTEGER));
		fields.add(Field.of("record_deleted", LegacySQLTypeName.BOOLEAN));
		fields.add(Field.of("itemName", LegacySQLTypeName.STRING));
		fields.add(Field.of("itemId", LegacySQLTypeName.STRING));
		return Schema.of(fields);
	}

	@Override
	protected void onBeforeSave(ItemBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onBeforeDelete(ItemBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterSave(ItemBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void onAfterDelete(ItemBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void indexObject(ItemBQ modelObj) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void setModelAttributesForSync(ItemBQ bqModel, Item fsModel) {
		bqModel.setId(fsModel.getSid().toString());
		bqModel.setItemId(fsModel.getItemId());
		bqModel.setItemName(fsModel.getItemName());
	}
}
