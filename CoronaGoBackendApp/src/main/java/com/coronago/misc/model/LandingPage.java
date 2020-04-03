package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.LandingPagePerimeter;
@Table(name="LandingPage", acl = @ACLProvider(value = LandingPagePerimeter.class))
public class LandingPage extends LandingPageBase {
	

}