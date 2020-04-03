package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.ResourcesPerimeter;
@Table(name="Resources", acl = @ACLProvider(value = ResourcesPerimeter.class))
public class Resources extends ResourcesBase {
	

}