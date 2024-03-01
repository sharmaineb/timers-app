import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      const { name } = action.payload;
      state.value.push({ name, time: 0, isRunning: false });
    },
    toggleTimer: (state, action) => {
      const timer = state.value[action.payload];
      timer.isRunning = !timer.isRunning;
    },
  },
});

export const { addTimer, toggleTimer } = timersSlice.actions;

export default timersSlice.reducer;
