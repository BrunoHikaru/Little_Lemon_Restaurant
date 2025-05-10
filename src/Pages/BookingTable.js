import BookingForm from '../Components/ui/BookingForm';
import { useReducer } from 'react';

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  const selectedDate = new Date(action.date);
  const day = selectedDate.getDay(); 

  if (day === 0 || day === 6) {
    return ["18:00", "19:00", "20:00", "21:00"];
  }

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};


const BookingTable = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Reserve a Table</h1>
      <p>Please fill in the details below to book a table at Little Lemon.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </section>
  );
};

export default BookingTable;
