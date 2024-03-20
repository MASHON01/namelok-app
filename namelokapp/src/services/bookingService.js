
import axios from 'axios';
import { BOOKINGS_API_URL } from './api';


export const bookingId = () => {
    return axios.get(BOOKINGS_API_URL, bookingId);
};
const fetchBookings = () => {
  return axios.get(BOOKINGS_API_URL);
};

const createBooking = (bookingData) => {
  return axios.post(BOOKINGS_API_URL, bookingData);
};

const updateBooking = (bookingId, updatedData) => {
  return axios.put(`${BOOKINGS_API_URL}${bookingId}/`, updatedData);
};

const deleteBooking = (bookingId) => {
  return axios.delete(`${BOOKINGS_API_URL}${bookingId}/`);
};

export { fetchBookings, createBooking, updateBooking, deleteBooking };
