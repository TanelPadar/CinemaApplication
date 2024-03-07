package com.example.cinema.controller;

import com.example.cinema.model.MovieSchedule;
import com.example.cinema.service.MovieScheduleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieScheduleController {
    private final MovieScheduleService movieScheduleService;
    public MovieScheduleController(MovieScheduleService movieScheduleService) {
        this.movieScheduleService = movieScheduleService;
    }

    @GetMapping("/movie/schedule")
    List<MovieSchedule> getAllMovieSchedule() {
        return movieScheduleService.getMovieSchedule();
    }
}
