import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './appointmentSlice'; // Import the appointment slice reducer

const store = configureStore({
  reducer: {
    appointment: appointmentReducer, // Add appointment slice to the store
  },
});

export default store;
