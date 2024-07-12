import React from 'react';
import Navbar from '../components/Navbar';
import '../components/liftstatus.css';
import { Link } from 'react-router-dom';

const LiftStatus = () => {
    return (
        <div className="lift-status-page">
            <Navbar />
            <div className="lift-status-content">
                <h1 className="title">Status</h1>
                <div className="buttons">
                    <Link to="/camera_status">
                        <button className="camstatus-button">Camera</button>
                    </Link>
                    <button className="status-button">Lift</button>
                </div>
                <div className="lift-status-main-content">
                    <div className="liftstatus">
                        <div className="lift_number">
                            Lift 1
                        </div>
                        <div className="status">
                            Working
                        </div>
                    </div>
                    <div className="liftstatus">
                        <div className="lift_number">
                            Lift 2
                        </div>
                        <div className="status">
                            Working
                        </div>
                    </div>
                    <div className="liftstatus">
                        <div className="lift_number">
                            Lift 3
                        </div>
                        <div className="status">
                            Working
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiftStatus;
