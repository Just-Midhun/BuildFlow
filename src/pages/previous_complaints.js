import React from 'react';
import Navbar from '../components/Navbar';
import '../components/previouscomplaints.css';
import { Link } from 'react-router-dom';

const PreviousComplaints = () => {
    return (
        <div className="previous-complaints-page">
            <Navbar />
            <div className="previous-complaints-content">
                <h1 className="title">Complaints</h1>
                <div className="buttons">
                    <Link to="/current_complaints">
                        <button className="cc-button">Current</button>
                    </Link>
                    <button className="status-button">Previous</button>
                </div>
                <div className="previous-complaints-main-content">
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

export default PreviousComplaints;
