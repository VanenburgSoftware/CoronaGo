package com.coronago.misc.webservice;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.coronago.misc.logic.HospitalBLImpl;
import com.coronago.misc.model.Hospital;

@Produces(MediaType.APPLICATION_JSON)
@Path("/hospitals")
public class HosptialServiceImpl {
	@GET
	@Path("/getall")
	public List<Hospital> getAllHospitals() {
		HospitalBLImpl hospitalBLImpl = new HospitalBLImpl();
		return hospitalBLImpl.getAll(null);
	}
}
