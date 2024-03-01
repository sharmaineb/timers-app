import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer, resetTimer } from './features/timers/timersSlice';

export default function TimerView({ index, name, time, isRunning, description }) {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetTimer(index));
  };

  return (
    <div className="inline-block border border-gray-300 rounded p-4 mr-4">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h1>{time}</h1>
      <button className={`mr-2 ${isRunning ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded`} onClick={() => dispatch(toggleTimer(index))}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleReset}>Reset</button>
    </div>
  );
}