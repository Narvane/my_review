package br.com.myreview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.myreview.model.Establishment;
import br.com.myreview.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	@Query("SELECT r FROM Review r LEFT JOIN r.establishment e WHERE e.id = :idEstab") 
	List<Review> findReviews(@Param("idEstab") Long idEstab);

}
