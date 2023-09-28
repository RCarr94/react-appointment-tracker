import './App.css';
import { useState, useEffect } from 'react';
import NewAppointmentForm from '../../components/NewAppointmentForm';
import AppointmentCard from '../../components/AppointmentCard';

export default function App() {
  const [appointments, setAppointments] = useState([]);

  function addAppointment(newAppt){
    setAppointments([...appointments, newAppt]);
  }
  
  // retrieve data from local storage and initialize when component mounts
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, []);

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


