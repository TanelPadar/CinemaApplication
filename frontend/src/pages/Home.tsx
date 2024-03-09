import React from 'react';
import LoginForm from "../components/LoginForm";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLoginFormSubmit = async (username: string) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/user/login/${username}`);
            const user = response.data;
            localStorage.setItem('logged-in-user', JSON.stringify(user));
            navigate("/schedule");

        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleLoginFormSubmit} />
        </div>
    );
}

export default Home;
