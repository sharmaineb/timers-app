import React from 'react';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
