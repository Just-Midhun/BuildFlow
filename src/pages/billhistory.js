import React from 'react';
import Navbar from '../components/Navbar.js';
import '../components/billhistory.css';

const PaymentHistory = () => {
    return (
        <div className="payment-history-page">
            <Navbar />
            <div className="payment-history-content">
                <h1 className="title">Payment History</h1>
                <div className="payment-history-main-content">
                    <div className="innercontainer">
                        <div className="payments">
                            <div className="paymentdetails">
                                <p>Payment Date:</p>
                                <p>Receipt Number:</p>
                                <p>Reason Of Payment:</p>
                            </div>
                            <div className="paymentammount">
                                <p>$1234</p>
                            </div>
                        </div>
                        <div className="payments">
                            <div className="paymentdetails">
                                <p>Payment Date:</p>
                                <p>Receipt Number:</p>
                                <p>Reason Of Payment:</p>
                            </div>
                            <div className="paymentammount">
                                <p>$1234</p>
                            </div>
                        </div>
                        <div className="payments">
                            <div className="paymentdetails">
                                <p>Payment Date:</p>
                                <p>Receipt Number:</p>
                                <p>Reason Of Payment:</p>
                            </div>
                            <div className="paymentammount">
                                <p>$1234</p>
                            </div>
                        </div>
                        <div className="payments">
                            <div className="paymentdetails">
                                <p>Payment Date:</p>
                                <p>Receipt Number:</p>
                                <p>Reason Of Payment:</p>
                            </div>
                            <div className="paymentammount">
                                <p>$1234</p>
                            </div>
                        </div>
                        <div className="payments">
                            <div className="paymentdetails">
                                <p>Payment Date:</p>
                                <p>Receipt Number:</p>
                                <p>Reason Of Payment:</p>
                            </div>
                            <div className="paymentammount">
                                <p>$1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
