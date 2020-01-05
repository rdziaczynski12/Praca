package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name="orderDishDB")
public class OrderDish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private  int quantity;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_order")
    private Order order;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_dish")
    private Dish dish;

    public OrderDish() {
    }

    public OrderDish(int quantity, Order order, Dish dish) {
        this.quantity = quantity;
        this.order = order;
        this.dish = dish;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Dish getDish() {
        return dish;
    }

    public void setDish(Dish dish) {
        this.dish = dish;
    }
}
