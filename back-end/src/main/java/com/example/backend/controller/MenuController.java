package com.example.backend.controller;

import com.example.backend.model.Dish;
import com.example.backend.model.Menu;
import com.example.backend.model.User;
import com.example.backend.service.MenuService;
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
public class MenuController {
    @Autowired
    MenuService menuService;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/menu-list")
    public Collection<Menu> getAllMenu(){
        return menuService.getAllMenu();
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/dish-list")
    public Collection<Dish> getAllDish(){

        return menuService.getAllDish();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "menu-add")
    public void addMenu(@RequestBody Menu menu){
        menuService.addMenu(menu);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "menu-delete")
    public void deleteMenu(@RequestBody Long id){
        menuService.deleteMenu(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "menu-edit")
    public void editMenu(@RequestBody Menu menu){
        menuService.editMenu(menu);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "menu-active")
    public void activeMenu(@RequestBody Long id){
        menuService.activeMenu(id);
    }

}
