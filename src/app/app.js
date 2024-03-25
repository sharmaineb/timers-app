import { configureStore } from '@reduxjs/toolkit';
import timersReducer, { update } from '../features/timers/timersSlice.js'
import { loadState, saveState } from '../utils/persistState.js'

import throttle from 'lodash/throttle.js';

export const store = configureStore({
    reducer: {
      timers: timersReducer,
    },
    preloadedState: loadState(),
  });

let lastUpdateTime = Date.now();

setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 500);

store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));