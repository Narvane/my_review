package br.com.myreview.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	public void getStates() {
		
	}
	
	@GetMapping("/cities/{state}")
	public void getCitiesByState() {
		
	}
	
	@GetMapping("/districts/{city}")
	public void getDistrictsByCity() {
		
	}
}
