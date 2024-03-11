package com.example.cinema.service;

import com.example.cinema.dto.OrderDto;
import com.example.cinema.mapper.OrderMapper;
import com.example.cinema.model.*;
import com.example.cinema.repository.MovieScheduleRepository;
import com.example.cinema.repository.OrderRepository;
import com.example.cinema.repository.TicketRepository;
import com.example.cinema.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;


@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;
    private final MovieScheduleRepository movieScheduleRepository;
    private final OrderMapper orderMapper;

    private Order createOrder(User user, MovieSchedule movieSchedule) {
        Order order = new Order();
        order.setUser(user);
        order.setMovieSchedule(movieSchedule);
        return order;
    }
    private Ticket createTicket(int seat, BigDecimal price, Order order){
        Ticket ticket = new Ticket();
        ticket.setSeat(seat);
        ticket.setPrice(price);
        ticket.setOrder(order);
        return ticket;
    }

    public void createOrder(OrderDto orderDto) {
        Optional<MovieSchedule> movieScheduleOptional = movieScheduleRepository.findById(orderDto.getMovieScheduleId());
        Optional<User> userOptional = userRepository.findById(orderDto.getUserId());

        if (userOptional.isPresent() && movieScheduleOptional.isPresent()) {
            User user = userOptional.get();
            MovieSchedule movieSchedule = movieScheduleOptional.get();
            Order order = createOrder(user, movieSchedule);
            Ticket ticket = createTicket(orderDto.getSeat(),orderDto.getPrice(), order);
            order.getTickets().add(ticket);
            orderRepository.save(order);
        }
    }

}
