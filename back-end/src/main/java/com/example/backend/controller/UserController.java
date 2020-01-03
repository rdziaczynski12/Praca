package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    UserService userService;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/user/list")
    public Collection<User> getAllUser(){
        return userService.getAllUser();
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping(value = "user/delete/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PutMapping(value = "user/edit")
    public void editUser(@RequestBody User user){
        userService.editUser(user);
    }

    @PostMapping("/slow")
    private List<String> getAllTweets() {
        return Arrays.asList(
                "RestTemplate rules @user1",
                "WebClient is better @user2",
                "OK, both are useful @user1");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "user/activ/{id}")
    public void activUser(@PathVariable(name = "id") Long id){
        userService.activUser(id);
    }
}
