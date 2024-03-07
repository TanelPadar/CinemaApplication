package com.example.cinema.repository;

import com.example.cinema.model.MovieSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieScheduleRepository extends JpaRepository<MovieSchedule, Long> {
}
