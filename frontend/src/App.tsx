import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './hooks/DataProvider';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Seats from './pages/Seats';
import Summary from './pages/Summary';

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/seats" element={<Seats />} />
                    <Route path="/summary" element={<Summary />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
