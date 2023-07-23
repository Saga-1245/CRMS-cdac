package com.cdac.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="tbl_advertisement")
public class Advertisement {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int add_id;
	
	private String Brand_Name;
	private String Modal_Name;
	private String item_description;
	private String Specification;
	private String Customer_name;
	private double Customer_phone;
	private int dest_pincode;
	
	private String Customer_Add;

//	private LocalDate expected_deliveryDate;
	
	private boolean isBidFinalized;
	
	
	
	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="user_idc")
	private User user;
	
	
	@OneToMany(mappedBy="add")
	@JsonIgnore
    private List<Bidding> bids;

	
	

	public void setBidFinalized(boolean isBidFinalized) {
		this.isBidFinalized = isBidFinalized;
	}


	public int getAdd_id() {
		return add_id;
	}


	public void setAdd_id(int add_id) {
		this.add_id = add_id;
	}


	public String getBrand_Name() {
		return Brand_Name;
	}


	public void setBrand_Name(String brand_Name) {
		Brand_Name = brand_Name;
	}


	public String getModal_Name() {
		return Modal_Name;
	}


	public void setModal_Name(String modal_Name) {
		Modal_Name = modal_Name;
	}


	public String getItem_description() {
		return item_description;
	}


	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}


	public String getSpecification() {
		return Specification;
	}


	public void setSpecification(String specification) {
		Specification = specification;
	}


	public String getCustomer_name() {
		return Customer_name;
	}


	public void setCustomer_name(String customer_name) {
		Customer_name = customer_name;
	}


	public double getCustomer_phone() {
		return Customer_phone;
	}


	public void setCustomer_phone(double customer_phone) {
		Customer_phone = customer_phone;
	}


	public int getDest_pincode() {
		return dest_pincode;
	}


	public void setDest_pincode(int dest_pincode) {
		this.dest_pincode = dest_pincode;
	}


	public String getCustomer_Add() {
		return Customer_Add;
	}


	public void setCustomer_Add(String customer_Add) {
		Customer_Add = customer_Add;
	}


	public boolean isBidFinalized() {
		return isBidFinalized;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public List<Bidding> getBids() {
		return bids;
	}


	public void setBids(List<Bidding> bids) {
		this.bids = bids;
	}
	
	
}
