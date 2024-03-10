package com.example.cinema.mapper;

import com.example.cinema.dto.OrderDto;
import com.example.cinema.model.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "movieSchedule.id", target = "movieScheduleId")
    OrderDto orderToDto(Order order);

    List<OrderDto> orderDtoList(List<Order> orders);

}
