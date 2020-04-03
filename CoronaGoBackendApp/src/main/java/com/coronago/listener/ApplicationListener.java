package com.coronago.listener;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContextEvent;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.cache.CacheManager;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.factory.ProviderFactory;
import com.eva.base.factory.StorageFactory;
import com.eva.base.provider.RegistrationProvider;
import com.eva.base.transaction.TransactionManager;
import com.eva.base.tasks.TaskHandler;
import com.eva.base.tasks.logic.TaskHandlerBL;
import com.vs.eva.gaelibrary.gcs.CloudStorage;
import com.coronago.bq.QueryCache;
import com.coronago.bq.QueryLoader;
import com.coronago.config.logic.AppConfigurationBL;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.app.role.ApplicationRoleCache;
import com.vs.eva.gaelibrary.app.role.GAEApplicationRole;
import com.vs.eva.gaelibrary.provider.GaeRegistrationProvider;
import com.vs.eva.gaelibrary.cache.ServiceAclCache;
import com.vs.eva.gaelibrary.cache.TaskHandlerCache;
import com.vs.eva.gaelibrary.user.menu.ApplicationMenuCache;
import com.vs.eva.gaelibrary.user.menu.GAEApplicationMenu;
import com.coronago.config.logic.AppConfigurationBL;
import com.coronago.misc.logic.AppUserPrivilegesBLImpl;
import com.coronago.misc.model.AppUserPrivileges;
import com.coronago.tasks.util.TasksConfiguration;
import com.vs.eva.gaelibrary.user.menu.ApplicationMenuCache;
import com.vs.eva.gaelibrary.authentication.AppUserPrivilegeCache;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;
import com.vs.eva.gaelibrary.app.role.ApplicationRoleCache;
import com.vs.eva.gaelibrary.app.role.GAEApplicationRole;
import com.vs.eva.gaelibrary.user.menu.GAEApplicationMenu;
import com.vs.eva.gaelibrary.firestore.BaseGaeFSDal;
import com.vs.eva.gaelibrary.firestore.connection.FSTransactionManager;
import com.vs.eva.gaelibrary.search.BaseGAESearchDal;
import com.vs.eva.gaelibrary.search.connection.SearchTransactionManager;
import com.vs.eva.gaelibrary.gcs.CloudStorage;
import com.eva.base.factory.StorageFactory;

public class ApplicationListener extends BaseApplicationListener {
	private XLogger LOGGER = XLoggerFactory.getXLogger(ApplicationListener.class);

	@Override
	public List<RegistrationProvider> initialized(ServletContextEvent sce) {
		List<RegistrationProvider> providers = new ArrayList<>();
		providers.add(new GaeRegistrationProvider());
		return providers;
	}

	@Override
	public List<RegistrationProvider> destroyed(ServletContextEvent sce) {
		List<RegistrationProvider> providers = new ArrayList<>();
		return providers;
	}

	@Override
	public void registerProvider() {
		LOGGER.debug("Registering Providers");
		ProviderFactory.register(PersistenceType.DB, new BaseGaeFSDal<>());
		ProviderFactory.register(PersistenceType.SEARCH, new BaseGAESearchDal<>());
		StorageFactory.register(PersistenceType.FILES, new CloudStorage());
		LOGGER.debug("Registering storage Providers");
	}

	@Override
	public void registerCache() {
		LOGGER.debug("Registering application user and menu Cache");
		CacheManager manager = CacheManager.getInstance();
		manager.register(new AppConfigurationCache(new AppConfigurationBL()));
		manager.register(new AppUserPrivilegeCache<AppUserPrivileges>(new AppUserPrivilegesBLImpl()));
		manager.register(new ApplicationMenuCache<GAEApplicationMenu>());
		manager.register(new ApplicationRoleCache<GAEApplicationRole>());
		manager.register(new TaskHandlerCache(new TaskHandlerBL<>(TaskHandler.class)));
		manager.register(new ServiceAclCache());
		manager.register(new QueryCache());
	}

	@Override
	public void registerTxnManagers() {
		LOGGER.debug("Registering Transaction Manager Providers");
		TransactionManager.register(PersistenceType.DB, new FSTransactionManager());
		TransactionManager.register(PersistenceType.SEARCH, new SearchTransactionManager());
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		super.contextInitialized(sce);
		try {
			TasksConfiguration.initializeTasksConfigurations("TasksConfiguration.json");
		} catch (Exception e) {
			LOGGER.error("Exception while intializing tasks configurations");
		}
		QueryLoader.registerQueryFile("queries.xml");
	}
}
