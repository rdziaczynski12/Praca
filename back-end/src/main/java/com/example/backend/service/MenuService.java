package com.example.backend.service;

import com.example.backend.model.Dish;
import com.example.backend.model.Menu;
import com.example.backend.repository.DishRepository;
import com.example.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public Collection<Menu> getAllMenu(){
        return menuRepository.findAll();
    }

    public void deleteMenu(Long id){
        menuRepository.deleteById(id);
    }

    public void addMenu(Menu menu){
        menuRepository.saveAndFlush(menu);
    }

    public void editMenu(Menu menu){
        menuRepository.saveAndFlush(menu);
    }

    public void activeMenu(Long id){
        Menu menu = menuRepository.findById(id).get();
        menu.setAvtive(!menu.isAvtive());
        menuRepository.saveAndFlush(menu);
    }

    public Collection<Menu> getActiveMenu(){
        return menuRepository.findAll();
    }



}
