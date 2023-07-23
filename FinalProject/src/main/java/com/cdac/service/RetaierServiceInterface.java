package com.cdac.service;

import java.util.List;

import com.cdac.dto.CommonResponse;
import com.cdac.dto.PlaceBidData;
import com.cdac.entity.Advertisement;
import com.cdac.entity.Order;

public interface RetaierServiceInterface {
	
	
	public CommonResponse deleteBid(int id);
	
	public List<Order> getYourBids(int id);
	
	public List<Advertisement> getAllAdds();
	
	public CommonResponse placeBid(PlaceBidData data,int id);

}
