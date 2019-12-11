package br.com.myreview.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.myreview.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
