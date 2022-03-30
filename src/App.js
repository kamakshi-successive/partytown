import logo from './logo.svg';
import './App.css';
import { Partytown } from '@builder.io/partytown/react';

function App() {
  return (
    <div className="App">
      <Partytown debug={true} forward={['dataLayer.push']} />
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
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: '/* Inlined Third-Party Script */',
        }}
      />
    </div>
  );
}

export default App;
