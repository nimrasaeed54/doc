import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDoctorName: null,
  selectedDate: null,
  selectedSlot: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setSelectedDoctor(state, action) {
      state.selectedDoctorName = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setSelectedSlot(state, action) {
      state.selectedSlot = action.payload;
    },
  },
});

export const { setSelectedDoctor, setSelectedDate, setSelectedSlot } = appointmentSlice.actions;
export default appointmentSlice.reducer;
