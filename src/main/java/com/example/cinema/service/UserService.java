package com.example.cinema.service;

import com.example.cinema.dto.UserDto;
import com.example.cinema.mapper.UserMapper;
import com.example.cinema.model.User;
import com.example.cinema.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<UserDto> getUsers() {
        return userMapper.userDtoList(userRepository.findAll());
    }

    public boolean createUser(String username) {
        if (!userRepository.existsByUsername(username)) {
            User user = new User();
            user.setUsername(username);
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }
}
