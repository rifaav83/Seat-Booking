import { useContext, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BookingContext } from '../context/BookingContext'

function DateSelector() {
  const {selectedDate, setSelectedDate} = useContext(BookingContext)

  function handleDateChange(date) {
    setSelectedDate(date) 
  }  


  return (
    <section className="control-card">

      <div className="control-header">

        <p className="card-label">
          SELECT DATE
        </p>

        <h3>
          Choose your seminar date
        </h3>

      </div>

      <div className="date-picker-wrapper">

        <span className="calendar-icon">
          📅
        </span>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          minDate={new Date()}
        />

      </div>

    </section>
  )
}

export default DateSelector       