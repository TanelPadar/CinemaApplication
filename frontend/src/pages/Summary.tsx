import React from 'react';
import { useData } from "../hooks/DataProvider";



const Summary = () => {
    const { selectedMovie, numberOfTickets, selectedSeats } = useData();

    const renderMovieDetails = () => {
        if (selectedMovie && selectedMovie.length > 0) {
            const movie = selectedMovie[0];
            return (
                <p>{movie.movie.name} - {movie.screeningTime.toLocaleString()}</p>
            );
        } else {
            return <p>No movie selected</p>;
        }
    };
    return (
        <div className="d-flex justify-content-center flex-column  align-items-center vh-100">
            <div className="text-center">
                <h1 className={"my-3"}>Thank you!</h1>
                {numberOfTickets > 0 && <p className="fw-bold">Number of tickets: {numberOfTickets}</p>}
                {selectedSeats.length > 0 && <p className="fw-bold">Selected seats: {selectedSeats.join(', ')}</p>}
                {selectedMovie && renderMovieDetails()}
            </div>
        </div>

    );
}

export default Summary;
