package com.example.cinema.controller;

import com.example.cinema.dto.UserDto;
import com.example.cinema.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    List<UserDto> get() {
        return userService.getUsers();
    }

    @PostMapping("/login/{username}")
    public UserDto createUser(@PathVariable String username) {
       return userService.createUser(username);
    }

}
