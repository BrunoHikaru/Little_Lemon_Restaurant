import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import BookingTable from './Pages/BookingTable';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingTable />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
