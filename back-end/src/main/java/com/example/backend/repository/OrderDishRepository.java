package com.example.backend.repository;

import com.example.backend.model.Menu;
import com.example.backend.model.Order;
import com.example.backend.model.OrderDish;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface OrderDishRepository  extends JpaRepository<OrderDish, Long> {
    Collection<OrderDish> findByOrder(Order order);
}
