package com.example.backend.service;

import com.example.backend.model.Menu;
import com.example.backend.model.Order;
import com.example.backend.model.OrderDish;
import com.example.backend.model.User;
import com.example.backend.repository.OrderDishRepository;
import com.example.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderDishRepository orderDishRepository;

    public Collection<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    public Collection<Order> findByPaidFalse(){
        return orderRepository.findByPaidFalse();
    }

    public Collection<OrderDish> getOrderDish(Order order){
        return orderDishRepository.findByOrder(order);
    }

    public Collection<Order> getOrderByMenu(Menu menu){
        return orderRepository.findByMenu(menu);
    }

    public Collection<Order> getOrderByUser(String userName){
            User user = userService.getUserByUserName(userName);
            return orderRepository.findByUserOrderByDate(user);
    }

    public void paidOrder(Long idOrder){
        Order order = orderRepository.findById(idOrder).get();
        order.setPaid(true);
        orderRepository.saveAndFlush(order);
    }

    public void paidOrderUser(String userName){
        User user = userService.getUserByUserName(userName);
        Collection<Order> orders = orderRepository.findByUserAndPaidFalse(user);
        orders.forEach(order -> {
            order.setPaid(true);
            orderRepository.saveAndFlush(order);
        });
    }

    public void deleteOrder(Long id){
        orderRepository.deleteById(id);
    }

    public Order addOrder(Menu menu, String userName){
        User user = userService.getUserByUserName(userName);
        Order order = new Order();
        order.setDate(new Date());
        order.setMenu(menu);
        order.setPaid(false);
        order.setTotalCost(new Long(0));
        order.setUser(user);
        order = orderRepository.saveAndFlush(order);
        return order;
    }

    public OrderDish addOrderDish(OrderDish orderDish){
            Order order = orderRepository.findById(orderDish.getOrder().getId()).get();
            order.setTotalCost(order.getTotalCost()
                    + (orderDish.getDish().getPrice()
                    * orderDish.getQuantity())
            );
            orderRepository.saveAndFlush(order);
            return orderDishRepository.saveAndFlush(orderDish);
    }

    public void editOrder(Order order){
        orderRepository.saveAndFlush(order);
    }

}
