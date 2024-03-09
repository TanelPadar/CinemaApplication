package com.example.cinema.controller;

import com.example.cinema.dto.UserDto;
import com.example.cinema.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    List<UserDto> get() {
        return userService.getUsers();
    }

    @PostMapping("/new/{username}")
    public ResponseEntity<String> createUser(@PathVariable String username) {
        boolean created = userService.createUser(username);
        if (created) {
            return ResponseEntity.ok("User created successfully with username");
        } else {
            return ResponseEntity.ok("User already exists");
        }
    }

}
