package br.com.myreview.model;

import java.util.List;

import javax.persistence.*;
import javax.persistence.Entity;

import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name="est_establishments")
public class Establishment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "est_id")
	private Long id;
	
	@Column(name = "est_name", length = 50, nullable = false)
	@NotEmpty
	private String name;
	
	@Column(name = "est_cnpj", length = 14, nullable = false)
	@NotEmpty
	private String cnpj;
	
	@Column(name = "est_description", length = 300, nullable = true)
	private String description = "Sem descrição!";
	
	@Column(name = "est_stars", nullable = false)
	private Double stars = 0.0;
	
	@Column(name = "est_country", length = 100, nullable = false)
	private String country;

	@Column(name = "est_state", nullable = false)
	private String state;
	
	@Column(name = "est_city", length = 100, nullable = false)
	private String city;
	
	@Column(name = "est_district", nullable = false)
	private String district;
	
	@Column(name = "est_number", length = 100, nullable = false)
	@Min(0)
	private int number;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "establishment", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Review> reviews;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getStars() {
		return stars;
	}
	public void setStars(Double stars) {
		this.stars = stars;
	}
	public List<Review> getReviews() {
		return reviews;
	}
	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	
	
	
}
