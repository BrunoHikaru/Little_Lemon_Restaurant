import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const BookingTable = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    note: '',
  });

  const times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva enviada:', formData);
    alert('Reserva realizada com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados para um backend ou serviço externo
  };

  return (
    <div className='app-container'>
      <Nav/>
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      width:'90%'
    }}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Reserve uma Mesa</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Data:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Hora:
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Selecione uma hora</option>
            {times.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </label>

        <label>
          Número de pessoas:
          <input type="number" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} required />
        </label>

        <label>
          Nome:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>
          Sobrenome:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>
          Email (opcional):
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Telemóvel:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Observações:
          <textarea name="note" rows="3" value={formData.note} onChange={handleChange}></textarea>
        </label>

        <button type="submit" style={{
          padding: '0.75rem',
          backgroundColor: '#F4CE14',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Confirmar Reserva
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default BookingTable;
