import React from 'react';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import CallActions from './components/CallActions';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Hero />
      <CallActions />
      {/* Otros componentes de la página */}
    </div>
  );
}

export default App;

/*
import './App.css';
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

export default App;*/
