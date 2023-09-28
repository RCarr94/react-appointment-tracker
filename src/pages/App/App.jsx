import './App.css';
import { useState } from 'react';
import ScheduleAppointment from '../../components/ScheduleAppointment';
import AppointmentCard from '../../components/AppointmentCard';

export default function App() {
  const [appointment, setAppointment] = useState({
    title: '',
    date: '',
    duration: ''
  });

  return (
    <div className="App">
      <h1>Appointment Tracker</h1>
      <ScheduleAppointment />
      <AppointmentCard appointment={appointment} />
    </div>
  );
}


