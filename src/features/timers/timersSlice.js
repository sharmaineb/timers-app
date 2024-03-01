import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push({ name: action.payload, time: 0, isRunning: false });
    },
    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning = !state.value[action.payload].isRunning;
    },
    update: (state, action) => {
      state.value.forEach(timer => {
        if (timer.isRunning) {
          timer.time += action.payload;
        }
      });
    },
  },
});

export const { addTimer, toggleTimer, update } = timersSlice.actions;
export default timersSlice.reducer;