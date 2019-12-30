package com.example.backend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="restaurantDB")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Date openHour;

    private Date closeHour;

    private String address;

    private String phoneNumber;

    private String email;

    private Long minValue;

    private boolean active;

    public Restaurant(String name, Date openHour, Date closeHour, String address, String phoneNumber, String email, Long minValue, boolean active) {
        this.name = name;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.minValue = minValue;
        this.active = active;
    }

    public Restaurant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getOpenHour() {
        return openHour;
    }

    public void setOpenHour(Date openHour) {
        this.openHour = openHour;
    }

    public Date getCloseHour() {
        return closeHour;
    }

    public void setCloseHour(Date closeHour) {
        this.closeHour = closeHour;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMinValue() {
        return minValue;
    }

    public void setMinValue(Long minValue) {
        this.minValue = minValue;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
