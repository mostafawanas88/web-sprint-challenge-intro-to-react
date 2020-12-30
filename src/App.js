import React from 'react';
import './App.css';
import Characters from "./components/Characters"

const App = () => {
  
  // this component will only render characters
  // state will live in characters

  return (
    <div className="App">
      <h1 className="Header">The Rick and Morty Characters</h1>
      <Characters />
    </div>
  );
}

export default App;
