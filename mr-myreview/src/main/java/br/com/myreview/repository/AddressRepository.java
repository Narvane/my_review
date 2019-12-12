package br.com.myreview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.myreview.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
	
	@Query("SELECT a.state FROM Address a GROUP BY a.state") 
	List<String> findStates();
	
	@Query("SELECT a.city FROM Address a WHERE a.state = :stateName GROUP BY a.city") 
	List<String> findCitiesByStates(@Param("stateName") String stateName);
	
	@Query("SELECT a.district FROM Address a WHERE a.district = :cityName GROUP BY a.district") 
	List<String> findDistrictsByCity(@Param("cityName") String cityName);
	
	
	
}
