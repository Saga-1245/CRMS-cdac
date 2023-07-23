package com.cdac.service;

import java.util.List;

import com.cdac.dto.CommonResponse;
import com.cdac.entity.Order;
import com.cdac.entity.User;

public interface AdminServiceInterface {

	
	public List<Order> getFinalizedAdds();
	
	public List<User> getAllCustomers();
	
	public List<User > getAllTransporters();
	
	public CommonResponse deleteUser(int id);
}
