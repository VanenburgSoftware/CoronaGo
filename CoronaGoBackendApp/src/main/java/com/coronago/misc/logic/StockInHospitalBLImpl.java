package com.coronago.misc.logic;

import java.io.IOException;
import java.net.URISyntaxException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.coronago.bq.BQQueryParamReplacer;
import com.coronago.bq.BigQueryConfigOptions;
import com.coronago.bq.BigQueryManager;
import com.coronago.bq.QueryCache;
import com.coronago.bq.bdl.StockBQBDL;
import com.coronago.bq.model.BQQueryResult;
import com.coronago.bq.model.StockBQ;
import com.coronago.misc.model.StockInHospital;
import com.eva.base.cache.CacheManager;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.model.PaginationRequest;
import com.eva.base.model.PaginationResponse;
import com.eva.base.util.NumberUtils;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.JobException;
import com.vs.eva.gaelibrary.app.configuration.AppConfigurationCache;

public class StockInHospitalBLImpl extends StockInHospitalBLBaseImpl<StockInHospital>
		implements IStockInHospitalBL<StockInHospital> {
	private static final Logger LOGGER = LoggerFactory.getLogger(StockInHospitalBLImpl.class.getName());
	public StockInHospitalBLImpl() {
		super(StockInHospital.class);
	}

	@Override
	public PaginationResponse getStockInHospitalAll_StockInHospital(PaginationRequest dataTable) {
		return super.getStockInHospitalAll_StockInHospital(dataTable);
	}

	public void onAfterUpdateDB(StockInHospital modelObj) {
		StockBQBDL stockBQBDL = new StockBQBDL();
		stockBQBDL.saveFSObject(modelObj);
		super.onAfterUpdateDB(modelObj);
	}

	public void onAfterSaveDB(StockInHospital modelObj) {
		StockBQBDL stockBQBDL = new StockBQBDL();
		stockBQBDL.saveFSObject(modelObj);
		super.onAfterSaveDB(modelObj);
	}

	@Override
	public List<LinkedHashMap<String, Object>> getStockInfoByHospital(String hospitalId) {
		try {
			BigQuery bigquery = BigQueryManager.authorize();
			BQQueryResult result = null;
			CacheManager cacheManager = CacheManager.getInstance();
			AppConfigurationCache configCache = cacheManager.getCache(AppConfigurationCache.NAME);
			QueryCache queryCache = cacheManager.getCache(QueryCache.NAME);
			String query = queryCache.get("stock_info_by_hospital");
			Map<String, Object> queryParameters = new HashMap<String, Object>();
			queryParameters.put("DATASET", configCache.get("bigquery_dataset"));
			queryParameters.put("FILTER_CONDITION", "WHERE Hospital.hospitalId ='" + hospitalId + "'");
			query = BQQueryParamReplacer.replaceQueryParams(query, queryParameters);
			Map<BigQueryConfigOptions, Object> options = new HashMap<>();
			options.put(BigQueryConfigOptions.USE_LEGACY_SQL, false);
			result = BigQueryManager.executeBigQuery(bigquery, query, null, null, null, options);
			if (result == null || result.getData() == null) { return Collections.emptyList(); }
			return result.getData();
		} catch (Exception e) {
			LOGGER.error("Exception in getStockInfoByItem", e);
		}
		return Collections.emptyList();
	}

	@Override
	public PaginationResponse getStockInfoByItem(PaginationRequest request,String itemId) {
		PaginationResponse response = new PaginationResponse(request);
		try {
			BigQuery bigquery = BigQueryManager.authorize();
			BQQueryResult result = null;
			CacheManager cacheManager = CacheManager.getInstance();
			AppConfigurationCache configCache = cacheManager.getCache(AppConfigurationCache.NAME);
			QueryCache queryCache = cacheManager.getCache(QueryCache.NAME);
			String query = queryCache.get("stock_info_by_item");
			Map<String, Object> queryParameters = new HashMap<String, Object>();
			queryParameters.put("DATASET", configCache.get("bigquery_dataset"));
			queryParameters.put("FILTER_CONDITION", "WHERE Item.itemId ='" + itemId + "'");
			query = BQQueryParamReplacer.replaceQueryParams(query, queryParameters);
			Map<BigQueryConfigOptions, Object> options = new HashMap<>();
			options.put(BigQueryConfigOptions.USE_LEGACY_SQL, false);
			result = BigQueryManager.executeBigQuery(bigquery, query, null, null, null, options);
			if (result == null || result.getData() == null) {
				response.setResults(Collections.emptyList());
				response.setTotal(0L);
				response.setFiltered(0L);
				return response;
			}
			response.setResults(result.getData());
			long filtered = NumberUtils.toInt(request.getStart()) + result.getData().size();
			long total = filtered;
			if (result.getData().size() == request.getPageSize()) {
				total = request.getStart() + request.getPageSize() + 1;
			}
			response.setTotal(total);
			response.setFiltered(filtered);
			return response;
		} catch (Exception e) {
			LOGGER.error("Exception in getStockInfoByItem", e);
		}
		response.setResults(Collections.emptyList());
		response.setTotal(0L);
		response.setFiltered(0L);
		return response;
	}
}
