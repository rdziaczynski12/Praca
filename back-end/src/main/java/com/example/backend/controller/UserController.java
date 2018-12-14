package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public Collection<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping(value = "/user/add")
    public void addUser(@RequestBody User user){
       userService.addUser(user);
    }

    @DeleteMapping(value = "user/delete/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id){
        userService.deleteUser(id);
    }

    @PutMapping(value = "user/edit")
    public void editUser(@RequestBody User user){
        userService.editUser(user);
    }
}
