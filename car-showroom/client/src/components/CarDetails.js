import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CarDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({});

    useEffect(() => {
        const fetchCar = async () => {
            const response = await axios.get(`http://localhost:5000/cars/${id}`);
            setCar(response.data);
        };
        fetchCar();
    }, [id]);

    return (
        <div className="container">
            <h1>{car.make} {car.model}</h1>
            <img src={car.image} className="img-fluid mb-3" alt={car.model} />
            <p>Year: {car.year}</p>
            <p>Description: {car.description}</p>
            <button onClick={() => navigate('/cars')} className="btn btn-secondary">Back</button>
        </div>
    );
}

export default CarDetails;
