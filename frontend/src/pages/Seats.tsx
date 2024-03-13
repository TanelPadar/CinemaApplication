import React, { useEffect, useState } from 'react';
import SeatSelection from "../components/SeatSelection";
import { useData } from "../hooks/DataProvider";
import { useNavigate } from "react-router-dom";

interface SeatData {
    recommendedSeats: number[];
    takenSeats: number[];
}

const Seats = () => {
    const { selectedMovies, numberOfTickets, setSelectedSeats } = useData();
    const navigate = useNavigate();

    const [seatData, setSeatData] = useState<SeatData | null>(null);

    useEffect(() => {
        const auditoriumId = selectedMovies[0].auditorium.id;
        const apiUrl = `http://localhost:8080/api/v1/auditorium/seats?auditoriumId=${auditoriumId}&numberOfTickets=${numberOfTickets}`;

        const fetchSeatData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data: SeatData = await response.json();
                setSeatData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching seat data:', error);
            }
        };

        fetchSeatData();
    }, []);

    const navigateToSummary = (seats: number[]) => {
        setSelectedSeats(seats);
        navigate("/summary");
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Pick Seats</h2>
            <SeatSelection navigate={(setSelectedSeats) => navigateToSummary(setSelectedSeats)} rows={4} seatsPerRow={6} takenSeats={seatData?.takenSeats ?? []} recommendedSeats={seatData?.recommendedSeats ?? []} />
        </div>
    );
}

export default Seats;
