
import React, { useEffect, useState } from 'react';
import './DashboardHome.css';
import { FaCalendarAlt, FaRegCalendarCheck, FaRegCalendarTimes, FaExclamationCircle } from 'react-icons/fa';

const DashboardHome = () => {
    const [patientName, setPatientName] = useState('');
    const [appointments, setAppointments] = useState({ upcoming: [], past: [] });
    const [activeTab, setActiveTab] = useState('upcoming');

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));

            if (userData && userData.firstName && userData.lastName) {
                setPatientName(`${userData.firstName} ${userData.lastName}`);
            } else {
                setPatientName('Patient');
            }
        } catch (error) {
            console.error('Error reading user data from localStorage:', error);
            setPatientName('Patient');
        }

        // Sample data
        const fetchedAppointments = [
            { id: 1, clinic: 'newbise', provider: 'provider two', date: 'Nov 22 2024 08:00 am', location: '14 York Street, Toronto, ON, Canada', status: 'Pending Approval' },
            { id: 2, clinic: 'newbise', provider: 'provider two', date: 'Oct 31 2024 03:00 pm', location: '14 York Street, Toronto, ON, Canada', status: 'Confirmed' },
            { id: 3, clinic: 'Stat Cardiologist Inc', provider: 'Saifullah Nasir', date: 'Sep 23 2024 11:15 am', location: '1345 Wiley Rd unit 111, Schaumburg, IL, USA', status: 'Cancelled By Provider' },
            { id: 4, clinic: 'newbise', provider: 'provider one', date: 'Apr 02 2024 08:00 am', location: '14 York Street, Toronto, ON, Canada', status: 'Pending Approval' },
            { id: 5, clinic: 'newbise', provider: 'provider one', date: 'May 05 2023 08:00 am', location: '14 York Street, Toronto, ON, Canada', status: 'Confirmed' },
        ];


        const upcoming = fetchedAppointments.filter(app => new Date(app.date) >= new Date());
        const past = fetchedAppointments.filter(app => new Date(app.date) < new Date());

        setAppointments({ upcoming, past });
    }, []);

    return (
        <div className="dashboard-home">

            <div className="greeting">
                <div className="greeting-content">
                    <h1> {patientName}!</h1>
                    <p>Here’s an overview of your current dashboard.</p>
                </div>
                <div className="background-shapes">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                </div>
            </div>
            <div className="tabs">
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
                >
                    Upcoming Appointments
                </button>
                <button
                    onClick={() => setActiveTab('past')}
                    className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
                >
                    Past Appointments
                </button>
            </div>

            {/* Appointments Section */}
            <div className="appointment-section">
                {activeTab === 'upcoming' ? (
                    <div>
                        <h4>Upcoming Appointments</h4>
                        {appointments.upcoming.length === 0 ? (
                            <div className="no-appointments">
                                <FaRegCalendarTimes size={40} />
                                <p>No upcoming appointments found.</p>
                            </div>
                        ) : (
                            <table className="appointment-table">
                                <thead>
                                    <tr>
                                        <th>Clinic</th>
                                        <th>Provider</th>
                                        <th>Appointment Date</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.upcoming.map(app => (
                                        <tr key={app.id} className="appointment-row">
                                            <td>{app.clinic}</td>
                                            <td>{app.provider}</td>
                                            <td>{app.date}</td>
                                            <td>{app.location}</td>
                                            <td><span className={`status ${app.status.replace(' ', '-').toLowerCase()}`}>{app.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                ) : (
                    <div>
                        <h4>Past Appointments</h4>
                        {appointments.past.length === 0 ? (
                            <div className="no-appointments">
                                <FaRegCalendarCheck size={40} />
                                <p>No past appointments found.</p>
                            </div>
                        ) : (
                            <table className="appointment-table">
                                <thead>
                                    <tr>
                                        <th>Clinic</th>
                                        <th>Provider</th>
                                        <th>Appointment Date</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.past.map(app => (
                                        <tr key={app.id} className="appointment-row">
                                            <td>{app.clinic}</td>
                                            <td>{app.provider}</td>
                                            <td>{app.date}</td>
                                            <td>{app.location}</td>
                                            <td><span className={`status ${app.status.replace(' ', '-').toLowerCase()}`}>{app.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHome;
