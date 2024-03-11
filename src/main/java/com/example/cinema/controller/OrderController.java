package com.example.cinema.controller;


import com.example.cinema.dto.OrderDto;
import com.example.cinema.service.OrderService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/new")
    public void createOrder(@RequestBody OrderDto order) {
        orderService.createOrder(order);
    }


}
