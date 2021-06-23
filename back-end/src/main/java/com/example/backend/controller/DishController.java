package com.example.backend.controller;

import com.example.backend.model.Dish;
import com.example.backend.model.Restaurant;
import com.example.backend.service.DishService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:4200/*")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class DishController {
    @Autowired
    DishService dishService;

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @GetMapping("/dish/list")
    public Collection<Dish> getAllRestaurant(){ return dishService.getAllDish(); }


    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "dish/add")
    public void addDish(@RequestBody Dish dish){
        dishService.addDish(dish);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "dish/delete")
    public void deleteDish(@RequestBody Long id){
        dishService.deleteDish(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "dish/edit")
    public void editDish(@RequestBody Dish dish){
        dishService.editDish(dish);
    }

}
