package com.example.cinema.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class OrderDto {
    private Long id;
    private Long userId;
    private Long movieScheduleId;
}
