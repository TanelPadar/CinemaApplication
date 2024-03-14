import React, { useState, useEffect } from 'react';
import { getRequest } from "../config/axios";
import MovieSelection from '../components/MovieSelection';
import FilterForm from '../components/FilterForm';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/DataProvider';
import { Button } from 'react-bootstrap';

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

const Schedule = () => {
    const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
    const { setSelectedMovie, setNumberOfTickets } = useData();
    const navigate = useNavigate();
    const userData = localStorage.getItem('logged_in_user');
    const userId = userData ? JSON.parse(userData).id : null;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await getRequest('movie-schedule');
        const parsedData = response.data.map((item: ScheduleItem) => ({
            ...item,
            screeningTime: new Date(item.screeningTime)
        }));
        setScheduleItems(parsedData);
    };

    const fetchFilteredData = async (filterType: string, filterValue: string | number | boolean) => {
        const response = await getRequest(`movie-schedule/search?${filterType}=${filterValue}`);
        const parsedData = response.data.map((item: ScheduleItem) => ({
            ...item,
            screeningTime: new Date(item.screeningTime)
        }));
        setScheduleItems(parsedData);
    };

    const fetchRecommendedData = async () => {
        const response = await getRequest(`movie-schedule/recommended/${userId}`);
        const parsedData = response.data.map((item: ScheduleItem) => ({
            ...item,
            screeningTime: new Date(item.screeningTime)
        }));
        if (parsedData.length > 0) {
            setScheduleItems(parsedData);
        } else {
            alert("User doesn't have enough movie history.");
        }
    };

    const navigateToSeats = (numberOfTickets: number, selectedMovie: ScheduleItem[]) => {
        setNumberOfTickets(numberOfTickets);
        setSelectedMovie(selectedMovie);
        navigate('/seats');
    };

    const handleFilterChange = async (filterType: string, filterValue: string | number | boolean): Promise<void> => {
        await fetchFilteredData(filterType, filterValue);
    };

    const handleRecommendMovies = async () => {
        await fetchRecommendedData();
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Schedule</h2>
            <FilterForm handleFilterChange={handleFilterChange} />
            <MovieSelection
                navigate={(numberOfTickets, selectedMovies) => navigateToSeats(numberOfTickets, selectedMovies)}
                scheduleItems={scheduleItems}
            />
            <Button onClick={handleRecommendMovies} className="mt-2">
                Recommend movies
            </Button>
        </div>
    );
};

export default Schedule;
