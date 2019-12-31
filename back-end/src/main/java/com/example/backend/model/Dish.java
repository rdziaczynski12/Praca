package com.example.backend.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="dishDB")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long price;

    private String name;



    private String description;

    private boolean active;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "dish_types",
            joinColumns = @JoinColumn(name = "id_dish"),
            inverseJoinColumns = @JoinColumn(name = "id_type"))
    private Set<TypeDish> types;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_restaurant")
    private Restaurant restaurant;

    public Dish(Long price, String name, String description, boolean active, Set<TypeDish> types, Restaurant restaurant) {
        this.price = price;
        this.description = description;
        this.active = active;
        this.types = types;
        this.restaurant = restaurant;
        this.name = name;
    }

    public Dish() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<TypeDish> getTypes() {
        return types;
    }

    public void setTypes(Set<TypeDish> types) {
        this.types = types;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
}
