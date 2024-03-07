package com.example.cinema.repository;

import com.example.cinema.model.MovieSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieScheduleRepository extends JpaRepository<MovieSchedule, Long> {
}
