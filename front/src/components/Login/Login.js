import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed
import './Login.css';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [MotDePasse, setMotDePasse] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Email === '' || MotDePasse === '') {
            setErrorMessage('Please fill in both fields.');
            return;
        }

        try {
            // Make an API call to your backend for authentication
            const response = await fetch('https://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email, MotDePasse }),
            });

            const data = await response.json();

            if (data.success) {
                // Save the token (if any) in localStorage
                localStorage.setItem('token', data.token);

                // Redirect to the dashboard or homepage
                navigate('/dashboard');
            } else {
                setErrorMessage(data.message || 'Invalid login credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                {/* Add your logo here */}
            </div>
            <h2>Login</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="motDePasse">Password:</label>
                    <input
                        type="password"
                        id="motDePasse"
                        value={MotDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
