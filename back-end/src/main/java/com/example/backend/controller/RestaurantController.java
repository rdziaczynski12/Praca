package com.example.backend.controller;

import com.example.backend.model.Dish;
import com.example.backend.model.Restaurant;
import com.example.backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @GetMapping("/restaurant/list")
    public Collection<Restaurant> getAllRestaurant(){ return restaurantService.getAllRestaurant(); }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "restaurant/add")
    public void addRestaurant(@RequestBody Restaurant restaurant){
        restaurantService.addRestaurant(restaurant);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "restaurant/delete")
    public void deleteRestaurant(@RequestBody Long id){
        restaurantService.deleteRestaurant(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "restaurant/edit")
    public void editRestaurant(@RequestBody Restaurant restaurant){
        restaurantService.editRestaurant(restaurant);
    }
}
