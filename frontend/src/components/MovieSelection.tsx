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
}

interface MovieSelectionProps {
    scheduleItems: ScheduleItem[];
}

const MovieSelection = ({ scheduleItems }: MovieSelectionProps) => {
    const [selectedMovies, setSelectedMovies] = useState<number[]>([]);

    const handleMovieSelection = (event: ChangeEvent<HTMLInputElement>, movieId: number) => {
        if (event.target.checked) {
            setSelectedMovies([...selectedMovies, movieId]);
        } else {
            setSelectedMovies(selectedMovies.filter(id => id !== movieId));
        }
    };

    const handleConfirmSelection = () => {
        const selectedMovieInfo = selectedMovies.map(movieId => {
            const selectedMovie = scheduleItems.find(item => item.id === movieId);
            return selectedMovie;
        });
        console.log("Selected movies:", selectedMovieInfo);
    };


    return (
        <div>
            <ul className="list-group">
                {scheduleItems.map(item => (
                    <li key={item.id} className="list-group-item">
                        <input
                            type="checkbox"
                            id={`movie-${item.id}`}
                            value={item.id}
                            className="mx-2"
                            onChange={(e) => handleMovieSelection(e, item.id)}
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
                disabled={selectedMovies.length === 0}
            >
                Confirm Selection
            </button>
        </div>
    );
}

export default MovieSelection;
