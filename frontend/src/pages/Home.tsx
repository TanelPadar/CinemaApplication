import React from 'react';
import LoginForm from "../components/LoginForm";
import {useNavigate} from "react-router-dom";
import {postRequest} from "../config/axios";


const Home = () => {
    const navigate = useNavigate();

    const handleLoginFormSubmit = (username: string) => {
        postRequest(`user/login/${username}`)
            .then(response => {
                localStorage.setItem('logged_in_user', JSON.stringify(response.data));
                navigate("/schedule");
            })
    };

    return (
        <div>
            <LoginForm login={handleLoginFormSubmit}/>
        </div>
    );
}

export default Home;
