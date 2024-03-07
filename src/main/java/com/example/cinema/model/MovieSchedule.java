package com.example.cinema.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class MovieSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date screeningTime;

    @JoinColumn(name = "auditorium_id")
    @ManyToOne
    private Auditorium auditorium;

    @JoinColumn(name="movie_id")
    @ManyToOne
    private Movie movie;
}
