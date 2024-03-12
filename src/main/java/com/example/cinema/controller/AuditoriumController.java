package com.example.cinema.controller;

import com.example.cinema.dto.AuditoriumDto;
import com.example.cinema.service.AuditoriumService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auditorium")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class AuditoriumController {
    private final AuditoriumService auditoriumService;

    public AuditoriumController(AuditoriumService auditoriumService) {
        this.auditoriumService = auditoriumService;
    }

    @GetMapping("/seats")
    public AuditoriumDto getSeats(@RequestParam long auditoriumId, @RequestParam int numberOfTickets) {
        return auditoriumService.getSeats(auditoriumId, numberOfTickets);
    }
}
