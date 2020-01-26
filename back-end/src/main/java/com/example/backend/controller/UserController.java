package com.example.backend.controller;

import com.example.backend.message.request.ChangeEmailForm;
import com.example.backend.message.request.ChangePasswordForm;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:4200/*")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user/list")
    public Collection<User> getAllUser(){
        return userService.getAllUser();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(value = "user/delete/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "user/edit")
    public void editUser(@RequestBody User user){
        userService.editUser(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "user/activ/{id}")
    public void activUser(@PathVariable(name = "id") Long id){
        userService.activUser(id);
    }

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @PostMapping(value = "user/exist")
    public int existEmailOrLogin(@RequestBody String login, String email){
        return userService.existEmailOrLogin(login, email);
    }

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @PostMapping(value = "user/change/password")
    public int changePassword(@RequestBody ChangePasswordForm body){
        return userService.changePassword(body);
    }

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @PostMapping(value = "user/change/email")
    public int changeEmail(@RequestBody ChangeEmailForm body){
        return userService.changeEmail(body);
    }

    @PreAuthorize("hasRole('ROLE_ACTIVE_USER') or hasRole('ADMIN')")
    @GetMapping("/user/data/{userName}")
    public User getUserData(@PathVariable(name = "userName") String userName){
        return userService.getUserData(userName);
    }
}
