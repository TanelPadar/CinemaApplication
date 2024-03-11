package com.example.cinema.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@Setter
public class OrderDto {
    private Long id;
    private Long userId;
    private Long movieScheduleId;
    private int seat;
    private BigDecimal price;
}
