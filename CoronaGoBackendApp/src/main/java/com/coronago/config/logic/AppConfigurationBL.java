package com.coronago.config.logic;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.vs.eva.gaelibrary.app.configuration.GAEAppConfiguration;
import com.vs.eva.gaelibrary.app.configuration.GAEAppConfigurationBL;


public class AppConfigurationBL extends GAEAppConfigurationBL <GAEAppConfiguration> implements IAppConfigurationBL {
	private XLogger LOGGER = XLoggerFactory.getXLogger(AppConfigurationBL.class);
	
	public AppConfigurationBL() {
		super(GAEAppConfiguration.class);
	}
}
