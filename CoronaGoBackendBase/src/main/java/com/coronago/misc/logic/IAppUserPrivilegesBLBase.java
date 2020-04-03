package com.coronago.misc.logic;

import com.eva.base.logic.ICRUDOperation;
import com.vs.eva.gaelibrary.user.IAppUserPrivilegeBL;
import com.coronago.misc.model.AppUserPrivilegesBase;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

public interface IAppUserPrivilegesBLBase<T extends AppUserPrivilegesBase> extends IAppUserPrivilegeBL<T>, ICRUDOperation<T>{
public PaginationResponse getAppUserPrivilegesAll_AppUserPrivileges(PaginationRequest dataTable);


}
