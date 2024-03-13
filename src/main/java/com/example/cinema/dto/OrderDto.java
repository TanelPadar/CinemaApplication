package com.example.cinema.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;


@Getter
@Setter
public class OrderDto {
    private Long id;
    private Long userId;
    private Long movieScheduleId;
    private List<Integer> seat;
    private BigDecimal price;
}
