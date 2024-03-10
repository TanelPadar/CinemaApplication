package com.example.cinema.service;

import com.example.cinema.mapper.OrderMapper;
import com.example.cinema.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;



}
