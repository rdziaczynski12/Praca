package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name="typeDishDB")
public class TypeDish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public TypeDish(String name) {
        this.name = name;
    }

    public TypeDish() {
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
}
