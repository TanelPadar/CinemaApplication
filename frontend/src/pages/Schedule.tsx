import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const { setSelectedMovies, setNumberOfTickets } = useData();
    const navigate = useNavigate();
    const userData = localStorage.getItem('logged_in_user');
    const userId = userData ? JSON.parse(userData).id : null;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/movie-schedule');
            const parsedData = response.data.map((item: ScheduleItem) => ({
                ...item,
                screeningTime: new Date(item.screeningTime)
            }));
            setScheduleItems(parsedData);
        } catch (error) {
            console.error('Error fetching schedule:', error);
        }
    };

    const fetchFilteredData = async (filterType: string, filterValue: string | number | boolean) => {
        try {
            let url = `http://localhost:8080/api/v1/movie-schedule/search?${filterType}=${filterValue}`;

            const response = await axios.get(url);

            const parsedData = response.data.map((item: ScheduleItem) => ({
                ...item,
                screeningTime: new Date(item.screeningTime)
            }));
            setScheduleItems(parsedData);
        } catch (error) {
            console.error(`Error fetching schedule with filter ${filterType}=${filterValue}:`, error);
        }
    };

    const fetchRecommendedData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/movie-schedule/recommended/${userId}`);
            const parsedData = response.data.map((item: ScheduleItem) => ({
                ...item,
                screeningTime: new Date(item.screeningTime)
            }));
            if (parsedData.length > 0) {
                setScheduleItems(parsedData);
            } else {
                alert("User doesn't have enough movie history.");
            }
        } catch (error) {
            console.error('Error fetching recommended schedule:', error);
        }
    };

    const navigateToSeats = (numberOfTickets: number, selectedMovies: ScheduleItem[]) => {
        setNumberOfTickets(numberOfTickets);
        setSelectedMovies(selectedMovies);
        navigate('/seats');
    };

    const handleFilterChange = async (filterType: string, filterValue: string | number | boolean) => {
        await fetchFilteredData(filterType, filterValue);
        console.log(filterType, typeof filterValue)
    };

    const handleRecommendMovies = () => {
        fetchRecommendedData();
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
