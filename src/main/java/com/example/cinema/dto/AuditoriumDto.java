package com.example.cinema.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AuditoriumDto {
   private List<Integer> recommendedSeats;
   private List<Integer> takenSeats;
}
