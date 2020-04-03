package com.coronago.misc.model;
import com.eva.base.model.BaseModel;
import com.eva.base.util.ValidationErrorConstants;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


public class LoginBase extends BaseModel {

	@Email(message = ValidationErrorConstants.INVALID_EMAIL)
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	private String email;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	private Long otp;

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setOtp(Long otp) {
		this.otp = otp;
	}

	public Long getOtp() {
		return otp;
	}


}