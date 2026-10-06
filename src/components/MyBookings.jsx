import { useContext } from 'react'
import { BookingContext } from '../context/BookingContext'

function MyBookings() {
  const {selectedDate,bookings, setBookings } = useContext(BookingContext)

  function getDateKey(date) {
    return date.toISOString().split('T')[0]
  }

  const dateKey = getDateKey(selectedDate)

  const bookedSeats = bookings[dateKey] || []

  const pricePerSeat = 100

  const totalPrice = bookedSeats.length * pricePerSeat

  function handleCancelBooking() {
    if (bookedSeats.length === 0) {
      return
    }

    const updatedBookings = {
      ...bookings
    }
    delete updatedBookings[dateKey]
    setBookings(updatedBookings)
  }
  return (
    <section className="my-bookings">
      <div className="my-bookings-header">
        <div>
          <p className="card-label">
            MY BOOKINGS
          </p>
          <h3>
            Your booked seats
          </h3>
        </div>

        <div className="booking-date">
          {selectedDate.toLocaleDateString('en-GB')}
        </div>

      </div>


      {bookedSeats.length === 0 ? (

        <div className="no-bookings">
          <p>
            No seats booked for this date.
          </p>
        </div>

      ) : (

        <>

          <div className="booked-seat-list">

            {bookedSeats.map((seat) => (

              <span
                className="booked-seat-tag"
                key={seat}
              >
                {seat}
              </span>

            ))}

          </div>


          <div className="booking-total">

            <div>
              <span>
                {bookedSeats.length} seat
                {bookedSeats.length > 1 ? 's' : ''}
              </span>

              <strong>
                ₹{totalPrice}
              </strong>
            </div>

          </div>


          <button
            className="cancel-button"
            onClick={handleCancelBooking}
          >
            Cancel My Booking
          </button>

        </>

      )}

    </section>
  )
}

export default MyBookings 
