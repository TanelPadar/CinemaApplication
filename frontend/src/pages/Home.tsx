import React from 'react';
import LoginForm from "../components/LoginForm";
import {useNavigate} from "react-router-dom";
import axios from "../config/axios";


const Home = () => {
    const navigate = useNavigate();

    const handleLoginFormSubmit = (username: string) => {
        axios.post(`user/login/${username}`)
            .then(response => {
                const user = response.data;
                localStorage.setItem('logged_in_user', JSON.stringify(user));
                navigate("/schedule");
            })
            .catch(error => {
                console.error("Error logging in:", error);
            });
    };


    return (
        <div>
            <LoginForm login={handleLoginFormSubmit}/>
        </div>
    );
}

export default Home;
