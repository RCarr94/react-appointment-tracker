export default function AppointmentCardListItem(props) {
  return (
    <div className="appointment-card">
      <h3>{props.appointment.title}</h3>
      <p>{props.appointment.date}</p>
      <p>{props.appointment.duration}</p>
      <button>Delete</button>
    </div>
  )
}