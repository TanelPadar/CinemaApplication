package com.example.cinema.service;

import com.example.cinema.model.MovieSchedule;
import com.example.cinema.repository.MovieScheduleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieScheduleService {
    private final MovieScheduleRepository movieScheduleRepository;

    public List<MovieSchedule> getMovieSchedule(){
        return movieScheduleRepository.findAll();
    }
}
