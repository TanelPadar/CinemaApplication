package com.example.cinema.service;

import com.example.cinema.dto.MovieScheduleDto;
import com.example.cinema.form.MovieSearchForm;
import com.example.cinema.mapper.MovieScheduleMapper;
import com.example.cinema.mapper.OrderMapper;
import com.example.cinema.model.MovieSchedule;
import com.example.cinema.repository.MovieScheduleRepository;
import com.example.cinema.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieScheduleService {
    private final MovieScheduleRepository movieScheduleRepository;
    private final MovieScheduleMapper movieScheduleMapper;
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public List<MovieScheduleDto> getMovieSchedule(){
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.findAll());
    }

    public List<MovieScheduleDto> getMovieScheduleBySearch(MovieSearchForm form){
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.search(form));
    }

    public List<MovieScheduleDto> getMovieSchedulesByIds(List<Long> scheduleIds) {
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.findByIdIn(scheduleIds));
    }

    public List<MovieScheduleDto> getMoviesByUserhistory(Long userId) {
        return movieScheduleMapper.movieScheduleDtoList(movieScheduleRepository.findByUserHistory(userId));
    }




}
