import { createSlice } from '@reduxjs/toolkit';

// Initial state for available time slots
const initialState = {
  availableSlots: [],
};

// Create Redux slice for available slots
const timeSlotsSlice = createSlice({
  name: 'timeSlots',
  initialState,
  reducers: {
    // Action to set available time slots
    setAvailableSlots: (state, action) => {
      state.availableSlots = action.payload;
    },
    // Action to add a new slot
    addSlot: (state, action) => {
      state.availableSlots.push(action.payload);
    },
    // Action to remove a slot
    removeSlot: (state, action) => {
      state.availableSlots = state.availableSlots.filter(slot => slot !== action.payload);
    },
  },
});

// Export actions
export const { setAvailableSlots, addSlot, removeSlot } = timeSlotsSlice.actions;

// Export the reducer to be used in the store
export default timeSlotsSlice.reducer;
