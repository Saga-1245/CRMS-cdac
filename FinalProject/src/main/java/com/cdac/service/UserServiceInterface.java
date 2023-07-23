package com.cdac.service;

import java.util.List;

import com.cdac.dto.CommonResponse;
import com.cdac.entity.Advertisement;
import com.cdac.entity.Order;

public interface UserServiceInterface  {
	
	public CommonResponse deleteAdd(int id);
	
	public Order getBidByAdd(int id);
	
	public Order getBid(int id);
	
	public List<Advertisement> getYourAdds(int id);
	
	public CommonResponse acceptOffer(Order bid);
	
	public List<Order> getAllBids(int addid);
	
	public CommonResponse postAdd (Advertisement obj);
	
}
