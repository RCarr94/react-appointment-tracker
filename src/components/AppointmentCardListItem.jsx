export default function AppointmentCardListItem({ props, appointment, deleteAppointment }) {
  const { title, date, duration } = appointment;

  function handleDelete() {
    deleteAppointment();
  }

  return (
    <div className="appointment-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{duration}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}