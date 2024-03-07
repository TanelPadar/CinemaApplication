package com.example.cinema.service;

import com.example.cinema.dto.MovieScheduleDto;
import com.example.cinema.form.MovieSearchForm;
import com.example.cinema.mapper.MovieScheduleMapper;
import com.example.cinema.repository.MovieScheduleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieScheduleService {
    private final MovieScheduleRepository movieScheduleRepository;
    private final MovieScheduleMapper movieScheduleMapper;

    public List<MovieScheduleDto> getMovieSchedule(){
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.findAll());
    }

    public List<MovieScheduleDto> getMovieScheduleBySearch(MovieSearchForm form){
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.search(form));
    }
}
