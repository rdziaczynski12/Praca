package com.example.backend.service;

import com.example.backend.model.Dish;
import com.example.backend.model.Restaurant;
import com.example.backend.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class DishService {
    @Autowired
    DishRepository dishRepository;

    public Collection<Dish> getAllDish(){
        return dishRepository.findAll();
    }

    public void deleteDish(Long id){
        dishRepository.deleteById(id);
    }

    public void addDish(Dish dish){
        dishRepository.saveAndFlush(dish);
    }

    public void editDish(Dish dish){
        dishRepository.saveAndFlush(dish);
    }
}
