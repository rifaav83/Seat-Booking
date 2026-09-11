function Seat({
  seat,
  isSelected,
  isBooked,
  onSeatClick
}) {
  return (
    <button
      className={`seat ${
        isSelected ? 'selected' : ''
      } ${
        isBooked ? 'booked' : ''
      }`}
      onClick={() => onSeatClick(seat)}
      disabled={isBooked}
    >
      <span className="seat-number">
        {seat.id}
      </span>
    </button>
  )
}

export default Seat