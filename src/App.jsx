import Header from './components/Header'
import DateSelector from './components/DateSelector'
import SeatGrid from './components/SeatGrid'
import BookingSummary from './components/BookingSummary'
import MyBookings from './components/MyBookings'


function App() {
  return (
    <div className="app">

      <Header />

      <main className="main-content">

        <DateSelector />

        <div className="booking-layout">

          <SeatGrid />

          <BookingSummary />

        </div>

        <MyBookings />

      </main>

    </div>
  )
}

export default App