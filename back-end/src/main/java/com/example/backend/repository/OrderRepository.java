package com.example.backend.repository;

import com.example.backend.model.Menu;
import com.example.backend.model.Order;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Long> {
    Collection<Order> findByMenu(Menu menu);
    Collection<Order> findByUser(User user);
}
