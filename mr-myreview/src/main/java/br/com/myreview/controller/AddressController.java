package br.com.myreview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.myreview.repository.AddressRepository;

@CrossOrigin
@RestController
@RequestMapping
public class AddressController {
	
	@Autowired
	private AddressRepository addressRepository; 
	
	@GetMapping("/states")
	public List<String> getStates() {
		List<String> stateList;
		
		stateList = addressRepository.findStates();
		
		return stateList;
	}
	
	@GetMapping("/cities/{stateName}")
	public List<String> getCitiesByState(@PathVariable(name="stateName") String stateName) {
		List<String> cityList;
		
		cityList = addressRepository.findCitiesByStates(stateName);
		
		return cityList;
	}
	
	@GetMapping("/districts/{cityName}")
	public List<String> getDistrictsByCity(@PathVariable(name="cityName") String cityName) {
		List<String> districtsList;
		
		districtsList = addressRepository.findDistrictsByCity(cityName);
		
		return districtsList;
		
	}
}
