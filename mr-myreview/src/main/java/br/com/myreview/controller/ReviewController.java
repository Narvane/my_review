package br.com.myreview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.myreview.model.Review;
import br.com.myreview.repository.ReviewRepository;

@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewController {

	@Autowired
	private ReviewRepository reviewRepository;
	
	
	@PostMapping
	public void saveReview() {
		
	}
	
	@GetMapping("/establishment/{id}")
	public List<Review> getReviewsByEstablishments(@PathVariable(name="id") Long id) {
		List<Review>  review;
		review = reviewRepository.findReviews(id);
		
		return review;
	} 
	
	@GetMapping("/user/{id}")
	public void getReviewsByUser() {
		
	}
	
}
