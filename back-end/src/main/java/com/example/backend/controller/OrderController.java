package com.example.backend.controller;

import com.example.backend.model.Menu;
import com.example.backend.model.Order;
import com.example.backend.model.OrderDish;
import com.example.backend.service.MenuService;
import com.example.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Set;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class OrderController {

    @Autowired
    OrderService orderService;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('MODER')")
    @GetMapping("/order/list")
    public Collection<Order> getAllOrder(){
        return orderService.getAllOrder();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "order/add/{userName}")
    public Order addOrder(@RequestBody Menu menu , @PathVariable(name="userName")String userName) {
        return orderService.addOrder(menu, userName);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "order-dish/add")
    public OrderDish addOrderDish(@RequestBody OrderDish orderDish) {
        return orderService.addOrderDish(orderDish);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "order/delete")
    public void deleteOrder(@RequestBody Long id){
        orderService.deleteOrder(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "order/edit")
    public void editOrder(@RequestBody Order order){
        orderService.editOrder(order);
    }
}
