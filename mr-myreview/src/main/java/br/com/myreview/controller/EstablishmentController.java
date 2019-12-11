package br.com.myreview.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import br.com.myreview.model.Establishment;
import br.com.myreview.model.Review;
import br.com.myreview.model.User;
import br.com.myreview.repository.EstablishmentRepository;
import br.com.myreview.repository.ReviewRepository;
import br.com.myreview.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/establishments")
public class EstablishmentController {
	
	@Autowired
	private EstablishmentRepository establishmentRepository;
	
	
	@PostMapping
	public void saveEstablishment() {
		
	}
	
	@GetMapping("/{id}")
	public void getEstablishment() {
		
	}
	
	
	@GetMapping("/all")
	public void getEstablishments() {
		
	}
	
	@GetMapping("/state/{state}")
	public void getEstablishmentsByState() {
		
	}
	
	@GetMapping("/city/{city}")
	public void getEstablishmentsByCity() {
		
	}
	@GetMapping("/district/{district}")
	public void getEstablishmentsByDistrict() {
		
	}
	
	
	@GetMapping
	public List<Establishment> home() {
		List<Establishment> estabList;
		estabList = establishmentRepository.findByOrderByStarsDesc();
		System.out.println(this.establishmentRepository.findStates());
		return estabList;

	}
	
	@GetMapping("/{state}")
	public ResponseEntity<List<Establishment>> establishmentState(@PathVariable(name="state") String acronymState){
		List<Establishment> estabStateList;
		estabStateList = establishmentRepository.findByStateOrderByStarsDesc(acronymState);
		System.out.println("TESTETSTETSTETSTETSTETSTETSTETSTE");
		if(estabStateList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(estabStateList);
	}
	
	@GetMapping("/{state}/{city}")
	public ResponseEntity<List<Establishment>> establishmentStateCity(@PathVariable(name="state") String acronymState, 
			@PathVariable(name="city") String acronymCity){
		List<Establishment> estabStateCityList;
		estabStateCityList = establishmentRepository.findByStateAndCityOrderByStarsDesc(acronymState, acronymCity);
		
		if(estabStateCityList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		
		return ResponseEntity.ok(estabStateCityList);
	}
	
	@GetMapping("/{state}/{city}/{district}")
	public ResponseEntity<List<Establishment>> establishmentStateCityDistrict(@PathVariable(name="state") String acronymState, 
			@PathVariable(name="city") String acronymCity, @PathVariable(name="district") String acronymDistrict){
		List<Establishment> estabStateCityDistrictList;
		estabStateCityDistrictList = establishmentRepository.findByStateAndCityAndDistrictOrderByStarsDesc(acronymState, acronymCity, acronymDistrict);
		
		if(estabStateCityDistrictList.isEmpty()) {
			
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(estabStateCityDistrictList);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Establishment createEstablishment(@Valid @RequestBody Establishment establishment) {
		Optional<Establishment> registredEstablishments = establishmentRepository.findById(establishment.getId());
		
		if(registredEstablishments.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já exixste um restaurante neste email ou CNPJ!");
		}
		return establishmentRepository.save(establishment);
	}
	
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public Establishment updateEstablishment(@Valid @RequestBody Establishment establishment) {
		Optional<Establishment> registredEstablishments = establishmentRepository.findById(establishment.getId());
		
		if(!registredEstablishments.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este estabelecimento não existe!");
		}
		return establishmentRepository.saveAndFlush(establishment);
	}
	
	@DeleteMapping
	public ResponseEntity<Establishment> deleteEstablishment(@Valid @RequestBody Establishment establishment) {
		Optional<Establishment> registredEstablishments = establishmentRepository.findById(establishment.getId());
		
		if(!registredEstablishments.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este estabelecimento não existe!");
		}
		establishmentRepository.delete(establishment);
		return ResponseEntity.ok(establishment);
	}
	
	@GetMapping("/states")
	public ResponseEntity<List<String>> listStates(){
		List<String> StateList;
		StateList = establishmentRepository.findStates();
		
		if(StateList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(StateList);
	}
	
	@GetMapping("{state}/cities")
	public ResponseEntity<List<String>> listCities(@PathVariable(name="state") String acronymState){
		List<String> citiesList;
		citiesList = establishmentRepository.findCities(acronymState);
		
		if(citiesList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(citiesList);
	}
	@GetMapping("{state}/{city}/districts")
	public ResponseEntity<List<String>> listDistricts(@PathVariable(name="state") String acronymState, @PathVariable(name="city") String acronymCity){
		List<String> districtList;
		districtList = establishmentRepository.findDistricts(acronymState, acronymCity);
		
		if(districtList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(districtList);
	}
	
	@GetMapping("/establishment/{id}")
	public Establishment getEstablishment(@PathVariable(name="id") Long id){
		System.out.println("ALOALALOAOLAOLAOLAOLAOLAOLOALOALOALOLA");
		Optional<Establishment>  establishment;
		establishment = establishmentRepository.findById(id);
		
		System.out.println(establishment.get().getName());
		
		if(!establishment.isPresent()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Este estabelecimento não existe!");
		}
		
		return establishment.get();
	} 
	
	
}
