package com.coronago.misc.logic;
import com.coronago.misc.model.AppUserPrivileges;

import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;
import com.vs.eva.gaelibrary.authentication.GoogleLoginAuthenticator;

public class LoginAuthenticator extends GoogleLoginAuthenticator<AppUserPrivileges> {

	public LoginAuthenticator(AppUserPrivilegeCache<AppUserPrivileges> holder,
			IAppUserPrivilegesBL<AppUserPrivileges> logic) {
		super(holder, logic);
	}
}
