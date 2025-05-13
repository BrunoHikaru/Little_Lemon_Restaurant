import BookingForm from '../Components/ui/BookingForm';
import { useReducer, useEffect } from 'react';
import { fetchAPI } from '../Components/Api';
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';


export const initializeTimes = () => {
  
  return fetchAPI(new Date());
};


export const updateTimes = (state, action) => {
  
  const selectedDate = new Date(action.date);
  return fetchAPI(selectedDate);
};

const BookingTable = () => {
  
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  
  useEffect(() => {
    dispatch({ date: new Date() });
  }, []);

  return (
    <section className='app-container'>
	<Nav />
      <Header />
      <h2>Reserve a Table</h2>
      <p>Please fill in the details below to book a table at Little Lemon.</p>
      
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
	<Footer/>
    </section>
  );
};

export default BookingTable;