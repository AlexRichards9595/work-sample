import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from "./components/Feed/Feed";

function App() {
    const username = "Alex Richards";
    return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <Feed username = {username}/>
    </div>
    );
}

export default App;
