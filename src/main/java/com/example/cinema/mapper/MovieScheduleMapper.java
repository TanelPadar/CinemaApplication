package com.example.cinema.mapper;

import com.example.cinema.dto.MovieScheduleDto;
import com.example.cinema.model.MovieSchedule;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MovieScheduleMapper {
    List<MovieScheduleDto> movieScheduleDtoList(List<MovieSchedule> movieSchedules);
}
