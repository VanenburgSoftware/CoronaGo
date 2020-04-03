package com.coronago.misc.logic;

import com.coronago.misc.model.AppUserPrivileges;
import com.coronago.misc.model.Roles;
import com.coronago.misc.exception.ErrorMessages;

import com.coronago.misc.exception.ErrorCodes;

import com.coronago.misc.logic.LoginAuthenticator;

import java.util.ArrayList;
import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;
import com.eva.base.authentication.Authenticator;
import com.eva.base.cache.CacheManager;
import com.eva.base.exception.ForbiddenException;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;
import com.vs.eva.gaelibrary.user.menu.ApplicationMenuLoader;

public class AppUserPrivilegesBLImpl extends AppUserPrivilegesBLBaseImpl<AppUserPrivileges>
		implements IAppUserPrivilegesBL<AppUserPrivileges> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(AppUserPrivilegesBLImpl.class);

	public AppUserPrivilegesBLImpl() {
		super(AppUserPrivileges.class);
	}

	public AppUserPrivileges getCurrentUserWithMenu() {
		AppUserPrivileges user = getCurrentUser();
		if (null == user) {
			LOGGER.error(ErrorMessages.USER_NOT_AUTHENTICATED);
			throw new ForbiddenException(ErrorCodes.USER_NOT_AUTHENTICATED, ErrorMessages.USER_NOT_AUTHENTICATED);
		}
		if (user.isPat()) {
			List<String> roles = user.getUserRoles();
			if (roles == null || roles.size() == 0) {
				roles = new ArrayList<>();
				roles.add(Roles.PAT.getRoleName());
				user.setUserRoles(roles);
			}
		}
		CacheManager cacheManager = CacheManager.getInstance();
		AppConfigurationCache configCache = cacheManager.getCache(AppConfigurationCache.NAME);
		ApplicationMenuLoader menuLoader = new ApplicationMenuLoader(configCache);
		LOGGER.debug("Loading menu for the user {}", user.getEmail());
		menuLoader.loadMenu(user);
		return user;
	}

	public AppUserPrivileges getCurrentUser() {
		return getCurrentUser(true);
	}

	public AppUserPrivileges getCurrentUser(boolean isUserId) {
		CacheManager cacheManager = CacheManager.getInstance();
		AppUserPrivilegeCache<AppUserPrivileges> cache = cacheManager.getCache(AppUserPrivilegeCache.NAME);
		Authenticator<AppUserPrivileges> authenticator = new LoginAuthenticator(cache, this);
		AppUserPrivileges user = authenticator.authenticate(isUserId);
		if (null == user) {
			LOGGER.info("User is not availbable");
			return user;
		}
		LOGGER.info("User {} sucessfully authenticated", user.getEmail());
		return user;
	}

	@Override
	public PaginationResponse getAppUserPrivilegesAll_AppUserPrivileges(PaginationRequest dataTable) {
		return super.getAppUserPrivilegesAll_AppUserPrivileges(dataTable);
	}
}
