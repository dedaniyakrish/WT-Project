import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (username === 'KRISH' && password === '6102004') {
            navigate('/cars');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input type="text" className="form-control mb-2" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="password" className="form-control mb-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
}

export default Login;
