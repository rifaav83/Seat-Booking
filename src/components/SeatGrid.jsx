import { useContext } from 'react'
import { BookingContext } from '../context/BookingContext'
import Seat from './Seat'
import './SeatGrid.css'

function SeatGrid() {
  const { selectedDate,bookings,selectedSeats,setSelectedSeats } = useContext(BookingContext)

  const seats = [
    { id: 'A1' },
    { id: 'A2' },
    { id: 'A3' },
    { id: 'A4' },
    { id: 'A5' },

    { id: 'B1' },
    { id: 'B2' },
    { id: 'B3' },
    { id: 'B4' },
    { id: 'B5' },

    { id: 'C1' },
    { id: 'C2' },
    { id: 'C3' },
    { id: 'C4' },
    { id: 'C5' },

    { id: 'D1' },
    { id: 'D2' },
    { id: 'D3' },
    { id: 'D4' },
    { id: 'D5' }
  ]

  function getDateKey(date) {
    return date.toISOString().split('T')[0]
  }

  const dateKey = getDateKey(selectedDate)

  const bookedSeats = bookings[dateKey] || []

  function handleSeatClick(seat) {
    if (bookedSeats.includes(seat.id)) {
      return
    }

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat.id
        )
      )
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat.id
      ])
    }
  }

  return (
    <section className="seat-card">

      <div className="seat-card-header">

        <div>
          <p className="card-label">
            SEAT MAP
          </p>

          <h3>
            Choose your seat
          </h3>
        </div>

        <div className="seat-count">
          {bookedSeats.length} / {seats.length}

          <span>
            {' '}booked
          </span>
        </div>

      </div>


      <div className="screen-area">

        <div className="screen">
          SCREEN
        </div>

        <p>
          Front of the seminar hall
        </p>

      </div>


      <div className="seat-grid">

        {seats.map((seat) => {

          const isSelected =
            selectedSeats.includes(seat.id)

          const isBooked =
            bookedSeats.includes(seat.id)

          return (
            <Seat
              key={seat.id}
              seat={seat}
              isSelected={isSelected}
              isBooked={isBooked}
              onSeatClick={handleSeatClick}
            />
          )
        })}

      </div>

    </section>
  )
}

export default SeatGrid