import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CarsList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get('http://localhost:5000/cars');
            setCars(response.data);
        };
        fetchCars();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/cars/${id}`);
        setCars(cars.filter(car => car._id !== id));
    };

    return (
        <div className="container">
            <h1>Cars</h1>
            <Link to="/add-car" className="btn btn-primary mb-3">Add Car</Link>
            <div className="row">
                {cars.map(car => (
                    <div key={car._id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={car.image} className="card-img-top" alt={car.model} />
                            <div className="card-body">
                                <h5 className="card-title">{car.make} {car.model}</h5>
                                <p className="card-text">{car.description}</p>
                                <Link to={`/cars/${car._id}`} className="btn btn-info">View Details</Link>
                                <button className="btn btn-danger ms-2" onClick={() => handleDelete(car._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarsList;
