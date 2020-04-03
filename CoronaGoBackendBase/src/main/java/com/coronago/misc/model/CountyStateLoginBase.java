package com.coronago.misc.model;
import com.eva.base.model.BaseModel;
import com.eva.base.util.ValidationErrorConstants;
import javax.validation.constraints.Email;
import com.eva.base.validation.annotations.AllowedValues;


public class CountyStateLoginBase extends BaseModel {

	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	private String email;
	private String password;
	@AllowedValues(values={"County 1","County 2"},message=ValidationErrorConstants.INVALID_VALUES)
	private String county;

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getCounty() {
		return county;
	}


}