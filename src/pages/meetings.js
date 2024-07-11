import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../components/meetings.css';

const Meetings = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [calendarDays, setCalendarDays] = useState([]);

    const generateCalendar = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const calendarArray = [];
        for (let i = 0; i < firstDay; i++) {
            calendarArray.push('');
        }
        for (let day = 1; day <= daysInMonth; day++) {
            calendarArray.push(day);
        }
        setCalendarDays(calendarArray);
    };

    useEffect(() => {
        generateCalendar(month, year);
    }, [month, year]);

    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <h1 className="title">Meetings</h1>
                <div className="controls">
                    <select 
                        id="month-select" 
                        className="month-button" 
                        value={month} 
                        onChange={(e) => setMonth(parseInt(e.target.value))}
                    >
                        <option value="0">Jan</option>
                        <option value="1">Feb</option>
                        <option value="2">Mar</option>
                        <option value="3">Apr</option>
                        <option value="4">May</option>
                        <option value="5">Jun</option>
                        <option value="6">Jul</option>
                        <option value="7">Aug</option>
                        <option value="8">Sep</option>
                        <option value="9">Oct</option>
                        <option value="10">Nov</option>
                        <option value="11">Dec</option>
                    </select>
                    <input 
                        type="number" 
                        id="year-input" 
                        className="year-button" 
                        value={year} 
                        min="1900" 
                        max="2100" 
                        onChange={(e) => setYear(parseInt(e.target.value))}
                    />
                </div>
                <div className="main-content">
                    <div className="calendar">
                        <div className="calendar-header">
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className="calendar-body" id="calendar-body">
                            {calendarDays.map((day, index) => (
                                <div key={index}>{day}</div>
                            ))}
                        </div>
                    </div>
                    <div className="schedule">
                        {/* Schedule content can go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meetings;
