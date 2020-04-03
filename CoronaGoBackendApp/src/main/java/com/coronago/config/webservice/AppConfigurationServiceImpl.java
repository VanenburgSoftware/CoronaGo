package com.coronago.config.webservice;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.coronago.config.logic.AppConfigurationBL;
import com.coronago.config.logic.IAppConfigurationBL;
import com.coronago.misc.logic.HospitalBLImpl;
import com.coronago.misc.logic.ItemBLImpl;
import com.coronago.misc.model.Hospital;
import com.coronago.misc.model.Item;
import com.eva.base.factory.InstanceFactory;
import com.eva.base.service.acl.ServiceAcl;
import com.eva.base.tasks.TaskHandler;
import com.eva.base.util.JsonUtil;
import com.eva.jersey.base.webservice.BaseWebService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.vs.eva.gaelibrary.app.configuration.GAEAppConfiguration;
import com.vs.eva.gaelibrary.app.role.GAEApplicationRole;
import com.vs.eva.gaelibrary.user.menu.GAEApplicationMenu;

@Path("configuration")
@Produces(MediaType.APPLICATION_JSON)
public class AppConfigurationServiceImpl extends BaseWebService<IAppConfigurationBL, GAEAppConfiguration>
		implements IAppConfigurationService {
	public AppConfigurationServiceImpl() {
		super(InstanceFactory.getInstance(AppConfigurationBL.class));
	}

	@GET
	@Override
	@Path("load/config")
	public List<GAEAppConfiguration> loadConfigurationFromStorage(@QueryParam("bucket") String bucket,
			@QueryParam("file") String file) {
		return logic.loadToTable(bucket, file);
	}

	@GET
	@Override
	@Path("load/role")
	public List<GAEApplicationRole> loadRoleFromStorage(@QueryParam("bucket") String bucket,
			@QueryParam("file") String file) {
		return logic.loadRoleToTable(bucket, file);
	}

	@GET
	@Override
	@Path("load/menu")
	public List<GAEApplicationMenu> loadMenuFromStorage(@QueryParam("bucket") String bucket,
			@QueryParam("file") String file) {
		return logic.loadMenuToTable(bucket, file);
	}

	@GET
	@Override
	@Path("load/serviceacl")
	public List<ServiceAcl> loadServiceAclFromStorage(@QueryParam("bucket") String bucket,
			@QueryParam("file") String file) {
		return logic.loadServiceAclToTable(bucket, file);
	}

	@GET
	@Override
	@Path("load/taskhandler")
	public List<TaskHandler> loadTaskHandlerFromStorage(@QueryParam("bucket") String bucket,
			@QueryParam("file") String file) {
		return logic.loadTaskHandlerToTable(bucket, file);
	}
	
	@GET
	@Path("load/items")
	public Response loadItems() {
		InputStream inStream = this.getClass().getResourceAsStream("/items.json");
		List<Item> itemsData = JsonUtil.fromStream(inStream, new TypeReference<List<Item>>() {});
		ItemBLImpl itemBLImpl = new ItemBLImpl();
		for (Item item : itemsData) {
			itemBLImpl.update(item);
		}
		return Response.ok().build();
	}
	
	@GET
	@Path("load/hospitals")
	public Response loadHospitals() {
		InputStream inStream = this.getClass().getResourceAsStream("/hospitals.json");
		List<Hospital> itemsData = JsonUtil.fromStream(inStream, new TypeReference<List<Hospital>>() {});
		HospitalBLImpl hospitalBLImpl = new HospitalBLImpl();
		for (Hospital item : itemsData) {
			hospitalBLImpl.update(item);
		}
		return Response.ok().build();
	}
}
