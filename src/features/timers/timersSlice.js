import { createSlice } from '@reduxjs/toolkit';

export const timersSlice = createSlice({
  name: 'timers',
  initialState: {
    value: [],
  },
  reducers: {
    addTimer: (state, action) => {
      state.value.push(action.payload);
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
    resetTimer: (state, action) => {
      state.value[action.payload].time = 0; 
    },
  },
});

export const { addTimer, toggleTimer, update, resetTimer } = timersSlice.actions;

export default timersSlice.reducer;