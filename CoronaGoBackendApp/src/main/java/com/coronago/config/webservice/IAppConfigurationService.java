package com.coronago.config.webservice;

import java.util.List;

import com.eva.base.service.acl.ServiceAcl;
import com.eva.base.tasks.TaskHandler;
import com.vs.eva.gaelibrary.app.configuration.GAEAppConfiguration;
import com.vs.eva.gaelibrary.app.role.GAEApplicationRole;
import com.vs.eva.gaelibrary.user.menu.GAEApplicationMenu;

public interface IAppConfigurationService {
	
	List<GAEAppConfiguration> loadConfigurationFromStorage(String bucket, String file);

	List<GAEApplicationRole> loadRoleFromStorage(String bucket, String file);

	List<GAEApplicationMenu> loadMenuFromStorage(String bucket, String file);
	
	List<ServiceAcl> loadServiceAclFromStorage(String bucket, String file);

	List<TaskHandler> loadTaskHandlerFromStorage(String bucket, String file);
}
