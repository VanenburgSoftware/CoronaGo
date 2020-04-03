package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.LoginPerimeter;
@Table(name="Login", acl = @ACLProvider(value = LoginPerimeter.class))
public class Login extends LoginBase {
	

}