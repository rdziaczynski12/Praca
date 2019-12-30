package com.example.backend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="reviewDB")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;

    private String description;

    private Date date;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_user")
    private User user;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_dish")
    private Dish dish;

    public Review() {
    }

    public Review(int rating, String description, Date date, User user, Dish dish) {
        this.rating = rating;
        this.description = description;
        this.date = date;
        this.user = user;
        this.dish = dish;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Dish getDish() {
        return dish;
    }

    public void setDish(Dish dish) {
        this.dish = dish;
    }
}
