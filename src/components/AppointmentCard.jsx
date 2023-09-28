export default function AppointmentCard({ appointment }) {
  const { title, date, duration } = appointment;

  if (!title) {
    return (
      <h1>You have no appointments scheduled</h1>
    )
  }

  return (
    <div className="appointment-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{duration}</p>
      <button>Delete</button>
    </div>
  )
}