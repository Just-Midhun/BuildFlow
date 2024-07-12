import React from 'react';
import Navbar from '../components/Navbar';
import '../components/currentcomplaints.css';
import { Link } from 'react-router-dom';

const CurrentComplaints = () => {
    return (
        <div className="current-complaints-page">
            <Navbar />
            <div className="current-complaints-content">
                <h1 className="title">Complaints</h1>
                <div className="buttons">
                    <button className="status-button">Current</button>
                    <Link to="/previous_complaints">
                        <button className="pc-button">Previous</button>
                    </Link>
                </div>
                <div className="current-complaints-main-content">
                    {Array(4).fill().map((_, index) => (
                        <div className="complaints" key={index}>
                            <div className="complaint">
                                Sound Issues
                            </div>
                            <div className="date">
                                16/05/2024
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentComplaints;
