import React from 'react';
import NewTimer from './components/NewTimer.js';
import ListTimers from './components/ListTimers.js';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
