import { createContext, useState } from 'react'

export const BookingContext = createContext()

function BookingProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [bookings, setBookings] = useState({})

  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,

        bookings,
        setBookings,

        selectedSeats,
        setSelectedSeats
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export default BookingProvider