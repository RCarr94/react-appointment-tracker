export default function AppointmentCardListItem({ appointment }) {
  const { title, date, duration } = appointment;

  return (
    <div className="appointment-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{duration}</p>
      <button>Delete</button>
    </div>
  )
}