package com.coronago.bq.model;

import java.math.BigInteger;
import java.util.LinkedHashMap;
import java.util.List;

import com.google.api.services.bigquery.model.TableDataList;
import com.google.cloud.bigquery.TableResult;

public class BQQueryResult {
	private BigInteger total;
	private String pageToken;
	private String jobId;
	private List<LinkedHashMap<String, Object>> data;

	public BQQueryResult() {
		setTotal(null);
	}

	public BQQueryResult(TableDataList response) {
		Long total = response.getTotalRows();
		setTotal(null == total ? new BigInteger("0") : BigInteger.valueOf(total));
		setPageToken(response.getPageToken());
	}

	public BQQueryResult(TableResult response) {
		Long total = response.getTotalRows();
		setTotal(null == total ? new BigInteger("0") : BigInteger.valueOf(total));
		setPageToken(response.getNextPageToken());
	}

	public List<LinkedHashMap<String, Object>> getData() {
		return data;
	}

	public void setData(List<LinkedHashMap<String, Object>> data) {
		this.data = data;
	}

	public BigInteger getTotal() {
		return total;
	}

	public void setTotal(BigInteger total) {
		this.total = null == total ? new BigInteger("0") : total;
	}

	public String getPageToken() {
		return pageToken;
	}

	public void setPageToken(String pageToken) {
		this.pageToken = pageToken;
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
}
