package br.com.myreview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import br.com.myreview.model.Establishment;

public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {
	List<Establishment> findByOrderByStarsDesc();
	
	List<Establishment> findByStateOrderByStarsDesc(String state);
	
	List<Establishment> findByStateAndCityOrderByStarsDesc(String state, String city);
	
	List<Establishment> findByStateAndCityAndDistrictOrderByStarsDesc(String state, String city, String district);
	
	@Query("SELECT e.state FROM Establishment e GROUP BY state") 
	List<String> findStates();
	
	@Query("SELECT e.city FROM Establishment e WHERE e.state = :state GROUP BY city") 
	List<String> findCities(@Param("state") String state);
	
	@Query("SELECT e.district FROM Establishment e WHERE e.state = :state AND e.city = :city GROUP BY district") 
	List<String> findDistricts(@Param("state") String state, @Param("city") String city);
	
	 
}
