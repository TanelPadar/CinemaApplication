import React from 'react';
import {useData} from "../hooks/DataProvider";


const Summary = () => {
    const {selectedMovie, numberOfTickets, selectedSeats} = useData();


    return (
        <div className={"d-flex justify-content-center align-items-center vh-100"}>
            <div className={"d-block"}>
                <h2>Thank you!</h2>
                <p>Number of tickets: {numberOfTickets}</p>
                <p>Selected seats:</p>
                <ul>
                    {selectedSeats.map((seat, index) => (
                        <li key={index}>{seat}</li>
                    ))}
                </ul>
                <p>Selected movies:</p>
                <ul>
                    {selectedMovie.map((item, index: number) => (
                        <li key={index}>{item.movie.name} - {item.screeningTime.toLocaleString()}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Summary;
