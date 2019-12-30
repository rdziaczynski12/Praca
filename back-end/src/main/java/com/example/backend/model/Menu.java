package com.example.backend.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="menuDB")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date startDate;

    private Date finishDate;

    private Date deliveryTime;

    private boolean avtive;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "menu_dish",
            joinColumns = @JoinColumn(name = "id_menu"),
            inverseJoinColumns = @JoinColumn(name = "id_dish"))
    private Set<Dish> dishes;

    public Menu() {
    }

    public Menu(Date startDate, Date finishDate, Date deliveryTime, boolean avtive, Set<Dish> dishes) {
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.deliveryTime = deliveryTime;
        this.avtive = avtive;
        this.dishes = dishes;
    }

    public boolean isAvtive() {
        return avtive;
    }

    public void setAvtive(boolean avtive) {
        this.avtive = avtive;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Set<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(Set<Dish> dishes) {
        this.dishes = dishes;
    }
}
