import { DateTime } from 'luxon';
import { useState } from 'react';
import { Board } from './components/Board'
import './App.css';

function App() {

const [date, setDate] = useState(Date.now());
const [time, setTime] = useState(DateTime.now());

setInterval(() => {
  setDate(DateTime.now());
  setTime(DateTime.now());
}, 1000)

  return (
    <div className="main-container">
    <header className='header'>
      <h1 className="title">World Clocks</h1>
    </header>
    <Board className="board"
      date={date}
      time={time}
    />
  </div>
  );
}

export default App;
