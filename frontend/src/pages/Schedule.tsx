import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSelection from "../components/MovieSelection";

interface Movie {
    id: number;
    name: string;
    genre: string;
    ageLimit: number;
    language: string;
}

interface ScheduleItem {
    id: number;
    screeningTime: Date,
    movie: Movie;
}

const Schedule = () => {
    const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);

    useEffect(() => {
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

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Schedule</h2>
            <MovieSelection scheduleItems={scheduleItems} />
        </div>
    );
}

export default Schedule;
