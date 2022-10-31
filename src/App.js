import './App.css';
import { Board } from './components/Board'

function App() {
  return (
    <div className="main-container">
    <header className='header'>
      <h1 className="title">World Clocks</h1>
    </header>
    <Board className="board"/>
  </div>
  );
}

export default App;
