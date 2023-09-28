import './App.css';
import { useState } from 'react';
import NewAppointmentForm from '../../components/NewAppointmentForm';
import AppointmentCard from '../../components/AppointmentCard';

export default function App() {
  const [appointments, setAppointments] = useState([]);

  function addAppointment(newAppt){
    setAppointments([...appointments, newAppt]);
  }
  
  return (
    <div className="App">
      <h1>Appointment Tracker</h1>
      <NewAppointmentForm addAppointment={addAppointment}/>
      <AppointmentCard appointments={appointments} />
    </div>
  );
}


