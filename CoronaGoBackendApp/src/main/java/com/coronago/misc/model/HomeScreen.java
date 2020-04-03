package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.HomeScreenPerimeter;
@Table(name="HomeScreen", acl = @ACLProvider(value = HomeScreenPerimeter.class))
public class HomeScreen extends HomeScreenBase {
	

}