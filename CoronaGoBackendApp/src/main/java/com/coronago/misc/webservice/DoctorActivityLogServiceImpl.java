package com.coronago.misc.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;

import com.coronago.misc.model.DoctorActivityLog;

import com.coronago.misc.logic.IDoctorActivityLogBL;

import com.coronago.misc.logic.DoctorActivityLogBLImpl;

import java.util.List;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.coronago.misc.logic.IDoctorActivityLogBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

@Produces(MediaType.APPLICATION_JSON)
@Path("doctoractivitylogs")
public class DoctorActivityLogServiceImpl
		extends DoctorActivityLogServiceBaseImpl<IDoctorActivityLogBL<DoctorActivityLog>, DoctorActivityLog> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(DoctorActivityLogServiceImpl.class);

	public DoctorActivityLogServiceImpl() {
		super(InstanceFactory.getProxy(new DoctorActivityLogBLImpl()));
	}

	@Override
	@POST
	public DoctorActivityLog createDoctorActivityLog(DoctorActivityLog modelObj) {
		return super.createDoctorActivityLog(modelObj);
	}

	@Override
	@POST
	@Path("/doctoractivitylogs/datatable/{createddt}")
	public PaginationResponse getDoctorActivityLogAll_DoctorActivityLog(PaginationRequest dataTable,
			@PathParam("createddt") Long createdDt) {
		return logic.getDoctorActivityLogAll_DoctorActivityLog(dataTable, createdDt);
	}

	@Override
	@PUT
	public DoctorActivityLog updateDoctorActivityLog(DoctorActivityLog modelObj) {
		return super.updateDoctorActivityLog(modelObj);
	}

	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteDoctorActivityLog(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}

	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public DoctorActivityLog getDoctorActivityLogBySid(@PathParam("sid") Primary sid) {
		return super.getDoctorActivityLogBySid(sid);
	}
}
