import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCar() {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/cars', { make, model, year, description, image });
        navigate('/cars');
    };

    return (
        <div className="container">
            <h1>Add Car</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-2" placeholder="Make" onChange={e => setMake(e.target.value)} required />
                <input type="text" className="form-control mb-2" placeholder="Model" onChange={e => setModel(e.target.value)} required />
                <input type="number" className="form-control mb-2" placeholder="Year" onChange={e => setYear(e.target.value)} required />
                <textarea className="form-control mb-2" placeholder="Description" onChange={e => setDescription(e.target.value)} required></textarea>
                <input type="text" className="form-control mb-2" placeholder="Image URL" onChange={e => setImage(e.target.value)} required />
                <button type="submit" className="btn btn-primary">Add Car</button>
            </form>
        </div>
    );
}

export default AddCar;
