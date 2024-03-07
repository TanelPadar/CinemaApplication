package com.example.cinema.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String genre;

    private int ageLimit;

    private String language;

}