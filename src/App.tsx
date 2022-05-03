import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <Feed data-testid="Feed"></Feed>
    </div>
  );
}

export default App;
