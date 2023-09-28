import './App.css';
import { useState, useEffect } from 'react';
import NewAppointmentForm from '../../components/NewAppointmentForm';
import AppointmentCard from '../../components/AppointmentCard';


export default function App() {
  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem('appointments')) || []
  });

  function addAppointment(newAppt){
    setAppointments([...appointments, newAppt]);
  }


  // update local storage whenever appointments state changes
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <div className="App">
      <h1>Appointment Tracker</h1>
      <NewAppointmentForm addAppointment={addAppointment}/>
      <AppointmentCard appointments={appointments} />
    </div>
  );
}


