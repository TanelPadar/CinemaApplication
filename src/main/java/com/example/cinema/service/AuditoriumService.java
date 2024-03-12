package com.example.cinema.service;


import com.example.cinema.dto.AuditoriumDto;
import com.example.cinema.model.Auditorium;
import com.example.cinema.repository.AuditoriumRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class AuditoriumService {

    private final AuditoriumRepository auditoriumRepository;


    public AuditoriumDto getSeats(long auditoriumId, int numberOfTickets) {
        Optional<Auditorium> auditoriumOptional = auditoriumRepository.findById(auditoriumId);
        if (auditoriumOptional.isPresent()) {
            Auditorium auditorium = auditoriumOptional.get();
            int rows = auditorium.getRows();
            int columns = auditorium.getColumns();
            int totalSeats = rows * columns;
            List<Integer> recommendedSeats = generateRecommendedSeats(rows, columns, numberOfTickets);
            List<Integer> takenSeats = generateRandomSeats(totalSeats, recommendedSeats);


            AuditoriumDto auditoriumDto = new AuditoriumDto();
            auditoriumDto.setRecommendedSeats(recommendedSeats);
            auditoriumDto.setTakenSeats(takenSeats);

            return auditoriumDto;
        }
        return null;
    }

    private List<Integer> generateRandomSeats(int totalSeats, List<Integer> recommendedSeats) {
        Random random = new Random();
        List<Integer> takenSeats = new ArrayList<>();

        while (takenSeats.size() < totalSeats * 0.2) {
            int randomSeat = random.nextInt(totalSeats) + 1;
            if (!recommendedSeats.contains(randomSeat) && !takenSeats.contains(randomSeat)) {
                takenSeats.add(randomSeat);
            }
        }

        return takenSeats;
    }


    private List<Integer> generateConsecutiveIntegers(int center, int numberOfTickets) {
        List<Integer> consecutiveIntegers = new ArrayList<>();

        int start = 0;
        if (numberOfTickets < 1) {
            start = center - numberOfTickets;
        } else {
            start = center;
        }

        for (int i = start; i < center + numberOfTickets; i++) {
            consecutiveIntegers.add(i);
        }
        return consecutiveIntegers;
    }

    private List<Integer> generateRecommendedSeats(int rows, int columns, int numberOfTickets) {
        int middleRow = Math.floorDiv(rows, 2);
        int middleRowEnd = 0;
        for (int i = 0; i < middleRow; i++) {
            middleRowEnd += columns;
        }

        int middleSeat = middleRowEnd - (Math.floorDiv(columns, 2));
        return generateConsecutiveIntegers(middleSeat, numberOfTickets);
    }

}