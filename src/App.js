import React, {useState} from 'react';
import './App.css';
import { Partytown } from '@builder.io/partytown/react';

function App() {
  const [counter, setCounter] = useState(0);
   const increase = () => {
    setCounter(count => count + 1);
  };
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
      </div>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <script type = "text/partytown">{increase}</script>
      <script src = './public/~partytown/partytown.js'></script>
    </div>
  );
}

export default App;
