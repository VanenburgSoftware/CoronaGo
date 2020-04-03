package com.coronago.util;

import java.net.URI;

import com.eva.base.appconfiguration.IAppConfigurationCache;
import com.eva.base.cache.CacheManager;

import freemarker.template.Configuration;
import freemarker.template.Template;

public class TemplateLoader {
	protected static Configuration cfg = null;

	@SuppressWarnings("deprecation")
	protected static synchronized Configuration getTemplateConfig() throws Exception {
		if (cfg == null) {
			IAppConfigurationCache appConfigCache = CacheManager.getInstance().getCache(IAppConfigurationCache.NAME);
			URI a = TemplateLoader.class.getResource(appConfigCache.getAsString("template_folder")).toURI();
			java.io.File templateDir = new java.io.File(a);
			cfg = new Configuration();
			cfg.setDirectoryForTemplateLoading(templateDir);
		}
		return cfg;
	}

	public static Template getTemplate(String template_name) throws Exception {
		return getTemplateConfig().getTemplate(template_name);
	}
}
