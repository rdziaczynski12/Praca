package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    UserService userService;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/user")
    public Collection<User> getAllUser(){
        return userService.getAllUser();
    }

    @PreAuthorize("hasRole('MODER') or hasRole('ADMIN')")
    @PostMapping(value = "/user/add")
    public void addUser(@RequestBody User user){
       userService.addUser(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(value = "user/delete/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('MODER') or hasRole('ADMIN')")
    @PutMapping(value = "user/edit")
    public void editUser(@RequestBody User user){
        userService.editUser(user);
    }
}
