package com.example.cinema.controller;

import com.example.cinema.dto.MovieScheduleDto;
import com.example.cinema.service.MovieScheduleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movie-schedule")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
    List<MovieScheduleDto> search(
            @RequestParam(name = "genre", required = false) String genre,
            @RequestParam(name = "ageLimit", required = false) Integer ageLimit,
            @RequestParam(name = "language", required = false) String language,
            @RequestParam(name = "screeningTime", required = false, defaultValue = "false") boolean screeningTime
    ) {
        return movieScheduleService.getMovieScheduleBySearch(genre, ageLimit, language, screeningTime);
    }

    @GetMapping("/recommended/{userId}")
    public List<MovieScheduleDto> getRecommended(@PathVariable Long userId) {
        return movieScheduleService.getMoviesByUserhistory(userId);
    }


}
