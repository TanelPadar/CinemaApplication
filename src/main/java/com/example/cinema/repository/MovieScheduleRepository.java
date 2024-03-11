package com.example.cinema.repository;

import com.example.cinema.model.MovieSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieScheduleRepository extends JpaRepository<MovieSchedule, Long> {

    @Query("""
                select  ms from MovieSchedule ms
                where (:#{#filter.genre} is null or ms.movie.genre = :#{#filter.genre})
                and (:#{#filter.ageLimit} is null or ms.movie.ageLimit = :#{#filter.ageLimit})
                and (:#{#filter.language} is null or ms.movie.language = :#{#filter.language})
            """)
    List<MovieSchedule> search(@Param("filter") MovieSearchForm form);

    List<MovieSchedule> findByIdIn(List<Long> scheduleIds);

    @Query("""
           SELECT ms
           FROM MovieSchedule ms
           JOIN ms.movie movie
           WHERE (
               SELECT COUNT(o.id)
               FROM Order o
               JOIN o.movieSchedule mso
               JOIN mso.movie m
               WHERE o.user.id = :userId AND m.genre = movie.genre
           ) >= 2
           ORDER BY (
               SELECT COUNT(o.id)
               FROM Order o
               JOIN o.movieSchedule mso
               JOIN mso.movie m
               WHERE o.user.id = :userId AND m.genre = movie.genre
           ) DESC
           """)
    List<MovieSchedule> findByUserHistory(@Param("userId") Long userId);


}
