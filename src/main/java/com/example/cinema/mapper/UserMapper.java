package com.example.cinema.mapper;

import com.example.cinema.dto.UserDto;
import com.example.cinema.model.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    List<UserDto> userDtoList(List<User> user);

    UserDto userToDto(User user);
}
