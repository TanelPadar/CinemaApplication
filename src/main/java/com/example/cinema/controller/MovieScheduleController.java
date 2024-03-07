package com.example.cinema.controller;

import com.example.cinema.dto.MovieScheduleDto;
import com.example.cinema.form.MovieSearchForm;
import com.example.cinema.service.MovieScheduleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieScheduleController {
    private final MovieScheduleService movieScheduleService;
    public MovieScheduleController(MovieScheduleService movieScheduleService) {
        this.movieScheduleService = movieScheduleService;
    }

    @GetMapping
    List<MovieScheduleDto> getMovieSchedule() {
        return movieScheduleService.getMovieSchedule();
    }

    @GetMapping("/search")
    List<MovieScheduleDto> search(@RequestBody MovieSearchForm form) {
        return movieScheduleService.getMovieScheduleBySearch(form);
    }
}
