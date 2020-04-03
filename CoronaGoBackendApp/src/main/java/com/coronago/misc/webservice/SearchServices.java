package com.coronago.misc.webservice;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;

import com.google.appengine.api.search.GetRequest;
import com.google.appengine.api.search.GetRequest.Builder;
import com.google.appengine.api.search.GetResponse;
import com.google.appengine.api.search.Index;
import com.google.appengine.api.search.IndexSpec;
import com.google.appengine.api.search.SearchServiceFactory;
import com.vs.eva.gaelibrary.search.BaseGAESearchDal;

@Produces(MediaType.APPLICATION_JSON)
@Path("/search_index")
public class SearchServices {
	private static final Logger LOGGER = Logger.getLogger(SearchServices.class.getName());

	@GET
	@Path("/{index_name}/{index_id}")
	public Response deleteAllDocumentsFromIndex(@PathParam("index_name") String index_name,
			@PathParam("index_id") String index_id) {
		BaseGAESearchDal.deleteDocumentFromIndex(index_name, index_id);
		return Response.ok().build();
	}

	@GET
	@Path("/deleteIndex/{index_name}/{startId}")
	public void deleteAllDocumentFromIndex(@PathParam("index_name") String indexName,
			@PathParam("startId") String startId) {
		// Setup the Index
		IndexSpec indexSpec = IndexSpec.newBuilder().setName(indexName).build();
		Index index = SearchServiceFactory.getSearchService().getIndex(indexSpec);
		while (true) {
			// Return a set of doc_ids.
			Builder builder = GetRequest.newBuilder().setReturningIdsOnly(true).setLimit(200);
			if (StringUtils.isNotEmpty(startId)) {
				builder.setStartId(startId);
			}
			GetRequest request = builder.build();
			GetResponse<com.google.appengine.api.search.Document> response = index.getRange(request);
			List<com.google.appengine.api.search.Document> results = response.getResults();
			int length = results.size();
			if (length > 0) {
				com.google.appengine.api.search.Document document = results.get(length - 1);
				startId = document.getId();
				deleteThread(index, response);
				LOGGER.log(Level.INFO, "Current Total Length: " + length + ", Next StartId: " + startId);
				if (length < 50) {
					startId = "";
				}
			} else {
				break;
			}
		}
		LOGGER.log(Level.INFO, "Finished");
	}

	private void deleteThread(final Index index, final GetResponse<com.google.appengine.api.search.Document> response) {
		List<String> docIds = new ArrayList<String>();
		if (response.getResults().isEmpty()) return;
		for (com.google.appengine.api.search.Document doc : response) {
			docIds.add(doc.getId());
		}
		index.deleteAsync(docIds);
	}
}
