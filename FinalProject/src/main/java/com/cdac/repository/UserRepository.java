package com.cdac.repository;

import java.util.List;



import org.springframework.stereotype.Repository;

import com.cdac.entity.Advertisement;
import com.cdac.entity.Order;
import com.cdac.entity.User;


@Repository
public class UserRepository extends GenericRepository {

	
	
	public List<Order> getAllBids(int addid){
		 return entityManager
				.createQuery("select b from Order b where b.add.add_id= :id order by b.offer_price")
				.setParameter("id", addid)
				.getResultList();
	}


	public void acceptOffer(int add_id , int bid_id) {
		 entityManager
		.createQuery("update Advertisement a set a.isBidFinalized= true where a.add_id= :add_id")
		.setParameter("add_id", add_id)
		.executeUpdate();
		 
		 entityManager
			.createQuery("update Order b set b.isBidFinalized= true where b.bid_id= :bid_id")
			.setParameter("bid_id", bid_id)
			.executeUpdate();
	}
 
	public List<Advertisement> getYourAdds(int id) {
		return entityManager
				.createQuery("select a from Advertisement a where  a.user.user_id=:id   order by a.add_id desc")
				.setParameter("id", id)         
				.getResultList();
	}

	public void deleteAdd(int id) {
		entityManager
		.createQuery("delete Order b where b.add.add_id=:id")
		.setParameter("id", id)
		.executeUpdate();
		entityManager
		.createQuery("delete Advertisement a where a.add_id=:id")
		.setParameter("id", id)
		.executeUpdate();
			
	}

	public Order getBidByAdd(int id) {
		return (Order) entityManager
				.createQuery("select b from Order b where b.add.add_id= :id and b.isBidFinalized = true")
				.setParameter("id", id)
				.getSingleResult();
	}
	
	
}
