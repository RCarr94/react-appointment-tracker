import AppointmentCardListItem from "./AppointmentCardListItem";

export default function AppointmentCard({ appointments, deleteAppointment }) {

  if (!appointments.length) {
    return (
      <h1>You have no appointments scheduled</h1>
    )
  }

  return(
    <div>
      {appointments.map((appointment, id) => (
        <AppointmentCardListItem key={id} appointment={appointment} id={id} deleteAppointment={deleteAppointment}/>
      ))}
    </div>
  )

}
