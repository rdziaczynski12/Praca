package com.example.backend.repository;

import com.example.backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MenuRepository  extends JpaRepository<Menu, Long> {

    @Query("SELECT m FROM Menu m WHERE m.avtive = true  AND m.startDate <  CURRENT_TIMESTAMP AND m.finishDate >  CURRENT_TIMESTAMP ")
    Collection<Menu> getActiveMenu();
}
