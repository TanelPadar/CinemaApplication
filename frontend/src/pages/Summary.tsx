import React from 'react';
import { useData } from "../hooks/DataProvider";

const Summary = () => {
    const { selectedMovies, numberOfTickets,selectedSeats } = useData();
    console.log(selectedSeats)
    return (
        <div>
            <h2>Summary</h2>
            <p>Number of tickets: {numberOfTickets}</p>
            <p>Selected movies:</p>
            <ul>
                {selectedMovies.map((item, index: number) => (
                    <li key={index}>{item.movie.name} - {item.screeningTime.toLocaleString()}</li>
                ))}
            </ul>

        </div>
    );
}

export default Summary;
