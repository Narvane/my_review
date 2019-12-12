package br.com.myreview.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.myreview.model.User;
import br.com.myreview.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping
	public User saveUser(@Valid @RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/user/{id}")
	public User getUser(Long id) {
		Optional<User> user = userRepository.findById(id);
		if(!user.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Este usuário não existe!");
		}
		return userRepository.findById(id).get();
	}
}
