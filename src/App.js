import React from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match cards to win</h3>
      </header>
      <div className="row1">
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div className="row2">
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div className="row3">
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div className="row4">
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
    </div>
  );
}

export default App;
