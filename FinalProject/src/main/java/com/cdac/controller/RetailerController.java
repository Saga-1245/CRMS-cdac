
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
import com.cdac.dto.ForgotPasswordIn;
import com.cdac.dto.ForgotPasswordOTP;
import com.cdac.dto.LoginDetails;
import com.cdac.dto.PlaceBidData;
import com.cdac.encryption.PasswordEncryption;
import com.cdac.entity.Advertisement;
import com.cdac.entity.Order;
import com.cdac.entity.User;
import com.cdac.service.AdminService;
import com.cdac.service.CommonService;
import com.cdac.service.EmailService;
import com.cdac.service.RetailerService;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class RetailerController {


	@Autowired
	private RetailerService retailerService;
	//private static final Logger logger = LogManager.getLogger(TransportController.class);
	
	
	@PostMapping("/placebid") 
	public CommonResponse placeBid(@RequestBody PlaceBidData data,@RequestParam("addid") int id) {
		return retailerService.placeBid(data,id);
	}
	
	@GetMapping("/getalladds")
    public List<Advertisement> getAllAdds(){
		return retailerService.getAllAdds();
	}
	
	@GetMapping("/getyourbids")
	public List<Order> getYourBids(@RequestParam("tid") int id){
		return retailerService.getYourBids(id);	
	}
	
	@DeleteMapping("/deletebid")
	public CommonResponse deleteBid(@RequestParam("bidid") int id ) {
		return retailerService.deleteBid(id);
	}
	
}
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	

