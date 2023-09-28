import AppointmentCardListItem from "./AppointmentCardListItem";

export default function AppointmentCard({ appointments }) {

  if (!appointments.length) {
    return (
      <h1>You have no appointments scheduled</h1>
    )
  }

  return(
    <div>
      {appointments.map((appointment, idx) => (
        <AppointmentCardListItem key={idx} appointment={appointment} idx={idx}/>
      ))}
    </div>
  )

}
