import { useState } from 'react';

export default function NewAppointmentForm({ addAppointment }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    duration: ""
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData);
    }

  function handleNewAppt(evt) {
    evt.preventDefault();
    addAppointment(formData);
    setFormData({
      title: "",
      date: "",
      duration: ""
    });
  }


  return (
    <div className="scheduler">
      <form onSubmit={handleNewAppt}>
        <input type="text" name="title" placeholder="Title of Appointment" value={formData.title} onChange={handleChange} required/>
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required/>
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required/>
        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
}