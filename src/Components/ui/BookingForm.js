import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'update_times', date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion, firstName, lastName, phone, email, notes };
    console.log('Submitted:', formData);
    // Add API logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
      aria-labelledby="bookingFormTitle"
    >
      <h2 id="bookingFormTitle">Book a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
      >
        <option value="" disabled>Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Company Luch/Dinner</option>
        <option>Celebration</option>
        <option>Other</option>
      </select>

      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="email">Email (optional)</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-describedby="emailHelp"
      />
      <small id="emailHelp">We’ll only use it to send confirmation.</small>

      <label htmlFor="notes">Additional Notes</label>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="3"
      />

      <button type="submit" aria-label="Make your reservation">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
