package br.com.myreview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.myreview.model.Establishment;

public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {
	List<Establishment> findByOrderByStarsDesc();
	
	@Query("SELECT e FROM Establishment e JOIN e.address a WHERE a.state = :stateName") 
	List<Establishment> findByStateOrderByStarsDesc(@Param("stateName") String stateName);
	
	@Query("SELECT e FROM Establishment e JOIN e.address a WHERE a.state = :cityName")  
	List<Establishment> findByCityOrderByStarsDesc(@Param("cityName") String cityName);
	
	@Query("SELECT e FROM Establishment e JOIN e.address a WHERE a.state = :districtName") 
	List<Establishment> findByDistrictOrderByStarsDesc(@Param("districtName") String districtName);
	 
}
