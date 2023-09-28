export default function ScheduleAppointment() {

  return (
    <div className="scheduler">
      <form>
        <input type="text" name="title" placeholder="Title of Appointment" />
        <input type="datetime-local" name="date" />
        <input type="text" name="duration" placeholder="Duration" />
      </form>
    </div>
  )
}