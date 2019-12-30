package com.example.backend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="orderDB")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    private Long totalCost;

    private boolean paid;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_menu")
    private Menu menu;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_user")
    private User user;

    public Order(Date date, Long totalCost, boolean paid, Menu menu, User user) {
        this.date = date;
        this.totalCost = totalCost;
        this.paid = paid;
        this.menu = menu;
        this.user = user;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Long totalCost) {
        this.totalCost = totalCost;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
