package com.coronago.misc.model;

import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.DoctorActivityLogPerimeter;

@Table(name = "DoctorActivityLog", acl = @ACLProvider(value = DoctorActivityLogPerimeter.class))
public class DoctorActivityLog extends DoctorActivityLogBase {
	private static final long serialVersionUID = 1L;
	private String doctorEmail;

	public String getDoctorEmail() {
		return doctorEmail;
	}

	public void setDoctorEmail(String doctorEmail) {
		this.doctorEmail = doctorEmail;
	}
}
