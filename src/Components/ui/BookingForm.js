import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {fetchAPI} from '../Api';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const initialValues = {
    name: '',
    email: '',
    selectedTime: '',
    date: '',
    guests: 1,
    occasion: 'Birthday'
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    selectedTime: Yup.string().required('Time is required'),
    date: Yup.string().required('Date is required')
  });

  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    navigate('/confirmation');
    submitForm(values); // Submit the form data to the API
    dispatch({ type: 'UPDATE_TIMES', payload: fetchAPI(values.date) });
    resetForm();
  };

  return (
    <div className="reserve">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, values }) => (
        <Form className="booking-form" aria-label="booking a table form">
          <label htmlFor="name">Your Name</label>
          <Field type="text" id="name" name="name" placeholder="Enter your name" aria-label="Your Name"/>
          <ErrorMessage name="name" className="error" component="div" />

          <label htmlFor="email">Your Email</label>
          <Field type="email" id="email" name="email" placeholder="Email" aria-label="Your Email"/>
          <ErrorMessage name="email" className="error" component="div" />

          <label htmlFor="date">Choose Date</label>
          <Field type="date" id="date" name="date"  aria-label="Choose Date"/>
          <ErrorMessage name="date" className="error" component="div" />

          <label htmlFor="selectedTime">Choose Time</label>
          <Field as="select" id="selectedTime" name="selectedTime" aria-label="Choose Time">
            <option value="">Select Time</option>
            {Array.isArray(availableTimes) && availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </Field>
          <ErrorMessage name="selectedTime" className="error" component="div" />

          <label htmlFor="guests">Number of guests</label>
          <Field type="number" id="guests" name="guests" min="1" max="10" aria-label="Number of guests"/>

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion" aria-label="Occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Company">Company Dinner/Lunch</option>
            <option value="Couples">Couples</option>
            <option value="Other">Other</option>
          </Field>

          <button className="button-form" type="submit" disabled={isSubmitting || !isValid || !values.name.trim() || !values.email.trim() || !values.selectedTime || !values.date}>
            Make Your Reservation
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default BookingForm;