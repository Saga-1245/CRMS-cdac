package com.cdac.repository;

	import java.util.List;

	import org.springframework.stereotype.Repository;

	import com.cdac.entity.Advertisement;
	import com.cdac.entity.Order;

	@Repository
	public class RetailerRepository extends GenericRepository {
		
		public List<Advertisement> getAllAdds() {
			
			return entityManager
					.createQuery("select a from Advertisement a where a.isBidFinalized=false order by a.add_id desc")//desc to see latest adds
					.getResultList();
		}
		
	public List<Order> getYourBids(int id) {
			
			return entityManager
					.createQuery("select b from Bidding b where b.user.user_id=:id order by b.bid_id desc")
					.setParameter("id", id)
					.getResultList();
		}

	public void deleteBid(int id) {
		entityManager
		.createQuery("delete Bidding b where b.bid_id=:id")
		.setParameter("id", id)
		.executeUpdate();
		
	}

}



