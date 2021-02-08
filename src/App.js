import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
    
  const fetchCharData = () => {
      axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log("error, cannot fetch data"))
  }

  useEffect(()=>{
      fetchCharData();
  },[])

  const hideCharData = () => {
      setCharacters([]);
  }

  return (
      <div className="App">
      <Character charactersD={characters} fetchDataBtn ={fetchCharData} 
      hideDataBtn={hideCharData} />
      </div>
  )
}

export default App;
