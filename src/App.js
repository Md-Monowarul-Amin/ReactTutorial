import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function handleClick({value}){
//   alert({value});
// }

function Square({num}){
  const [value, setValue] = useState("X");
  function handleClick(){
    setValue(num);
  }
  return <button className='square'
                  onClick={handleClick}
                  >
                    {value} 
                  </button>
}

function Board(){
  return(
    <>
      <div className='board-row'>
        <Square num="1" />
        <Square num="2" />
        <Square num="3" />
      </div>
      <div className='board-row'>
        <Square num="4" />
        <Square num="5" />
        <Square num="6" />
      </div>
      <div className='board-row'>
        <Square num="7" />
        <Square num="8" />
        <Square num="9" />
      </div>
      
    </>
  )
}

export default Board;
