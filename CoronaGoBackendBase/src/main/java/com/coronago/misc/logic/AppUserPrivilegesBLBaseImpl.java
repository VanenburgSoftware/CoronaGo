package com.coronago.misc.logic;

import java.util.ArrayList;
import java.util.List;

import com.eva.base.cache.CacheManager;
import com.eva.base.dal.providers.PersistenceType;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;
import com.vs.eva.gaelibrary.user.GAEAppUserPrivilegeBL;
import com.coronago.misc.model.AppUserPrivilegesBase;

import com.coronago.misc.model.Roles;
import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public class AppUserPrivilegesBLBaseImpl<T extends AppUserPrivilegesBase> extends GAEAppUserPrivilegeBL<T>
		implements IAppUserPrivilegesBLBase<T> {
	public AppUserPrivilegesBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return new PersistenceType[] { PersistenceType.SEARCH };
	}

	public final void onBeforeSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onBeforeSaveDB(modelObj);
			break;
		case SEARCH:
			onBeforeSaveSearch(modelObj);
			break;
		default:
			break;
		}
		super.onBeforeSave(type, modelObj);
	}

	public final void onBeforeUpdate(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onBeforeUpdateDB(modelObj);
			break;
		case SEARCH:
			onBeforeUpdateSearch(modelObj);
			break;
		default:
			break;
		}
		super.onBeforeUpdate(type, modelObj);
	}

	public final void onAfterSave(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterSaveDB(modelObj);
			break;
		case SEARCH:
			onAfteraveSearch(modelObj);
			break;
		default:
			break;
		}
		super.onAfterSave(type, modelObj);
	}

	public void onAfteraveSearch(T modelObj) {
		// TODO Auto-generated method stub

	}

	public void onAfterSaveDB(T modelObj) {
		AppUserPrivilegeCache<?> cache = CacheManager.getInstance().getCache(AppUserPrivilegeCache.NAME);
		cache.invalidate(modelObj.getEmail());
	}

	public final void onAfterUpdate(PersistenceType type, T modelObj) {
		switch (type) {
		case DB:
			onAfterUpdateDB(modelObj);
			break;
		case SEARCH:
			onAfterUpdateSearch(modelObj);
			break;
		default:
			break;
		}
		super.onAfterUpdate(type, modelObj);
	}

	public void onAfterUpdateSearch(T modelObj) {
		// TODO Auto-generated method stub

	}

	public void onAfterUpdateDB(T modelObj) {
		AppUserPrivilegeCache<?> cache = CacheManager.getInstance().getCache(AppUserPrivilegeCache.NAME);
		cache.invalidate(modelObj.getEmail());
	}

	public void onBeforeUpdateSearch(T modelObj) {
		// TODO Auto-generated method stub

	}

	public void onBeforeUpdateDB(T modelObj) {
		setRoles(modelObj);
	}

	public void onBeforeSaveSearch(T modelObj) {
	}

	public void onBeforeSaveDB(T modelObj) {
		setRoles(modelObj);
	}

	protected void setRoles(T modelObj) {
		List<String> userRoles = new ArrayList<>();
		if (modelObj.isDevadmin()) {
			userRoles.add(Roles.DEVADMIN.getRoleName());
		}
		if (modelObj.isPat()) {
			userRoles.add(Roles.PAT.getRoleName());
		}
		if (modelObj.isDoc()) {
			userRoles.add(Roles.DOC.getRoleName());
		}
		if (modelObj.isHa()) {
			userRoles.add(Roles.HA.getRoleName());
		}
		if (modelObj.isAdmin()) {
			userRoles.add(Roles.ADMIN.getRoleName());
		}
		if (modelObj.isScl()) {
			userRoles.add(Roles.SCL.getRoleName());
		}
		modelObj.setUserRoles(userRoles);
	}

	@Override
	public PaginationResponse getAppUserPrivilegesAll_AppUserPrivileges(PaginationRequest dataTable) {
		return super.getAllByPage(PersistenceType.SEARCH, dataTable);
	}

}