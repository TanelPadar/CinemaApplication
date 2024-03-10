package com.example.cinema.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "\"order\"")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie_schedule_id")
    private MovieSchedule movieSchedule;

}
