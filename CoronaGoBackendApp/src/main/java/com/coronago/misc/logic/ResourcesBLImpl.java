package com.coronago.misc.logic;

import com.coronago.misc.model.Resources;

import com.coronago.misc.logic.ResourcesBLBaseImpl;

public class ResourcesBLImpl extends ResourcesBLBaseImpl<Resources> implements IResourcesBL<Resources>{

	public ResourcesBLImpl() {
		super(Resources.class);
	}
	
}