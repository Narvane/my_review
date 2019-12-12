package br.com.myreview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import br.com.myreview.repository.AddressRepository;

@CrossOrigin
@RestController
@RequestMapping
public class AddressController {
	
	@Autowired
	private AddressRepository addressRepository; 
	
	@GetMapping("/states")
	public RespondeEntity<List<String>> getStates() {
		List<String> stateList;
		stateList = addressRepository.findStates();
		if(stateList.isEmpty()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(stateList);
	}
	
	@GetMapping("/cities/{stateName}")
	public RespondeEntity<List<String>> getCitiesByState(@PathVariable(name="stateName") String stateName) {
		List<String> cityList;
		cityList = addressRepository.findCitiesByStates(stateName);
		if(cityList.isEmpty()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(cityList);
	}
	
	@GetMapping("/districts/{cityName}")
	public RespondeEntity<List<String>> getDistrictsByCity(@PathVariable(name="cityName") String cityName) {
		List<String> districtsList;
		districtsList = addressRepository.findDistrictsByCity(cityName);
		if(districtsList.isEmpty()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(districtsList);
		
	}
}
