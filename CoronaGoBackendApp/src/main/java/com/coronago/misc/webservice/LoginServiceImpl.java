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

import com.coronago.misc.model.Login;

import com.coronago.misc.logic.ILoginBL;

import com.coronago.misc.logic.LoginBLImpl;

import com.coronago.misc.logic.ILoginBLBase;

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
@Path("logins")
public class LoginServiceImpl extends LoginServiceBaseImpl<ILoginBL<Login>, Login> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(LoginServiceImpl.class);
	public LoginServiceImpl() {
		super(InstanceFactory.getProxy(new LoginBLImpl()));
	}
    @Override
	@PUT
	public Login updateLogin(Login modelObj) {
		return super.updateLogin( modelObj);
	}



	@Override
	@DELETE
	@Path("/{ids}")
	public Response deleteLogin(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@Override
	@POST
	public Login createLogin(Login modelObj) {
		return super.createLogin( modelObj);
	}


	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sid/{sid}")
	public Login getLoginBySid(@PathParam("sid") Primary sid) {
		return super.getLoginBySid(sid);
	}
	
}
