package com.example.backend.repository;

import com.example.backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository  extends JpaRepository<Menu, Long> {
}
