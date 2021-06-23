package com.example.backend.service;

import com.example.backend.model.Restaurant;
import com.example.backend.model.TypeDish;
import com.example.backend.repository.RestaurantRepository;
import com.example.backend.repository.TypeDishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TypeDishService {
    @Autowired
    TypeDishRepository typeDishRepository;

    public Collection<TypeDish> getAllTypeDish(){
        return typeDishRepository.findAll();
    }

    public void deleteTypeDish(Long id){
        typeDishRepository.deleteById(id);
    }

    public void addTypeDish(TypeDish typeDish){
        typeDishRepository.saveAndFlush(typeDish);
    }

    public void editTypeDish(TypeDish typeDish){
        typeDishRepository.saveAndFlush(typeDish);
    }
}
