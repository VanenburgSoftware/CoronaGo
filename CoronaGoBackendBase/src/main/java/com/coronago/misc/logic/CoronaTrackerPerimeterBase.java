package com.coronago.misc.logic;

import com.eva.base.acl.IPerimeterManager;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import com.eva.base.util.CollectionUtils;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.acl.AllowedFields;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.coronago.misc.model.CoronaTrackerBase;
import com.coronago.misc.model.AppUserPrivilegesBase;

public abstract class CoronaTrackerPerimeterBase<CoronaTracker extends CoronaTrackerBase> implements IPerimeterManager<CoronaTracker> {
	
	private AppUserPrivilegeCache userCache = CacheManager.getInstance().getCache(IAppUserPrivilegeCache.NAME);
	@Override
	public boolean canCreate(CoronaTracker model) {
		AppUserPrivilegesBase userBase = (AppUserPrivilegesBase) userCache.getCurrentUser();
		if (userBase.isDevadmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canUpdate(CoronaTracker model) {
		AppUserPrivilegesBase userBase = (AppUserPrivilegesBase) userCache.getCurrentUser();
		if (userBase.isDevadmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canDelete(CoronaTracker model) {
		AppUserPrivilegesBase userBase = (AppUserPrivilegesBase) userCache.getCurrentUser();
		if (userBase.isDevadmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canRead(CoronaTracker model) {
		AppUserPrivilegesBase userBase = (AppUserPrivilegesBase) userCache.getCurrentUser();
		if (userBase.isDevadmin()) { return true; }
		
		return false;
	}

	@Override
	public String getAccessQuery(PersistenceType type) {
		return null;
	}

	@Override
	public AllowedFields getSelectFields(PersistenceType type) {
		AllowedFields allowedFields = new AllowedFields();
		AppUserPrivilegesBase userBase = (AppUserPrivilegesBase) userCache.getCurrentUser();
		setReadFields(userBase, allowedFields);
		setWriteFields(userBase, allowedFields);
		return allowedFields;
	}
	
protected boolean checkPatPerimeter(CoronaTracker model, AppUserPrivilegesBase userBase) {
	return false;
	}


protected boolean checkDocPerimeter(CoronaTracker model, AppUserPrivilegesBase userBase) {
	return false;
	}


protected boolean checkHaPerimeter(CoronaTracker model, AppUserPrivilegesBase userBase) {
	return false;
	}


protected boolean checkAdminPerimeter(CoronaTracker model, AppUserPrivilegesBase userBase) {
	return false;
	}


protected boolean checkSclPerimeter(CoronaTracker model, AppUserPrivilegesBase userBase) {
	return false;
	}

	private void setReadFields(AppUserPrivilegesBase userBase, AllowedFields allowedFields) {
		List<String> allowedAccessFields = new ArrayList<>();
		allowedAccessFields.addAll(getTechnicalFields());
				if (userBase.isPat()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isDoc()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isHa()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isAdmin()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isScl()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		allowedFields.setAllowedReadFields(allowedAccessFields);
	}
	private void setWriteFields(AppUserPrivilegesBase userBase, AllowedFields allowedFields) {
		List<String> allowedAccessFields = new ArrayList<>();
		allowedAccessFields.addAll(getTechnicalFields());
				if (userBase.isPat()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isDoc()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isHa()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isAdmin()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		if (userBase.isScl()) {
			String[] readFields = new String[] {"hospitals"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		allowedFields.setAllowedReadFields(allowedAccessFields);
	}
	protected List<String> getTechnicalFields() {
		String[] technicalFields = {"sid", "createdBy", "createdDate", "modifiedBy", "modifiedDate"};
		return Arrays.asList(technicalFields);
	}
}
