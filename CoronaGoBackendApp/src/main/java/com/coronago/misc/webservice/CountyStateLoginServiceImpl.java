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

import com.coronago.misc.model.CountyStateLogin;

import com.coronago.misc.logic.ICountyStateLoginBL;

import com.coronago.misc.logic.CountyStateLoginBLImpl;

import com.coronago.misc.logic.ICountyStateLoginBLBase;

import javax.ws.rs.Path;

import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import javax.ws.rs.DELETE;

import javax.ws.rs.GET;

import com.eva.base.model.Primary;

import javax.ws.rs.PathParam;

import javax.ws.rs.POST;

import javax.ws.rs.PUT;

@Produces(MediaType.APPLICATION_JSON)
@Path("countystatelogins")
public class CountyStateLoginServiceImpl extends CountyStateLoginServiceBaseImpl<ICountyStateLoginBL<CountyStateLogin>, CountyStateLogin> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(CountyStateLoginServiceImpl.class);
	public CountyStateLoginServiceImpl() {
		super(InstanceFactory.getProxy(new CountyStateLoginBLImpl()));
	}
	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteCountyStateLogin(@PathParam("ids") String ids) {
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
	public CountyStateLogin getCountyStateLoginBySid(@PathParam("sid") Primary sid) {
		return super.getCountyStateLoginBySid(sid);
	}


	@Override
	@POST
	public CountyStateLogin createCountyStateLogin(CountyStateLogin modelObj) {
		return super.createCountyStateLogin( modelObj);
	}


    @Override
	@PUT
	public CountyStateLogin updateCountyStateLogin(CountyStateLogin modelObj) {
		return super.updateCountyStateLogin( modelObj);
	}

	
}
