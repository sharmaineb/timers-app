import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTimer } from '../features/timers/timersSlice';

export default function NewTimer() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTimer = () => {
    dispatch(addTimer({ name, description, time: 0, isRunning: false }));
    setName('');
    setDescription('');
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Timer Name"
      />
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Timer Description"
      />
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleAddTimer}
      >
        Add Timer
      </button>
    </div>
  );
};
