package com.coronago.misc.logic;

import com.coronago.misc.model.Login;

import com.coronago.misc.logic.LoginBLBaseImpl;

public class LoginBLImpl extends LoginBLBaseImpl<Login> implements ILoginBL<Login>{

	public LoginBLImpl() {
		super(Login.class);
	}
	
}