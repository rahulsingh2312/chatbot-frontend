'use client'
import React, { useState, useEffect } from "react";

const AppointmentItem = ({ appointment }) => (
  <div className="appointment-item">
    <strong>Slot ID:</strong> {appointment.slot_id}<br />
    <strong>Start Time:</strong> {new Date(appointment.slot_start).toLocaleString()}<br />
    <strong>End Time:</strong> {new Date(appointment.slot_end).toLocaleString()}<br />
    <strong>Booked:</strong> {appointment.isSlotBooked ? 'Yes' : 'No'}
  </div>
);

const Appointments = ({ appointments }) => (
  <div className="appointments">
    <h2>Appointments</h2>
    {appointments.map(appointment => (
      <AppointmentItem key={appointment.slot_id} appointment={appointment} />
    ))}
  </div>
);

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    fetch('https://us-central1-proven-gasket-416318.cloudfunctions.net/doctors/doctors/1/slot')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  };

  return (
    <div className="app">
      <h1>Doctor's Appointments</h1>
      <Appointments appointments={appointments} />
      {/* You can add your calendar or other UI components here */}
    </div>
  );
};

export default App;
