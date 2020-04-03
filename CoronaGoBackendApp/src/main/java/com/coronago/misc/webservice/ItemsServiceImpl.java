package com.coronago.misc.webservice;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.coronago.misc.logic.ItemBLImpl;
import com.coronago.misc.model.Item;

@Produces(MediaType.APPLICATION_JSON)
@Path("/items")
public class ItemsServiceImpl {
	@GET
	@Path("/getall")
	public List<Item> getAllItems() {
		ItemBLImpl itemBLImpl = new ItemBLImpl();
		return itemBLImpl.getAll(null);
	}
}
