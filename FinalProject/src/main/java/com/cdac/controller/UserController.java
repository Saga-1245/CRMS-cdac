package com.cdac.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.CommonResponse;
import com.cdac.entity.Advertisement;
import com.cdac.entity.Order;
import com.cdac.service.EmailService;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	

	@PostMapping("/advertisement")
	public CommonResponse postAdd(@RequestBody Advertisement add) {
		return userService.postAdd(add);
	}
	
	@GetMapping("/getallbids")
    public List<Order> getAllBids(@RequestParam("addid") int addid){
		return userService.getAllBids(addid);
	}
	
	@PutMapping("/acceptoffer")
	public CommonResponse acceptOffer(@RequestBody Order bid) {
		return userService.acceptOffer(bid);
	}
	
	@GetMapping("/getyouradds")
	public List<Advertisement> getYourAdds(@RequestParam("userid") int id){
		return userService.getYourAdds(id);
	}
	
	@GetMapping("/getbid")
	public Order getBid(@RequestParam("bidid") int id){
		return userService.getBid(id);
	}
	
	@DeleteMapping("/deleteadd")
	public CommonResponse deleteAdd(@RequestParam("addid") int id ) {
		return userService.deleteAdd(id);	
	}
	
	@GetMapping("/getbid-byadd")
	public Order getBidByAdd(@RequestParam("addid") int id){
		return userService.getBidByAdd(id);
	}

}
