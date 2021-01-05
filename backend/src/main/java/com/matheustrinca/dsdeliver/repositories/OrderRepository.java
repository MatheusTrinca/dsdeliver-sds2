package com.matheustrinca.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matheustrinca.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
