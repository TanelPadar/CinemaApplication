import React from 'react';
import SeatSelection from "../components/SeatSelection";
import {useData} from "../hooks/DataProvider";
import {useNavigate} from "react-router-dom";



const Seats = () => {
    const { selectedMovies, numberOfTickets, setSelectedSeats } = useData();
    const navigate = useNavigate();


    console.log(selectedMovies,numberOfTickets)

    const navigateToSummary = (seats: number []) => {
        setSelectedSeats(seats)
        navigate("/summary")
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Pick Seats</h2>
            <SeatSelection navigate={(setSelectedSeats) => navigateToSummary(setSelectedSeats)} rows={4} seatsPerRow={6} takenSeats={[1,2]} recommendedSeats={[3,4]}/>
        </div>
    );
}

export default Seats;
