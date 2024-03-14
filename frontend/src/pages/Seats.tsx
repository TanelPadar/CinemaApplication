import React, {useEffect, useState} from 'react';
import SeatSelection from "../components/SeatSelection";
import {useData} from "../hooks/DataProvider";
import {useNavigate} from "react-router-dom";
import {getRequest, postRequest} from "../config/axios";

interface SeatData {
    recommendedSeats: number[];
    takenSeats: number[];
}

const Seats = () => {
    const {selectedMovie, numberOfTickets, setSelectedSeats, selectedSeats} = useData();
    const navigate = useNavigate();
    const [seatData, setSeatData] = useState<SeatData | null>(null);
    const userData = localStorage.getItem('logged_in_user');
    const auditoriumId = selectedMovie[0].auditorium?.id;


    useEffect(() => {
        const fetchData = async () => {
            const response = await getRequest(`auditorium/seats?auditoriumId=${auditoriumId}&numberOfTickets=${numberOfTickets}`);
            setSeatData(response.data)
        };
        fetchData();
    }, []);


    const navigateToSummary = (seats: number[]) => {
        setSelectedSeats(seats);
        postRequest('order/new', {
            userId: userData ? JSON.parse(userData).id : null,
            movieScheduleId: selectedMovie[0].id,
            seat: selectedSeats,
            price: 0.00
        }).then(response => {
            navigate("/summary");
        })
    }


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Pick Seats</h2>
            <SeatSelection navigate={navigateToSummary} rows={4} seatsPerRow={6} takenSeats={seatData?.takenSeats ?? []}
                           recommendedSeats={seatData?.recommendedSeats ?? []}/>
        </div>
    );
}

export default Seats;
