import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CarsList from './components/CarsList';
import CarDetails from './components/CarDetails';
import AddCar from './components/AddCar';
import './App.css';  // Import custom CSS

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cars" element={<CarsList />} />
                <Route path="/cars/:id" element={<CarDetails />} />
                <Route path="/add-car" element={<AddCar />} />
            </Routes>
        </Router>
    );
}

export default App;
