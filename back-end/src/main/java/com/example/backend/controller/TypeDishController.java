package com.example.backend.controller;

import com.example.backend.model.Restaurant;
import com.example.backend.model.TypeDish;
import com.example.backend.service.RestaurantService;
import com.example.backend.service.TypeDishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class TypeDishController {
    @Autowired
    TypeDishService typeDishService;

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @GetMapping("/type/dish/list")
    public Collection<TypeDish> getAllTypeDish(){ return typeDishService.getAllTypeDish(); }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "type/dish/add")
    public void addTypeDish(@RequestBody TypeDish typeDish){
        typeDishService.addTypeDish(typeDish);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "type/dish/delete")
    public void deleteTypeDish(@RequestBody Long id){
        typeDishService.deleteTypeDish(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "type/dish/edit")
    public void editTypeDish(@RequestBody TypeDish typeDish){
        typeDishService.editTypeDish(typeDish);
    }
}
