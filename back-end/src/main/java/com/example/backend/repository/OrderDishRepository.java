package com.example.backend.repository;

import com.example.backend.model.Order;
import com.example.backend.model.OrderDish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDishRepository  extends JpaRepository<OrderDish, Long> {
}
