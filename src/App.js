import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import BookingTable from './Pages/BookingTable';
import ConfirmationPage from './Pages/ConfirmationPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingTable />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
