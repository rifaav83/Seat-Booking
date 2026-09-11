import { useContext, useEffect, useMemo, useState } from 'react'
import { BookingContext } from '../context/BookingContext'

function BookingSummary() {
  const {
    selectedDate, bookings, setBookings, selectedSeats, setSelectedSeats } = useContext(BookingContext)

  const pricePerSeat = 100

  const totalPrice =
    selectedSeats.length * pricePerSeat

  function getDateKey(date) {
    return date.toISOString().split('T')[0]
  }


  function handleConfirmBooking() {
    if (selectedSeats.length === 0) {
      return
    }

    const dateKey = getDateKey(selectedDate)

    const existingBookings =
      bookings[dateKey] || []

    setBookings({
      ...bookings,
      [dateKey]: [
        ...existingBookings,
        ...selectedSeats
      ]

    })

    setSelectedSeats([])


  }

  

  return (
    <section className="booking-summary">

      <div className="summary-header">
        
      
        <div>
          <p className="card-label">
            YOUR SELECTION
          </p>

          <h3>
            Booking Summary
          </h3>
        </div>

      </div>


      <div className="summary-details">

        <div className="summary-row">

          <span>
            Selected seats
          </span>

          <strong>
            {selectedSeats.length}
          </strong>

        </div>


        <div className="summary-row">

          <span>
            Price per seat
          </span>

          <strong>
            ₹{pricePerSeat}
          </strong>

        </div>


        <div className="selected-seat-list">

          <span>
            Seats
          </span>

          <div>
            {selectedSeats.length > 0
              ? selectedSeats.join(', ')
              : 'No seats selected'}
          </div>

        </div>


        <div className="total-row">

          <span>
            Total
          </span>

          <strong>
            ₹{totalPrice}
          </strong>

        </div>

      </div>


      <button
        className="confirm-button"
        onClick={handleConfirmBooking}
        disabled={selectedSeats.length === 0}
      >
        Confirm Booking
      </button>

    </section>
  )
}

export default BookingSummary

