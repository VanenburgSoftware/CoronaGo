package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.CountyStateLoginPerimeter;
@Table(name="CountyStateLogin", acl = @ACLProvider(value = CountyStateLoginPerimeter.class))
public class CountyStateLogin extends CountyStateLoginBase {
	

}