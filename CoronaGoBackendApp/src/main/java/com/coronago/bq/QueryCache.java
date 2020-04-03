package com.coronago.bq;

import com.vs.eva.gaelibrary.cache.GAECache;

public class QueryCache extends GAECache<String, String> {
	public static final String NAME = "BQQueryCache";
	public QueryCache() {
		super(NAME);
	}

	@Override
	public String query(String key) {
		return QueryLoader.getQuery(key);
	}

	@Override
	public String get(String key) {
		if (!QueryLoader.isIsloaded()) {
			set(key, null);
		}
		return super.get(key);
	}
}
