import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../Components/ui/BookingForm';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));


jest.mock('../Api', () => ({
  fetchAPI: jest.fn().mockReturnValue(['17:00', '18:00']),
}));

describe('BookingForm Component', () => {
  const availableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </MemoryRouter>
    );
  });

  it('renders all form fields', () => {
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Time is required/i)).toBeInTheDocument();
  });

  it('submits form with valid input and triggers callbacks', async () => {
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2025-05-20' } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '17:00' } });

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith(expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
        date: '2025-05-20',
        selectedTime: '17:00'
      }));
      expect(mockDispatch).toHaveBeenCalled();
      expect(mockedNavigate).toHaveBeenCalledWith('/confirmation');
    });
  });
});
