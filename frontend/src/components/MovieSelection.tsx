import React, { useState, ChangeEvent } from 'react';

interface Movie {
    id: number;
    name: string;
    genre: string;
    ageLimit: number;
    language: string;
}

interface ScheduleItem {
    id: number;
    screeningTime: Date;
    movie: Movie;
    movieScheduleId: number;
    auditoriumId: number;
}

interface MovieSelectionProps {
    scheduleItems: ScheduleItem[];
    navigate: (numberOfTickets: number, selectedMovies: ScheduleItem[]) => void;
}

const MovieSelection= ({ scheduleItems, navigate }: MovieSelectionProps) => {
    const [selectedMovie, setSelectedMovie] = useState<ScheduleItem | null>(null);
    const [numberOfTickets, setNumberOfTickets] = useState<number>(1);

    const handleMovieSelection = (event: ChangeEvent<HTMLInputElement>, scheduleItem: ScheduleItem) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedMovie(scheduleItem);
        } else {
            setSelectedMovie(null);
        }
    };

    const handleConfirmSelection = () => {
        navigate(numberOfTickets, selectedMovie ? [selectedMovie] : []);
    };

    const handleNumberOfPeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const tickets = parseInt(event.target.value);
        setNumberOfTickets(tickets);
    };

    return (
        <div className={"my-2"}>
            <label htmlFor="numberOfPeopleInput">How many tickets?</label>
            <input
                type="number"
                id="numberOfPeopleInput"
                value={numberOfTickets}
                onChange={handleNumberOfPeopleChange}
                className="form-control mb-3"
            />
            <ul className="list-group">
                {scheduleItems.map(item => (
                    <li key={item.id} className="list-group-item">
                        <input
                            type="checkbox"
                            id={`movie-${item.id}`}
                            className="mx-2"
                            checked={selectedMovie?.id === item.id}
                            onChange={(e) => handleMovieSelection(e, item)}
                        />
                        <label htmlFor={`movie-${item.id}`} className="ml-2">
                            <strong>{item.movie.name}</strong> - {item.screeningTime.toLocaleString()}
                        </label>
                    </li>
                ))}
            </ul>
            <button
                className="btn btn-primary mt-3"
                onClick={handleConfirmSelection}
                disabled={!selectedMovie || numberOfTickets === 0}
            >
                Confirm Selection
            </button>
        </div>
    );
}

export default MovieSelection;
