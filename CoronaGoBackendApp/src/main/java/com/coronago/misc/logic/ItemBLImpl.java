package com.coronago.misc.logic;

import com.coronago.bq.bdl.ItemBQBDL;
import com.coronago.misc.model.Item;

public class ItemBLImpl extends ItemBLBaseImpl<Item> implements IItemBL<Item> {
	public ItemBLImpl() {
		super(Item.class);
	}

	public void onAfterUpdateDB(Item modelObj) {
		ItemBQBDL itemBQBDL = new ItemBQBDL();
		itemBQBDL.saveFSObject(modelObj);
		super.onAfterUpdateDB(modelObj);
	}

	public void onAfterSaveDB(Item modelObj) {
		ItemBQBDL itemBQBDL = new ItemBQBDL();
		itemBQBDL.saveFSObject(modelObj);
		super.onAfterSaveDB(modelObj);
	}
}
