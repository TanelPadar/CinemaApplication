package com.example.cinema.dto;

import com.example.cinema.model.Auditorium;
import com.example.cinema.model.Movie;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MovieScheduleDto {
    private Long id;
    private Date screeningTime;
    private Movie movie;
    private Auditorium auditorium;
}
