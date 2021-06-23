package com.example.backend.service;

import com.example.backend.model.Dish;
import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepository;

    public Collection<Restaurant> getAllRestaurant(){
        return restaurantRepository.findAll();
    }

    public void deleteRestaurant(Long id){
        restaurantRepository.deleteById(id);
    }

    public void addRestaurant(Restaurant restaurant){
        restaurantRepository.saveAndFlush(restaurant);
    }

    public void editRestaurant(Restaurant restaurant){
        restaurantRepository.saveAndFlush(restaurant);
    }
}
